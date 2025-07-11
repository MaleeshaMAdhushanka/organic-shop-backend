import { Contact} from "../model/contact.model";
import { contactList } from "../db/contact.db";

// Get all contacts service logic
export const getAllContacts = (): Contact[] => {
    return contactList;
}

//save contact
export const saveContact = (contact: Contact): Contact => {
    contactList.push(contact);
    return contact;
}

export  const validatedContact = (contact: any):string | null => {
    if (!contact) {
        return "Contact data is required";
    }

    if (!contact.email || !contact.subject || !contact.message) {
        return "All fields are required";
    }
    if (!isValidEmail(contact.email)) {
        return 'Valid email is required';
    }
    if (contact.subject.trim().length < 2) {
        return 'Subject must be at least 2 characters long';
    }

    if (contact.message.trim().length < 10) {
        return 'Message must be at least 10 characters long';
    }
    return  null;

}

//for email
const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};