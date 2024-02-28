const express = require("express");
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    await data.splice(0, 0, { Order_date: req.body.order_date });
    let eId = await Order.findOne({ email: req.body.email });
    console.log(eId);
    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.status(200).json({ success: true }); // Updated this line
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error: " + error.message); // Updated this line
        }
    } else {
        try {
            await Order.findByIdAndUpdate({email: req.body.email}, {
                $push: { order_data: data }
            }).then(() => {
                res.status(200).json({ success: true }); // Updated this line
            });
        } catch (error) {
            res.status(500).send("Server Error: " + error.message); // Updated this line
        }
    }
});

router.post('/myorderData', async (req, res) => {
try{
    let myData = await Order.findOne({'email': req.body.email})
    res.json({orderData: myData})
}catch(error){
    res.send('Server error:', error.message)
}

})

module.exports = router;


