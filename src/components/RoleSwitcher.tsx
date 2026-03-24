import { useState } from 'react';
import { Home, TrendingUp } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const RoleSwitcher = () => {
  const { profile, switchRole } = useAuth();
  const [isSwitching, setIsSwitching] = useState(false);

  const roles = [
    {
      value: 'buyer' as const,
      label: 'Buyer',
      icon: Home,
    },
    {
      value: 'seller' as const,
      label: 'Seller',
      icon: TrendingUp,
    },
  ];

  if (!profile) return null;

  const currentRole = roles.find(r => r.value === profile.current_role);
  const nextRole = profile.current_role === 'buyer' ? 'seller' : 'buyer';

  const handleRoleSwitch = async () => {
    try {
      setIsSwitching(true);
      await switchRole(nextRole);

      toast({
        title: "Role Switched",
        description: `You are now viewing as a ${nextRole}`,
      });
    } catch (error) {
      toast({
        title: "Failed to switch role",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSwitching(false);
    }
  };

  return (
    <button
      onClick={handleRoleSwitch}
      disabled={isSwitching}
      className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-white/30 bg-white/10 text-white/90 text-xs font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      title={`Switch to ${nextRole}`}
    >
      {currentRole && (
        <>
          <currentRole.icon className="w-3.5 h-3.5" />
          <span>{currentRole.label}</span>
        </>
      )}
    </button>
  );
};

export default RoleSwitcher;
