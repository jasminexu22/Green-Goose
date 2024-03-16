let points = 0;

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
            name: "Thank you for responsibly disposing!",
            latitude: 43.4730130,
            longitude: -80.5395363,
            content: "Did you know that humans only use 1% of earth's water?",
            icon: {
                url: 'images/trashcan.png',
                scaledSize: new google.maps.Size(30, 30) // Adjust the size as needed
            }
            // icon: xxx url
        },

        {
            name: "Thank you for responsibly disposing!",
            latitude: 43.47312665774592,
            longitude: -80.5390576852732,
            content: "Polar bears are very nice creatures",
            icon: {
                url: 'images/trashcan.png',
                scaledSize: new google.maps.Size(30, 30) // Adjust the size as needed
            }
            /// icon: xxx url
            // 43.47312665774592, -80.5390576852732
        },

        {
            name: "Thank you for responsibly disposing!",
            latitude: 43.47483437092914,
            longitude: -80.54135692885755,
            content: "Are you involved in any sustainable initiatives at UW?",
            icon: {
                url: 'images/trashcan.png',
                scaledSize: new google.maps.Size(30, 30) // Adjust the size as needed
            }
            /// icon: xxx url
        },

        //43.474198371489244, -80.54010161022063

        {
            name: "Thank you for responsibly disposing!",
            latitude: 43.474198371489244,
            longitude: -80.54010161022063,
            content: "There are lots of organizations at UW (ie. greenhouse) you can participate in!",
            icon: {
                url: 'images/trashcan.png',
                scaledSize: new google.maps.Size(30, 30) // Adjust the size as needed
            }
            /// icon: xxx url
        },

        //43.47298339972288, -80.539591255965

        {
            name: "Thank you for responsibly disposing!",
            latitude: 43.47298339972288,
            longitude: -80.539591255965,
            content: "i loooove dogs",
            icon: {
                url: 'images/trashcan.png',
                scaledSize: new google.maps.Size(30, 30) // Adjust the size as needed
            }
            /// icon: xxx url
        },

        // 43.472973000600355, -80.54015363018016

        {
            name: "Thank you for responsibly disposing!",
            latitude: 43.472973000600355,
            longitude: -80.54015363018016,
            content: "Did you know trees can communicate with each other?",
            icon: {
                url: 'images/trashcan.png',
                scaledSize: new google.maps.Size(30, 30) // Adjust the size as needed
            }
            /// icon: xxx url
        },

        // 43.47269537267563, -80.53988161233684

        {
            name: "Thank you for responsibly disposing!",
            latitude: 43.47269537267563,
            longitude: -80.53988161233684,
            content: "Penguins are very cute creatures.",
            icon: {
                url: 'images/trashcan.png',
                scaledSize: new google.maps.Size(30, 30) // Adjust the size as needed
            }
            /// icon: xxx url
        },

        // 43.473442387113245, -80.54130302537226

        {
            name: "Thank you for responsibly disposing!",
            latitude: 43.473442387113245,
            longitude: -80.54130302537226,
            content: "Fungi play a very vital role in protecting the environment!",
            icon: {
                url: 'images/trashcan.png',
                scaledSize: new google.maps.Size(30, 30) // Adjust the size as needed
            }
            /// icon: xxx url
        },

        {
            name: "Thank you for responsibly disposing!",
            latitude: 43.473442387113245,
            longitude: -80.54130302537226,
            content: "Did you know bees dance to communicate?",
            icon: {
                url: 'images/trashcan.png',
                scaledSize: new google.maps.Size(30, 30) // Adjust the size as needed
            }
            /// icon: xxx url
        },

        /// 43.473123367922575, -80.54026769648893

        {
            name: "Thank you for responsibly disposing!",
            latitude: 43.473123367922575,
            longitude: -80.54130302537226,
            content: "Did you know bees dance to communicate?",
            icon: {
                url: 'images/trashcan.png',
                scaledSize: new google.maps.Size(30, 30) // Adjust the size as needed
            }
            /// icon: xxx url
        },

        {
            name: "This is your current location",
            latitude: 43.473111248826584,
            longitude: -80.53979617336208,
            //43.473111248826584, -80.53979617336208
            content: "Did you know bees dance to communicate?",
            icon: {
                url: 'images/greenmarker.png',
                scaledSize: new google.maps.Size(40, 40) // Adjust the size as needed
            }
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
            animation: google.maps.Animation.DROP,
            icon: {
                url: markerInfo.icon.url,
                scaledSize: new google.maps.Size(50,50) // Adjust the size as needed
            }
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
            points++;
            console.log("Points:", points);
            console.log("<p> points:" + points.toString() + "</p>");
            // document.getElementById("points").innerHTML = "<button >hi</button>"
            document.getElementById("points").textContent = "Points: " + points.toString();
        });
    });


    /// checking the user locatio


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



