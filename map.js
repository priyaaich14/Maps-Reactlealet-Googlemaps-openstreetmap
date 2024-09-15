/////////////////////////USING LOCATIONIQ/////////////////////////////////////////////////////////

// import express from 'express'
// import axios from 'axios'
// import cors from 'cors'
// import dotenv from 'dotenv'

// dotenv.config() // Ensuring environment variables are loaded

// const app = express()
// const PORT = process.env.PORT || 5000 // Default to port 5000 if environment variable not set

// app.use(cors()) // Enable CORS
// app.use(express.json()) // Middleware to parse JSON bodies

// // Route to handle geocoding requests
// app.get('/geocode', async (req, res) => {
//     const { address } = req.query
//     if (!address) {
//         return res.status(400).json({ error: 'Address parameter is required.' })
//     }

//     const apiKey = process.env.LOCATIONIQ_API_KEY; // Make sure this is set in your .env file
//     const url = `https://eu1.locationiq.com/v1/search.php?key=${apiKey}&q=${encodeURIComponent(address)}&format=json`

//     try {
//         const response = await axios.get(url)
//         if (response.data && response.data.length > 0) {
//             const { lat, lon } = response.data[0] // Take the first result
//             res.json({ latitude: lat, longitude: lon })
//         } else {
//             res.status(404).json({ message: 'No results found for the specified address.' })
//         }
//     } catch (error) {
//         console.error('Geocoding error:', error.response ? error.response.data : error.message)
//         res.status(500).json({ message: 'Failed to fetch geocode data', details: error.response ? error.response.data : error.message })
//     }
// })

// app.listen(PORT, () => {
//     console.log(`Server running on :${PORT}`)
// })

//////////////////////USING GOOGLE MAPS ///////////////////////////////////////////////////////////

import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Ensure environment variables are loaded

const app = express()
const PORT = process.env.PORT || 5000 // Default to port 5000 if environment variable not set

app.use(cors()) // Enable CORS
app.use(express.json()) // Middleware to parse JSON bodies

// Route to handle geocoding requests
app.get('/geocode', async (req, res) => {
    const { address } = req.query
    if (!address) {
        return res.status(400).json({ error: 'Address parameter is required.' })
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY // Make sure this is set in your .env file
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`

    try {
        const response = await axios.get(url);
        //console.log(response.data)// Log the full response for debugging

        if (response.data.status === 'OK' && response.data.results.length > 0) {
            const { lat, lng } = response.data.results[0].geometry.location // Take the first result
            res.json({ latitude: lat, longitude: lng })
        } else {
            res.status(404).json({ message: 'No results found for the specified address.' })
        }
    } catch (error) {
        console.error('Geocoding error:', error.response ? error.response.data : error.message)
        res.status(500).json({ message: 'Failed to fetch geocode data', details: error.response ? error.response.data : error.message })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on :${PORT}`)
})


// import express from 'express';
// import axios from 'axios';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config() // Ensure environment variables are loaded

// const app = express()
// const PORT = process.env.PORT || 5000  // Default to port 5000 if environment variable not set

// app.use(cors()); // Enable CORS
// app.use(express.json()) // Middleware to parse JSON bodies

// // Route to handle geocoding requests
// app.get('/geocode', async (req, res) => {
//     const { address } = req.query
//     if (!address) {
//         return res.status(400).json({ error: 'Address parameter is required.' })
//     }

//     const apiKey = process.env.GOOGLE_MAPS_API_KEY // Make sure this is set in your .env file
//     const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`

//     try {
//         const response = await axios.get(url)
//        // console.log('Full Geocode Response:', response.data) // Log the full response for debugging

//         if (response.data.status === 'OK' && response.data.results.length > 0) {
//             const { lat, lng } = response.data.results[0].geometry.location // Take the first result
//             res.json({ latitude: lat, longitude: lng })
//         } else {
//             res.status(404).json({ message: 'No results found for the specified address.' })
//         }
//     } catch (error) {
//         console.error('Geocoding error:', error.response ? error.response.data : error.message)
//         res.status(500).json({ message: 'Failed to fetch geocode data', details: error.response ? error.response.data : error.message })
//     }
// })

// app.listen(port, () => {
//     console.log(`Server running on :${port}`)
// })
