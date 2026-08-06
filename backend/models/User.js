import mongoose from "mongoose";
import bcrypt from "bcrypt";

/* User model for auth with unique: true on email prevents duplicate accounts, comparePassword for login checks, and pre("save") to hash passwords.*/

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

    },

    { timestamps: true }

);

userSchema.pre("save", async function() {

    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);

});

userSchema.methods.comparePassword = async function (candidatePassword) {

    return bcrypt.compare(candidatePassword, this.password);
    
};

const User = mongoose.model("User", userSchema);
export default User;