/*jslint  */
var Imito = (function () {

    var $container, $slides, $active_slide;

    function focus($el) {
        var index = $slides.indexOf($el);

        $container.style.transform = "translate3d(" + ((index * -100) + '%') + ",0 , 0)";
        $active_slide = $el;
    }
    function next() {

        var $next = $slides[$slides.indexOf($active_slide) + 1] || $slides[0];

        focus($next);
    }
    function previous() {
        var $next = $slides[$slides.indexOf($active_slide) - 1] || $slides[$slides.length - 1];

        focus($next);
    }
    function onKeyDown(e) {
        switch (e.keyCode) {
        case 13: // Enter
        case 39: // Right
        case 40: // Down
        case 190:// Period
        case 32: // Space
            next();
            break;

        case 8: // Backspace
        case 37: // Left
        case 38: // Up
        case 188: // Comma
            previous();
            break;

        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        $container  = document.getElementById('slides_container');
        $slides     = Array.prototype.slice.call($container.querySelectorAll('.slide'));

        document.addEventListener('keydown', onKeyDown);

        focus($slides[0]);
    });

}());