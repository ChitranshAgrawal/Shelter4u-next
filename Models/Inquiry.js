import mongoose from 'mongoose';

const InquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,

    },
    email: {
      type: String,
    },
    mobile: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  
);

export default InquirySchema;
