"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  formatUsPhoneInput,
  formatUsZipInput,
  isValidEmail,
  isValidUsPhone,
  isValidUsZip,
  reservationPage,
  reservationProducts,
  resolveReservationProductSlug,
  US_STATES,
  type ReservationFormData,
} from "@/data/reservation";
import { useInView } from "@/hooks/useInView";

const inputClassName =
  "w-full rounded-xl border border-white/12 bg-[#121212] px-4 py-3.5 font-body text-[15px] text-white placeholder:text-white/30 transition-all focus:border-[#ff8400]/60 focus:bg-[#141414] focus:outline-none focus:ring-2 focus:ring-[#ff8400]/15";

const labelClassName =
  "mb-2 block font-body text-[11px] font-bold uppercase tracking-[0.18em] text-white/55";

const initialFormState: ReservationFormData = {
  fullName: "",
  email: "",
  phone: "",
  streetAddress: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",
  productSlug: "choremower",
};

export default function ReservationForm() {
  const searchParams = useSearchParams();
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const defaultProductSlug = useMemo(
    () => resolveReservationProductSlug(searchParams.get("product")),
    [searchParams],
  );

  const [form, setForm] = useState<ReservationFormData>({
    ...initialFormState,
    productSlug: defaultProductSlug,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = <K extends keyof ReservationFormData>(
    key: K,
    value: ReservationFormData[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof ReservationFormData, string>> = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!isValidEmail(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!isValidUsPhone(form.phone)) {
      nextErrors.phone = "Enter a valid 10-digit US phone number.";
    }
    if (!form.streetAddress.trim()) {
      nextErrors.streetAddress = "Street address is required.";
    }
    if (!form.city.trim()) nextErrors.city = "City is required.";
    if (!form.state) nextErrors.state = "Select a state.";
    if (!isValidUsZip(form.zipCode)) {
      nextErrors.zipCode = "Enter a valid ZIP code (12345 or 12345-6789).";
    }
    if (!form.productSlug) nextErrors.productSlug = "Select a product.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div
        ref={ref}
        className={`rounded-2xl border border-white/10 bg-[var(--surface-elevated)] p-8 text-center sm:p-12 ${
          isVisible ? "reveal is-visible" : "reveal"
        }`}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#ff8400]/30 bg-[#ff8400]/10">
          <svg
            className="h-8 w-8 text-[#ff8400]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-6 font-heading text-[clamp(1.5rem,3vw,2rem)] font-semibold uppercase tracking-[0.03em] text-white">
          {reservationPage.successTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-md font-body text-[15px] leading-relaxed text-white/60">
          {reservationPage.successDescription}
        </p>
        <p className="mt-6 font-body text-sm text-white/45">
          Confirmation sent to{" "}
          <span className="font-semibold text-white/80">{form.email}</span>
        </p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-white/10 bg-[var(--surface-elevated)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        <div>
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff8400]">
            Contact Information
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className={labelClassName}>
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                placeholder="JOHN DOE"
                value={form.fullName}
                onChange={(event) => updateField("fullName", event.target.value.toUpperCase())}
                className={`${inputClassName} uppercase tracking-[0.04em]`}
              />
              {errors.fullName ? (
                <p className="mt-2 font-body text-xs text-[#ff8400]">{errors.fullName}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className={labelClassName}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="john.doe@email.com"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={inputClassName}
              />
              {errors.email ? (
                <p className="mt-2 font-body text-xs text-[#ff8400]">{errors.email}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="phone" className={labelClassName}>
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="(555) 555-5555"
                value={form.phone}
                onChange={(event) =>
                  updateField("phone", formatUsPhoneInput(event.target.value))
                }
                className={inputClassName}
              />
              {errors.phone ? (
                <p className="mt-2 font-body text-xs text-[#ff8400]">{errors.phone}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff8400]">
            US Shipping Address
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="streetAddress" className={labelClassName}>
                Street Address
              </label>
              <input
                id="streetAddress"
                type="text"
                autoComplete="address-line1"
                placeholder="123 Main Street"
                value={form.streetAddress}
                onChange={(event) => updateField("streetAddress", event.target.value)}
                className={inputClassName}
              />
              {errors.streetAddress ? (
                <p className="mt-2 font-body text-xs text-[#ff8400]">{errors.streetAddress}</p>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="addressLine2" className={labelClassName}>
                Apt, Suite, Unit (Optional)
              </label>
              <input
                id="addressLine2"
                type="text"
                autoComplete="address-line2"
                placeholder="Apt 4B, Suite 200"
                value={form.addressLine2}
                onChange={(event) => updateField("addressLine2", event.target.value)}
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="city" className={labelClassName}>
                City
              </label>
              <input
                id="city"
                type="text"
                autoComplete="address-level2"
                placeholder="Irvine"
                value={form.city}
                onChange={(event) => updateField("city", event.target.value)}
                className={inputClassName}
              />
              {errors.city ? (
                <p className="mt-2 font-body text-xs text-[#ff8400]">{errors.city}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="state" className={labelClassName}>
                State
              </label>
              <select
                id="state"
                autoComplete="address-level1"
                value={form.state}
                onChange={(event) => updateField("state", event.target.value)}
                className={`${inputClassName} cursor-pointer appearance-none`}
              >
                <option value="" disabled>
                  Select state
                </option>
                {US_STATES.map((state) => (
                  <option key={state.value} value={state.value} className="bg-[#161616]">
                    {state.label}
                  </option>
                ))}
              </select>
              {errors.state ? (
                <p className="mt-2 font-body text-xs text-[#ff8400]">{errors.state}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="zipCode" className={labelClassName}>
                ZIP Code
              </label>
              <input
                id="zipCode"
                type="text"
                autoComplete="postal-code"
                inputMode="numeric"
                placeholder="92618"
                value={form.zipCode}
                onChange={(event) =>
                  updateField("zipCode", formatUsZipInput(event.target.value))
                }
                className={inputClassName}
              />
              {errors.zipCode ? (
                <p className="mt-2 font-body text-xs text-[#ff8400]">{errors.zipCode}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff8400]">
            Product Selection
          </p>
          <div className="mt-5">
            <label htmlFor="productSlug" className={labelClassName}>
              Module
            </label>
            <select
              id="productSlug"
              value={form.productSlug}
              onChange={(event) => updateField("productSlug", event.target.value)}
              className={`${inputClassName} cursor-pointer appearance-none`}
            >
              {reservationProducts.map((product) => (
                <option key={product.id} value={product.slug} className="bg-[#161616]">
                  {product.name} · {product.category}
                </option>
              ))}
            </select>
            {errors.productSlug ? (
              <p className="mt-2 font-body text-xs text-[#ff8400]">{errors.productSlug}</p>
            ) : null}
          </div>
        </div>

        <div className="border-t border-white/8 pt-8">
          <p className="font-body text-xs leading-relaxed text-white/45">
            {reservationPage.depositNote}
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-reserve mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Submitting…
              </span>
            ) : (
              <span>{reservationPage.submitLabel}</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
