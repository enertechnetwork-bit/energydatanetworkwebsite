import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FormspreeFormProps {
  formId?: string;
  buttonText?: string;
  buttonClassName?: string;
  successMessage?: string;
  children?: React.ReactNode;
  onSuccess?: () => void;
}

export const FormspreeForm: React.FC<FormspreeFormProps> = ({
  formId = "xyzrnjrw",
  buttonText = "Submit",
  buttonClassName = "text-background-dark font-bold",
  successMessage = "Thank you! Your message has been sent successfully.",
  children,
  onSuccess,
}) => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        onSuccess?.();
      } else {
        const data = await response.json();
        setStatus("error");
        setErrorMessage(
          data.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-primary/20 rounded-lg p-6 text-center">
        <span className="material-symbols-outlined text-primary text-4xl mb-2">
          check_circle
        </span>
        <p className="text-lg font-medium">{successMessage}</p>
        <Button
          type="button"
          variant="ghost"
          className="mt-4"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {children}

      {status === "error" && (
        <div className="bg-destructive/20 text-destructive-foreground rounded-lg p-4 text-sm">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className={buttonClassName}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : buttonText}
      </Button>
    </form>
  );
};

// Predefined form fields for common use cases
export const ContactFormFields: React.FC = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Your Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          required
          className="bg-white/5"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          className="bg-white/5"
        />
      </div>
    </div>
    <div className="space-y-2">
      <label htmlFor="subject" className="text-sm font-medium">
        Subject
      </label>
      <Input
        id="subject"
        name="subject"
        placeholder="How can we help?"
        required
        className="bg-white/5"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="message" className="text-sm font-medium">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Tell us more about your inquiry..."
        required
        rows={6}
        className="flex w-full rounded-md border border-input bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
      />
    </div>
  </>
);

// Simple email form for "Get in Touch" buttons
export const SimpleContactFormFields: React.FC<{ source?: string }> = ({
  source,
}) => (
  <>
    {source && <input type="hidden" name="source" value={source} />}
    <div className="space-y-2">
      <label htmlFor="name" className="text-sm font-medium">
        Your Name
      </label>
      <Input
        id="name"
        name="name"
        placeholder="Your name"
        required
        className="bg-white/5"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-medium">
        Email Address
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="your@email.com"
        required
        className="bg-white/5"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="message" className="text-sm font-medium">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="How can we help you?"
        required
        rows={4}
        className="flex w-full rounded-md border border-input bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
      />
    </div>
  </>
);
