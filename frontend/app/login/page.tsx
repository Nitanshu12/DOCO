import { AuthLayout } from "@/components/features/auth/AuthLayout";
import { LoginForm } from "@/components/features/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Transparency Portal",
  description: "Log in to your account to manage your impact and contributions.",
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
