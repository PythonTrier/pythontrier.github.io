
import "whatwg-fetch";
import fetchJsonp from "fetch-jsonp";
import moment from "moment";
import React from "react";
import ReactDOM from "react-dom";


const MeetupApi = {

  eventsUrl: "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=PythonTrier&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=21539391&sig=6f82f9a8de53caeac99e0006749acd5f3d8faa53&callback=callback",

  fetchEvents() {
    return fetchJsonp(MeetupApi.eventsUrl)
      .then(response => {
        return response.json();
      }).catch(ex => {});
  }

};


var EventList = React.createClass({

  getInitialState() {
    return {
      events: []
    };
  },

  render() {

    let eventDiv = (e) => {
      return (
        <li key={`event-${e.id}`}>
          <span className="meetup-date">{moment(e.time).format("DD MMM YY")}</span>
          <a href={`https://www.meetup.com/de-DE/PythonTrier/events/${e.id}/`} data-event={e.id} className="mu-rsvp-btn"></a>
        </li>
      );
    };

    return (
      <ul className="coming-meetups">
        {
          this.state.events.map(e => eventDiv(e))
        }
      </ul>
    );

  },

  componentWillMount() {

    MeetupApi.fetchEvents().then(json => {

      this.setState({
        events: json.results.slice(0, 4)
      });

    });

  },

  componentDidMount() {

    var rsvpDevJS = "https://a248.e.akamai.net/secure.meetupstatic.com/s/script/2012676015776998360572/api/mu.btns.js?id=q544quuj54atpv2e6ac7qkignb";
    var rsvpLiveJS = "https://a248.e.akamai.net/secure.meetupstatic.com/s/script/2012676015776998360572/api/mu.btns.js?id=kdpsql30iur5iu29u7rbdrsl3";
    var rsvpJS;

    if (location.host == "localhost") rsvpJS = rsvpDevJS;
    else rsvpJS = rsvpLiveJS;

    // the meetup script does not detect the .mu-rsvp-btn buttons
    // even when run from the componentDidMount function
    // lets delay the meetup script for a few ms more
    setTimeout(() => {
      !function(d,s,id){
        var js,fjs=d.getElementsByTagName(s)[0];
        if(!d.getElementById(id)){
          js=d.createElement(s);
          js.id=id;
          js.async=true;
          js.src=rsvpJS;
          fjs.parentNode.insertBefore(js,fjs);
        }
      }(document,"script","mu-bootjs");
    }, 200);

  }

});


ReactDOM.render(
  <EventList />,
  document.getElementById("event-list")
);
