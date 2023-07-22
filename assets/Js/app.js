$('.slider-row').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

let langBtn = document.getElementsByClassName("lang-btn");

for (let i = 0; i < langBtn.length; i++) {
  langBtn[i].onclick = function (e) {
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

searchBtn.addEventListener('click', function (event) {
  event.preventDefault();
  searchOverlay.classList.add('active');
  searchInput.focus();
});

searchOverlay.addEventListener('click', function (event) {
  if (event.target === searchOverlay) {
    searchOverlay.classList.remove('active');
  }
});

searchSubmit.addEventListener('click', function (event) {
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

function calculate() {
  // Get Input value
  let a = parseFloat(document.getElementById('range1').value)
  let b = parseFloat(document.getElementById('range2').value)
  let c = parseFloat(document.getElementById('range3').value)

  //Cacl Area
  num = (a * c) / 100
  num1 = a + num;
  num3 = (num1 / b).toFixed(2)
  document.querySelector('.bank-calc-response .bank-response-months').innerHTML = num3;
  document.querySelector('.bank-calc-response .bank-response-alls').innerHTML = num1;
}
//Update
function update1() {
  document.querySelector('.inp1 .value1').innerHTML = document.getElementById('range1').value;
  calculate();
}

function update2() {
  document.querySelector('.inp2 .value2').innerHTML = document.getElementById("range2").value;
  calculate();
}

document.querySelector('.inp1').addEventListener("input", update1);
document.querySelector('.inp2').addEventListener("input", update2);