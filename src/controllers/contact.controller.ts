import { Request, Response } from 'express';
import * as contactService from '../services/contact.service.';

// Controller function to handle get all contacts
export const getAllContacts = async (req: Request, res: Response) => {
    try {
        const contacts = await contactService.getAllContacts();
        res.status(200).json(contacts);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Something went wrong!',
        });
    }
};

export const saveContact = async (req: Request, res: Response) => {
    try {
        const contact = req.body;
        const validationError = contactService.validatedContact(contact);

        if (validationError) {
            res.status(400).json({
                error: validationError
            });
            return;
        }

        const savedContact = await contactService.saveContact(contact);
        res.status(201).json(savedContact);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Something went wrong!',
        });
    }
};