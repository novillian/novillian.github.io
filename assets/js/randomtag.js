$(document).ready(function() {
    var things = new Array(
        "developer", 
        "janitor", 
        "hero", 
        "musician",
        "manager",
        "hard worker",
        "ad man",
        "lawyer"),
    randno = things[Math.floor( Math.random() * things.length )];
    $('.things_im_not').text( randno );
});