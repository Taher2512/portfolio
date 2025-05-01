import { db } from "./config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Interface for the contact form data
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  createdAt?: string;
}

/**
 * Submits contact form data to Firebase Firestore and triggers email notification
 * @param formData Contact form data including name, email, and message
 * @returns Promise with the document reference on success
 */
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    // Add timestamp to the form data
    const dataWithTimestamp = {
      ...formData,
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "messages"), dataWithTimestamp);

    // Call API route to send email notification (implemented separately)
    await fetch("/api/send-contact-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        messageId: docRef.id,
      }),
    });

    return { success: true, messageId: docRef.id };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error };
  }
};
