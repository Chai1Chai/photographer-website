import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import GalleryClient from './GalleryClient'

export const revalidate = 60; // Добавь это для скорости, чтобы страница не кэшировала ошибки

export default async function FullGallery() {
  const payload = await getPayload({ config: configPromise })
  
  const mediaData = await payload.find({
    collection: 'media',
    limit: 50,
    depth: 0
  })

  const allPhotos = mediaData.docs.map((doc: any) => {
    // Если Cloudinary все еще капризничает, берем прямую ссылку или ID
    const photoId = doc.cloudinary?.public_id || doc.filename || String(doc.id);
    
    return {
      id: photoId,
      alt: doc.alt || 'Photography',
    }
  });

  return <GalleryClient allPhotos={allPhotos} />
}