$(function () {
    $(".devouredTrue").on("click", function (event) {
        var id = $(this).data("id");
        console.log(this)
        console.log("id" + id)

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: true
        }).then(
            function () {
                console.log("changed devoured");

                location.reload();
            }
        );
    });

    $("#addburger").on("click", function (event) {

        event.preventDefault();

        var newBurger = {
            name: $("#burgerNameInput").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");

                location.reload();
            }
        );
    });

    
});
