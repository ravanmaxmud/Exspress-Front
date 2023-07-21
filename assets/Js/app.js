$('.slider-row').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

let langBtn = document.getElementsByClassName("lang-btn");

for (let i = 0; i < langBtn.length; i++) {
  langBtn[i].onclick = function(e) {
    e.preventDefault();
    let langDropdown = document.querySelector(".lang-dropDown");

    if (langDropdown.style.display === "inline") {
      langDropdown.style.display = "none";
    } else {
      langDropdown.style.display = "inline";
    }
  };
}


let searchBtn = document.querySelector('.search-btn');
let searchOverlay = document.querySelector('.search-overlay');
let searchInput = document.querySelector('.search-input');
let searchSubmit = document.querySelector('.search-submit');
let icon = document.querySelector('.icon');

searchBtn.addEventListener('click', function(event) {
  event.preventDefault();
  searchOverlay.classList.add('active');
  searchInput.focus();
});

searchOverlay.addEventListener('click', function(event) {
  if (event.target === searchOverlay) {
    searchOverlay.classList.remove('active');
  }
});

searchSubmit.addEventListener('click', function(event) {
  event.preventDefault();
  searchOverlay.classList.remove('active');
});


let mobileExsDiv = document.querySelector('.mobile-exs')
let mobileExsDropDown = document.querySelector('.mobile-exs ul')

mobileExsDiv.onmouseover = () => {
  mobileExsDropDown.style.opacity = 1
  mobileExsDropDown.style.transform = 'scaleY(1)';
}
mobileExsDiv.onmouseleave = () => {
  mobileExsDropDown.style.opacity = 0
  mobileExsDropDown.style.transform = 'scaleY(0)';
}