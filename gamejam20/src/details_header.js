var text = new Blotter.Text("detalhes", {
    family : "serif",
    size : 100,
    fill : "#FFFFFF"
});

var material = new Blotter.FliesMaterial();

// setting up values for the material
material.uniforms.uPointCellWidth.value = 0.011;
material.uniforms.uPointRadius.value = 1;
material.uniforms.uSpeed.value = 0.6;


var blotter = new Blotter(material, { texts : text });

var elem = document.getElementById("flies-detail-header");
var scope = blotter.forText(text);

scope.appendTo(elem);