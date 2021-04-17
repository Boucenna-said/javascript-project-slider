// get slider items | Array.from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// get Number of sildes 
var slidesCount = sliderImages.length;

// set current Slide 
var currentSlide = 1;

// Slide Number Element 
var slideNumberElement = document.getElementById('slider-number');

// Previous and next buttons 
var nextbutton = document.getElementById('next');
var prevbutton = document.getElementById('prev');


// hundle Click on Previous and Next Buttons
nextbutton.onclick = nextslide;
prevbutton.onclick = prevslide;



// Create the main UL Element 
var paginationElement = document.createElement('ul')
// Set ID on created ul Element 
paginationElement.setAttribute('id' , 'pagination-ul');
//create list items based on slides count
for (var i = 1; i<= slidesCount; i++) {

    // create the li
    var paginationitem = document.createElement('li');
    // set custom Attribute
    paginationitem.setAttribute('data-index' , i);

    // set item content 
    paginationitem.appendChild(document.createTextNode(i));

    // Append items to the main Ul list 
    paginationElement.appendChild(paginationitem);
}

// add the created ul Element to the Page 
document.getElementById('paginations').appendChild(paginationElement);

// Get the New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get pagination items |

var paginationbulltes = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i = 0; i < paginationbulltes.length; i++) {
    paginationbulltes[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'))

        thechecker();
    }
}
// trigger the checker function 
thechecker();

// next Slide Function 
function nextslide () {
    if (nextbutton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        thechecker();
    }
}

// previous Slide Function 
function prevslide () {
    if (prevbutton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        thechecker();
    }
}

// Create the checker Function
function thechecker() {
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);
    removeAllactive();
    sliderImages[currentSlide -1].classList.add('active');
    paginationCreatedUl.children[currentSlide -1].classList.add('active');

    if (currentSlide == 1) {
        prevbutton.classList.add('disabled');
    } else {
        prevbutton.classList.remove('disabled');
    }
    
    if (currentSlide == slidesCount) {
        nextbutton.classList.add('disabled');
    } else {
        nextbutton.classList.remove('disabled');
    }
}

function removeAllactive() {
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });

    paginationbulltes.forEach(function(bullet) {
        bullet.classList.remove('active');
    })
}