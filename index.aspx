<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>CUMTD Tools</title>
<style type="text/css">
  html { height: 100% }
  body { height: 100%; margin: 0; padding: 0 }
  #map-canvas { height: 100% }
</style>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuiafjVJZCHfNiKc0loBpEn3GBgS7-A-I&sensor=false"></script>
<script type="text/javascript">
      google.maps.visualRefresh = true;

	  function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(40.113, -88.261),
          zoom: 14
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    </script>
</head>

<body>
	<div id="map-canvas"></div>
</body>
</html>
