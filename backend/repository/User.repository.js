import { userInfo } from "os";
import { User } from "../models/User.model.js";


const findUserByEmail = async (email) => {
    return User.findOne({ email }); 
}

const createUser = async (payload) => {
    return User.create(payload)

}





export default {findUserByEmail , createUser}