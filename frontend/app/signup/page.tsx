import { AuthLayout } from "@/components/features/auth/AuthLayout";
import { SignUpForm } from "@/components/features/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Transparency Portal",
  description: "Join our community today to support sustainable initiatives.",
};

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}
