---
layout: default2
title:  "About"
---

## Local MeetUp

PythonTrier is a growing community of Python enthusiasts who meet once a month to discuss all things Python. Members 
offer presentations and lightning talks covering different packages or projects. Our goal is to promote the Python 
programming language and provide a venue where everyone can learn and share their knowledge with others.

## Meeting Time and Location

Meetings are generally held on the second Tuesday of every month at:

<a href="http://www.maschinendeck.org/">Maschinendeck Hackerspace</a><br/>
Eurener Str. 14<br/>
54294 Trier.<br/><br/>

They are announced and coordinated through the group's MeetUp page; however, the meet information is also presented on 
this site. More detailed information can be found at [PythonTrier MeetUp](https://www.meetup.com/PythonTrier/).

Google Maps (<a href="https://tinyurl.com/y9ju7tlg">https://tinyurl.com/y9ju7tlg</a>)<br/>


<script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=false&key=AIzaSyCUM5w_mwxGxy5jT5OVply8RWTpsco1QhE"></script>

<div style="overflow:hidden;height:500px;max-width:600px;width:100%;">
  <div id="gmap_canvas" style="height:500px;max-width:600px;width:100%;">
    <style>#gmap_canvas img{max-width:none!important;background:none!important}</style>
  </div>
</div>

<script type="text/javascript">
  function init_map() {
    var myOptions = {zoom:18,center:new google.maps.LatLng(49.7512123,6.6206664),mapTypeId: google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
    var marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(49.7512123,6.6206664)});
    var infowindow = new google.maps.InfoWindow({content:"<b>Maschinendeck</b><br/>Eurener Str. 14<br/>54294 Trier" });
    google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
  }

  google.maps.event.addDomListener(window, 'load', init_map);
</script>
