import { Router} from "express";
import {getAllContacts, saveContact} from "../controllers/contact.controller";

const contactRouter = Router();

contactRouter.get('/', getAllContacts);
contactRouter.post('/', saveContact);

export default contactRouter;
