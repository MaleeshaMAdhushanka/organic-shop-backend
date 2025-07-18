import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
export const authenticateUser = (req:Request, res: Response) => {

   const{name, password} = req.body;
   const authTokens = authService.authenticateUser(name, password);

   if (!authTokens) {
      res.status(401).json({error: "Invalid credentials"});
      return;
   }
   res.json(authTokens);

}