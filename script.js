const video = document.getElementById('custom-video');

let isPlaying = false;

video.addEventListener('loadedmetadata', () => {
    video.addEventListener('click', togglePlay);
    video.addEventListener('dblclick', handleGesture);
});

function togglePlay() {
    if (isPlaying) {
        video.pause();
    } else {
        video.play();
    }
    isPlaying = !isPlaying;
}

function handleGesture(event) {
    const screenWidth = window.innerWidth;
    const tapX = event.clientX;

    const videoDuration = video.duration;
    const seekTime = 10; // 10 seconds

    if (tapX < screenWidth / 3) {
        // Double-tap on the left side
        video.currentTime = Math.max(video.currentTime - seekTime, 0);
    } else if (tapX > (2 * screenWidth) / 3) {
        // Double-tap on the right side
        video.currentTime = Math.min(video.currentTime + seekTime, videoDuration);
    } else {
        // Double-tap in the middle
        togglePlay();
    }
}




