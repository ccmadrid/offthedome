
var swatchStyle = []; //holds the names of the styles in the order that they appear in the data file
var icount = 0; //used to count how many styles are in the style data file
var swatchIndexTemplate = []; //holds the information for ___-template class
var swatchClass = [] //holds the class info for moustache templating the html

$.each(swatches, function(swatchName, value) {
  swatchStyle[icount] = swatchName;
  icount++;
});

$.each(swatchStyle, function(position, value) {
  swatchIndexTemplate[position] = '#' + value + '-template';
  swatchClass[position] = '.' + value + 'watches';
});

for( i = 0; i < icount; i++){
  var template = $(swatchIndexTemplate[i]).html();
  Mustache.parse(template);
  var rendered = Mustache.render(template, swatches);
  $(swatchClass[i]).html(rendered);
};

function panelFill(swatchType, swatchClass, location) {
  var fills = document.querySelector(swatchClass);

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
    fills.appendChild(pattern);
  });
};


//update this whenever new styles are included
panelFill('solids', '.solid-fills', swatches.solids);
panelFill('patterns', '.pattern-fills', swatches.patterns);
panelFill('textures', '.texture-fills', swatches.textures);
panelFill('stripes', '.stripe-fills', swatches.stripes);

// $.each(swatches, function(swatchName, value) {
//   var a = "'" + swatchName + "'";
//   var b = "'." + swatchName.substring(0, swatchName.length - 1) + "-fills'";
//   var c = "swatches." + swatchName;
//   panelFill(a, b, c);
// });
