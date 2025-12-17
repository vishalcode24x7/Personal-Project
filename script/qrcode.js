// Elements
const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const qrStyleSelect = document.getElementById('qrStyle');
const qrColor = document.getElementById('qrColor');
const bgColor = document.getElementById('bgColor');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const whatsappBtn = document.getElementById('whatsappBtn');
const qrCanvas = document.getElementById('qr-canvas');

// Hamburger menu elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

let currentQRCode = null;

// QR Style Options
const styleOptions = {
    "square": { dots: 'square', cornersSquare: 'square', cornersDot: 'square' },
    "dots": { dots: 'dots', cornersSquare: 'dot', cornersDot: 'dot' },
    "rounded": { dots: 'rounded', cornersSquare: 'rounded', cornersDot: 'dot' },
    "extra-rounded": { dots: 'extra-rounded', cornersSquare: 'extra-rounded', cornersDot: 'dot' },
    "classy": { dots: 'classy', cornersSquare: 'square', cornersDot: 'dot' }
};

// Main Generate Function
function generateQR() {
    const text = qrText.value.trim();
    if (!text) {
        alert("Please enter some text or URL");
        return;
    }

    const size = parseInt(sizes.value);
    const selectedStyle = qrStyleSelect.value;
    const foregroundColor = qrColor.value;
    const backgroundColor = bgColor.value;

    // Clear previous QR
    qrCanvas.innerHTML = "";

    // Create new stylish QR
    currentQRCode = new QRCodeStyling({
        width: size,
        height: size,
        data: text,
        margin: 0,
        qrOptions: { errorCorrectionLevel: "H" },
        dotsOptions: {
            type: styleOptions[selectedStyle].dots,
            color: foregroundColor
        },
        backgroundOptions: {
            color: backgroundColor
        },
        cornersSquareOptions: {
            type: styleOptions[selectedStyle].cornersSquare,
            color: foregroundColor
        },
        cornersDotOptions: {
            type: styleOptions[selectedStyle].cornersDot,
            color: foregroundColor
        }
    });

    currentQRCode.append(qrCanvas);

    // Activate WhatsApp Share button after generation
    whatsappBtn.classList.add('active');
}

// Auto regenerate on any change (if text is already entered)
function autoRegenerateIfText() {
    if (qrText.value.trim() && currentQRCode) {
        generateQR();
    }
}

// Event Listeners
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateQR();
});

qrStyleSelect.addEventListener('change', autoRegenerateIfText);
sizes.addEventListener('change', autoRegenerateIfText);
qrColor.addEventListener('change', autoRegenerateIfText);
bgColor.addEventListener('change', autoRegenerateIfText);

// Download QR Code
downloadBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!currentQRCode) {
        alert("First generate a QR code!");
        return;
    }
    try {
        const blob = await currentQRCode.getRawData("png");
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "TextAura-Stylish-QR.png";
        a.click();
        URL.revokeObjectURL(url);
    } catch (err) {
        alert("Download failed. Please try again!");
    }
});

// WhatsApp Share Function
async function shareOnWhatsApp() {
    if (!currentQRCode) {
        alert("First generate a QR code!");
        return;
    }

    try {
        const blob = await currentQRCode.getRawData("png");
        const file = new File([blob], "qr-code.png", { type: "image/png" });

        // Mobile native share (works perfectly on Android/iOS)
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: "QR Code from TextAura",
                text: "Check out this QR code generated from TextAura.org! 🌟\nhttps://textaura.org/qrcode.html"
            });
        } else {
            // Fallback for desktop or older browsers
            const caption = encodeURIComponent("Check out this QR code from TextAura.org! 🌟\nGenerated using: https://textaura.org/qrcode.html");
            window.open(`https://api.whatsapp.com/send?text=${caption}`, '_blank');
        }
    } catch (err) {
        // Final fallback
        const caption = encodeURIComponent("Check out this QR code from TextAura.org! 🌟\nhttps://textaura.org/qrcode.html");
        window.open(`https://api.whatsapp.com/send?text=${caption}`, '_blank');
    }
}

whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (whatsappBtn.classList.contains('active')) {
        shareOnWhatsApp();
    } else {
        alert("Please generate a QR code first!");
    }
});

// Hamburger Menu Functionality (unchanged from your original)
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = "&#10005";
        hamburger.style.color = "red";
        navLinks.style.right = "0%";
    } else {
        hamburger.innerHTML = "&#9776";
        hamburger.style.color = "#a14af7ff";
        navLinks.style.right = "-100%";
    }
});

document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.innerHTML = "&#9776";
        hamburger.style.color = "rgb(161, 74, 247)";
        navLinks.style.right = "-100%";
    }
});