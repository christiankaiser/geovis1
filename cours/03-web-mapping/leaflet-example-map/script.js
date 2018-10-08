function main() {
    map = L.map("map").setView([47.5, 8.5], 8)
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", { attribution: "&copy OpenStreetMap" }).addTo(map);

    var fc = {
        "type": "FeatureCollection", 
        "features": [{
            "type": "Feature", 
            "geometry": {
                "type": "Polygon", 
                "coordinates": [[ [7.5, 47.0], [9.5, 47.0], [9.5, 48.0], [7.5, 48.0], [7.5, 47.0] ]]
            },
            "properties": { 
                "fid": 1 
            }
        }]
	};

	L.geoJson(fc.features, {
		style: { fillColor: "#f33", fillOpacity: 0.6 }
   }).addTo(map);
}
