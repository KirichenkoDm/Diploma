import { CreateUserDto } from "../DTO/create-user.dto";
import { UpdateUserDto } from "../DTO/update-user.dto";
const bcrypt = require('bcrypt');
const saltRounds = 10;

export async function HashPassword(newUser: CreateUserDto|UpdateUserDto): Promise<CreateUserDto> {
    return bcrypt.genSalt(saltRounds)
    .then(salt => {
        newUser.salt = salt;
        return bcrypt.hash(newUser.password, salt)
    })
    .then(hash => {
        newUser.password = hash;
        return newUser;
    })
}