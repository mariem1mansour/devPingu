import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://mariemmansour7777:ZZkP8zjPF8DwtYdx@devpingu.wcyfxsv.mongodb.net/devPingu"
  );
};
