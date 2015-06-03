var $swatch = $('.square');
var $5panel = $('.5panel');
var $panel = $('.js-currentPanel');
var $panelId = 'front';
var $brim = $('.brim');
var $topLeft = $('.top-left');
var $topRight = $('.top-right');
var $sideLeft = $('.side-left');
var $sideRight = $('.side-right');
var $front = $('.front');
var $reset = $('.reset');
var $button = $('.button');
var $label = $('.label');


$5panel.on('click', 'path', function (e) {
	var $panelId = $(this).attr('id');
	var $panel = $(this).attr('class');
	var $prevPanel = $5panel.find('.js-currentPanel');
	var $prevPanelId = $prevPanel.attr('id');

	if ($panelId != $prevPanelId){

	var $prevPanelId = $prevPanel.attr('id');

	$5panel.find('.js-currentPanel').removeAttr('class').attr('class', $prevPanelId);
	$(this).attr('class', $panel + ' js-currentPanel ');
	}
});

$swatch.on('click', 'a', function (e) {
	e.preventDefault();

	var $swatchId = $(this).attr('href');
	var $swatchColour = $(this).attr('data-colour');

	$5panel.find('.js-currentPanel').attr('style', 'fill: url(' + $swatchId + ')').attr('data-colour', $swatchColour);

	if ($brim.attr('data-colour') != 'none'
		&& $topLeft.attr('data-colour') != 'none'
		&& $topRight.attr('data-colour') != 'none'
		&& $sideLeft.attr('data-colour') != 'none'
		&& $sideRight.attr('data-colour') != 'none'
		&& $front.attr('data-colour') != 'none') {
		document.getElementById('add-to-cart').style.visibility = "visible";
		console.log('brim: ' + $brim.attr('data-colour'));
		console.log('top-left: ' + $topLeft.attr('data-colour'));
		console.log('top-right: ' + $topRight.attr('data-colour'));
		console.log('side-left: ' + $sideLeft.attr('data-colour'));
		console.log('side-right: ' + $sideRight.attr('data-colour'));
		console.log('front: ' + $front.attr('data-colour'));

		$('.style-info').attr('value', 'brim: ' + $brim.attr('data-colour')
			+ ' / top-left: ' + $topLeft.attr('data-colour')
			+ ' / top-right: ' + $topRight.attr('data-colour')
			+ ' / side-left: ' + $sideLeft.attr('data-colour')
			+ ' / side-right: ' + $sideRight.attr('data-colour')
			+ ' / front: ' + $front.attr('data-colour'));


	}

});

$reset.on('click', 'a', function (e) {
	e.preventDefault();

	$brim.css('fill', '#fff');
	$topLeft.css('fill', '#fff');
	$topRight.css('fill', '#fff');
	$sideLeft.css('fill', '#fff');
	$sideRight.css('fill', '#fff');
	$front.css('fill', '#fff')
	$brim.attr('data-colour','none');
	$topLeft.attr('data-colour','none');
	$topRight.attr('data-colour','none');
	$sideLeft.attr('data-colour','none');
	$sideRight.attr('data-colour','none');
	$front.attr('data-colour','none')
	console.log('colours reset to white')
	console.log('brim: ' + $brim.attr('data-colour'));
	console.log('top-left: ' + $topLeft.attr('data-colour'));
	console.log('top-right: ' + $topRight.attr('data-colour'));
	console.log('side-left: ' + $sideLeft.attr('data-colour'));
	console.log('side-right: ' + $sideRight.attr('data-colour'));
	console.log('front: ' + $front.attr('data-colour'));
	document.getElementById('add-to-cart').style.visibility = "hidden";
});

$swatch.on('mouseover', function () {
	$(this).find('.label').addClass('js-show-label');
});

$swatch.on('mouseout', function () {
	$(this).find('.label').removeClass('js-show-label');
});
