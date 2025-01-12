import { defineField, defineType } from "sanity";

export default defineType({
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Product Name',
      }),
      defineField({
        name: 'description',
        type: 'string',
        title: 'Description'
      }),
      defineField({
        name: 'price',
        type: 'number',
        title: 'Product Price',
      }),
      defineField({
        name: 'discountPercentage',
        type: 'number',
        title: 'Discount Percentage',
      }),
      defineField({
        name: 'priceWithoutDiscount',
        type: 'number',
        title: 'Price Without Discount',
        description: 'Original price before discount'
      }),
      defineField({
        name:'rating',
        type:'number',
        title:'Rating',
        description:'Rating of the product'
      }),
      defineField({
        name: 'ratingCount',
        type: 'number',
        title: 'Rating Count',
        description: 'Number of ratings'
      }),
      defineField({
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        },
        description: 'Add tags like "new arrival", "bestseller", etc.'
      }),
      defineField({
        name: 'sizes',
        type: 'array',
        title: 'Sizes',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        },
        description: 'Add sizes like S , M , L , XL , XXL'
      }),
      defineField({
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true // Enables cropping and focal point selection
        }
      })
    ]
  });