var solidsTemplate = $('#solids-template').html();
Mustache.parse(solidsTemplate);
var solidsRendered = Mustache.render(solidsTemplate, solids);
$('.solidswatches').html(solidsRendered);

var patternsTemplate = $('#patterns-template').html();
Mustache.parse(patternsTemplate);
var patternsRendered = Mustache.render(patternsTemplate, patterns);
$('.patternswatches').html(patternsRendered);

var texturesTemplate = $('#textures-template').html();
Mustache.parse(texturesTemplate);
var texturesRendered = Mustache.render(texturesTemplate, textures);
$('.textureswatches').html(texturesRendered);

var stripesTemplate = $('#stripes-template').html();
Mustache.parse(stripesTemplate);
var stripesRendered = Mustache.render(stripesTemplate, stripes);
$('.stripeswatches').html(stripesRendered);

var solidFillTemplate = $('#solid-fill-template').html();
Mustache.parse(solidFillTemplate);
var solidFillRendered = Mustache.render(solidFillTemplate, solids);
$('.solid-fills').html(solidFillRendered);

var patternFillTemplate = $('#pattern-fill-template').html();
Mustache.parse(patternFillTemplate);
var patternFillRendered = Mustache.render(patternFillTemplate, patterns);
$('.pattern-fills').html(patternFillRendered);

var textureFillTemplate = $('#texture-fill-template').html();
Mustache.parse(textureFillTemplate);
var textureFillRendered = Mustache.render(textureFillTemplate, textures);
$('.texture-fills').html(textureFillRendered);

var stripeFillTemplate = $('#stripe-fill-template').html();
Mustache.parse(stripeFillTemplate);
var stripeFillRendered = Mustache.render(stripeFillTemplate, stripes);
$('.stripe-fills').html(stripeFillRendered);
