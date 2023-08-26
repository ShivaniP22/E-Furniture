const express = require('express');
const {  newOrder, userOrder } = require('../controllers/order.controller');
const router = express.Router()

console.log("IN ORDER ROUT")
router.post("/order/new", newOrder);
router.get("/order/user", userOrder)


module.exports = router;