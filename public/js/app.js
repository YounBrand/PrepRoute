const map = L.map('map').setView([57.7, 11.9], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(57.7, 11.9),
        L.latLng(57.6, 12.0)
    ]
}).addTo(map);