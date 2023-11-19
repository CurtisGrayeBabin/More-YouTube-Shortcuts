
// get like or dislike button
// tpye: string either 'like' or 'dislike' 
const getLDButton = (type) => {
    return document.getElementById(`segmented-${type}-button`).querySelector('button');
}

// capture keypresses
document.body.addEventListener('keydown', (event) => {
    // skip 30 seconds when pressing 's' key
    if (event.key === 's') {
        const videoElement = document.querySelector('.html5-video-container > video');
        const newTime = videoElement.currentTime + 30;
        videoElement.currentTime = Math.min(newTime, videoElement.duration);
    } 
    // remove YouTube warning message below video player
    else if (event.key === 'r'){
        if (document.getElementById('clarify-box')) 
            document.getElementById('clarify-box').remove();
        if (document.getElementById('middle-row')) 
            document.getElementById('middle-row').remove();
    }
    // like video with u key
    else if (event.key === 'u'){
        getLDButton('like').click();
    } 
    // dislike video with d key
    else if (event.key === 'd'){
        getLDButton('dislike').click();
    }
    // remove like or dislike with u key
    else if (event.key === 'n'){
        const likeButton = getLDButton('like');
        
        // if like button has been clicked then click again to undo it
        if (likeButton.getAttribute('aria-pressed') === "true"){
            likeButton.click();
            return;
        } 
        
        const dislikeButton = getLDButton('dislike');
        // if like button has been clicked then click again to undo it
        if (dislikeButton.getAttribute('aria-pressed') === "true"){
            dislikeButton.click();
        } 
        

    }
    
});
