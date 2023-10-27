import { Schema, model } from "mongoose";
import { ProductModel } from ".";
import UserModel from "./User";

const ReceiptSchema = new Schema(
    {
        products: {
            type: [ProductModel.schema],
            ref: "Product"
        },
        price: {
            type: String,
            require: true,
        },
        user: {
            type: UserModel.schema,
            ref: 'Users'
        },
        address: {
            type: String,
            require: true,
        }

    }, {
    timestamps: true
}
)
const ReceiptModel = model('Receipts', ReceiptSchema)

export default ReceiptModel
