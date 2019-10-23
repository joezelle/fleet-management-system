function initMap() {
  const mapOptions = {
    center: { lat: 6.5244, lng: 3.3792 },
    zoom: 15,
    styles: [
      {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
          {
            "invert_lightness": true
          },
          {
            "saturation": 10
          },
          {
            "lightness": 30
          },
          {
            "gamma": 0.5
          },
          {
            "hue": "#435158"
          }
        ]
      }
    ]
  };
  const map = new google.maps.Map(
    document.getElementById("mapDiv"),
    mapOptions
  );
  // google.maps.event.addListener(map, "click", function(event) {
  //   addMarker({ coords: event.latLng });
  // });
  // google.maps.event.addListener(map, "click", function(e){

  // })
  //     const marker = new google.maps.Marker({
  //       position: { lat: 6.5244, lng: 3.3792 },
  //       map: map
  //     });

  //   const infoWindow = new google.maps.InfoWindow({
  //     content: "<h1>Lagos</h1>"
  //   });
  //   marker.addListener("click", function(){
  //       infoWindow.open(map, marker)
  //   })
  const markers = [
    {
      coords: { lat: 6.5764, lng: 3.3653 },
      content: "<h1>Maryland</h1>"
    },
    {
      coords: { lat: 6.5536, lng: 3.4006 },
      content: "<h1>Oworonshoki</h1>"
    }
    // addMarker({
    //     coords:{ lat: 6.5244, lng: 3.3792 },
    //     content: "<h1>Lagos</h1>"
    // });
  ];

  markers.forEach(function (mark) {
    addMarker(mark);
    console.log(mark);
  });

  function addMarker(props) {
    const marker = new google.maps.Marker({
      position: props.coords,
      map: map
    });

    if (props.iconimage) {
      marker.setIcon(props.iconimage);
    }
    if (props.content) {
      const infoWindow = new google.maps.InfoWindow({
        content: props.content
      });
      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    }
  }
}
