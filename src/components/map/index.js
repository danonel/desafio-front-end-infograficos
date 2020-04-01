import React from 'react';

import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './styles.css'


function MapContainer(props) {
 
    return (
      <div id="#map">

      <Map
       initialCenter={{lat: -22.9519,lng: -43.2105}}
      containerStyle={{position:'relative',width: '100%', height: '448px' } }
       google={props.google} zoom={14}>
 
 <Marker
   
    name={'Cristo Redentor'}
    position={{lat: -22.9519, lng: -43.2105}} />
 
      </Map>
      </div>
    );
}
 
export default GoogleApiWrapper({
  
    apiKey: "AIzaSyD2ubLfYqamVnDcO5OVhOZOpD78APnN3sU"
  
  })(MapContainer)