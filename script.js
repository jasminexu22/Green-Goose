function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 43.47283057937074, lng: -80.54033956546421 },
        zoom: 19,
        mapId: '26da08bbc3d6e826'
    });

    // array -- add marker data here 
    // title
    // latitude 
    // longitude 
    //content 

    const markers = [
        {
            name: "Merci beacoup!",
            latitude: 43.4730130,
            longitude: -80.5395363,
            content: "i loooove cats"
            // icon: xxx url
        },

        {
            name: "#2",
            latitude: 43.47312665774592,
            longitude: -80.5390576852732,
            content: "i loooove dogs"
            /// icon: xxx url
            // 43.47312665774592, -80.5390576852732
        },

        {
            name: "#3",
            latitude: 43.47483437092914,
            longitude: -80.54135692885755,
            content: "i loooove dogs"
            /// icon: xxx url
        },

        //43.474198371489244, -80.54010161022063

        {
            name: "#4",
            latitude: 43.474198371489244,
            longitude: -80.54010161022063,
            content: "i loooove dogs"
            /// icon: xxx url
        },

        //43.47298339972288, -80.539591255965

        {
            name: "#5",
            latitude: 43.47298339972288,
            longitude: -80.539591255965,
            content: "i loooove dogs"
            /// icon: xxx url
        },

        // 43.472973000600355, -80.54015363018016

        {
            name: "#6",
            latitude: 43.472973000600355,
            longitude: -80.54015363018016,
            content: "i loooove dogs"
            /// icon: xxx url
        },

        // 43.47269537267563, -80.53988161233684

        {
            name: "#7",
            latitude: 43.47269537267563,
            longitude: -80.53988161233684,
            content: "i loooove dogs"
            /// icon: xxx url
        },

        // 43.473442387113245, -80.54130302537226

        {
            name: "#8",
            latitude: 43.473442387113245,
            longitude: -80.54130302537226,
            content: "i loooove dogs"
            /// icon: xxx url
        },

        {
            name: "#9",
            latitude: 43.473442387113245,
            longitude: -80.54130302537226,
            content: "i loooove dogs"
            /// icon: xxx url
        },

        /// 43.473123367922575, -80.54026769648893

        {
            name: "#10",
            latitude: 43.473123367922575,
            longitude: -80.54130302537226,
            content: "i loooove dogs"
            /// icon: xxx url
        },
        









        // add more as needed (just copy paste, change data)
    ];

    // marker array
    markers.forEach(markerInfo => {
        const marker = new google.maps.Marker({
            title: markerInfo.name,
            position: { lat: markerInfo.latitude, lng: markerInfo.longitude },
            // icon: markerIcon.image
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



