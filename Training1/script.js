document.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        slides[currentIndex].style.transform = `translatex(100%)`;
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].style.transform = `translatex(0)`;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translatex(${index * 100}%)`;
    });

    setInterval(showNextSlide, 5000);
});





document.addEventListener('DOMContentLoaded', function() {
    const detailsButtons = document.querySelectorAll('.details-button');
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-button');
    const popupImg = document.getElementById('popup-img');
    const popupCategory = document.getElementById('popup-category');
    const popupName = document.getElementById('popup-name');
    const popupDescription = document.getElementById('popup-description');

    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = this.closest('.product-item');
            const productImg = productItem.querySelector('.product-image img').src;
            const productCategory = productItem.querySelector('.product-category').innerText;
            const productName = productItem.querySelector('.product-name').innerText;
            const productDescription = productItem.querySelector('.product-description').innerText;

            popupImg.src = productImg;
            popupCategory.innerText = productCategory;
            popupName.innerText = productName;
            popupDescription.innerText = productDescription;

            popup.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
