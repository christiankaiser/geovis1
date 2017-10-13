var mymap = L.map('map').setView([46.524, 6.582], 15);
var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
});
osmLayer.addTo(mymap);

var batiments = {
  GEO: { nom: "Géopolis", descr: "...", coords: [46.52654, 6.57967] },
  ANT: { nom: "Anthropole", descr: "...", coords: [46.52368, 6.58449] },
  MAX: { nom: "Amphimax", descr: "...", coords: [46.52134, 6.57416] },
  POL: { nom: "Amphipole", descr: "...", coords: [46.52158, 6.57558] }
};

for (var k in batiments){
  var bati = batiments[k];
  var marqueur = L.marker(bati.coords).addTo(mymap);
  marqueur.bindPopup("<b>"+bati.nom+"</b><br>"+bati.descr);
}