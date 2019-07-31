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
    console.log(req.body)
    burger.create([
        "burger_name", "devoured"
    ],
    [
        req.body.name, false
    ], function(result){
        res.json({ id: result.instertId});
    }
    );
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: true
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