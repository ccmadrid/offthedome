var swatchIndex= []; //holds the names of the styles in the order that they appear in the data file
var icount = 0; //used to count how many styles are in the style data file
var swatchIndexTemplate = []; //holds the information for ___-template class
var swatchClass = [] //holds the class info for moustache templating the html
var swatchFillClass = [] //holds the fill class info
var swatchFill = [] //holds swatch fill info

$.each(swatches, function(index, value) {
  swatchIndex[icount] = index;
  icount++;
});

$.each(swatchIndex, function(position, value) {
  swatchIndexTemplate[position] = '#' + value + '-template';
  swatchClass[position] = '.' + value + 'watches';
  swatchFillClass[position] = '.' + value + '-fills';
  swatchFill[position] = value + 'Fills';
});

for( i = 0; i < icount; i++){
var template = $(swatchIndexTemplate[i]).html();
Mustache.parse(template);
var rendered = Mustache.render(template, swatches);
$(swatchClass[i]).html(rendered);

};

function panelFill(swatchType, swatchClass, location) {
  // Find the <def> tag for the solid fills
  var Fills = document.querySelector(swatchClass);

// Loop over all the solid fills from the `swatch-data.js` file
  location.forEach(function (elem, index) {
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
  Fills.appendChild(pattern);
  });
}

panelFill('solids', '.solid-fills', swatches.solids);
panelFill('patterns', '.pattern-fills', swatches.patterns);
panelFill('textures', '.texture-fills', swatches.textures);
panelFill('stripes', '.stripe-fills', swatches.stripes);
