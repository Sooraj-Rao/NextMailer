"use server";

import { Email } from "@/models/email.model";
import { ConnectDb } from "@/shared/libs/db";

export const deleteEmail = async ({ emailId }: { emailId: string }) => {
  try {
    await ConnectDb();
    await Email.findByIdAndDelete(emailId);
    return { message: "Email deleted successfully!" };
  } catch (error) {
    return { error: "An error occurred while saving the email." };
  }
};