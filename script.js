function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 43.47341501873188, lng: -80.53940053911185 },
        zoom: 18,
        mapId: '26da08bbc3d6e826'
    });


    // Array of markers 
    // name
    // latitude, longitude
    // image url
    // 

    

    // The markers 

    const markers = [
        "Trash Can 1",
        43.473039290458125,
        -80.53976273955261,
    ]

    for(let i = 0;i<markers.length; i++){
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            title: currMarker[0],
            position: { lat: currMarker[1], lng: currMarker[2] },
            map: map,
            animation: google.maps.Animation.DROP
        });
    
        const contentString = `
            <div class="popup">
                <h3>Trash Can</h3>
                <p>stuffffffffff</p>
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


    
}
