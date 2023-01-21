import mongoose from "mongoose";
import { Schema } from "mongoose";



const participantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    firstName: {
        type: String,
        required: true,
      },
      
    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Participant = mongoose.model("Participant", participantSchema);

export default Participant