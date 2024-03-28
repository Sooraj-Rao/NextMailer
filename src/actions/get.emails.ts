"use server";

import { Email } from "@/models/email.model";
import { ConnectDb } from "@/shared/libs/db";

export const getEmails = async ({
  newsLetterOwnerId,
}: {
  newsLetterOwnerId: string;
}) => {
  try {
    await ConnectDb();
    console.log(newsLetterOwnerId);

    const emails = await Email.find({ newsLetterOwnerId });
    console.log(emails);

    return emails;
  } catch (error) {
    console.log(error);
  }
};
