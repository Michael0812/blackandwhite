$(document).ready(function() {
  /**
     * This is the function that gets called by google maps to 
     * initilize google maps. This takes default the options and then creates the map
     */
  function initMap() {
    // Map options
    const options = {
      zoom: 10,
      center: {
        lat: 50.720806,
        lng: -1.904755
      }
    };
    const map = new google.maps.Map(document.getElementById('map'), options);
    //Data for the markers consisting of the a LatLng and a content
    const markers = [
      {
        coords: {
          lat: 50.720806,
          lng: -1.904755
        },
        content:
          ''
      },
      {
        coords: {
          lat: 50.71667,
          lng: -2
        },
        content:
          ''
      },
      {
        coords: {
          lat: 50.736782,
          lng: -1.777897
        },
        content:
          ''
      },
    ];
    // loop through markers
    for (let i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
    }
    // Adds marker function
    function addMarker(props) {
      let marker = new google.maps.Marker({
        position: props.coords,
        map: map
      });
      if (props.content) {
        let infoWindow = new google.maps.InfoWindow({
          content: props.content
        });
        // this is the option that allows you to click on the marker and open a window with a content
        marker.addListener('click', function() {
          infoWindow.open(map, marker);
        });
        //this is the option that allows you to click anywhere on the map and close a window
        google.maps.event.addListener(map, 'click', function() {
          infoWindow.close();
        });
      }
    }
  }
  initMap();

  $('.alert').alert()
});

