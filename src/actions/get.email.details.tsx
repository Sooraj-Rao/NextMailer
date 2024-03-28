"use server";

import { Email } from "@/models/email.model";
import { ConnectDb } from "@/shared/libs/db";

export const GetEmailDetails = async ({
  title,
  newsLetterOwnerId,
}: {
  title: string;
  newsLetterOwnerId: string;
}) => {
  try {
    await ConnectDb();
    const email = await Email.findOne({
      title,
      newsLetterOwnerId,
    });
    return email;
  } catch (error) {
    console.log(error);
  }
};
