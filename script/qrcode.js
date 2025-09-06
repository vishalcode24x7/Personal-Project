const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const genBtn = document.getElementById('generateBtn');
const downBtn = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qr-body');

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = "&#10005"; // Cross icon
        hamburger.style.color = "red";
    } else {
        hamburger.innerHTML = "&#9776"; // Hamburger icon
        hamburger.style.color = "rgb(161, 74, 247)"
    }
});

document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.innerHTML = "&#9776"; // Hamburger icon
        hamburger.style.color = "rgb(161, 74, 247)"
    }
});

let size = sizes.value;

genBtn.addEventListener('click', (e) => {
    e.preventDefault();//used for stop reload page after clicking generate btn
    isEmpetyText();
});

//function for generating QR code
function generateQRcode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}

//if empty text
function isEmpetyText() {
    if (qrText.value.length > 0) {
        generateQRcode();
    }
    else {
        alert("please enter some text")
    }
}

//eventlistner on sizes
sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmpetyText();
});

//script for download button
downBtn.addEventListener('click', () => {
    let img = document.querySelector('.qr-body img');
    if (img != null) {
        let imgAtrr = img.getAttribute('src');
        downBtn.setAttribute("href", imgAtrr)
    }
    else {
        downBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})