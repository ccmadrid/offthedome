var $navBtn = $('.nav-btn');
var $menu = $('.nav-list');

$navBtn.on('click', function () {
	$menu.toggleClass('js-menu-open')
});

// Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
// Galleria.run('.galleria');

var $left = $('.left-btn');
var $right = $('.right-btn');

		var width = 80;
    var animationSpeed = 250;
    var pause = 0;
    var currentSlide = 1;
//cache DOM elements
    var $slider = $('.slider');
    var $slideContainer = $('.slides');
    var $slides = $('.slide');
    var $test = (($slides.length - 2) * width * -1);
    var $test2 = $slides.length - 1;

function goForward() {
		$slideContainer.animate({'margin-left': '-='+ width +'%'}, animationSpeed, function() {
			if(++currentSlide === $slides.length) {
				currentSlide = 1;
				$slideContainer.css('margin-left', 0);
			}
		});
}

function goBackward() {
		$slideContainer.animate({'margin-left': '+='+ width +'%'}, animationSpeed, function() {
			if(--currentSlide === 0) {
				currentSlide = $test2;
				$slideContainer.css('margin-left', ($test) + '%');
			}
		});
}
console.log
$right.on('click', function (e) {
	e.preventDefault();
	goForward();

});

$left.on('click', function (e) {
	e.preventDefault();
	goBackward();

})
