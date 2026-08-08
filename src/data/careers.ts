export const careersPage = {
  eyebrow: "Join the Team",
  headline: "BUILD THE FUTURE WITH CHORE",
  description:
    "We are engineering intelligent modular robots that automate indoor and outdoor maintenance at scale There are no open roles posted right now — share your details and resume and we will reach out when there is a fit",
  highlights: [
    "General applications welcome — no job listings yet",
    "Robotics, AI, mechatronics, and field operations",
    "Based in Irvine, California",
    "Every submission is reviewed by our team",
  ],
  submitLabel: "Submit Application",
  resumeNote: "Accepted formats: PDF, DOC, DOCX · Max 10 MB",
  successTitle: "Application Received",
  successDescription:
    "Thank you for your interest in Chore Robotics Our team will review your details and contact you if there is a match",
} as const;

export type CareersFormData = {
  fullName: string;
  email: string;
  phone: string;
  linkedIn: string;
  message: string;
  resumeFile: File | null;
};

export const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const ACCEPTED_RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"] as const;

export const MAX_RESUME_SIZE_BYTES = 10 * 1024 * 1024;

export function isValidResumeFile(file: File | null): boolean {
  if (!file) return false;
  if (file.size > MAX_RESUME_SIZE_BYTES) return false;

  const extension = file.name.slice(file.name.lastIndexOf("")).toLowerCase();
  return (
    ACCEPTED_RESUME_TYPES.includes(file.type as (typeof ACCEPTED_RESUME_TYPES)[number]) ||
    ACCEPTED_RESUME_EXTENSIONS.includes(
      extension as (typeof ACCEPTED_RESUME_EXTENSIONS)[number],
    )
  );
}
