var map = L.map('map', {
    layers: [
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            'attribution': 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        })
    ],
    center: [0, 10],
    zoom: 3
});

// var gpx = 'gpx\\project_africa_1000.gpx'; // URL to your GPX file or the GPX itself
// new L.GPX(gpx, { async: true }).on('loaded', function (e) {
//     map.fitBounds(e.target.getBounds());
// }).addTo(map);

$.getJSON("gpx\\gpxs.json", function (files) {
    for (let i = 0; i < files.length; i++) {
        console.log("adding " + files[i])
        var a = new L.GPX("gpx/" + files[i], {
            async: true,
            marker_options: {
                startIconUrl: '',
                endIconUrl: 'pin-icon-end.png',
                shadowUrl: 'pin-shadow.png'
            },
            polyline_options: {
                color: 'blue',
            }
        }).on('loaded', function (e) {
            let gpx = e.target;
            // map.addOverlay(gpx, gpx.get_name())
            console.log(gpx.get_name())
        }).addTo(map)
        // console.log(a.get_name())
    }
});

