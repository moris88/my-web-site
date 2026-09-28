"server-only";

import nodemailer from "nodemailer";
const { log, error } = console;

export async function sendEmail({
  name,
  email,
  message,
  ip,
  userAgent,
}: {
  name: string;
  email: string;
  message: string;
  ip: string;
  userAgent: string;
}): Promise<{ message: string; error?: string; status?: "SUCCESS" | "ERROR" }> {
  if (!name || !email || !message) {
    return { message: "Missing fields", status: "ERROR" };
  }

  try {
    if (process.env.DEVELOPMENT === "true") {
      log("Simulazione invio email:");
      log(`Da: ${name} <${email}>`);
      log(`A: ${process.env.EMAIL_TO}`);
      log(`Oggetto: Warning!!! Nuovo messaggio dal sito web da ${name}`);
      log(
        `Ciao sono ${name} (email: ${email}), questo e' il mio messaggio:\n\n${message}\n\nIP: ${ip}\nUser-Agent: ${userAgent}`,
      );
      return { message: "Email inviata con successo" };
    }
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter
      .sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_TO,
        subject: `Warning!!! Nuovo messaggio dal sito web da ${name}`,
        text: `Ciao sono ${name} (email: ${email}), questo e' il mio messaggio:\n\n${message}\n\nIP: ${ip}\nUser-Agent: ${userAgent}`,
      })
      .then(() => {
        log(`Email inviata con successo a ${process.env.EMAIL_TO}`);
      })
      .catch((err) => {
        throw err;
      });

    return { message: "Email inviata con successo", status: "SUCCESS" };
  } catch (err: unknown) {
    error("Errore invio email:", err);
    if (err instanceof Error) {
      return {
        message: "Errore durante l'invio dell'email",
        error: err?.message ?? "Unknown error",
        status: "ERROR",
      };
    } else {
      return {
        message: "Errore durante l'invio dell'email",
        error: "Unknown error",
        status: "ERROR",
      };
    }
  }
}
