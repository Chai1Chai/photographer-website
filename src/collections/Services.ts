import type { CollectionConfig } from 'payload'

const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price', 'updatedAt'],
  },
  access: {
    read: () => true, // Разрешаем публичное чтение
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Название услуги',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Связь с твоей коллекцией медиа (Cloudinary)
      required: true,
      label: 'Изображение',
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      label: 'Стоимость',
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
      label: 'Длительность/Срок',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Особенности услуги',
      minRows: 1,
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
  ],
}

export default Services