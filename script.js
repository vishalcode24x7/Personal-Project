var typed = new Typed('.auto-type', {

    strings: ["Converter", "Generator", "Designer", "Maker", "Creator", "Artist", "Innovator", "Builder", "Engineer"],
    typeSpeed: 20,
    backSpeed: 50,
    backDelay: 1500,     // Wait 1 second before erasing
    startDelay: 100, // Start typing after 0.5 seconds
    loop: true
})

//dom access
const inputText = document.getElementById('userInput');
const outputFonts = document.getElementById('outputFonts');


//Styling output fonts
const bubbleMap = {
  a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ',
  h: 'ⓗ', i: 'ⓘ', j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ',
  o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ', u: 'ⓤ',
  v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ',
  A: 'Ⓐ', B: 'Ⓑ', C: 'Ⓒ', D: 'Ⓓ', E: 'Ⓔ', F: 'Ⓕ', G: 'Ⓖ',
  H: 'Ⓗ', I: 'Ⓘ', J: 'Ⓙ', K: 'Ⓚ', L: 'Ⓛ', M: 'Ⓜ', N: 'Ⓝ',
  O: 'Ⓞ', P: 'Ⓟ', Q: 'Ⓠ', R: 'Ⓡ', S: 'Ⓢ', T: 'Ⓣ', U: 'Ⓤ',
  V: 'Ⓥ', W: 'Ⓦ', X: 'Ⓧ', Y: 'Ⓨ', Z: 'Ⓩ'
};

const squareMap = {
  A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴', F: '🄵',
  G: '🄶', H: '🄷', I: '🄸', J: '🄹', K: '🄺', L: '🄻',
  M: '🄼', N: '🄽', O: '🄾', P: '🄿', Q: '🅀', R: '🅁',
  S: '🅂', T: '🅃', U: '🅄', V: '🅅', W: '🅆', X: '🅇',
  Y: '🅈', Z: '🅉'
};

// Font style functions
const fontStyles = {
  bold: str => str.replace(/[A-Z]/g, c => String.fromCharCode(c.charCodeAt(0) + 119743 - 65)),
  bubble: str => str.split('').map(c => bubbleMap[c] || c).join(''),
  square: str => str.split('').map(c => squareMap[c.toUpperCase()] || c).join('')
};

