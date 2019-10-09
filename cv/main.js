document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll(".skills");
    for (var i = 0; i < elements.length; i++) {
        let width = 0;
        let progressValue = parseInt(elements[i].innerHTML);
        let elm = elements[i];
        setInterval(function () {
            (function myApp() {
                if (width <= progressValue) {
                    elm.style.width = width++ + "%";
                    elm.innerHTML = elm.style.width;
                }
            })()
        }, 12);
    }
});