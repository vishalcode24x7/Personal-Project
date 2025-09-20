const input = document.getElementById('inputText');
const output = document.getElementById('outputContainer');

const styles = [
    { wrap: txt => `*•.¸♡ ${txt} ♡¸.•*` },
    { wrap: txt => `★彡 ${txt} 彡★` },
    { wrap: txt => `♡ ${txt} ♡` },
    { wrap: txt => `➵ ${txt} ➵` },
    { wrap: txt => `𓆩 ${txt} 𓆪` },
    { wrap: txt => `◦•●◉✿ ${txt} ✿◉●•◦` },
    { wrap: txt => `↤↤↤↤↤ ${txt} ↦↦↦↦↦` },
    { wrap: txt => `↫↫↫↫↫ ${txt} ↬↬↬↬↬` },
    { wrap: txt => `░▒▓█►─═ ${txt} ═─◄█▓▒░` },
    { wrap: txt => `▁ ▂ ▄ ▅ ▆ ▇ █ ${txt}  █ ▇ ▆ ▅ ▄ ▂ ▁` },
    { wrap: txt => `ღ(¯◕‿◕¯) ${txt} ღ(¯◕‿◕¯)` },
    { wrap: txt => `ஜ۩۞۩ஜ ${txt} ஜ۩۞۩ஜ` },
    { wrap: txt => `(¯·..·¯·..-> ${txt} <-..·¯·..·¯) ` },
    { wrap: txt => `—(••÷[ ${txt} ]÷••)—` },
    { wrap: txt => `➶➶➶➶ ${txt} ➶➶➶➶` },
    { wrap: txt => `(-_-) ${txt} (-_-)` },
    { wrap: txt => `♛ ${txt} ♛` },
    { wrap: txt => `✿ ${txt} ✿` },
    { wrap: txt => `╰☆☆ ${txt} ☆☆╮` },
    { wrap: txt => `★·.· ${txt} ·.·★` },
    { wrap: txt => `♦ ${txt} ♦` },
    { wrap: txt => `▌│█║▌║▌║ ${txt} ▌│█║▌║▌║` },
    { wrap: txt => `▀▄▀▄▀▄ ${txt} ▀▄▀▄▀▄` },
    { wrap: txt => `.•♫•♬• ${txt} •♬•♫•.` },
    { wrap: txt => `•?((¯°·._.•  ${txt} •._.·°¯))؟•` },
    { wrap: txt => `]|I{•------» ${txt} «------•}I|[` },
    { wrap: txt => `🌙 ${txt} 🌙` },
    { wrap: txt => `☁ ${txt} ☁` },
    { wrap: txt => `♩♪♫ ${txt} ♫♩♪` },
    { wrap: txt => `༄ ${txt} ༄` },
    { wrap: txt => `૮₍ ´• ˕ • ₎ა ${txt} ૮₍ ´• ˕ • ₎ა` },
    { wrap: txt => `(≧◡≦) ${txt} (≧◡≦)` },
    { wrap: txt => `✩ ${txt} ✩` },
    { wrap: txt => `[ ${txt} ]` }
];

// const text = {
//     Bold: text => text.replace(/[A-Za-z0-9]/g, c => {
//         const code = c.charCodeAt(0);
//         if (c >= 'A' && c <= 'Z') {
//             return String.fromCodePoint(0x1D400 + (code - 65)); // 'A' to 'Z'
//         } else if (c >= 'a' && c <= 'z') {
//             return String.fromCodePoint(0x1D41A + (code - 97)); // 'a' to 'z'
//         } else if (code >= 48 && code <= 57) {
//             return String.fromCodePoint(0x1D7CE + (code - 48)); // 0-9
//         } else {
//             return c;
//         }
//     })
// }
function renderDecorations(text) {
    output.innerHTML = '';
    
    styles.forEach(style => {

        
        const decoratedText = style.wrap(text);
        const div = document.createElement('div');
        div.className = 'decorated';

        const span = document.createElement('span');
        span.textContent = decoratedText;

        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'Copy';
        button.onclick = () => {
            navigator.clipboard.writeText(decoratedText);
            button.textContent = 'Copied!';
            setTimeout(() => (button.textContent = 'Copy'), 1500);
        };

        div.appendChild(span);
        div.appendChild(button);
        output.appendChild(div);
    });
}

// Initial load with empty string
renderDecorations('');

input.addEventListener('input', () => {
    const text = input.value.trim();
    renderDecorations(text);
});

//hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = "&#10005"; // Cross icon
        hamburger.style.color = "red";
        navLinks.style.right = "0%";
    } else {
        hamburger.innerHTML = "&#9776"; // Hamburger icon
        hamburger.style.color = "rgb(249, 34, 34)";
        navLinks.style.right = "-100%";
    }
});

document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.innerHTML = "&#9776";
        hamburger.style.color = "rgb(249, 34, 34)";
        navLinks.style.right = "-100%";
    }
});