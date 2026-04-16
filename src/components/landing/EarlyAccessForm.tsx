import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { saveEarlyAccessLead } from "@/lib/early-access";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  preparationStage: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EarlyAccessForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      preparationStage: formData.preparationStage.trim(),
    };

    if (!trimmedData.fullName || !trimmedData.email || !trimmedData.phone) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }

    if (!emailPattern.test(trimmedData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await saveEarlyAccessLead(trimmedData);
      setIsSubmitted(true);
      setFormData(initialForm);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong while saving your request.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 text-left text-white shadow-2xl shadow-black/10 backdrop-blur-md">
        <div className="mb-4 inline-flex rounded-full bg-white/15 p-3">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-semibold">You&apos;re on the list.</h3>
        <p className="mt-3 text-white/80">
          Thanks for joining early access. We&apos;ll reach out with launch updates and your invite.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 border-white/30 bg-transparent text-white hover:bg-white hover:text-primary"
        >
          Add another response
        </Button>
      </div>
    );
  }

  return (
    <form
      id="early-access-form"
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/10 backdrop-blur-md md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white">Full name</span>
          <input
            type="text"
            value={formData.fullName}
            onChange={(event) => setFormData((current) => ({ ...current, fullName: event.target.value }))}
            className="w-full rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-white focus:ring-2 focus:ring-white/40"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white">Email address</span>
          <input
            type="email"
            value={formData.email}
            onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
            className="w-full rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-white focus:ring-2 focus:ring-white/40"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white">Phone number</span>
          <input
            type="tel"
            value={formData.phone}
            onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
            className="w-full rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-white focus:ring-2 focus:ring-white/40"
            placeholder="+91 98765 43210"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white">Preparation stage</span>
          <input
            type="text"
            value={formData.preparationStage}
            onChange={(event) =>
              setFormData((current) => ({ ...current, preparationStage: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-white focus:ring-2 focus:ring-white/40"
            placeholder="Beginner, Prelims, Mains, Interview..."
          />
        </label>
      </div>

      {error ? <p className="mt-4 text-sm text-red-100">{error}</p> : null}

      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/70">Your details go directly into our launch waitlist.</p>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="rounded-full bg-white px-8 py-6 text-lg text-primary shadow-xl hover:bg-white/90"
        >
          {isSubmitting ? <LoaderCircle className="h-5 w-5 animate-spin" /> : null}
          Join Early Access
        </Button>
      </div>
    </form>
  );
};

export default EarlyAccessForm;
