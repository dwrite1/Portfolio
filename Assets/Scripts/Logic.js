/**
 * 
 */
$(document).on("pagecontainerload", function () {
    LoadContactRefs();
});

window.onload = function () {
    LoadContactRefs();
}

/**
 * Loads the contact image references
 */
function LoadContactRefs() {
    var imageObjects = $("img").get();

    for (var i = 0; i < imageObjects.length; i++) {
        var img = imageObjects[i];
        var imageSource = $(img).attr('src');
        var sourceEnd = imageSource.substring(14, imageSource.length)

        switch (sourceEnd) {
            case "github.png":
                $(img).parent().attr("href", "https://github.com/captainsalt")
                break;
            case "linkedin.png":
                $(img).parent().attr("href", "https://www.linkedin.com/in/david-wright-659006144/")
                break;
            case "stack.png":
                $(img).parent().attr("href", "https://stackoverflow.com/users/7107832/captainsalt")
                break;
            default:
                break;
        }
    }
}

$("button").mouseover(function () {
    $(this).css("background", "#367c79");
})

$("button").mouseout(function() {
    $(this).css("background", "#4aaaa5");
});

$("button").mousedown(function() {
    $(this).css("background", "#102322");
});

$("button").mouseup(function() {
    $(this).css("background", "#4aaaa5");
});

