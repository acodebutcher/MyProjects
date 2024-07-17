const videoElement = document.getElementById('videoElement');
const streamBtn = document.getElementById('startStreamBtn');
const pictureInPictureBtn = document.getElementById('startPictureInPictureBtn');

streamBtn.addEventListener('click', async () => {
    streamBtn.disabled = true;
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
            videoElement.hidden = false;
        };
    } catch (error) {
        console.log('Error in pictureception: ', error);
    }
    streamBtn.disabled = false;
});

pictureInPictureBtn.addEventListener('click', async () => {
    // Disable button
    pictureInPictureBtn.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    pictureInPictureBtn.disabled = false;
});
