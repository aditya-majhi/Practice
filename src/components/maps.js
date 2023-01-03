import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import api from './mapApi'

const center = [20.296059, 85.824539]

const icon = new L.Icon({
    iconUrl: require("../marker.png"),
    iconSize: [20, 20]
})

const Maps = () => {
    return (
        <MapContainer center={center} zoom={7} style={{ width: '100vw', height: '100vh' }} scrollWheelZoom={false}>
            <TileLayer url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=2TpriJWT0emKyQogUEOu'
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {
                api.map((city) => {
                    return (
                        <Marker
                            position={city.position}
                            icon={icon}
                        >
                            <Popup>
                                <div className='flex flex-col space-y-1 justify-center'>
                                    <p className='font-bold'>{city.city}</p>
                                    <p>Peak Speed: {city.data} Mbps</p>
                                    <p>{city.avail} Network Strength</p>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })
            }
        </MapContainer>
    )
}

export default Maps
