import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { objecthelper } from './helper';

const divStyle = {
    background: 'lightblue'
};

export default class MapLoad extends Component {

    render() {
        const { toDisplay, imageProcess } = this.props;
        return (
            <div>
                <div className="App">
                    {!toDisplay &&
                        (<h1>
                            Select the place of interest
                </h1>)
                    }
                    <div>
                        <button className="App-button" type="button" onClick={imageProcess}>Run Processing</button>
                        <tr>
                            <div className="App">
                                {toDisplay ? (
                                    <div>
                                        <Map google={this.props.google}
                                            style={{ width: '80%', height: '90%', position: 'relative' }}
                                            className={'map'}
                                            zoom={11}>
                                            <Marker
                                                title={'The marker`s title will appear as a tooltip.'}
                                                name={'SOMA'}
                                                position={{ lat: 37.778519, lng: -122.405640 }} />
                                            <Marker
                                                name={'Dolores park'}
                                                position={{ lat: 37.759703, lng: -122.428093 }} />
                                            <Marker />
                                            <Marker
                                                name={'Your position'}
                                                position={{ lat: 37.762391, lng: -122.439192 }}
                                            />
                                        </Map>
                                    </div>
                                ) : (
                                        <div>
                                            <Map google={this.props.google} zoom={11}
                                                style={{ width: '80%', height: '80%', position: 'relative' }}
                                            >
                                                <Marker onClick={this.onMarkerClick}
                                                    title={'Selected item for processing'}
                                                    name={'Selected item for processing'} />
                                            </Map>
                                        </div>
                                    )
                                }
                            </div>
                        </tr>
                    </div>
                </div>
            </div>

        )
    }
}

GoogleApiWrapper({
    apiKey: ("AIzaSyBuYXIWEBQc-Qvw4TcfupwdTSvcUelQ_aQ"),
})(MapLoad)
