const Order = require('../model/order.model')

const newOrder = async(req,res,next) => {

  console.log(req.body)
    try {
    const { addressInfo, orderItems,  paymentInfo,  itemsPrice,  taxPrice, shippingPrice, totalPrice, user } = req.body;
            
    const order = await Order.create({
      addressInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
      user: req.body.user._id
    });
    
        res.status(201).json({
        success: true,
        order,
    });

    } catch (error) {
      console.log(error);
        res.status(500).json({message : error.message})
    }
}

const userOrder = async(req,res,next) => {
try {
        const orders = await Order.find({ user: req.user._id });
        res.status(200).json({
          success: true,
          orders,
        });
} catch (error) {
  console.log("gfdgf")
  res.status(500).json({message : error.message})
}
}

module.exports = {
  newOrder,
  userOrder,
};