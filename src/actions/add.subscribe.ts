"use server";

import Subscriber from "@/models/subscriber.model";
import { ConnectDb } from "@/shared/libs/db";
import { validateEmail } from "@/shared/utils/EmailValidator";
import { clerkClient } from "@clerk/nextjs";

export const subscribe = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  try {
    await ConnectDb();

    const allUsers = await clerkClient.users.getUserList();
    
    
    const newsletterOwner = allUsers.find((i) => i.username === username);

    if (!newsletterOwner) {
      throw Error("Username is not vaild!");
    }

    const isSubscriberExist = await Subscriber.findOne({
      email,
      newsLetterOwnerId: newsletterOwner?.id,
    });

    if (isSubscriberExist) {
      return { error: "Email already exists!" };
    }

    const validationResponse = await validateEmail({ email });
    if (validationResponse.status === "invalid") {
      return { error: "Email not valid!" };
    }

    const subscriber = await Subscriber.create({
      email,
      newsLetterOwnerId: newsletterOwner?.id,
      source: "By NextMailer website",
      status: "Subscribed",
    });
    return subscriber;
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while subscribing." };
  }
};
