import WelcomeMessage from "@/components/pages/auth/WelcomMessage";
import SignInForm from "@/components/pages/auth/SignInForm";
import React from "react";

export default function SignIn() {
    return (
        <section>
            <WelcomeMessage/>
            <SignInForm />
        </section>
    );
}