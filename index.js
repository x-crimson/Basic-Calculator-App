const express = require("express")
const cors=require("cors")

const app = express();
app.use(cors());
app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;

    res.send(sum.toString());
    
});
app.get("/interest", (req, res) => {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    res.send({
        total: total,
        interest: interest,
    })
});
app.listen(8080, () =>{
    console.log("Server is running at port 8080");
});