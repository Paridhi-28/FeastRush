import userModel from "../models/userModel.js"

// add items to user cart

const addToCart = async(req,res) => {
    try {
        let userData = await userModel.findOne({_id : req.body})
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]);
    } catch (error) {
        
    }
}

// remove items from user cart
const removeFromCart = async(req,res) => {

}

// fetch user cart data
const getCart = async (req,res) => {

}

export {addToCart, removeFromCart, getCart}