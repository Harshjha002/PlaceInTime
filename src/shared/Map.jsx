import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ center }) => {
    const position = [center.lat, center.lng];

    return (
        <MapContainer center={position} zoom={13} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    Lat: {center.lat}, Lng: {center.lng}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
