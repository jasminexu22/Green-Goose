function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 43.47341501873188, lng: -80.53940053911185 },
        zoom: 18,
        mapId: '26da08bbc3d6e826'
    });

    const marker = new google.maps.Marker({
        position: { lat: 43.473039290458125, lng: -80.53976273955261 },
        map: map,
        title: "Trash Can",
        animation: google.maps.Animation.DROP
    });

    const contentString = `
        <div>
            <h3>Trash Can</h3>
            <p>Information about the trash can...</p>
        </div>
    `;
// 
    const infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    // event listener 
    marker.addListener('click', () => {
        infowindow.open(map, marker);
    });
}
