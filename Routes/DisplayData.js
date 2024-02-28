const express = require('express')
const router = express.Router()


// router.post('/foodData',(req,res)=>{
//     try{
//     res.send([global.food_items,global.foodCategory])
//     }catch(error){
//        console.error(error.message)
//        res.send("server error")
//     }
// })

router.post('/foodData', (req, res) => {
    try {
        // Check if global variables are populated
        if (global.food_items && global.foodCategory) {
            res.send([global.food_items, global.foodCategory]);
        } else {
            res.status(500).send("Data not available yet");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
})
module.exports = router





