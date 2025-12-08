        const images = [ "ex6_1.jpg", "ex6_2.jpg", "ex6_3.jpg", "ex6_4.jpg"];

        // Initialize variables
        let currentSlide = 0;
        let slideInterval;
        const slider = document.querySelector('.slider');
        const dotsContainer = document.querySelector('.dots');

        function createSlides() {
            images.forEach((image, index) => {

                const slide = document.createElement('img');
                slide.className = `slide ${index === 0 ? 'active' : ''}`;
                slide.src = image;
                slider.appendChild(slide);

                const dot = document.createElement('span');
                dot.className = `dot ${index === 0 ? 'active' : ''}`;
                dot.dataset.index = index;
                dotsContainer.appendChild(dot);
            });
        }

        function showSlide(index) {
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');

            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            if (index >= slides.length) currentSlide = 0;
            else if (index < 0) currentSlide = slides.length - 1;
            else currentSlide = index;

            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function initSlider() {
            createSlides();
            showSlide(0);

            document.querySelector('.prev').addEventListener('click', () => {
                prevSlide();
            });

            document.querySelector('.next').addEventListener('click', () => {
                nextSlide();
            });

            document.querySelectorAll('.dot').forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const index = parseInt(e.target.dataset.index);
                    showSlide(index);
                });
            });
        }

        document.addEventListener('DOMContentLoaded', initSlider);
