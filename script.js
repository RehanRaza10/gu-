document.addEventListener("DOMContentLoaded", () => {
  // Carousel Data
  const carouselData = [
    {
      title: "Placement News 1",
      image: "https://placehold.co/150x200",
      date: "14th SEPT., 2024",
      venue: "D BLOCK, SEMINAR HALL",
    },
    {
      title: "Placement News 2",
      image: "https://placehold.co/250x300",
      date: "15th SEPT., 2024",
      venue: "C BLOCK, ROOM 101",
    },
    {
      title: "Placement News 3",
      image: "https://placehold.co/300x400",
      date: "16th SEPT., 2024",
      venue: "MAIN AUDITORIUM",
    },
  ];

  let currentIndex = 0;

  // Get elements
  const titleElement = document.getElementById("carouselTitle");
  const imageElement = document.getElementById("carouselImage");
  const dateElement = document.getElementById("carouselDate");
  const venueElement = document.getElementById("carouselVenue");

  // Update Carousel Content
  function updateCarousel(index) {
    titleElement.textContent = carouselData[index].title;
    imageElement.src = carouselData[index].image;
    dateElement.textContent = carouselData[index].date;
    venueElement.textContent = carouselData[index].venue;
  }

  // Event Listeners
  document.getElementById("prevButton").addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel(currentIndex);
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarousel(currentIndex);
  });

  // Initialize Carousel
  updateCarousel(currentIndex);
});

document.addEventListener("DOMContentLoaded", () => {
  // Carousel Data
  const carouselData = [
    {
      title: "Placement News 1",
      image: "https://placehold.co/150x200",
      date: "14th SEPT., 2024",
      venue: "D BLOCK, SEMINAR HALL",
    },
    {
      title: "Placement News 2",
      image: "https://placehold.co/250x300",
      date: "15th SEPT., 2024",
      venue: "C BLOCK, ROOM 101",
    },
    {
      title: "Placement News 3",
      image: "https://placehold.co/300x400",
      date: "16th SEPT., 2024",
      venue: "MAIN AUDITORIUM",
    },
  ];

  let currentIndex = 0;

  // Get elements
  const titleElement = document.getElementById("carouselTitle1");
  const imageElement = document.getElementById("carouselImage1");
  const dateElement = document.getElementById("carouselDate1");
  const venueElement = document.getElementById("carouselVenue1");

  // Update Carousel Content
  function updateCarousel(index) {
    titleElement.textContent = carouselData[index].title;
    imageElement.src = carouselData[index].image;
    dateElement.textContent = carouselData[index].date;
    venueElement.textContent = carouselData[index].venue;
  }

  // Event Listeners
  document.getElementById("prevButton1").addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel(currentIndex);
  });

  document.getElementById("nextButton1").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarousel(currentIndex);
  });

  // Initialize Carousel
  updateCarousel(currentIndex);
});

const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const cardWidth = 360; // width of a single card
const totalCards = carousel.children.length; // total number of cards

// Move carousel by shifting it to the right
function updateCarousel() {
  const offset = -(cardWidth * index);
  carousel.style.transform = `translateX(${offset}px)`;
}

// Move to the next card
nextBtn.addEventListener("click", () => {
  if (index < totalCards - 4) {
    index++;
    updateCarousel();
  }
});

// Move to the previous card
prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Initial setup
updateCarousel();



// form interaction scripts

var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
document.body.appendChild(s);

var npf_d = "https://admissions.geetauniversity.edu.in/";
var npf_c = "6438";
var npf_m = "1";
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = "https://track.nopaperforms.com/js/track.js";
document.body.appendChild(s);
