
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
        <div key={`event-${e.id}`}>
          {moment(e.time).format("DD MMM YY")} <a href={`https://www.meetup.com/de-DE/PythonTrier/events/${e.id}/`}>RSVP</a>
        </div>
      );
    };

    return (
      <div>
        {
          this.state.events.map(e => eventDiv(e))
        }
      </div>
    );

  },

  componentWillMount() {

    MeetupApi.fetchEvents().then(json => {

      this.setState({
        events: json.results.slice(0, 4)
      });

    });

  }

});


ReactDOM.render(
  <EventList />,
  document.getElementById("event-list")
);


