// // filepath: src/lib/property-insertion-utils.ts
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// import { supabase } from './supabase';
//
// /**
//  * Interface for property data with multiple images
//  */
// export interface PropertyWithImages {
//   title: string;
//   location: string;
//   city: string;
//   type: 'House' | 'Apartment' | 'Plot' | 'Commercial' | 'Farmhouse' | 'Penthouse';
//   price: number;
//   price_label: string;
//   badge?: string | null;
//   beds: number;
//   baths: number;
//   sqft: string;
//   sqft_num: number;
//   description: string;
//   status?: 'active' | 'pending' | 'sold' | 'rented' | 'inactive';
//   contact_name: string;
//   contact_phone: string;
//   contact_email: string;
//   owner_id?: string | null;
//   images: PropertyImage[];
// }
//
// /**
//  * Interface for property images
//  */
// export interface PropertyImage {
//   url: string;
//   is_primary?: boolean;
// }
//
// /**
//  * Insert a property with multiple images
//  * @param propertyData - Property details with images
//  * @returns Property ID and count of inserted images
//  */
// export async function insertPropertyWithImages(propertyData: PropertyWithImages) {
//   try {
//     // Step 1: Insert the main property
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { data: propertyResponse, error: propertyError } = await (supabase.from('properties') as any)
//       .insert([
//         {
//           title: propertyData.title,
//           location: propertyData.location,
//           city: propertyData.city,
//           type: propertyData.type,
//           price: propertyData.price,
//           price_label: propertyData.price_label,
//           badge: propertyData.badge || null,
//           beds: propertyData.beds,
//           baths: propertyData.baths,
//           sqft: propertyData.sqft,
//           sqft_num: propertyData.sqft_num,
//           description: propertyData.description,
//           image_url: propertyData.images[0]?.url || '',
//           status: propertyData.status || 'active',
//           contact_name: propertyData.contact_name,
//           contact_phone: propertyData.contact_phone,
//           contact_email: propertyData.contact_email,
//           owner_id: propertyData.owner_id || null,
//           created_at: new Date().toISOString(),
//         },
//       ])
//       .select('id')
//       .single();
//
//     if (propertyError) {
//       throw new Error(`Failed to insert property: ${propertyError.message}`);
//     }
//
//     if (!propertyResponse) {
//       throw new Error('Property insertion failed: No response received');
//     }
//
//     const propertyId = propertyResponse.id;
//
//     // Step 2: Insert images
//     if (propertyData.images.length > 0) {
//       const imagesToInsert = propertyData.images.map((img, index) => ({
//         property_id: propertyId,
//         image_url: img.url,
//         is_primary: img.is_primary ?? index === 0,
//         sort_order: index + 1,
//         created_at: new Date().toISOString(),
//       }));
//
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const { error: imagesError, data: imagesData } = await (supabase.from('property_images') as any)
//         .insert(imagesToInsert)
//         .select('id');
//
//       if (imagesError) {
//         throw new Error(`Failed to insert images: ${imagesError.message}`);
//       }
//
//       return {
//         success: true,
//         propertyId,
//         imagesCount: imagesData?.length || 0,
//         message: `Property created successfully with ${imagesData?.length || 0} images`,
//       };
//     }
//
//     return {
//       success: true,
//       propertyId,
//       imagesCount: 0,
//       message: 'Property created successfully',
//     };
//   } catch (error) {
//     console.error('Error inserting property with images:', error);
//     throw error;
//   }
// }
//
// /**
//  * Insert multiple properties with images in batch
//  * @param propertiesData - Array of property details with images
//  * @returns Summary of insertion results
//  */
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function bulkInsertProperties(propertiesData: PropertyWithImages): Promise<any> {
//   try {
//     let totalPropertiesCreated = 0;
//     let totalImagesCreated = 0;
//     const results: Array<{
//       title: string;
//       propertyId?: string;
//       status: string;
//       imagesCount?: number;
//       error?: string;
//     }> = [];
//
//     if (Array.isArray(propertiesData)) {
//       for (const propertyData of propertiesData) {
//         try {
//           const result = await insertPropertyWithImages(propertyData);
//           totalPropertiesCreated += 1;
//           totalImagesCreated += result.imagesCount;
//           results.push({
//             title: propertyData.title,
//             propertyId: result.propertyId,
//             status: 'success',
//             imagesCount: result.imagesCount,
//           });
//         } catch (error) {
//           results.push({
//             title: propertyData.title,
//             status: 'failed',
//             error: (error as Error).message,
//           });
//         }
//       }
//     }
//
//     return {
//       success: true,
//       totalPropertiesCreated,
//       totalImagesCreated,
//       results,
//     };
//   } catch (error) {
//     console.error('Error in bulk insert properties:', error);
//     throw error;
//   }
// }
//
// /**
//  * Get property with all its images
//  * @param propertyId - Property UUID
//  * @returns Property with images
//  */
// export async function getPropertyWithImages(propertyId: string) {
//   try {
//     const { data: property, error: propertyError } = await supabase
//       .from('properties')
//       .select('*')
//       .eq('id', propertyId)
//       .single();
//
//     if (propertyError) {
//       throw new Error(`Failed to fetch property: ${propertyError.message}`);
//     }
//
//     const { data: images, error: imagesError } = await supabase
//       .from('property_images')
//       .select('*')
//       .eq('property_id', propertyId)
//       .order('sort_order', { ascending: true });
//
//     if (imagesError) {
//       throw new Error(`Failed to fetch images: ${imagesError.message}`);
//     }
//
//     return {
//       ...property,
//       images: images || [],
//     };
//   } catch (error) {
//     console.error('Error fetching property with images:', error);
//     throw error;
//   }
// }
//
// /**
//  * Add images to an existing property
//  * @param propertyId - Property UUID
//  * @param images - Array of images to add
//  * @returns Count of added images
//  */
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function addImagesToProperty(propertyId: string, images: PropertyImage[]): Promise<any> {
//   try {
//     // Get the current max sort_order
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { data: existingImages } = await (supabase.from('property_images') as any)
//       .select('sort_order')
//       .eq('property_id', propertyId)
//       .order('sort_order', { ascending: false })
//       .limit(1);
//
//     const maxSortOrder = (existingImages as Array<{sort_order: number}>)?.[0]?.sort_order || 0;
//
//     const imagesToInsert = images.map((img, index) => ({
//       property_id: propertyId,
//       image_url: img.url,
//       is_primary: img.is_primary ?? false,
//       sort_order: maxSortOrder + index + 1,
//       created_at: new Date().toISOString(),
//     }));
//
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { error, data } = await (supabase.from('property_images') as any)
//       .insert(imagesToInsert)
//       .select('id');
//
//     if (error) {
//       throw new Error(`Failed to add images: ${error.message}`);
//     }
//
//     return {
//       success: true,
//       addedCount: (data as Array<{id: string}>)?.length || 0,
//       message: `Added ${(data as Array<{id: string}>)?.length || 0} images to property`,
//     };
//   } catch (error) {
//     console.error('Error adding images to property:', error);
//     throw error;
//   }
// }
//
// /**
//  * Replace all images for a property
//  * @param propertyId - Property UUID
//  * @param images - Array of new images
//  * @returns Count of images
//  */
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function updatePropertyImages(propertyId: string, images: PropertyImage[]): Promise<any> {
//   try {
//     // Delete existing images
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { error: deleteError } = await (supabase.from('property_images') as any)
//       .delete()
//       .eq('property_id', propertyId);
//
//     if (deleteError) {
//       throw new Error(`Failed to delete old images: ${deleteError.message}`);
//     }
//
//     // Insert new images
//     if (images.length > 0) {
//       const imagesToInsert = images.map((img, index) => ({
//         property_id: propertyId,
//         image_url: img.url,
//         is_primary: img.is_primary ?? index === 0,
//         sort_order: index + 1,
//         created_at: new Date().toISOString(),
//       }));
//
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const { error: insertError, data } = await (supabase.from('property_images') as any)
//         .insert(imagesToInsert)
//         .select('id');
//
//       if (insertError) {
//         throw new Error(`Failed to insert new images: ${insertError.message}`);
//       }
//
//       return {
//         success: true,
//         updatedCount: (data as Array<{id: string}>)?.length || 0,
//         message: `Property images updated with ${(data as Array<{id: string}>)?.length || 0} images`,
//       };
//     }
//
//     return {
//       success: true,
//       updatedCount: 0,
//       message: 'All images removed from property',
//     };
//   } catch (error) {
//     console.error('Error updating property images:', error);
//     throw error;
//   }
// }
//
// /**
//  * Delete a property and all its images
//  * @param propertyId - Property UUID
//  * @returns Success status
//  */
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function deletePropertyWithImages(propertyId: string): Promise<any> {
//   try {
//     // Cascade delete is handled by database, so just delete the property
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { error } = await (supabase.from('properties') as any)
//       .delete()
//       .eq('id', propertyId);
//
//     if (error) {
//       throw new Error(`Failed to delete property: ${error.message}`);
//     }
//
//     return {
//       success: true,
//       message: 'Property and all its images deleted successfully',
//     };
//   } catch (error) {
//     console.error('Error deleting property:', error);
//     throw error;
//   }
// }
//
// /**
//  * Reorder property images
//  * @param propertyId - Property UUID
//  * @param imageOrder - Array of image IDs in desired order
//  * @returns Success status
//  */
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function reorderPropertyImages(propertyId: string, imageOrder: string[]): Promise<any> {
//   try {
//     const updates = imageOrder.map((imageId, index) => ({
//       id: imageId,
//       property_id: propertyId,
//       sort_order: index + 1,
//     }));
//
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { error } = await (supabase.from('property_images') as any)
//       .upsert(updates, { onConflict: 'id' });
//
//     if (error) {
//       throw new Error(`Failed to reorder images: ${error.message}`);
//     }
//
//     return {
//       success: true,
//       message: 'Property images reordered successfully',
//     };
//   } catch (error) {
//     console.error('Error reordering images:', error);
//     throw error;
//   }
// }
//
// /**
//  * Set a primary image for property
//  * @param propertyId - Property UUID
//  * @param imageId - Image UUID to set as primary
//  * @returns Success status
//  */
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function setPrimaryImage(propertyId: string, imageId: string): Promise<any> {
//   try {
//     // Set all images as non-primary
//     const { error: resetError } = await supabase
//       .from('property_images')
//       .update({ is_primary: false })
//       .eq('property_id', propertyId);
//
//     if (resetError) {
//       throw new Error(`Failed to reset images: ${resetError.message}`);
//     }
//
//     // Set the selected image as primary
//     const { error: updateError } = await supabase
//       .from('property_images')
//       .update({ is_primary: true })
//       .eq('id', imageId);
//
//     if (updateError) {
//       throw new Error(`Failed to set primary image: ${updateError.message}`);
//     }
//
//     return {
//       success: true,
//       message: 'Primary image set successfully',
//     };
//   } catch (error) {
//     console.error('Error setting primary image:', error);
//     throw error;
//   }
// }
//
