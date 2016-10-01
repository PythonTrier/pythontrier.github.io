---
layout: default2
title:  "About"
---

## Local meetup

MeetUps are generally held on the second Tuesday of every month at:
Maschinendeck Hackerspace<br/>
Güterstraße 74<br/>
54295 Trier.<br/><br/>

Google Maps:<br/>
<a href="http://tinyurl.com/gppclhv">http://tinyurl.com/gppclhv</a>

<script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=false&key=AIzaSyBrCzVx0B-6wf5eJRPiQxGLFFmMal__f_o"></script>

<div style="overflow:hidden;height:500px;max-width:600px;width:100%;">
  <div id="gmap_canvas" style="height:500px;max-width:600px;width:100%;">
    <style>#gmap_canvas img{max-width:none!important;background:none!important}</style>
  </div>
</div>

<script type="text/javascript">
  function init_map() {
    var myOptions = {zoom:14,center:new google.maps.LatLng(49.75809,6.6560799999999745),mapTypeId: google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
    var marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(49.75809, 6.6560799999999745)});
    var infowindow = new google.maps.InfoWindow({content:"<b>Maschinendeck</b><br/>G&uuml;terstra&szlig;e 74<br/>54295 Trier" });
    google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
  }

  google.maps.event.addDomListener(window, 'load', init_map);
</script>
