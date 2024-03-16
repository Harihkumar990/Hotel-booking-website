const {Schema,model} = require("mongoose");
const { string } = require("zod");

const WishlistSchema = new Schema({
    email:{type:String,require:true},
    wishlist:{type:Array,require:true}
})

const WishlistModel = new model("wishlist",WishlistSchema);

module.exports = WishlistModel;