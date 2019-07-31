var orm =require("../config/orm")
module.exports = function(app){
//res.send - res. sendFile - res.JSON - res.render
    app.get("/", function(req,res){
        orm.selectAll("burgers", function(err,resultsOrms){
     res.render("index",{newListOfBurgers: resultsOrms})
        })
    })
}