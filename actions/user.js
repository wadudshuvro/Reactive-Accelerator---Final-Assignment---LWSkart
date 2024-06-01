"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
const login = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    signIn("credentials", { email, password, redirect: false });
    redirect("/");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    } else {
      console.log(error);
    }
  }
};

const loginWithFacebook = async () => {
  await signIn("facebook", { callbackUrl: "http://localhost:3000" });
};

export { login, loginWithFacebook };
