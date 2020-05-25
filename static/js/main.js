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
    const map = new google.maps.Map(document.getElementById('map'),
    options);
    //Data for the markers consisting of the a LatLng and a content
    const markers = [{
        coords: {
          lat: 50.720806,
          lng: -1.904755
        },
        content: '<h5 class="mb-1">Welcome to our shop in Bournemouth</h6>' +
          '<table>' +
          '<tr><td>67 Old Christchurch Road,</td></tr>' +
          '<tr><td>Bournemouth</td></tr>' +
          '<tr><td>BH1 1EW, England</td></tr>' +
          '<tr><td>+44 1202 314151</td></tr>' +
          '</table>' +
          '<h5 class="mt-2">Here is our opening times:</h5>' +
          '<table>' +
          '<tr><th>Monday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Tuesday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Wednesday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Thursday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Friday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Saturday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Sunday</th><td>Closed</td></tr>' +
          '</table>'
      },
      {
        coords: {
          lat: 50.71667,
          lng: -2
        },
        content: '<h5 class="mb-1">Welcome to our shop in Poole</h6>' +
          '<table>' +
          '<tr><td>Lifeboat Quay,</td></tr>' +
          '<tr><td>Poole</td></tr>' +
          '<tr><td>BH6 3ED, England</td></tr>' +
          '<tr><td>+44 1202 314152</td></tr>' +
          '</table>' +
          '<h5 class="mt-2">Here is our opening times:</h5>' +
          '<table>' +
          '<tr><th>Monday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Tuesday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Wednesday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Thursday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Friday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Saturday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Sunday</th><td>Closed</td></tr>' +
          '</table>'
      },
      {
        coords: {
          lat: 50.736782,
          lng: -1.777897
        },
        content: '<h5 class="mb-1">Welcome to our shop in Christchurch</h6>' +
          '<table>' +
          '<tr><td>23 Quay Road,</td></tr>' +
          '<tr><td>Christchurch</td></tr>' +
          '<tr><td>BH9 4EW, England</td></tr>' +
          '<tr><td>+44 1202 3141513</td></tr>' +
          '</table>' +
          '<h5 class="mt-2">Here is our opening times:</h5>' +
          '<table>' +
          '<tr><th>Monday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Tuesday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Wednesday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Thursday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Friday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Saturday</th><td>9am - 5pm</td></tr>' +
          '<tr><th>Sunday</th><td>Closed</td></tr>' +
          '</table>'
      },
    ];
    // loop through markers
    for (let i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
    }
    // This is the function that create markers on the map
    // User is allowed to click on it
    // Pop-ups window coming with content

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

});