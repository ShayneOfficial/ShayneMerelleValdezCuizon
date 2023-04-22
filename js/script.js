let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})

const video = document.querySelector('.video');
const controls = document.querySelector('.controls');

controls.addEventListener('click', (event) => {
    if (event.target.classList.contains('control-btn')) {
        const videoSrc = event.target.dataset.src;
        video.src = videoSrc;
        video.muted = false; // unmute the video
        video.play();
    }
});