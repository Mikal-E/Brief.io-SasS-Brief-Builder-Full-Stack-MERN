import mongoose from "mongoose";
import dotenv from "dotenv";
import TeamMember from "./models/TeamMember.js";
import Brief from "./models/Brief.js"
import Activity from "./models/Activity.js";
import Contact from "./models/Contact.js";
import { teamMembers } from "./data/teamMembers.js";
import { briefs } from "./data/briefs.js";
import { activities } from "./data/activities.js";
import { contacts } from "./data/contacts.js";

dotenv.config();

// Old comments below from using this logic before. Comments left for my own reference when I refactor.

const seedDatabase = async () => {

    try {
        
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected for seeding");

        // await TeamMember.deleteMany(); - Added in activitie.js data and did not want to rerun this.
        await Activity.deleteMany();
        // console.log("Old TeamMember and Brief data cleared");
        console.log("Old Activity data cleared");

        // await Brief.deleteMany() - Added in activities.js data and did not want to rerun this.
        await Activity.insertMany(activities);
        // console.log("TeamMembers and Briefs seeded successfully");      
        console.log("Activities seeded successfully");

        await Contact.deleteMany();
        console.log("Old Contact data cleared");

        await Contact.insertMany(contacts);
        console.log("Contacts seeded successfully");

    } catch (error) {

        console.error(`Error seeding database: ${error.message}`);
        
    }

};

seedDatabase();