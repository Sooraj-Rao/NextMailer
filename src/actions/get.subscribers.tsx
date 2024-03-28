"use server";

import Subscriber from "@/models/subscriber.model";
import { ConnectDb } from "@/shared/libs/db";

export const getSubscribers = async ({
  newsLetterOwnerId,
}: {
  newsLetterOwnerId: string;
}) => {
  try {
    await ConnectDb();

    const subscribers = await Subscriber.find({
      newsLetterOwnerId,
    });
    return subscribers;
  } catch (error) {
    console.log(error);
  }
};
