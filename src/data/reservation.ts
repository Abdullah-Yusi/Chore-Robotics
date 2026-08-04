import {
  ACTIVE_PRODUCT_IDS,
  PRODUCT_SLUGS,
  productDetails,
} from "./product-details";

export const reservationPage = {
  eyebrow: "Pre-Order",
  headline: "RESERVE YOUR CHORE",
  description:
    "Secure your spot with a refundable deposit. Complete the form below and our team will reach out to confirm your module selection and delivery timeline.",
  depositNote: "Minimum reservation deposit: $50 · Fully refundable until configuration",
  submitLabel: "Submit Pre-Order",
  successTitle: "Pre-Order Received",
  successDescription:
    "Thank you for reserving your CHORE. A confirmation email with next steps is on its way.",
} as const;

export const reservationProducts = ACTIVE_PRODUCT_IDS.map((id) => ({
  id,
  slug: PRODUCT_SLUGS[id],
  name: productDetails[id].name,
  category: productDetails[id].category,
}));

export const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District of Columbia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
] as const;

export type ReservationFormData = {
  fullName: string;
  email: string;
  phone: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  productSlug: string;
};

export function formatUsPhoneInput(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function formatUsZipInput(value: string): string {
  const cleaned = value.replace(/[^\d-]/g, "");
  const digits = cleaned.replace(/-/g, "").slice(0, 9);

  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

export function isValidUsPhone(phone: string): boolean {
  return phone.replace(/\D/g, "").length === 10;
}

export function isValidUsZip(zip: string): boolean {
  return /^\d{5}(-\d{4})?$/.test(zip);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function resolveReservationProductSlug(
  slug: string | null | undefined,
): string {
  if (!slug) return reservationProducts[0]?.slug ?? "choremower";

  const match = reservationProducts.find(
    (product) => product.slug === slug || product.id === slug,
  );

  return match?.slug ?? reservationProducts[0]?.slug ?? "choremower";
}
