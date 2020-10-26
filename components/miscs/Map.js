import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import mapStyles from '@/miscs/map.json'
import minimize from "./minimize";

const AnyReactComponent = ({ text, img }) => (
    <div>
        <img src={img} style={{ height: 50 }} />
    </div>
);

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 47.9086356,
            lng: 106.9272843,
        },
        zoom: 18,
        img: "/img/logo.png"
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyAtCydT66yfZJG5cgwuECMwBlp3nJermt0",
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                defaultOptions={{ styles: require('./map.json') }}
            >
                <AnyReactComponent
                    lat={this.props.center.lat}
                    lng={this.props.center.lng}
                    img={this.props.img}
                />
            </GoogleMapReact>
        );
    }
}

export default SimpleMap;
