// constants/propertyOptions.js
export const LISTING_TYPES = [
  "Rent",
  "Buy",
  "Commercial Rent",
  "Commercial Buy",
];

export const RESIDENTIAL_PROPERTY_TYPES = [
  "Apartment",
  "Villa",
  "Townhouse",
  "Compound",
  "Duplex",
  "Full floor",
  "Half floor",
  "Whole building",
  "Land",
  "Bulk sale unit",
  "Bungalow",
  "Hotel and apartment",
];

export const COMMERCIAL_PROPERTY_TYPES = [
  "Office space",
  "Retail",
  "Warehouse",
  "Shop",
  "Villa",
  "Show room",
  "Full floor",
  "Half floor",
  "Whole building",
  "Land",
  "Bulk rent unit",
  "Labour camp",
  "Staff accommodation",
  "Business center",
  "Co-working space",
  "Farm",
];

export const BEDROOM_OPTIONS = [
  "Studio",
  ...Array.from({ length: 10 }, (_, i) => `${i + 1}`),
];

export const BATHROOM_OPTIONS = Array.from(
  { length: 10 },
  (_, i) => `${i + 1}`
);

export const getPropertyTypeOptions = (listingType) => {
  const type = listingType?.toLowerCase();
  if (type === "rent" || type === "buy") {
    return RESIDENTIAL_PROPERTY_TYPES;
  } else {
    return COMMERCIAL_PROPERTY_TYPES;
  }
};
