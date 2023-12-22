document.addEventListener('DOMContentLoaded', function () {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");
  const allSlide = document.querySelectorAll(".slide");
  const getSliderWidth = allSlide.length;
      /*=========================SLIDER================================*/

      function nextSlide() {
        const slideWidth = slide.clientWidth;
        let x = slidesContainer.scrollLeft += slideWidth
        let x2 = getSliderWidth * slideWidth;
        if (x >= x2) {
            slidesContainer.scrollLeft -= x2;
        } else {
            slidesContainer.scrollLeft += slideWidth;
        }
    }

    function prevSlide() {
        const slideWidth = slide.clientWidth;
        let x = slidesContainer.scrollLeft += slideWidth
        let x2 = getSliderWidth * slideWidth;
        if (x <= slideWidth) {
            slidesContainer.scrollLeft += x2;
        } else {
            slidesContainer.scrollLeft -= slideWidth;
        }
    }
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
    setInterval(nextSlide, 5000)
    /*=========================SLIDER================================*/
})
