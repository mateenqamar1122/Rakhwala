import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import type { Property } from './useProperties';

export interface UserProperty extends Property {
  owned_at: string;
}

export const useUserProperties = () => {
  const { user, isSeller, isAdmin } = useAuth();
  const queryClient = useQueryClient();

  const { data: userProperties = [], isLoading } = useQuery({
    queryKey: ['userProperties', user?.id],
    queryFn: async () => {
      if (!user) return [];

      try {
        let query = supabase
          .from('user_properties')
          .select(`
            id,
            user_id,
            property_id,
            created_at,
            properties!inner (
              id,
              title,
              location,
              city,
              type,
              price,
              price_label,
              beds,
              baths,
              sqft,
              sqft_num,
              description,
              image_url,
              badge,
              created_at
            )
          `)
          .order('created_at', { ascending: false });

        // If admin, get all properties, otherwise get only user's properties
        if (!isAdmin) {
          query = query.eq('user_id', user.id);
        }

        const { data, error } = await query;

        if (error) {
          console.error('Error fetching user properties:', error);
          return [];
        }

        if (!data || data.length === 0) {
          return [];
        }

        return data.map((userProp: any) => {
          const prop = userProp.properties;
          return {
            id: prop.id,
            title: prop.title,
            location: prop.location,
            city: prop.city,
            type: prop.type,
            price: prop.price,
            priceLabel: prop.price_label || `PKR ${(prop.price / 10000000).toFixed(1)} Cr`,
            beds: prop.beds || 0,
            baths: prop.baths || 0,
            sqft: prop.sqft || 'N/A',
            desc: prop.description || '',
            image_url: prop.image_url || '',
            image: prop.image_url || '',
            badge: prop.badge,
            owned_at: userProp.created_at,
          };
        }) as UserProperty[];
      } catch (err) {
        console.error('Unexpected error in useUserProperties:', err);
        return [];
      }
    },
    enabled: !!user && (isSeller || isAdmin),
  });

  const addProperty = useMutation({
    mutationFn: async (propertyId: string) => {
      if (!user) throw new Error('User not authenticated');

      const { error } = await supabase
        .from('user_properties')
        .insert({
          user_id: user.id,
          property_id: propertyId,
        });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProperties', user?.id] });
    },
  });

  const removeProperty = useMutation({
    mutationFn: async (propertyId: string) => {
      if (!user) throw new Error('User not authenticated');

      const { error } = await supabase
        .from('user_properties')
        .delete()
        .eq('user_id', user.id)
        .eq('property_id', propertyId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProperties', user?.id] });
    },
  });

  const isOwner = (propertyId: string) => {
    return userProperties.some(prop => prop.id === propertyId);
  };

  return {
    userProperties,
    isLoading,
    addProperty,
    removeProperty,
    isOwner,
  };
};
