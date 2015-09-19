/*jslint  */
var Imito = (function () {

    var $container, $slides, $steps, $active_slide;

    function focus($el) {
        var index = $steps.indexOf($el);

        $steps.forEach(function ($step, i) {
            if (i <= index) {
                $step.classList.add('viewed');
            } else {
                $step.classList.remove('viewed');
            }
        });

        var $lastViewedSlide = $slides.filter(function ($slide) { return $slide.classList.contains('viewed') ? $slide : undefined; }).pop();
        console.log("lastViewedSlide:", $lastViewedSlide);
        var slideIndex = $slides.indexOf($lastViewedSlide);
        $container.style.transform = "translate3d(" + ((slideIndex * -100) + '%') + ", 0, 0)";


        $active_slide = $el;
    }
    function next() {
        var $next = $steps[$steps.indexOf($active_slide) + 1] || $steps[0];

        focus($next);
    }
    function previous() {
        var $next = $steps[$steps.indexOf($active_slide) - 1] || $steps[$steps.length - 1];

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
        $steps      = Array.prototype.slice.call($container.querySelectorAll('.slide, .slide-step'));

        document.addEventListener('keydown', onKeyDown);

        focus($slides[0]);
    });
}());