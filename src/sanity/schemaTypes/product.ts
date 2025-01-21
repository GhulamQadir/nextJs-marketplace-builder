export const productType = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Product Name",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 50,
      },
    },
    {
      name: "price",
      type: "number",
      title: "Product Price",
    },
    {
      name: "stockLevel",
      type: "number",
      title: "Stock Level",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Sofa", value: "Sofa" },
          { title: "Chair", value: "Chair" },
        ],
      },
    },
    {
      name: "isFeaturedProduct",
      title: "Featured product",
      type: "boolean",
      options: {
        list: [
          { title: "True", value: true },
          { title: "False", value: false },
        ],
      },
    },
    {
      name: "isLatestProduct",
      title: "Latest product",
      type: "boolean",
      options: {
        list: [
          { title: "True", value: true },
          { title: "False", value: false },
        ],
      },
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
    },
    {
      name: "priceWithoutDiscount",
      type: "number",
      title: "Price Without Discount",
      description: "Original price before discount",
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      description: "Rating of the product",
    },
    {
      name: "ratingCount",
      type: "number",
      title: "Rating Count",
      description: "Number of ratings",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: 'Add tags like "new arrival", "bestseller", etc.',
    },
    {
      name: "sizes",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Add sizes like S , M , L , XL , XXL",
    },
    {
      name: "image",
      type: "image",
      title: "Product Image",
      options: {
        hotspot: true, // Enables cropping and focal point selection
      },
    },
  ],
};
