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
    Bold: str => str.replace(/[A-Za-z0-9]/g, c => {
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

    Italic: str => str.replace(/[A-Za-z]/g, c => {
        const code = c.charCodeAt(0);
        if (c === 'h') return 'ℎ';
        if (c >= 'A' && c <= 'Z') {
            return String.fromCodePoint(0x1D434 + (code - 65)); // 'A' to 'Z'
        } else if (c >= 'a' && c <= 'z') {
            return String.fromCodePoint(0x1D44E + (code - 97)); // 'a' to 'z'
        } else {
            return c; // Digits don't have italic Unicode
        }
    }),

    BoldItalic: str => str.replace(/[A-Za-z0-9]/g, c => {
        const code = c.charCodeAt(0);
        if (c >= 'A' && c <= 'Z') {
            return String.fromCodePoint(0x1D468 + (code - 65)); // 'A' to 'Z'
        } else if (c >= 'a' && c <= 'z') {
            return String.fromCodePoint(0x1D482 + (code - 97)); // 'a' to 'z'
        } else if (code >= 48 && code <= 57) {
            return String.fromCodePoint(0x1D7CE + (code - 48)); // 0-9
        } else {
            return c; // Digits can't be bold-italicized in Unicode
        }
    }),

    ScriptStyle: str => str.replace(/[A-Za-z]/g, c => {
        const code = c.charCodeAt(0);
        const patches = {
            'B': 'ℬ', // Script Capital B
            'E': 'ℰ',
            'F': 'ℱ',
            'H': 'ℋ',
            'h': 'ℎ', // Script lowercase h
            'I': 'ℐ',
            'L': 'ℒ',
            'R': 'ℛ',
            'g': 'ℊ', // Script lowercase g
            'o': 'ℴ', // Script lowercase o
            'e': '𝑒'  // Common lowercase fallback
        };
        if (patches[c]) return patches[c];
        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D49C + (code - 65));
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D4B6 + (code - 97));
        return c;
    }),

    FrakturStyle: str => str.replace(/[A-Za-z]/g, c => {
        const code = c.charCodeAt(0);

        const patches = {
            'C': 'ℭ', // U+212D
            'H': 'ℌ', // U+210C
            'I': 'ℑ', // U+2111
            'R': 'ℜ', // U+211C
            'Z': 'ℨ'  // U+2128
        };

        if (patches[c]) return patches[c];
        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D504 + (code - 65));
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D51E + (code - 97));
        return c;
    }),

    BoldFraktur: str => str.replace(/[A-Za-z]/g, c => {
        const code = c.charCodeAt(0);
        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D56C + (code - 65));
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D586 + (code - 97));
        return c;
    }),

    BoldScript: str => str.replace(/[A-Za-z]/g, c => {
        const code = c.charCodeAt(0);
        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D4D0 + (code - 65));
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D4EA + (code - 97));
        return c;
    }),

    BlackBulletify: str => str.replace(/[A-Za-z]/g, c => {
        const code = c.charCodeAt(0);
        const isUpper = c >= 'A' && c <= 'Z';
        const base = isUpper ? 0x1D400 : 0x1D41A;
        return '•' + String.fromCodePoint(base + (code - (isUpper ? 65 : 97))) + '•';
    }),

    DoubleStruck: str => str.replace(/[A-Za-z0-9]/g, c => {
        const patches = {
            // Uppercase fallbacks
            'C': 'ℂ',
            'H': 'ℍ',
            'N': 'ℕ',
            'P': 'ℙ',
            'Q': 'ℚ',
            'R': 'ℝ',
            'Z': 'ℤ',
            // Optional lowercase fallbacks (if any get tofu blocks)
            // Digits typically work fine, but patching just in case
        };

        const code = c.charCodeAt(0);

        if (patches[c]) return patches[c];

        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D538 + (code - 65));
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D552 + (code - 97));
        if (c >= '0' && c <= '9') return String.fromCodePoint(0x1D7D8 + (code - 48));
        return c;
    }),
    WiredStyle: str => str.split('').map(c => c + '\u0336').join(''),
    Bubble: str => str.split('').map(c => bubbleMap[c] || c).join(''),
    Square: str => str.split('').map(c => squareMap[c.toUpperCase()] || c).join(''),

    MonoStyleSafe: str => str.replace(/[A-Za-z0-9]/g, c => {
        const code = c.charCodeAt(0);
        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D670 + (code - 65));
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D68A + (code - 97));
        if (c >= '0' && c <= '9') return String.fromCodePoint(0x1D7F6 + (code - 48));

        return c;
    }),

    SquaredDod: str => str.replace(/[A-Za-z]/g, c => {
        const patches = {
            'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔',
            'F': '🅕', 'G': '🅖', 'H': '🅗', 'I': '🅘', 'J': '🅙',
            'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞',
            'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣',
            'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨',
            'Z': '🅩'
        };

        return patches[c.toUpperCase()] || c;
    }),

    SymbolStyle: str => str.replace(/[A-Za-z0-9]/g, c => {
        const patches = {
            'A': '∆', 'B': 'β', 'C': '©', 'D': 'ↄ', 'E': '∑',
            'F': 'ϝ', 'G': 'ɢ', 'H': '♓', 'I': 'ℹ', 'J': 'Ɉ',
            'K': 'Ҝ', 'L': 'Ↄ', 'M': '♏', 'N': '₪', 'O': '⊙',
            'P': '¶', 'Q': 'ℚ', 'R': '®', 'S': '§', 'T': '†',
            'U': '∪', 'V': '√', 'W': 'ω', 'X': '✕', 'Y': '¥',
            'Z': 'ℤ',
            '0': '⊘', '1': '①', '2': '②', '3': '③', '4': '④',
            '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
        };

        return patches[c.toUpperCase()] || c;
    }),

    FancyFontStyle: str => str.replace(/[A-Za-z0-9]/g, c => {
        const code = c.charCodeAt(0);

        const patches = {
            'B': 'ℬ', 'E': 'ℰ', 'F': 'ℱ', 'H': 'ℋ',
            'I': 'ℐ', 'L': 'ℒ', 'R': 'ℛ',
            'g': 'ℊ', 'o': 'ℴ', 'e': '𝑒',
            '0': '⓪', '1': '①', '2': '②', '3': '③',
            '4': '④', '5': '⑤', '6': '⑥', '7': '⑦',
            '8': '⑧', '9': '⑨'
        };

        if (patches[c]) return patches[c];
        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D4D0 + (code - 65)); // Bold Script
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D4EA + (code - 97)); // Script lowercase
        return c;
    }),

    CurrencyStyle: str => str.replace(/[A-Za-z0-9]/g, c => {
        const patches = {
            'A': '₳', 'B': '฿', 'C': '¢', 'D': '₫', 'E': '€',
            'F': '₣', 'G': '₲', 'H': '₴', 'I': 'ł', 'J': 'J',
            'K': '₭', 'L': '£', 'M': '₥', 'N': '₦', 'O': '¤',
            'P': '₱', 'Q': 'Q', 'R': '₹', 'S': '$', 'T': '₮',
            'U': 'U', 'V': 'V', 'W': '₩', 'X': 'X', 'Y': '¥',
            'Z': 'Z',
            '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④',
            '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
        };

        return patches[c.toUpperCase()] || c;
    }),

    FantasyStyle: str => str.replace(/[A-Za-z0-9]/g, c => {
        const patches = {
            'A': 'ᚨ', 'B': 'ℬ', 'C': 'ᚲ', 'D': 'ᛞ', 'E': 'ℰ',
            'F': 'ᚠ', 'G': 'ᚷ', 'H': 'ℋ', 'I': 'ℑ', 'J': 'ᛃ',
            'K': 'ᚴ', 'L': 'ℒ', 'M': 'ᛗ', 'N': 'ᚾ', 'O': 'ᛟ',
            'P': '℘', 'Q': 'ℚ', 'R': 'ᚱ', 'S': 'ᛋ', 'T': 'ᛏ',
            'U': 'ᚢ', 'V': 'ᚡ', 'W': 'ᚹ', 'X': 'ᛪ', 'Y': 'ᛦ',
            'Z': 'ℨ',
            'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ',
            'f': '𝒻', 'g': 'ℊ', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
            'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': 'ℴ',
            'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
            'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎',
            'z': '𝓏',
            '0': '⓿', '1': '①', '2': '②', '3': '③', '4': '④',
            '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
        };

        return patches[c] || c;
    }),

    Fullwidth: str => str.replace(/[A-Za-z0-9]/g, c => {
        return String.fromCodePoint(c.charCodeAt(0) + 0xFF00 - 0x20);
    }),

    superscript: str => str.replace(/[a-z0-9]/g, c => {
        const supers = {
            a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ',
            i: 'ⁱ', j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ',
            q: 'ᑫ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ',
            y: 'ʸ', z: 'ᶻ',
            '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
        };
        return supers[c] || c;
    }),

    InkSplatterStyle: str => str.replace(/./g, c => c + '\u0489'),

    InvertedStyle: str => [...str].reverse().join(''),

};

function renderOutput(text) {
    output.innerHTML = '';

    for (const style in fontStyles) {
        const converted = fontStyles[style](text);

        const block = document.createElement('div');
        block.className = 'output-block';

        const strong = document.createElement('strong');
        strong.textContent = style;

        const span = document.createElement('span');
        span.textContent = converted;

        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'Copy';

        button.addEventListener('click', () => {
            navigator.clipboard.writeText(converted);
            button.style.backgroundColor = 'rgba(60, 163, 53, 1)';
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

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});