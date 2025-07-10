import { Router} from "express";
import * as contactController from "../controllers/contact.controller";

const contactRouter = Router();

contactRouter.get('/', contactController.getAllContacts);
contactRouter.post('/', contactController.saveContact);

export default contactRouter;
