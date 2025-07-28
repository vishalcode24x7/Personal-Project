var typed = new Typed('.auto-type', {
    strings: ["Converter", "Generator", "Designer", "Maker", "Creator", "Artist", "Innovator", "Builder", "Engineer"],
    typeSpeed: 20,
    backSpeed: 50,
    backDelay: 1500,     // Wait 1 second before erasing
    startDelay: 100, // Start typing after 0.5 seconds
    loop: true
})

//dom access
const input = document.getElementById('userInput');
const output = document.getElementById('outputFonts');
// const copyButton = document.querySelector('.copy-btn');


//Styling output fonts
const bubbleMap = {
    a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ',
    h: 'ⓗ', i: 'ⓘ', j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ',
    o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ', u: 'ⓤ',
    v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ',
    A: 'Ⓐ', B: 'Ⓑ', C: 'Ⓒ', D: 'Ⓓ', E: 'Ⓔ', F: 'Ⓕ', G: 'Ⓖ',
    H: 'Ⓗ', I: 'Ⓘ', J: 'Ⓙ', K: 'Ⓚ', L: 'Ⓛ', M: 'Ⓜ', N: 'Ⓝ',
    O: 'Ⓞ', P: 'Ⓟ', Q: 'Ⓠ', R: 'Ⓡ', S: 'Ⓢ', T: 'Ⓣ', U: 'Ⓤ',
    V: 'Ⓥ', W: 'Ⓦ', X: 'Ⓧ', Y: 'Ⓨ', Z: 'Ⓩ',
    '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④',
    '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
};

const squareMap = {
    A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴', F: '🄵',
    G: '🄶', H: '🄷', I: '🄸', J: '🄹', K: '🄺', L: '🄻',
    M: '🄼', N: '🄽', O: '🄾', P: '🄿', Q: '🅀', R: '🅁',
    S: '🅂', T: '🅃', U: '🅄', V: '🅅', W: '🅆', X: '🅇',
    Y: '🅈', Z: '🅉',
     '0': '🄌', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
  '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
};


// Font style functions
const fontStyles = {
    bold: str => str.replace(/[A-Za-z]/g, c => {
        const code = c.charCodeAt(0);
        if (c >= 'A' && c <= 'Z') {
            return String.fromCodePoint(0x1D400 + (code - 65)); // 'A' to 'Z'
        } else if (c >= 'a' && c <= 'z') {
            return String.fromCodePoint(0x1D41A + (code - 97)); // 'a' to 'z'
        } else if (code >= 48 && code <= 57) {
            return String.fromCodePoint(0x1D7CE + (code - 48)); // 0-9
        } else {
            return c;
        }
    }),

    bubble: str => str.split('').map(c => bubbleMap[c] || c).join(''),
    square: str => str.split('').map(c => squareMap[c.toUpperCase()] || c).join('')
};

function renderOutput(text) {
    output.innerHTML = '';

    for (const style in fontStyles) {
        const converted = fontStyles[style](text);

        const block = document.createElement('div');
        block.className = 'output-block';

        const strong = document.createElement('strong');
        strong.textContent = style.toUpperCase();

        const span = document.createElement('span');
        span.textContent = converted;

        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'Copy';

        button.addEventListener('click', () => {
            navigator.clipboard.writeText(converted);
            button.style.backgroundColor = 'green';
            button.style.color = 'white';
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.style.backgroundColor = '';
                button.style.color = '';
                button.textContent = 'Copy';
            }, 1000);
        });

        block.appendChild(strong);
        block.appendChild(document.createElement('br'));
        block.appendChild(span);
        block.appendChild(document.createElement('br'));
        block.appendChild(button);

        output.appendChild(block);
    }
}

input.addEventListener('input', () => {
    renderOutput(input.value);
});

// ⏱️ Initial render when page loads
renderOutput(input.value);

