import React, { Component } from 'react';
import './App.css';
import { Map, Marker, GoogleApiWrapper, Polygon, InfoWindow } from 'google-maps-react';
import Login from './Login'
import Image1 from './Images/image1.png';
import Image2 from './Images/image2.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Criteria1: false,
      Criteria2: false,
      onMapLoad: true,
      image1: false,
      image2: false,
      image3: false,
      largeSize: false,
      mediumSize: false,
      userLogged: false,
      toDisplay: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  loadImage(event) {
    this.setState({
      Criteria1:false,
      Criteria2: false,
      onMapLoad: false,
      toDisplay: false,
      largeSize: false,
      mediumSize: false,
      image1: false,
      image2: false,
    })
    if (event === 'image1') {
      this.setState({ image1: true })
    }
    if (event === 'image2') {
      this.setState({ image2: true })
    }
  }

  imageProcess(event) {
    this.setState({
      Criteria2: false,
      Criteria1: false,
      onMapLoad: false,
      toDisplay: false,
      largeSize: false,
      mediumSize: false,
      image1: false,
      image2: false,
      image3: false,
    })
    if (event === 'select area') {
      this.setState({ toDisplay: true })
    }
    if (event === 'filter2') {
      this.setState({ largeSize: true })
    }
    if (event === 'filter3') {
      this.setState({ mediumSize: true })
    }
    if (event === 'Criteria1') {
      this.setState({ Criteria1: true })
    }
    if (event === 'Criteria2') {
      this.setState({ Criteria2: true })
    }
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props.name,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  loginPortal = () => {
    this.setState({ userLogged: true })
  };

  logOff = () => {
    this.setState({ userLogged: false })
  };

  render() {
    const infoStyle = {
      color: 'orange',
      fontSize: 14,
    };
    // const triangleCoords = [
    //   { lat: 1.3024011, lng: 103.796127 },
    //   { lat: 1.2758387, lng: 103.6766169 },
    //   { lat: 1.4414698, lng: 103.7707968 }
    // ];

    const { userLogged, toDisplay, largeSize, mediumSize, selectedPlace, image1, image2, onMapLoad, Criteria1, Criteria2 } = this.state;
    return (
      <div>
        {!(userLogged)
          ? <Login login={this.loginPortal} />
          : <div className="App">
            <div>
              <div className='App-spacing'>
                <button className="App-button" type="button" onClick={() => this.imageProcess('select area')}>Select Area</button>
                <button className="App-button" type="button" onClick={() => this.imageProcess('filter2')}>Filter 10 Places</button>
                <button className="App-button" type="button" onClick={() => this.imageProcess('filter3')}>Filter 5 Places</button>
                <button className="App-button" type="button" onClick={() => this.logOff()}>Log off</button>
              </div>
              <div className='App-spacing'>
                <button className="App-button" type="button" onClick={() => this.imageProcess('Criteria1')}>Criteria 1</button>
                <button className="App-button" type="button" onClick={() => this.imageProcess('Criteria2')}>Criteria 2</button>
              </div>
              <tr>
                <td valign="top">
                  <tr><button className="App-button cell-spacing" type="button" >Snap Image</button></tr>
                  <tr><button className="App-button cell-spacing" type="button" onClick={() => this.loadImage('image2')}>Segment Building</button></tr>
                  <tr><button className="App-button cell-spacing" type="button" onClick={() => this.loadImage('button3')}> Generate PDF</button></tr>
                </td>
                <td rowSpan="3">
                  <div className="App">
                    {onMapLoad && (
                      <div>
                        <Map google={this.props.google} zoom={11}
                          style={{ width: '80%', height: '80%', position: 'relative' }}
                          initialCenter={{ lat: 1.3024011, lng: 103.796127 }}
                        >
                        </Map>
                      </div>
                    )
                    }
                    {toDisplay && (
                      <div>
                        <Map google={this.props.google} zoom={11}
                          style={{ width: '80%', height: '80%', position: 'relative' }}
                          initialCenter={{ lat: 1.3024011, lng: 103.796127 }}
                        >
                          {/* <Polygon
                            paths={triangleCoords}
                            strokeColor="#0000FF"
                            strokeOpacity={0.8}
                            strokeWeight={2}
                            fillColor="#0000FF"
                            fillOpacity={0.35} /> */}
                        </Map>
                      </div>
                    )
                    }
                    {largeSize && (
                      <div>
                        <Map google={this.props.google}
                          style={{ width: '80%', height: '80%', position: 'relative' }}
                          className={'map'}
                          initialCenter={{ lat: 1.3024011, lng: 103.796127 }}
                          zoom={14}>
                          <Marker
                            title={'The marker`s title will appear as a tooltip.'}
                            name={'Your position'}
                            position={{ lat: 1.3034011, lng: 103.794127 }} />
                          <Marker
                            name={'Your position'}
                            position={{ lat: 1.3024012, lng: 103.796127 }} />
                          <Marker />
                          <Marker
                            name={'Your position'}
                            position={{ lat: 1.3044013, lng: 103.796127 }}
                          />
                          <Marker
                            name={'Your position'}
                            position={{ lat: 1.3045014, lng: 103.792127 }}
                          />
                          <Marker
                            name={'Your position'}
                            position={{ lat: 1.3046015, lng: 103.796127 }}
                          />
                          <Marker
                            name={'Your position'}
                            position={{ lat: 1.3047016, lng: 103.794127 }}
                          />
                          <Marker
                            name={'Your position'}
                            position={{ lat: 1.3048017, lng: 103.798127 }}
                          />
                          <Marker
                            name={'Your position'}
                            position={{ lat: 1.3024918, lng: 103.796127 }}
                          />
                        </Map>
                      </div>
                    )
                    }
                    {mediumSize && (
                      <div>
                        <Map google={this.props.google}
                          style={{ width: '80%', height: '80%', position: 'relative' }}
                          onClick={this.onMapClicked}
                          className={'map'}
                          initialCenter={{ lat: 1.3024011, lng: 103.796127 }}
                          zoom={15}>
                          <Marker
                            onClick={this.onMarkerClick}
                            title={'Markers'}
                            name={'Metropolis - Singapore, refNo: dsfdfds2155'}
                            position={{ lat: 1.3034011, lng: 103.794127 }} />
                          <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                              <h1 style={infoStyle}>{selectedPlace} </h1>
                            </div>
                          </InfoWindow>
                          <Marker
                            onClick={this.onMarkerClick}
                            title={'Markers'}
                            name={'Common Wealth - Singapore, refNo: dsfdfds4157'}
                            position={{ lat: 1.3024012, lng: 103.796127 }} />
                          <Marker />
                          <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                              <h1 style={infoStyle}>{selectedPlace}</h1>
                            </div>
                          </InfoWindow>
                          <Marker
                            onClick={this.onMarkerClick}
                            title={'Markers'}
                            name={'MOE- Singapore, refNo: dsfdfds4157'}
                            position={{ lat: 1.3044013, lng: 103.796127 }}
                          />
                          <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                              <h1 style={infoStyle}>{selectedPlace}</h1>
                            </div>
                          </InfoWindow>
                          <Marker
                            onClick={this.onMarkerClick}
                            title={'Markers'}
                            name={'Biopolis - Singapore, refNo: dsfdfds4157'}
                            position={{ lat: 1.3045014, lng: 103.792127 }}
                          />
                          <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                              <h1 style={infoStyle}>{selectedPlace}</h1>
                            </div>
                          </InfoWindow>
                        </Map>
                      </div>
                    )
                    }
                    {image1 && (
                      <div>
                        <img src={Image1} alt="Logo" />
                      </div>
                    )
                    }
                    {image2 && (
                      <div>
                        <img src={Image1} alt="Logo" />
                      </div>
                    )
                    }
                    {Criteria1 && (
                      <div>
                        <img src={Image2} alt="Logo" />
                      </div>
                    )
                    }
                    {Criteria2 && (
                      <div>
                        <img src={Image1} alt="Logo" />
                      </div>
                    )
                    }
                  </div>
                </td>
              </tr>
            </div>
          </div>}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBuYXIWEBQc-Qvw4TcfupwdTSvcUelQ_aQ"),
})(App)
