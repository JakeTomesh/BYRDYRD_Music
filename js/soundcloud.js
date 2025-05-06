"use strict";
//copy embed from soundcloud site
const soundcloudUrl = "https://soundcloud.com/byrdyrd";
        const oEmbedEndpoint = `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(soundcloudUrl)}`;

        fetch(oEmbedEndpoint)
            .then(response => response.json())
            .then(data => {
                document.getElementById("soundcloud_player").innerHTML = data.html;
            })
            .catch(error => console.error("Error fetching oEmbed data:", error));