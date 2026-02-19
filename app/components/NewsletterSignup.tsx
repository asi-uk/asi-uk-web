"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/lib/schemas/newsletter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface NewsletterSignupProps {
  variant: "compact" | "full";
}

export default function NewsletterSignup({ variant }: NewsletterSignupProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "already-subscribed" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        return;
      }

      if (result.alreadySubscribed) {
        setStatus("already-subscribed");
      } else {
        setStatus("success");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (variant === "compact") {
    return <CompactVariant status={status} errorMessage={errorMessage} errors={errors} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />;
  }

  return <FullVariant status={status} errorMessage={errorMessage} errors={errors} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />;
}

interface VariantProps {
  status: "idle" | "loading" | "success" | "already-subscribed" | "error";
  errorMessage: string;
  errors: ReturnType<typeof useForm<NewsletterFormData>>["formState"]["errors"];
  register: ReturnType<typeof useForm<NewsletterFormData>>["register"];
  handleSubmit: ReturnType<typeof useForm<NewsletterFormData>>["handleSubmit"];
  onSubmit: (data: NewsletterFormData) => Promise<void>;
}

function CompactVariant({ status, errorMessage, errors, register, handleSubmit, onSubmit }: VariantProps) {
  if (status === "success") {
    return (
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-4">Newsletter</h3>
        <div className="flex items-center gap-2 text-green-400">
          <CheckCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">Check your email to confirm your subscription.</p>
        </div>
      </div>
    );
  }

  if (status === "already-subscribed") {
    return (
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-4">Newsletter</h3>
        <div className="flex items-center gap-2 text-blue-400">
          <CheckCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">You&apos;re already subscribed!</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg md:text-xl font-bold mb-4">Newsletter</h3>
      <p className="text-gray-400 text-sm mb-3">Stay up to date with ASI UK news and events.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email"
          {...register("email")}
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 text-sm h-9 flex-1"
        />
        <Button
          type="submit"
          size="icon"
          disabled={status === "loading"}
          className="bg-asi-blue hover:bg-blue-700 h-9 w-9 flex-shrink-0"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
        </Button>
      </form>
      {errors.email && (
        <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-xs mt-1.5">{errorMessage}</p>
      )}
    </div>
  );
}

function FullVariant({ status, errorMessage, errors, register, handleSubmit, onSubmit }: VariantProps) {
  if (status === "success") {
    return (
      <section className="relative z-20 w-full bg-white/90 backdrop-blur-md">
        <div className="w-full max-w-3xl mx-auto flex flex-col px-4 py-12 md:py-16">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 text-green-600 mb-3">
              <CheckCircle className="h-6 w-6" />
              <h2 className="text-2xl md:text-3xl text-green-600 font-bold leading-none">You&apos;re signed up!</h2>
            </div>
            <p className="text-sm md:text-base">Check your email to confirm your subscription.</p>
          </div>
        </div>
      </section>
    );
  }

  if (status === "already-subscribed") {
    return (
      <section className="relative z-20 w-full bg-white/90 backdrop-blur-md">
        <div className="w-full max-w-3xl mx-auto flex flex-col px-4 py-12 md:py-16">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 text-asi-blue mb-3">
              <CheckCircle className="h-6 w-6" />
              <h2 className="text-2xl md:text-3xl text-asi-blue font-bold leading-none">Already subscribed!</h2>
            </div>
            <p className="text-sm md:text-base">You&apos;re already on our mailing list.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-20 w-full bg-white/90 backdrop-blur-md">
      <div className="w-full max-w-3xl mx-auto flex flex-col px-4 py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-4 md:mb-6">
            <Mail className="mr-2 h-5 w-5 md:h-6 md:w-6 text-asi-blue" />
            <h2 className="text-2xl md:text-3xl text-asi-blue font-bold leading-none">Stay Connected</h2>
          </div>
          <p className="text-sm md:text-base mb-6 max-w-2xl">
            Subscribe to our newsletter for the latest news, events, and updates from ASI UK.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 w-full max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="flex-1 h-10"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-asi-blue hover:bg-blue-700 text-white h-10 px-6"
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
}
