"use server";
import { generateAnalyticsData } from "@/shared/utils/analytics.generator";

export const subscribersAnalytics = async () => {
  try {
    const subscribers = await generateAnalyticsData();
    return subscribers;
  } catch (error) {
    console.log(error);
  }
};