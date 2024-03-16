const WishlistModel = require("../Schemas/wishlist");


const ItemAddinWishlist = async (req,res,next ) =>{
    try {
        const {email,wishlist} = req.body;
        const existUser = await WishlistModel.find({email});
        let item = [...wishlist]
      
        if(existUser?.length>0){
            await WishlistModel.updateOne({email:email},{$set:{wishlist:item}});
            return res.status(201).json({msg:"Add new item successfull"})
        }

        await WishlistModel.create({email,wishlist});
        return res.status(201).json({msg:"Add Successfull"});
        
       


    } catch (error) {
        console.log(error);
    }

}

const DelteItemInWishlist = async (req,res) =>{
    try {
        const {email,id} = req.body;
        const ExistItem = await WishlistModel.find({email:email});

        if(ExistItem[0].wishlist.length === 1){

            await WishlistModel.deleteOne({email:email})
            return res.status(200).json({msg:"Delte All Wishlist"});
        }else{
            await WishlistModel.updateOne({email:email},{$set:{wishlist:ExistItem[0].wishlist.filter(ID => ID !== id)}})
            return res.status(201).json({msg:"Wishlist Update"});
        }
        
        
        
        

        
            
        
       


    } catch (error) {
        console.log("true")
    }
}



module.exports = {ItemAddinWishlist,DelteItemInWishlist}