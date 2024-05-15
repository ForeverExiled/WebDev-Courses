document.getElementById('switch').addEventListener('click', function() {
    document.body.classList.toggle('black');
});

// all custom attributes of any element are accessable with JS
const el = document.querySelector('blockquote');
for (const key in el.dataset) {
    console.log(el.dataset[key]);
}