window.onload = () => {
        // Remove the "container" class if necessary
        document.body.classList.remove("container");
    
        // Add background music
        const audio = document.createElement("audio");
        audio.src = "audio/background-music.mp3"; // Path to your audio file
        audio.autoplay = true;
        audio.loop = true; // Ensures the music repeats
        audio.volume = 0.5; // Set volume (optional, 0.0 to 1.0)
        document.body.appendChild(audio); // Add the audio element to the page
    
        console.log("Background music is playing!");
    };
    