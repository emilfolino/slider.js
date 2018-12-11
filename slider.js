(function() {
    var presentation = document.getElementById("presentation");
    var images = presentation.dataset.images.split(",");
    var currentIndex = 0;
    var sliderInterval;

    var fadeInImage = function(index) {
        var image = document.createElement("img");

        image.src = images[index];
        image.className = "fade-in";
        presentation.appendChild(image);
    };

    var fadeOutImage = function() {
        presentation.firstChild.classList.add("fade-out");
        setTimeout(function () {
            presentation.removeChild(presentation.firstChild);
        }, 2000);
    };

    var play = function() {
        sliderInterval = setInterval(function() {
            fadeOutImage();
            fadeInImage(++currentIndex%images.length);
        }, 5000);
    };

    fadeInImage(0);
    play();
})();
