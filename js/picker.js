var $swatch = $('.square');
var $5panel = $('.5panel');
var $panel = 'js-currentPanel';
var $panelId = 'front';
var $brim = $('.brim');
var $topLeft = $('.top-left');
var $topRight = $('.top-right');
var $sideLeft = $('.side-left');
var $sideRight = $('.side-right');
var $front = $('.front');
var $reset = $('.reset');

$5panel.on('click', 'path', function (e) {
	var $panelId = $(this).attr('id');
	var $panel = $(this).attr('class');
	var $prevPanel = $5panel.find('.js-currentPanel');
	var $prevPanelId = $prevPanel.attr('id');

	if ($panelId != $prevPanelId){
	console.log('the previous panel was ' + $prevPanelId)
	var $prevPanelId = $prevPanel.attr('id');

	$5panel.find('.js-currentPanel').removeAttr('class').attr('class', $prevPanelId);
	$(this).attr('class', $panel + ' js-currentPanel ');

	console.log('clicked ' + $panel);
	console.log($(this).attr('class'));
	}
});

$swatch.on('click', 'a', function (e) {
	e.preventDefault();

	$swatchId = $(this).attr('href');

	console.log($swatchId);

	$5panel.find('.js-currentPanel').css('fill', $swatchId);
	// $5panel.find('.js-currentPanel').css('fill', 'url("' + $swatchId + '")');

	console.log('this is the color of ' + $5panel.find('.js-currentPanel').attr('id') + ': ' + $swatchId);
	console.log('brim: ' + $brim.css('fill'));
	console.log('top-left: ' + $topLeft.css('fill'));
	console.log('top-right: ' + $topRight.css('fill'));
	console.log('side-left: ' + $sideLeft.css('fill'));
	console.log('side-right: ' + $sideRight.css('fill'));
	console.log('front: ' + $front.css('fill'));

});

$reset.on('click', 'a', function (e) {
	e.preventDefault();

	$brim.css('fill', '#fff');
	$topLeft.css('fill', '#fff');
	$topRight.css('fill', '#fff');
	$sideLeft.css('fill', '#fff');
	$sideRight.css('fill', '#fff');
	$front.css('fill', '#fff')
});
