var swatchIndex= []; //holds the names of the styles in the order that they appear in the data file
var icount = 0; //used to count how many styles are in the style data file
var swatchIndexTemplate = []; //holds the information for ___-template class
var swatchClass = [] //holds the class info for moustache templating the html

$.each(swatches, function(index, value) {
  swatchIndex[icount] = index;
  icount++;
});

$.each(swatchIndex, function(position, value) {
  swatchIndexTemplate[position] = '#' + value + '-template';
  swatchClass[position] = '.' + value + 'watches';
});

for( i = 0; i < icount; i++){
var template = $(swatchIndexTemplate[i]).html();
Mustache.parse(template);
var rendered = Mustache.render(template, swatches);
$(swatchClass[i]).html(rendered);
};

// var solidsTemplate = $('#solids-template').html();
// Mustache.parse(solidsTemplate);
// var solidsRendered = Mustache.render(solidsTemplate, swatches);
// $('.solidswatches').html(solidsRendered);

// var patternsTemplate = $('#patterns-template').html();
// Mustache.parse(patternsTemplate);
// var patternsRendered = Mustache.render(patternsTemplate, swatches);
// $('.patternswatches').html(patternsRendered);

// var texturesTemplate = $('#textures-template').html();
// Mustache.parse(texturesTemplate);
// var texturesRendered = Mustache.render(texturesTemplate, swatches);
// $('.textureswatches').html(texturesRendered);

// var stripesTemplate = $('#stripes-template').html();
// Mustache.parse(stripesTemplate);
// var stripesRendered = Mustache.render(stripesTemplate, swatches);
// $('.stripeswatches').html(stripesRendered);


// Find the <def> tag for the solid fills
var solidFills = document.querySelector('.solid-fills');

// Loop over all the solid fills from the `swatch-data.js` file
swatches.solids.forEach(function (elem, index) {
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
swatches.patterns.forEach(function (elem, index) {
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
swatches.textures.forEach(function (elem, index) {
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
swatches.stripes.forEach(function (elem, index) {
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
