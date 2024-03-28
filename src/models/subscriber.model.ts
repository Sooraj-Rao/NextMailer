import mongoose from "mongoose";

const { Schema } = mongoose;

const subscriberShema = new Schema(
  {
    email: {
      type: String,
    },
    newsLetterOwnerId: {
      type: String,
    },
    source: {
      type: String,
      default: "By NextMailer Webiste",
    },
    status: {
      type: String,
      default: "Subsrcibed",
    },
  },
  { timestamps: true }
);

const Subscriber =
  mongoose.models.subscribers || mongoose.model("subscribers", subscriberShema);

export default Subscriber;
