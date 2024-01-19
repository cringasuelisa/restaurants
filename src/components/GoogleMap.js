import React from 'react';

import { Map, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends React.Component {

  render() {
    const mapStyles = {
        width: '30%',
        height: '500px',
        marginTop: '100px',
    };
    return (
      <Map
        google={this.props.google}
        zoom={14} // Adjust the initial zoom level
        style={mapStyles}
        initialCenter={{ lat: 0, lng: 0 }}// Set the initial center of the map
        >
        {/* Add map content here */}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDcemjPywRDg8rLVk4Nz6X5sgA_aogyGuA',
})(GoogleMap);