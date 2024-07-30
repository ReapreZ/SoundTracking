import React, { useState, useEffect } from 'react';
import './Artists.css';

function Artists() {
  const [artistData, setArtistData] = useState([]);

  useEffect(() => {
    async function fetchArtistData() {
      // Ersetze durch deine tatsächliche API-Anfrage
      const data = await getArtistData();
      setArtistData(data);
    }

    fetchArtistData();
  }, []);

  async function getArtistData() {
    // Beispiel-Daten
    return [
      { name: 'Artist 1', followers: 1000 },
      { name: 'Artist 2', followers: 2000 },
      { name: 'Artist 3', followers: 3000 },
    ];
  }

  return (
    <section id="artists" className="section">
      <h2>Top Artists</h2>
      <div id="artist-data">
        {artistData.map((artist, index) => (
          <div key={index}>
            <h3>{artist.name}</h3>
            <p>Followers: {artist.followers}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Artists;
