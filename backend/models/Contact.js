import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(

    {

        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
            required: true,
        },

        preferredContact: {
            type: String,
            required: true,
            enum: ["Email", "Phone"],
        },
        
        status: {
            type: String,
            required: true,
            enum: ["Active", "Inactive"],
            default: "Active",
        },
    },

    { timestamps: true }

);

contactSchema.index({ status: 1 });

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;