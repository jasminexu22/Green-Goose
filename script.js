function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 43.47341501873188, lng: -80.53940053911185 },
        zoom: 18,
        mapId: '26da08bbc3d6e826'
    });

    // array -- add marker data here 
    // title
    // latitude 
    // longitude 
    //content 

    const markers = [
        {
            name: "Trash Can 1",
            latitude: 43.473039290458125,
            longitude: -80.53976273955261,
            content: "Stuff for Trash Can 1"
        },

        {
            name: "Trash Can 2",
            latitude: 43.473267817842036,
            longitude: -80.54115614006751,
            content: "Stuff for Trash Can 2"
        },

        // add more as needed (just copy paste, change data)
    ];

    // marker array
    markers.forEach(markerInfo => {
        const marker = new google.maps.Marker({
            title: markerInfo.name,
            position: { lat: markerInfo.latitude, lng: markerInfo.longitude },
            map: map,
            animation: google.maps.Animation.DROP
        });

        // marker popup content
        const contentString = `
            <div class="popup">
                <h3>${markerInfo.name}</h3>
                <p>${markerInfo.content}</p>
            </div>
        `;

        // whatever this is
        const infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        // the event listener 
        marker.addListener('click', () => {
            infowindow.open(map, marker);
        });
    });
}



// function initMap() {
//     const map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: 43.47341501873188, lng: -80.53940053911185 },
//         zoom: 18,
//         mapId: '26da08bbc3d6e826'
//     });


//     // Array of markers 
//     // name
//     // latitude, longitude
//     // image url
//     // 

    

//     // The markers 

//     const markers = [
//         "Trash Can 1",
//         43.473039290458125,
//         -80.53976273955261,
//     ]

//     for(let i = 0;i<markers.length; i++){
//         const currMarker = markers[i];

//         const marker = new google.maps.Marker({
//             title: currMarker[0],
//             position: { lat: currMarker[1], lng: currMarker[2] },
//             map: map,
//             animation: google.maps.Animation.DROP
//         });
    
//         const contentString = `
//             <div class="popup">
//                 <h3>Trash Can</h3>
//                 <p>stuffffffffff</p>
//             </div>
//         `;
//     // 
//         const infowindow = new google.maps.InfoWindow({
//             content: contentString
//         });
    
//         // event listener 
//         marker.addListener('click', () => {
//             infowindow.open(map, marker);
//         });

//     }


    
// }



