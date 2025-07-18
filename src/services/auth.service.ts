import {User} from "../model/user.model.";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string;

const refreshTokens = new Set<string>();

const adminUser: User = {
    id: 1,
    name:"admin",
    password:bcrypt.hashSync("1234", 10),
    role:"admin"
}

const customerUser: User ={
    id:2,
    name:"customer",
    password:bcrypt.hashSync("1234", 10),
    role:"customer"
}

const userList: User[] = [];

userList.push(adminUser);
userList.push(customerUser);


export const authenticateUser = (name: string, password: string) => {
    const existingUser: User | undefined = userList.find(user => user.name === name);

    let isValidPassword = undefined != existingUser
        && bcrypt.compareSync(password, existingUser.password);
    if (!existingUser || !isValidPassword) {
        return null;
    }

    const accessToken = jwt.sign({
        id: existingUser.id,
        name: existingUser.name,
        role: existingUser.role
    }, JWT_SECRET, {expiresIn: "5m"});

    const refreshToken = jwt.sign({
        name: existingUser.name
    }, REFRESH_TOKEN_SECRET, {expiresIn: "7d"});
    refreshTokens.add(refreshToken);
    return {accessToken, refreshToken}
}