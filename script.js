console.log('Imported with Success');

const video = document.getElementById("video");

/**
 * activating PiP with a button according to the id of the video
 */
openPictureInPicture = async () => {

	if (!video.hasAttribute('isPip')) {

		await video.requestPictureInPicture();

		video.setAttribute('isPip', true);

		video.addEventListener('leavepictureinpicture', event => {
			video.removeAttribute('isPip')
		}, {
				once: true
			})

	} else {
		await document.exitPictureInPicture();
	}
};

/**
 *  activate PiP in the video that is playing with event SCROLL 
 */
window.addEventListener("scroll", async () => {
	const allVideos = document.getElementsByTagName("video")

	for (let i = 0; i < allVideos.length; i++) {
		if(allVideos[i].paused === false){
			
			if (!allVideos[i].hasAttribute('isPip')) {

				await allVideos[i].requestPictureInPicture();
		
				allVideos[i].setAttribute('isPip', true);
		
				allVideos[i].addEventListener('leavepictureinpicture', event => {
					allVideos[i].removeAttribute('isPip')
				}, {
						once: true
					})
			}
		}
	}
})