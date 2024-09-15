//////////////////////USING LOCATIONIQ IN BE AND OPEN STREET MAP IN FE/////////////////////////////////////////////////////////

// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix the default marker icon issue with react-leaflet
// delete L.Icon.Default.prototype._getIconUrl
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
// })

// export default function App(){
//   const [address, setAddress] = useState('')
//   const [location, setLocation] = useState(null)
//   const [recentSearches, setRecentSearches] = useState([])
//   const [error, setError] = useState(null)

//   const handleSearch = async (searchAddress = address) => {
//     if (!searchAddress) return

//     try {
//       const response = await axios.get(`http://localhost:5000/geocode`, {
//         params: { address: searchAddress }
//       })

//       const { latitude, longitude } = response.data
//       setLocation({ lat: latitude, lng: longitude })
//       setRecentSearches([...recentSearches, { address: searchAddress, latitude, longitude }])
//       setError(null) // Clear any previous errors
//     } catch (error) {
//       console.error('Error fetching geocode data:', error)
//       setError(error.response ? error.response.data.message : 'An unexpected error occurred')
//     }
//   }

//   const handleRecentSearchClick = (search) => {
//     setAddress(search.address)
//     handleSearch(search.address)
//   }

//   return (
//     <div>
//       <h1>Geocode Finder</h1>
//       <input 
//         type="text" 
//         value={address} 
//         onChange={(e) => setAddress(e.target.value)} 
//         placeholder="Enter address" 
//       />
//       <br/>
//       <button onClick={() => handleSearch()}>Search</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {location && (
//         <MapContainerWrapper location={location} address={address} />
//       )}

//       <div>
//         <h2>Recent Searches</h2>
//         <ul>
//           {recentSearches.map((search, index) => (
//             <li key={index}>
//               <button 
//                 style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer', padding: 0 }} 
//                 onClick={() => handleRecentSearchClick(search)}>
//                 {search.address}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// const MapContainerWrapper = ({ location, address }) => {
//   return (
//     <MapContainer center={location} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <MapMarker location={location} address={address} />
//     </MapContainer>
//   )
// }

// const MapMarker = ({ location, address }) => {
//   const map = useMap()

//   useEffect(() => {
//     map.setView(location)
//   }, [location, map])

//   return (
//     <Marker position={location}>
//       <Popup>
//         {address}
//       </Popup>
//     </Marker>
//   )
// }


///////////USING OPEN STREET MAPS AND RECENT SEARCHES COMPONENT IN FE AND LOCATIONIQ IN BE////////////////////////////

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import RecentSearches from './RecentSearches'; // Import the RecentSearches component

// // Fix the default marker icon issue with react-leaflet
// delete L.Icon.Default.prototype._getIconUrl
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
// })

// export default function App() {
//   const [address, setAddress] = useState('')
//   const [location, setLocation] = useState(null)
//   const [recentSearches, setRecentSearches] = useState([])
//   const [error, setError] = useState(null)

//   const handleSearch = async (searchAddress = address) => {
//     if (!searchAddress) return

//     try {
//       const response = await axios.get(`http://localhost:5000/geocode`, {
//         params: { address: searchAddress },
//       })

//       const { latitude, longitude } = response.data
//       setLocation({ lat: latitude, lng: longitude })
//       setRecentSearches([...recentSearches, { address: searchAddress, latitude, longitude }])
//       setError(null) // Clear any previous errors
//     } catch (error) {
//       console.error('Error fetching geocode data:', error);
//       setError(error.response ? error.response.data.message : 'An unexpected error occurred')
//     }
//   }

//   const handleRecentSearchClick = (search) => {
//     setAddress(search.address)
//     handleSearch(search.address)
//   }

//   return (
//     <div>
//       <h1>Geocode Finder</h1>
//       <input
//         type="text"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         placeholder="Enter address"
//       />
//       <br />
//       <button onClick={() => handleSearch()}>Search</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {location && <MapContainerWrapper location={location} address={address} />}

//       <RecentSearches searches={recentSearches} onSearchClick={handleRecentSearchClick} />
//     </div>
//   )
// }

// const MapContainerWrapper = ({ location, address }) => {
//   return (
//     <MapContainer center={location} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <MapMarker location={location} address={address} />
//     </MapContainer>
//   )
// }

// const MapMarker = ({ location, address }) => {
//   const map = useMap()

//   useEffect(() => {
//     map.setView(location)
//   }, [location, map])

//   return (
//     <Marker position={location}>
//       <Popup>{address}</Popup>
//     </Marker>
//   )
// }

//-----USING LOCAL STORAGE AND OPEN STREET MAP IN FE AND LOACTIONIQ IN BE---------------------------------------------------

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix the default marker icon issue with react-leaflet
// delete L.Icon.Default.prototype._getIconUrl
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
// })

// export default function App(){
//   const [address, setAddress] = useState('')
//   const [location, setLocation] = useState(null)
//   const [recentSearches, setRecentSearches] = useState([])
//   const [error, setError] = useState(null)

//   // Load recent searches from localStorage on initial render
//   useEffect(() => {
//     const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || []
//     setRecentSearches(storedSearches)
//   }, [])

//   // Save recent searches to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
//   }, [recentSearches])

//   const handleSearch = async (searchAddress = address) => {
//     if (!searchAddress) return

//     try {
//       const response = await axios.get(`http://localhost:5000/geocode`, {
//         params: { address: searchAddress }
//       })

//       const { latitude, longitude } = response.data
//       setLocation({ lat: latitude, lng: longitude })
//       setRecentSearches(prevSearches => {
//         const updatedSearches = [...prevSearches, { address: searchAddress, latitude, longitude }]
//         localStorage.setItem('recentSearches', JSON.stringify(updatedSearches))
//         return updatedSearches
//       })
//       setError(null) // Clear any previous errors
//     } catch (error) {
//       console.error('Error fetching geocode data:', error)
//       setError(error.response ? error.response.data.message : 'An unexpected error occurred')
//     }
//   }

//   const handleRecentSearchClick = (search) => {
//     setAddress(search.address)
//     handleSearch(search.address)
//   }

//   return (
//     <div>
//       <h1>Geocode Finder</h1>
//       <input 
//         type="text" 
//         value={address} 
//         onChange={(e) => setAddress(e.target.value)} 
//         placeholder="Enter address" 
//       />
//       <button onClick={() => handleSearch()}>Search</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {location && (
//         <MapContainerWrapper location={location} address={address} />
//       )}

//       <div>
//         <h2>Recent Searches</h2>
//         <ul>
//           {recentSearches.map((search, index) => (
//             <li key={index}>
//               <button 
//                 style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer', padding: 0 }} 
//                 onClick={() => handleRecentSearchClick(search)}>
//                 {search.address}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// const MapContainerWrapper = ({ location, address }) => {
//   return (
//     <MapContainer center={location} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <MapMarker location={location} address={address} />
//     </MapContainer>
//   )
// }

// const MapMarker = ({ location, address }) => {
//   const map = useMap()

//   useEffect(() => {
//     map.setView(location)
//   }, [location, map])

//   return (
//     <Marker position={location}>
//       <Popup>
//         {address}
//       </Popup>
//     </Marker>
//   )
// }


//---------------------------USING GOOGLE MAPS BOTH IN FE AND BE------------------------------------------------------------


// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix the default marker icon issue with react-leaflet
// delete L.Icon.Default.prototype._getIconUrl
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
// })

// export default function App() {
//   const [address, setAddress] = useState('')
//   const [location, setLocation] = useState(null)
//   const [recentSearches, setRecentSearches] = useState([])
//   const [error, setError] = useState(null)

//   const handleSearch = async (searchAddress = address) => {
//     if (!searchAddress) return

//     try {
//       const response = await axios.get(`http://localhost:5000/geocode`, {
//         params: { address: searchAddress },
//       })

//       const { latitude, longitude } = response.data
//       setLocation({ lat: latitude, lng: longitude })
//       setRecentSearches([...recentSearches, { address: searchAddress, latitude, longitude }])
//       setError(null) // Clear any previous errors
//     } catch (error) {
//       console.error('Error fetching geocode data:', error)
//       setError(error.response ? error.response.data.message : 'An unexpected error occurred')
//     }
//   }

//   const handleRecentSearchClick = (search) => {
//     setAddress(search.address)
//     handleSearch(search.address)
//   }

//   return (
//     <div>
//       <h1>Geocode Finder</h1>
//       <input 
//         type="text" 
//         value={address} 
//         onChange={(e) => setAddress(e.target.value)} 
//         placeholder="Enter address" 
//       />
//       <br />
//       <button onClick={() => handleSearch()}>Search</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {location && (
//         <MapContainerWrapper location={location} address={address} />
//       )}

//       <div>
//         <h2>Recent Searches</h2>
//         <ul>
//           {recentSearches.map((search, index) => (
//             <li key={index}>
//               <button 
//                 style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer', padding: 0 }} 
//                 onClick={() => handleRecentSearchClick(search)}>
//                 {search.address}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// const MapContainerWrapper = ({ location, address }) => {
//   return (
//     <MapContainer center={location} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <MapMarker location={location} address={address} />
//     </MapContainer>
//   )
// }

// const MapMarker = ({ location, address }) => {
//   const map = useMap()

//   useEffect(() => {
//     map.setView(location)
//   }, [location, map])

//   return (
//     <Marker position={location}>
//       <Popup>
//         {address}
//       </Popup>
//     </Marker>
//   )
// }


//-------------------------USING RECENT SEARCHES COMPONENT WITH GOOGLE MAPS-----------------


// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import RecentSearches from './RecentSearches'; // Import the RecentSearches component

// // Fix the default marker icon issue with react-leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
// })

// export default function App() {
//   const [address, setAddress] = useState('')
//   const [location, setLocation] = useState(null)
//   const [recentSearches, setRecentSearches] = useState([])
//   const [error, setError] = useState(null)

//   const handleSearch = async (searchAddress = address) => {
//     if (!searchAddress) return

//     try {
//       const response = await axios.get(`http://localhost:5000/geocode`, {
//         params: { address: searchAddress },
//       })

//       const { latitude, longitude } = response.data
//       setLocation({ lat: latitude, lng: longitude })
//       setRecentSearches([...recentSearches, { address: searchAddress, latitude, longitude }])
//       setError(null) // Clear any previous errors
//     } catch (error) {
//       console.error('Error fetching geocode data:', error)
//       setError(error.response ? error.response.data.message : 'An unexpected error occurred')
//     }
//   }

//   const handleRecentSearchClick = (search) => {
//     setAddress(search.address)
//     handleSearch(search.address)
//   }

//   return (
//     <div>
//       <h1>Geocode Finder</h1>
//       <input
//         type="text"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         placeholder="Enter address"
//       />
//       <br />
//       <button onClick={() => handleSearch()}>Search</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {location && <MapContainerWrapper location={location} address={address} />}

//       <RecentSearches searches={recentSearches} onSearchClick={handleRecentSearchClick} />
//     </div>
//   )
// }

// const MapContainerWrapper = ({ location, address }) => {
//   return (
//     <MapContainer center={location} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <MapMarker location={location} address={address} />
//     </MapContainer>
//   )
// }

// const MapMarker = ({ location, address }) => {
//   const map = useMap()

//   useEffect(() => {
//     map.setView(location)
//   }, [location, map])

//   return (
//     <Marker position={location}>
//       <Popup>{address}</Popup>
//     </Marker>
//   )
// }


//////////////////////meghana code////////////////////
import { useState } from "react"
import axios from "axios"
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Optional: Fix default marker icon path issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default function Map(){
    const [address,setAddress]=useState('')
    const [fetchAddress,setFetchedAddress]=useState(null)
    const [coordinates,setCoordinates]=useState(null)

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response=await axios.post('/api/address-map',{address})
            setFetchedAddress(response.data.address)
            setCoordinates(response.data.coordinates)
        }catch(error){
            console.log('Error fetching address:', error.response ? error.response.data : error.message)
        }

    }    
    return(
        <div>
            <h2>Map</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={address} placeholder="enter address" onChange={(e)=>setAddress(e.target.value)}/><br/><br/>
                <input type="submit" value="Search"/>
            </form>
            {fetchAddress && coordinates && (
                <MapContainer center={[coordinates.lat,coordinates.lng]} zoom={13} style={{height:'400px',width:'100%'}}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[coordinates.lat,coordinates.lng]}>
                        <Popup>{fetchAddress}</Popup>

                    </Marker>
                </MapContainer>
            )}
        </div>
    )
}