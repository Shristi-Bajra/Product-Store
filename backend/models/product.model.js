import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    },
}, {
    timestamps: true      //createdAt, updatedAt
});

const Product = mongoose.model("Product", productSchema); //mongoose will handle upper and lower case and make it lowercase and pural

export default Product;