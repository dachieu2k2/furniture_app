import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        avatar: {
            type: String,
            default: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png'
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        }

    }, {
    timestamps: true
}
)
const UserModel = model('Users', UserSchema)

export default UserModel
