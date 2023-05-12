var map = L.map('map').setView([4.5793429, -74.157036], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function (result) {
        console.log(result.bicicletas[0].ubicacion);
        result.bicicletas.forEach(function (bici) {
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        });
    }
});