$(window).on("load", start);

function start(){
    console.log("start");
    $("#start").on("click", moveIn);
    $("#container").removeClass("position_In");
    $("#cat_container").removeClass("position_In");
    $("#cat_sprite").removeClass("");
    $("#cat_container").addClass("");
    $("#cat_sprite").addClass("");

}
