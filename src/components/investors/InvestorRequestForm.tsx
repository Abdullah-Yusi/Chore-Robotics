"use client";

import { useState } from "react";
import {
  INVESTOR_TYPES,
  investorsPage,
  type InvestorFormData,
} from "@/data/investors";
import { isValidEmail, isValidUsPhone, formatUsPhoneInput } from "@/data/reservation";
import { useInView } from "@/hooks/useInView";

const initialFormState: InvestorFormData = {
  fullName: "",
  email: "",
  company: "",
  investorType: "",
  phone: "",
  message: "",
};

export default function InvestorRequestForm() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const { requestForm } = investorsPage;
  const [form, setForm] = useState<InvestorFormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof InvestorFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = <K extends keyof InvestorFormData>(
    key: K,
    value: InvestorFormData[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof InvestorFormData, string>> = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!isValidEmail(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.company.trim()) nextErrors.company = "Company or organization is required.";
    if (!form.investorType) nextErrors.investorType = "Please select an investor type.";
    if (form.phone && !isValidUsPhone(form.phone)) {
      nextErrors.phone = "Enter a valid 10-digit US phone number.";
    }

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
        id="request-information"
        className={`scroll-mt-28 rounded-2xl border border-border bg-surface-elevated p-8 text-center sm:p-12 ${
          isVisible ? "reveal is-visible" : "reveal"
        }`}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-orange/30 bg-orange/10">
          <svg
            className="h-8 w-8 text-orange"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-6 font-heading text-[clamp(1.5rem,3vw,2rem)] font-semibold uppercase tracking-[0.03em] text-foreground">
          {requestForm.successTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-md font-body text-[15px] leading-relaxed text-muted">
          {requestForm.successDescription}
        </p>
        <p className="mt-6 font-body text-sm text-subtle">
          Confirmation sent to{" "}
          <span className="font-semibold text-foreground">{form.email}</span>
        </p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      id="request-information"
      className={`scroll-mt-28 rounded-2xl border border-border bg-surface-elevated p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mb-8 max-w-xl">
        <p className="font-body text-[11px] font-bold uppercase tracking-[0.24em] text-orange">
          Investor Relations
        </p>
        <h2 className="mt-2 font-heading text-[clamp(1.35rem,3vw,2rem)] font-semibold uppercase leading-tight tracking-[0.03em] text-foreground">
          {requestForm.title}
        </h2>
        <p className="mt-3 font-body text-[15px] leading-relaxed text-muted">
          {requestForm.description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="investor-full-name" className="form-label">
              Full Name
            </label>
            <input
              id="investor-full-name"
              type="text"
              autoComplete="name"
              value={form.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              className="form-input mt-2"
            />
            {errors.fullName ? (
              <p className="mt-2 font-body text-xs text-red-400">{errors.fullName}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="investor-email" className="form-label">
              Email
            </label>
            <input
              id="investor-email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="form-input mt-2"
            />
            {errors.email ? (
              <p className="mt-2 font-body text-xs text-red-400">{errors.email}</p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="investor-company" className="form-label">
              Company / Organization
            </label>
            <input
              id="investor-company"
              type="text"
              autoComplete="organization"
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              className="form-input mt-2"
            />
            {errors.company ? (
              <p className="mt-2 font-body text-xs text-red-400">{errors.company}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="investor-type" className="form-label">
              Investor Type
            </label>
            <select
              id="investor-type"
              value={form.investorType}
              onChange={(event) => updateField("investorType", event.target.value)}
              className="form-input mt-2"
            >
              <option value="">Select type</option>
              {INVESTOR_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.investorType ? (
              <p className="mt-2 font-body text-xs text-red-400">{errors.investorType}</p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="investor-phone" className="form-label">
            Phone <span className="text-subtle">(optional)</span>
          </label>
          <input
            id="investor-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) =>
              updateField("phone", formatUsPhoneInput(event.target.value))
            }
            className="form-input mt-2"
          />
          {errors.phone ? (
            <p className="mt-2 font-body text-xs text-red-400">{errors.phone}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="investor-message" className="form-label">
            Message <span className="text-subtle">(optional)</span>
          </label>
          <textarea
            id="investor-message"
            rows={4}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us about your interest in Chore Robotics..."
            className="form-input mt-2 min-h-[120px] resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-reserve w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Submitting..." : requestForm.submitLabel}
        </button>
      </form>
    </div>
  );
}
