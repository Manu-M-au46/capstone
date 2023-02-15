const adModel  = require('../models/adModel')

const createAd = async (req, res) => {
    try {
      const { photos, description, address, price, phoneno } = req.body;
  
      if (!photos?.length) {
        return res.json({ error: "Photos are required" });
      }
      if (!price) {
        return res.json({ error: "Price is required" });
      }
      
      if (!address) {
        return res.json({ error: "Address is required" });
      }
      if (!description) {
        return res.json({ error: "Description is required" });
      }if (!phoneno) {
        return res.json({ error: "Description is required" });
      }

  
      const user = await adModel.findByIdAndUpdate(
        req.user._id,
        {
          $addToSet: { role: "Seller" },
        },
        { new: true }
      );
    //   user.password = undefined;
    //   user.resetCode = undefined;
      res.json({
        ad,
        user,
      });
    } catch (err) {
      console.log(err);
      res.json({ error: "Something went wrong. Try later." });
    }
  };

  module.exports = {
    createAd
  }