import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount(){
    new google.maps.Map(this.refs.map, { // embedded google map
      zoom: 12,
      center: { //center the map too
        lat: this.props.lat,
        lng: this.props.lon //from our weather api to google api
      }
    })
  }

  render() {
    return(
      <div ref="map" /> //this is specific to react. this react's ref system. this is how to embed third party things to out react app.
    );
  }
}


export default GoogleMap;
