// import React from 'react';

// export default function RecentSearches ({ searches }){
//   return (
//     <div>
//       <h2>Recent Searches</h2>
//       <ul>
//         {searches.map((search, index) => (
//           <li key={index}>
//             {search.address} - Lat: {search.latitude}, Lng: {search.longitude}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }


/////////////// RecentSearches.js without latitude and longitude/////////////////////////////////

import React from 'react';
export default function RecentSearches({ searches, onSearchClick }) {
  return (
    <div>
      <h2>Recent Searches</h2>
      <ul>
        {searches.map((search, index) => (
          <li key={index}>
            <button
              style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}
              onClick={() => onSearchClick(search)}
            >
              {search.address}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}


////////////////WITH LATITUDE AND LONGITUDE/////////////////////////////////////////////////

// RecentSearches.js

// import React from 'react';

// export default function RecentSearches({ searches, onSearchClick }) {
//   return (
//     <div>
//       <h2>Recent Searches</h2>
//       <ul>
//         {searches.map((search, index) => (
//           <li key={index}>
//             <button
//               style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}
//               onClick={() => onSearchClick(search)}
//             >
//               {search.address} - Lat: {search.latitude}, Lng: {search.longitude}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
