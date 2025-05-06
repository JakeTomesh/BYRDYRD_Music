"use strict";
// Your Spotify Artist Embed URL
const artistEmbedURL = "https://open.spotify.com/artist/1zQ7Dm7Bs0stfLvPYYy0ov?si=yftMM__yTFiwqwjwRS3OpQ"; 

function loadSpotifyPlayer() {
    let embedDiv = document.getElementById("spotify_player");

    embedDiv.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1zQ7Dm7Bs0stfLvPYYy0ov?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}
window.onload = loadSpotifyPlayer;