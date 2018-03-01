function initMap() {

	//Create center marker at UCSD
	var ucsd_ltlng = {lat: 32.878849, lng: -117.235899};
	//32.878849, -117.235899

	//Create a center marker and specify DOM  elem for display
  	var map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_ltlng,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: ucsd_ltlng,
    map: map,
    title: "UCSD"
  });
}