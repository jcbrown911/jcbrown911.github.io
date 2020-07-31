var $ = function (id) {
    return document.getElementById(id);
};

var today = new Date();

window.onload = function() {
    $("date").value = today.toDateString()
};