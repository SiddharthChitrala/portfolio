// Add event listener to the window load event
window.addEventListener('load', function () {
     const slider = document.querySelector('.slider');
     const dotsContainer = document.querySelector('.dots');

     // Function to update the active dot
     function updateActiveDot(currentIndex) {
          const dots = document.querySelectorAll('.dot');
          dots.forEach((dot, index) => {
               dot.classList.toggle('active', index === currentIndex);
          });
     }

     // Function to handle dot click event
     function handleDotClick(event) {
          const dotIndex = parseInt(event.target.getAttribute('data-index'));
          slider.scrollTo({ left: dotIndex * slider.offsetWidth, behavior: 'smooth' });
     }

     // Add dots based on the number of cards
     const cards = document.querySelectorAll('.cardc0');
     cards.forEach((_, index) => {
          const dot = document.createElement('div');
          dot.classList.add('dot');
          dot.setAttribute('data-index', index);
          dot.addEventListener('click', handleDotClick);
          dotsContainer.appendChild(dot);
     });

     // Update active dot when slider scrolls
     slider.addEventListener('scroll', function () {
          const currentIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
          updateActiveDot(currentIndex);
     });

     // Update active dot when window resizes
     window.addEventListener('resize', function () {
          const currentIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
          updateActiveDot(currentIndex);
     });
});


function validation() {
     var fullname = document.getElementById('fname');
     var email = document.getElementById('email');
     var message = document.getElementById('msg');

     if (fullname.value == '' || email.value == "" || message.value == '') {
          alert('no blank values');
          return false;
     }
     else {
          alert('Thank You for message');
          true;
     }
}