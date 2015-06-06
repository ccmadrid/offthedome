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

// Find the <def> tag for the solid fills
var solidFills = document.querySelector('.solid-fills');

// Loop over all the solid fills from the `swatch-data.js` file
solids.solids.forEach(function (elem, index) {
  // Create a new SVG `pattern` element
  var pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
  // Populate its attributes with the correct information
  pattern.setAttribute('id', elem.swatchId);
  pattern.setAttribute('patternUnits', 'userSpaceOnUse');
  pattern.setAttribute('width', 125);
  pattern.setAttribute('height', 125);

  // Create a new SVG `image` element
  var image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  // Populate its attributes with the correct information
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'img/' + elem.swatchId + '.jpg');
  image.setAttribute('width', 125);
  image.setAttribute('height', 125);

  // Add the <image> tag into the <pattern> tag
  pattern.appendChild(image);
  // Add the <pattern> tag into the <defs> tag
  solidFills.appendChild(pattern);
});


// Find the <def> tag for the pattern fills
var patternFills = document.querySelector('.pattern-fills');

// Loop over all the pattern fills from the `swatch-data.js` file
patterns.patterns.forEach(function (elem, index) {
  // Create a new SVG `pattern` element
  var pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
  // Populate its attributes with the correct information
  pattern.setAttribute('id', elem.swatchId);
  pattern.setAttribute('patternUnits', 'userSpaceOnUse');
  pattern.setAttribute('width', 125);
  pattern.setAttribute('height', 125);

  // Create a new SVG `image` element
  var image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  // Populate its attributes with the correct information
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'img/' + elem.swatchId + '.jpg');
  image.setAttribute('width', 125);
  image.setAttribute('height', 125);

  // Add the <image> tag into the <pattern> tag
  pattern.appendChild(image);
  // Add the <pattern> tag into the <defs> tag
  patternFills.appendChild(pattern);
});

// Find the <def> tag for the texture fills
var textureFills = document.querySelector('.texture-fills');

// Loop over all the texture fills from the `swatch-data.js` file
textures.textures.forEach(function (elem, index) {
  // Create a new SVG `pattern` element
  var pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
  // Populate its attributes with the correct information
  pattern.setAttribute('id', elem.swatchId);
  pattern.setAttribute('patternUnits', 'userSpaceOnUse');
  pattern.setAttribute('width', 125);
  pattern.setAttribute('height', 125);

  // Create a new SVG `image` element
  var image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  // Populate its attributes with the correct information
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'img/' + elem.swatchId + '.jpg');
  image.setAttribute('width', 125);
  image.setAttribute('height', 125);

  // Add the <image> tag into the <pattern> tag
  pattern.appendChild(image);
  // Add the <pattern> tag into the <defs> tag
  textureFills.appendChild(pattern);
});

// Find the <def> tag for the stripe fills
var stripeFills = document.querySelector('.stripe-fills');

// Loop over all the texture fills from the `swatch-data.js` file
stripes.stripes.forEach(function (elem, index) {
  // Create a new SVG `pattern` element
  var pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
  // Populate its attributes with the correct information
  pattern.setAttribute('id', elem.swatchId);
  pattern.setAttribute('patternUnits', 'userSpaceOnUse');
  pattern.setAttribute('width', 125);
  pattern.setAttribute('height', 125);

  // Create a new SVG `image` element
  var image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  // Populate its attributes with the correct information
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'img/' + elem.swatchId + '.jpg');
  image.setAttribute('width', 125);
  image.setAttribute('height', 125);

  // Add the <image> tag into the <pattern> tag
  pattern.appendChild(image);
  // Add the <pattern> tag into the <defs> tag
  stripeFills.appendChild(pattern);
});
