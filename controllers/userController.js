const mongoose = require("mongoose");
const port = process.env.API_PORT;


exports.testServer = function(req, res){
    res.send("server is working on port " + port)
}