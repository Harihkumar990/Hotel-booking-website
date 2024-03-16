const express = require("express");
const  ItemAddinWishlist = require("../controllers/WishListController")

const wishlistrouter = express.Router();

wishlistrouter.route("/wishlist").post( ItemAddinWishlist.ItemAddinWishlist);

wishlistrouter.route("/wishlist/delete").patch(ItemAddinWishlist.DelteItemInWishlist);


module.exports = wishlistrouter;
