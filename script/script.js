//code for auto type
var typed = new Typed('.auto-type', {
    strings: ["Fancy Font Generator", "QR Code Generator", "Cool Symbol Selector", "Text Decorator"],
    typeSpeed: 10,
    backSpeed: 9,
    backDelay: 1500,     // Wait 1 second before erasing
    startDelay: 100, // Start typing after 0.1 seconds
    loop: true
})

//dom access
const input = document.getElementById('userInput');
const output = document.getElementById('outputFonts');
const copyButton = document.querySelector('.copy-btn');
const siteText = encodeURIComponent("Check out this cool font converter!");
const siteURL = encodeURIComponent("https://textaura.org"); // ✅ Add this line

function shareTo(platform) {
    let shareURL = "";
    switch (platform) {
        case "whatsapp":
            shareURL = `https://wa.me/?text=${siteText}%20${siteURL}`;
            break;
        case "telegram":
            shareURL = `https://t.me/share/url?url=${siteURL}&text=${siteText}`;
            break;
        case "instagram":
            shareURL = `https://www.instagram.com`;
            alert("Instagram doesn't support direct link sharing. Paste the link in your bio or DM.");
            break;
    }
    window.open(shareURL, "_blank");
}

function copyLink() {
    navigator.clipboard.writeText("https://textaura.org");
    alert("Link copied to clipboard!");
}


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

    Script: str => str.replace(/[A-Za-z]/g, c => {
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

    Fraktur: str => str.replace(/[A-Za-z]/g, c => {
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
    Wired: str => str.split('').map(c => c + '\u0336').join(''),
    Bubble: str => str.split('').map(c => bubbleMap[c] || c).join(''),
    Square: str => str.split('').map(c => squareMap[c.toUpperCase()] || c).join(''),

    MonoSafe: str => str.replace(/[A-Za-z0-9]/g, c => {
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

    TinyFont: str => str.replace(/[a-zA-Z0-9]/g, c => {
        const tiny = {
            a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ',
            i: 'ᶦ', j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ',
            q: 'ᑫ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ',
            y: 'ʸ', z: 'ᶻ',
            A: 'ᴬ', B: 'ᴮ', C: 'ᶜ', D: 'ᴰ', E: 'ᴱ', F: 'ᶠ', G: 'ᴳ', H: 'ᴴ',
            I: 'ᴵ', J: 'ᴶ', K: 'ᴷ', L: 'ᴸ', M: 'ᴹ', N: 'ᴺ', O: 'ᴼ', P: 'ᴾ',
            Q: 'ᑫ', R: 'ᴿ', S: 'ˢ', T: 'ᵀ', U: 'ᵁ', V: 'ⱽ', W: 'ᵂ', X: 'ˣ',
            Y: 'ʸ', Z: 'ᶻ',
            '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
            '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
        };
        return tiny[c] || c;
    }),

    Symbol: str => str.replace(/[A-Za-z0-9]/g, c => {
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

    FancyFont: str => str.replace(/[A-Za-z0-9]/g, c => {
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

    Currency: str => str.replace(/[A-Za-z0-9]/g, c => {
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

    Fantasy: str => str.replace(/[A-Za-z0-9]/g, c => {
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

    zalgoText: str => {
        const zalgo = {
            up: ['\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310', '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343', '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350', '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d', '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369', '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f'],
            down: ['\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f', '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c', '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339', '\u033a', '\u033b', '\u033c', '\u0345', '\u0347', '\u0348', '\u0349', '\u034d', '\u034e', '\u0353', '\u0354', '\u0355', '\u0356', '\u0359', '\u035a', '\u0323'],
            mid: ['\u0315', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321', '\u0322', '\u0327', '\u0328', '\u0334', '\u0335', '\u0336', '\u034f', '\u035c', '\u035d', '\u035e', '\u035f', '\u0360', '\u0362', '\u0338', '\u0337', '\u0361', '\u0489']
        };

        const rand = arr => arr[Math.floor(Math.random() * arr.length)];
        const repeat = (arr, count) => Array.from({ length: count }, () => rand(arr)).join('');

        return str.split('').map(c => {
            if (c === ' ') return c;
            const up = repeat(zalgo.up, Math.floor(Math.random() * 3));
            const mid = repeat(zalgo.mid, Math.floor(Math.random() * 2));
            const down = repeat(zalgo.down, Math.floor(Math.random() * 3));
            return c + up + mid + down;
        }).join('');
    },

    Fullwidth: str => str.replace(/[A-Za-z0-9]/g, c => {
        return String.fromCodePoint(c.charCodeAt(0) + 0xFF00 - 0x20);
    }),

    Superscript: str => str.replace(/[a-z0-9]/g, c => {
        const supers = {
            a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ',
            i: 'ⁱ', j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ',
            q: 'ᑫ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ',
            y: 'ʸ', z: 'ᶻ',
            '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
        };
        return supers[c] || c;
    }),

    cursiveSymbols: str => {
        const cursive = {
            a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: '𝑒', f: '𝒻', g: '𝑔', h: '𝒽',
            i: '𝒾', j: '𝒿', k: '𝓀', l: '𝓁', m: '𝓂', n: '𝓃', o: '𝑜', p: '𝓅',
            q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉', u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍',
            y: '𝓎', z: '𝓏',
            A: '𝒜', B: '𝐵', C: '𝒞', D: '𝒟', E: '𝐸', F: '𝐹', G: '𝒢', H: '𝐻',
            I: '𝐼', J: '𝒥', K: '𝒦', L: '𝐿', M: '𝑀', N: '𝒩', O: '𝒪', P: '𝒫',
            Q: '𝒬', R: '𝑅', S: '𝒮', T: '𝒯', U: '𝒰', V: '𝒱', W: '𝒲', X: '𝒳',
            Y: '𝒴', Z: '𝒵',
            '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
            '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
        };

        const symbols = ['☯︎', '⚡︎', '✞', '★', '♛', '☠', '❖', '☾', '✧', '♨'];

        return str.split('').map(c => {
            const fancy = cursive[c] || c;
            const sprinkle = Math.random() < 0.3 ? symbols[Math.floor(Math.random() * symbols.length)] : '';
            return fancy + sprinkle;
        }).join('');
    },

    InkSplatter: str => str.replace(/./g, c => c + '\u0489'),

    Inverted: str => [...str].reverse().join(''),

    FireFont: str => str.split('').map(c => '🔥' + c).join(''),

    cuteFont: str => {
        const emojis = ['💖', '🌸', '🐾', '🍭', '✨', '🧸'];
        return str.split('').map(c => c + emojis[Math.floor(Math.random() * emojis.length)]).join('');
    },

    sparkleFont: str => str.split('').map(c => c + '✨').join(''),

    darkFont: str => {
        const symbols = ['☠️', '🕷️', '🩸', '🪦', '⚰️', '🧛'];
        return str.split('').map(c => symbols[Math.floor(Math.random() * symbols.length)] + c).join('');
    },

    slashyFont: str => str.split('').map(c => `/${c}/`).join(''),

    upsideDown: str => {
        const flipMap = {
            a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ',
            h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'ʃ', m: 'ɯ', n: 'u',
            o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n',
            v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z',
            A: '∀', B: '𐐒', C: 'Ɔ', D: '◖', E: 'Ǝ', F: 'Ⅎ', G: '⅁',
            H: 'H', I: 'I', J: 'ſ', K: '⋊', L: '⅂', M: 'W', N: 'N',
            O: 'O', P: 'Ԁ', Q: 'Ό', R: 'ᴚ', S: 'S', T: '⊥', U: '∩',
            V: 'Λ', W: 'M', X: 'X', Y: '⅄', Z: 'Z'
        };
        return str.split('').map(c => flipMap[c] || c).reverse().join('');
    },

    happyFont: str => {
        const marks = ['\u0306', '\u0308']; // ̆ (breve), ̈ (diaeresis)
        return str.split('').map(c => c + marks.join('')).join('');
    },

    sadFont: str => {
        const marks = ['\u0311', '\u0308']; // ̑̈ (inverted breve + diaeresis)
        return str.split('').map(c => c + marks.join('')).join('');
    },

    royalSparkle: str => `.•°¤*(¯\`★´¯)*¤°   🎀  ${str}  🎀   °¤*)¯´★\`¯(*¤°•.`,

    sweetFrost: str => `🍧  🎀  ${str}  🎀  🍧`,

    peacefulSafari: str => `🐘 ⋆ 🕊  🎀  ${str}  🎀  🕊 ⋆ 🐘`,

    cookieCrumble: str => `🍫 ⋆ 🍪  🎀  ${str}  🎀  🍪 ⋆ 🍫`,

    minimalGlow: str => `✳  🎀  ${str}  🎀  ✳`,

    retroBeast: str => `♛😺  ${str}  🐊♗`,

    mysticCrown: str => `♚ඏ  ${str}  ☆♧`,

    oceanBreeze: str => `🎀⛵  ${str}  🐧🎉`,

    warriorCode: str => `✊☆  ${str}  ♗♖`,

    winterChampion: str => `🐼🏆  ${str}  🐲🎄`,

    glitchwave: str => `▀▄▀▄▀▄ ${str} ▄▀▄▀▄▀`,

    jungleByte: str => `🐠🐍  ${str}  ♔👮`,

    chillRebel: str => `♩😾  ${str}  ✌🍮`,

    dreamcore: str => `°°°·.°·..·°¯°·._.· ${str} ·._.·°¯°·.·° .·°°°`,

    darkPulse: str => `😾☟  ${str}  ♞😈`,

    technoSpice: str => `🧬⌁⌁ ${str} ⌁⌁🧬`,

    ghostCircuit: str => `👻⚙️⛓️ ${str} ⛓️⚙️👻`,

    animeRush: str => `🌆💨『 ${str} 』💨🌆`,

    pixelWhirl: str => `🌀▣▣ ${str} ▣▣🌀`,

    lavaTwist: str => `🌋🔥⤴️ ${str} ⤵️🔥🌋`,

    zenGarden: str => `🍃🧘‍♂️ ~ ${str} ~ 🧘‍♀️🍃`,

    cyberKnight: str => `🛡️⚔️ ${str} ⚔️🛡️`,

    bubblePop: str => `🫧🎈 ${str} 🎈🫧`,

    twilightEcho: str => `🌒🔮 ${str} 🔮🌘`,

    rainbowPixel: str => `🌈🧁 ${str} 🧁🌈`,

    vaporSoul: str => `🌫️💿 ${str} 💿🌫️`,

    crystalNova: str => `💎✨ ${str} ✨💎`,

    stormRider: str => `🌪️⚡ ${str} ⚡🌪️`,

    arcadeDream: str => `🕹️👾 ${str} 👾🕹️`,
}


//code for print output
function renderOutput(text) {
    output.innerHTML = '';

    for (const style in fontStyles) {
        const converted = fontStyles[style](text);

        // Create main block
        const block = document.createElement('div');
        block.className = 'output-block';

        // Create span and append first
        const span = document.createElement('span');
        span.textContent = converted;
        block.appendChild(span);

        // Create info-block
        const info = document.createElement('div');
        info.className = 'info-block';

        // Create strong
        const strong = document.createElement('strong');
        strong.textContent = style;

        // Create copy button
        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'Copy';

        // Copy button logic
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

        // Append strong and button to info-block
        info.appendChild(strong);
        info.appendChild(button);

        // Append info-block to main block
        block.appendChild(info);

        // Finally, append block to output
        output.appendChild(block);
    }
}

// Input listener
input.addEventListener('input', () => {
    renderOutput(input.value);
});

// Initial render
renderOutput(input.value);

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.header-body');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = "&#10005"; // Cross icon
        hamburger.style.color = "red";
        navLinks.style.right = "0%";
    } else {
        hamburger.innerHTML = "&#9776"; // Hamburger icon
        hamburger.style.color = "rgb(32, 248, 4)";
        navLinks.style.right = "-100%";
    }
});

document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.innerHTML = "&#9776";
        hamburger.style.color = "rgb(32, 248, 4)";
        navLinks.style.right = "-100%";
    }
});

const shareButtons = document.querySelector('.share-main');
const sharecircle = document.querySelector('.share-circle');

shareButtons.addEventListener('click', function (e) {
    e.stopPropagation(); // Event bubbling rokne ke liye
    sharecircle.classList.toggle('active'); // Toggle karenge active class
});

document.addEventListener('click', (e) => {
    // Agar click share-wrapper ke bahar hua to close karo
    if (!e.target.closest('.share-wrapper')) {
        sharecircle.classList.remove('active');
    }
});

// Share function with Web Share API
async function shareTo(platform) {
    const url = window.location.href;
    const title = 'Textaura.org';
    const text = 'Check out Textaura.org! 🌟';
    
    // Mobile native share API check (works on WhatsApp, Telegram, Instagram etc)
    if (navigator.share) {
        try {
            await navigator.share({
                title: title,
                text: text,
                url: url
            });
            sharecircle.classList.remove('active');
            return;
        } catch (err) {
            // Agar user cancel kare ya error aaye to fallback
            console.log('Share cancelled or failed');
        }
    }
    
    // Fallback for desktop or specific platform
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    let link = '';
    
    if (platform === 'whatsapp') {
        link = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
    } else if (platform === 'telegram') {
        link = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
    } else if (platform === 'instagram') {
        copyLink();
        alert('📋 Link copied! Paste in Instagram');
        return;
    }
    
    window.open(link, '_blank');
    sharecircle.classList.remove('active');
}

// Copy link function
function copyLink() {
    const url = window.location.href;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            alert('✓ Textaura.org link copied!');
        }).catch(() => {
            // Fallback prompt
            prompt('Copy this link:', url);
        });
    } else {
        // Old browser fallback
        prompt('Copy this link:', url);
    }
    
    sharecircle.classList.remove('active');
}