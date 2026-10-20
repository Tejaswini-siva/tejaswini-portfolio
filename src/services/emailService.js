/**
 * EmailJS Contact Service
 * Validates credentials and dispatches contact inquiries directly to Tejaswini's inbox.
 */
import emailjs from "@emailjs/browser";

export const isEmailJsConfigured = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  return Boolean(
    serviceId &&
    templateId &&
    publicKey &&
    serviceId !== "your_service_id" &&
    templateId !== "your_template_id" &&
    publicKey !== "your_public_key"
  );
};

export const sendContactEmail = async ({ name, email, subject, message }) => {
  // Input validations
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    throw new Error("All fields are required. Please fill in your name, email, subject, and message.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    throw new Error("Please provide a valid email address.");
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!isEmailJsConfigured()) {
    console.warn(
      "[EmailJS] Service credentials are not configured in your .env file. Direct email fallback available."
    );
    return {
      success: false,
      unconfigured: true,
      message:
        "EmailJS is not yet configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file, or email Tejaswini directly at tejaswinisiva20@gmail.com."
    };
  }

  try {
    const templateParams = {
      from_name: name.trim(),
      from_email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      to_name: "S. Tejaswini"
    };

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    if (response.status === 200 || response.text === "OK") {
      return {
        success: true,
        message: "Your message was transmitted successfully! Tejaswini will review it and get back to you shortly."
      };
    } else {
      throw new Error(`Email delivery reported status code: ${response.status}`);
    }
  } catch (err) {
    console.error("[EmailJS Error]", err);
    throw new Error(
      err?.text || err?.message || "Failed to send message via EmailJS. Please contact tejaswinisiva20@gmail.com directly."
    );
  }
};
