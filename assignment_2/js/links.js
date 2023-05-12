$(document).ready(function() {
    // Fade toggle button
    $("#fade-toggle").click(function() {
        $("#link-list").fadeToggle();
    });

    // Add link button
    $("#add-link").click(function() {
        var name = $("#link-name").val();
        var url = $("#link-url").val();

        if (name !== "" && url !== "") {
            var link = $("<a>").attr("href", url).text(name);
            var listItem = $("<li>").append(link);
            $("#link-list").append(listItem);

            $("#link-name").val("");
            $("#link-url").val("");
        }
    });

    // Delete mode button
    var deleteMode = false;
    $("#delete-mode").click(function() {
        deleteMode = !deleteMode;

        if (deleteMode) {
            $("#delete-mode").addClass("active");
        } else {
            $("#delete-mode").removeClass("active");
        }
    });

    // Click listener for list items
    $("#link-list").on("click", "li", function() {
        if (deleteMode) {
            $(this).remove();
        }
    });
});