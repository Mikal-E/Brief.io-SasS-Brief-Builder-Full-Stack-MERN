import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router
    .route("/")
    .get(async (req, res) => {

        try {

            const filter = {};

            if (req.query.status) {

                filter.status = req.query.status;

            }

            const contacts = await Contact.find(filter);
            res.json(contacts);

        } catch (error) {

            res.status(500).json({ message: error.message });

        }
    })

    .post(async (req, res) => {

        try {

            const newContact = new Contact(req.body);
            const savedContact = await newContact.save();
            res.status(201).json(savedContact);

        } catch (error) {

            res.status(400).json({ message: error.message });

        }
    });

router
    .route("/:id")
    .get(async (req, res) => {

        try {

            const contact = await Contact.findById(req.params.id);

            if (!contact) {

                return res.status(404).json({ message: "Contact not found" });

            }

            res.json(contact);

        } catch (error) {

            res.status(500).json({ message: error.message });

        }
    })

    .patch(async (req, res) => {

        try {

            const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {

                new: true,
                runValidators: true,

            });

            if (!updatedContact) {

                return res.status(404).json({ message: "Contact not found" });

            }

            res.json(updatedContact);

        } catch (error) {

            res.status(400).json({ message: error.message });

        }

    })

    .delete(async (req, res) => {

        try {

            const deletedContact = await Contact.findByIdAndDelete(req.params.id);

            if (!deletedContact) {

                return res.status(404).json({ message: "Contact not found" });

            }

            res.json({ message: "Contact deleted successfully" });

        } catch (error) {

            res.status(500).json({ message: error.message });
            
        }
    });

export default router;