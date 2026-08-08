"use client";

import { useRef, useState } from "react";
import {
  careersPage,
  isValidResumeFile,
  type CareersFormData,
} from "@/data/careers";
import { isValidEmail, isValidUsPhone, formatUsPhoneInput } from "@/data/reservation";
import { useInView } from "@/hooks/useInView";

const inputClassName = "form-input";
const labelClassName = "form-label";

const initialFormState: CareersFormData = {
  fullName: "",
  email: "",
  phone: "",
  linkedIn: "",
  message: "",
  resumeFile: null,
};

export default function CareersForm() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<CareersFormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof CareersFormData, string>>>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = <K extends keyof CareersFormData>(
    key: K,
    value: CareersFormData[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof CareersFormData, string>> = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!isValidEmail(form.email)) nextErrors.email = "Enter a valid email address";
    if (form.phone && !isValidUsPhone(form.phone)) {
      nextErrors.phone = "Enter a valid 10-digit US phone number";
    }
    if (form.linkedIn.trim() && !/^https?:\/\/.+/i.test(form.linkedIn.trim())) {
      nextErrors.linkedIn = "Enter a valid URL (include https://).";
    }
    if (!form.resumeFile) {
      nextErrors.resumeFile = "Please attach your resume";
    } else if (!isValidResumeFile(form.resumeFile)) {
      nextErrors.resumeFile = "Upload a PDF, DOC, or DOCX file under 10 MB";
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
        className={`rounded-2xl border border-border bg-surface-elevated p-8 text-center sm:p-12 ${
          isVisible ? "reveal is-visible" : "reveal"
        }`}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-border bg-foreground/5">
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
          {careersPage.successTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-md font-body text-[15px] leading-relaxed text-muted">
          {careersPage.successDescription}
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
      className={`rounded-2xl border border-border bg-surface-elevated p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        <div>
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-orange">
            Your Details
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="careers-fullName" className={labelClassName}>
                Full Name
              </label>
              <input
                id="careers-fullName"
                type="text"
                autoComplete="name"
                placeholder="JANE DOE"
                value={form.fullName}
                onChange={(event) =>
                  updateField("fullName", event.target.value.toUpperCase())
                }
                className={`${inputClassName} uppercase tracking-[0.04em]`}
              />
              {errors.fullName ? (
                <p className="mt-2 font-body text-xs text-orange">{errors.fullName}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="careers-email" className={labelClassName}>
                Email Address
              </label>
              <input
                id="careers-email"
                type="email"
                autoComplete="email"
                placeholder="janedoe@emailcom"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={inputClassName}
              />
              {errors.email ? (
                <p className="mt-2 font-body text-xs text-orange">{errors.email}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="careers-phone" className={labelClassName}>
                Phone Number <span className="text-subtle">(Optional)</span>
              </label>
              <input
                id="careers-phone"
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
                <p className="mt-2 font-body text-xs text-orange">{errors.phone}</p>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="careers-linkedIn" className={labelClassName}>
                LinkedIn Profile <span className="text-subtle">(Optional)</span>
              </label>
              <input
                id="careers-linkedIn"
                type="url"
                placeholder="https://linkedin.com/in/your-profile"
                value={form.linkedIn}
                onChange={(event) => updateField("linkedIn", event.target.value)}
                className={inputClassName}
              />
              {errors.linkedIn ? (
                <p className="mt-2 font-body text-xs text-orange">{errors.linkedIn}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-orange">
            About You
          </p>
          <div className="mt-5">
            <label htmlFor="careers-message" className={labelClassName}>
              Message <span className="text-subtle">(Optional)</span>
            </label>
            <textarea
              id="careers-message"
              rows={5}
              placeholder="Tell us about your background, interests, and why you'd like to join Chore Robotics"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={`${inputClassName} min-h-[140px] resize-y`}
            />
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-orange">
            Resume
          </p>
          <div className="mt-5">
            <label htmlFor="careers-resume" className={labelClassName}>
              Upload Resume / CV
            </label>
            <input
              ref={fileInputRef}
              id="careers-resume"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0] ?? null;
                updateField("resumeFile", file);
              }}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-background/50 px-6 py-10 text-center transition-colors hover:border-border hover:bg-foreground/[0.03]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-foreground/5 text-subtle">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16"
                  />
                </svg>
              </span>
              <span className="mt-4 font-body text-sm font-medium text-foreground">
                {form.resumeFile ? form.resumeFile.name : "Choose a file or drag to upload"}
              </span>
              <span className="mt-2 font-body text-xs text-subtle">
                {careersPage.resumeNote}
              </span>
            </button>
            {errors.resumeFile ? (
              <p className="mt-2 font-body text-xs text-orange">{errors.resumeFile}</p>
            ) : null}
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-reserve w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-foreground/30 border-t-foreground" />
                Submitting…
              </span>
            ) : (
              <span>{careersPage.submitLabel}</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
