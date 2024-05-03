const express = require('express')
const app = express()
const port = 3000
const Razorpay = require('razorpay');
const cors = require('cors');
const crypto = require('crypto');
const exp = require('constants');

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/chipichipi', (req, res) => {
    res.send('chapachapa');
    res.end();
})

app.post("/order", async (req, res) => {
    try {
        const razorpay = new Razorpay({
            key_id: "*********",
            key_secret: "*********"
        });


        if (!req.body) {
            return res.status(400).send("Bad Request");
        }

        const options = req.body;
        const order = await razorpay.orders.create(options);

        if (!order) {
            return res.status(400).send("Bad Request");
        }

        res.json(order);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

app.post("/validate", async (req, res) => {

    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body

    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    // order_id + " | " + razorpay_payment_id

    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const digest = sha.digest("hex");

    if (digest!== razorpay_signature) {
        return res.status(400).json({msg: " Transaction is not legit!"});
    }

    res.json({msg: " Transaction is legit!", orderId: razorpay_order_id,paymentId: razorpay_payment_id});
})


app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port} http://localhost:${port}/`)
})