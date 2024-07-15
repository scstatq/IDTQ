document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const closeBtn = document.querySelector('.close');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            popup.style.display = 'block';
            popupImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
