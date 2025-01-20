
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.getElementById('captureButton').addEventListener('click', () => {
    if (video.paused && video.currentTime === 0 ) {
        const poster = video.getAttribute('poster');
        
        const img = new Image();
        img.src = poster;

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        
    } else {
        // Capture the current frame from the video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
});
