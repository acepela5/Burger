var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res){
    burger.all(function(data){
        var bObject = {
            burgers: data
        };
        console.log(bObject);
        res.render("index", bObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "Burger", "Devoured"
    ],
    [
        req.body.burger, req.body.devoured
    ], function(result){
        res.json({ id: result.instertId});
    }
    );
});

router.put("/api/burger/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.sleepy
    }, condition, function(result){
        if(result.changedRows===0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    }
    );
});


module.exports = router;