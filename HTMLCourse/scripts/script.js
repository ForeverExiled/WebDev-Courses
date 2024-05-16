// all custom attributes of any element are accessable with JS
const el = document.querySelector('blockquote');
for (const key in el.dataset) {
    console.log(el.dataset[key]);
}

const pauseButton = document.getElementById('playPause');
document.querySelector('[aria-controls]').removeAttribute('controls'); // remove browser built-in controls

pauseButton.addEventListener('click', pauseAndPlay, false);

function pauseAndPlay() {
    console.log(this);
    const media = document.getElementById(this.getAttribute('aria-controls'));

    if (media.paused) {
        media.play();
        this.innerText = this.dataset.pauseText;
    } else {
        media.pause();
        this.innerText = this.dataset.playText;
    }
}