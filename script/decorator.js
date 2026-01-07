const input = document.getElementById('inputText');
const output = document.getElementById('outputContainer');

function toBoldUnicode(text) {
    const normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const bold = [
        "𝐀", "𝐁", "𝐂", "𝐃", "𝐄", "𝐅", "𝐆", "𝐇", "𝐈", "𝐉", "𝐊", "𝐋", "𝐌", "𝐍", "𝐎", "𝐏", "𝐐", "𝐑", "𝐒", "𝐓", "𝐔", "𝐕", "𝐖", "𝐗", "𝐘", "𝐙",
        "𝐚", "𝐛", "𝐜", "𝐝", "𝐞", "𝐟", "𝐠", "𝐡", "𝐢", "𝐣", "𝐤", "𝐥", "𝐦", "𝐧", "𝐨", "𝐩", "𝐪", "𝐫", "𝐬", "𝐭", "𝐮", "𝐯", "𝐰", "𝐱", "𝐲", "𝐳",
        "𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"
    ];


    return text.split('').map(char => {
        const index = normal.indexOf(char);
        return index !== -1 ? bold[index] : char;
    }).join('');
}

// toBoldUnicode(txt)
const styles = [
    { wrap: txt => toBoldUnicode(`ʕ·ᴥ·ʔ ${txt} ʕ·ᴥ·ʔ`) },
    { wrap: txt => toBoldUnicode(`•┈••✦❤ ${txt} ❤✦••┈•`) },
    { wrap: txt => toBoldUnicode(`༒☬ ${txt} ☬༒`) },
    { wrap: txt => toBoldUnicode(`*•.¸♡ ${txt} ♡¸.•*`) },
    { wrap: txt => toBoldUnicode(`★彡 ${txt} 彡★`) },
    { wrap: txt => toBoldUnicode(`»»——⍟${txt}⍟——««`) },
    { wrap: txt => toBoldUnicode(`♡ ${txt} ♡`) },
    { wrap: txt => toBoldUnicode(`➵ ${txt} ➵`) },
    { wrap: txt => toBoldUnicode(`𓆩 ${txt} 𓆪`) },
    { wrap: txt => toBoldUnicode(`▬▬ι══${txt}═════ﺣ`) },
    { wrap: txt => toBoldUnicode(`▄︻デ${txt}═══━一 ҉~•`) },
    { wrap: txt => toBoldUnicode(`(ಠ益ಠ)${txt}(ಠ益ಠ)`) },
    { wrap: txt => toBoldUnicode(`𝕂𝕚𝕟𝕘(♛| ${txt} |♛)𝕂𝕚𝕟𝕘`) },
    { wrap: txt => toBoldUnicode(`.·͙*̩̩͙˚̩̥̩̥*̩̩̥͙${txt}*̩̩̥͙˚̩̥̩̥*̩̩͙‧͙ .`) },
    { wrap: txt => toBoldUnicode(`»»————${txt}————⌲`) },
    { wrap: txt => toBoldUnicode(`(◕ᴥ◕) ${txt} (◕ᴥ◕)`) },
    { wrap: txt => toBoldUnicode(`( -_•)╦̵̵̿╤─ ${txt} 💥`) },
    { wrap: txt => toBoldUnicode(`══✿══╡°˖✧${txt}✧˖°╞══✿══`) },
    { wrap: txt => toBoldUnicode(`▄︻デ═${txt}═━一💨`) },
    { wrap: txt => toBoldUnicode(`✺✳ ┅${txt}┅ ✳✺`) },
    { wrap: txt => toBoldUnicode(`───※${txt}※───`) },
    { wrap: txt => toBoldUnicode(`꧁༺ ${txt} ༻꧂`) },
    { wrap: txt => toBoldUnicode(`( ͡° ͜ʖ ͡°) ${txt} ( ͡° ͜ʖ ͡°)`) },
    { wrap: txt => toBoldUnicode(`︶︵︶ ${txt} ︶︵︶`) },
    { wrap: txt => toBoldUnicode(`(●︿●) ${txt} (●︿●)`) },
    { wrap: txt => toBoldUnicode(`❤꧁ღ⊱♥ ${txt} ♥⊱ღ꧂❤`) },
    { wrap: txt => toBoldUnicode(`( ✿˃̣̣̥᷄⌓˂̣̣̥᷅ )${txt}( ✿˃̣̣̥᷄⌓˂̣̣̥᷅ )`) },
    { wrap: txt => toBoldUnicode(`┣▇▇ ${txt} ▇▇═─ 💦`) },
    { wrap: txt => toBoldUnicode(`╚══ ≪ °❈|${txt}|❈° ≫ ══╝`) },
    { wrap: txt => toBoldUnicode(`( ͡° ᴥ ͡°) ${txt} ( ͡° ᴥ ͡°)`) },
    { wrap: txt => toBoldUnicode(`┈ ⋞ 〈${txt}〉 ⋟ ┈`) },
    { wrap: txt => toBoldUnicode(`ʕ⊙ᴥ⊙ʔ${txt}ʕ⊙ᴥ⊙ʔ`) },
    { wrap: txt => toBoldUnicode(`❣→→❣ ${txt} ❣←←❣`) },
    { wrap: txt => toBoldUnicode(`✧⋄⋆⋅⋆⋄${txt}⋄⋆⋅⋆⋄✧`) },
    { wrap: txt => toBoldUnicode(`┏━✦❘༻ ${txt} ༺❘✦━┓`) },
    { wrap: txt => toBoldUnicode(`꧁𓊈𒆜${txt}𒆜𓊉꧂`) },
    { wrap: txt => toBoldUnicode(`(oꆤ︵ꆤo) ${txt} (oꆤ︵ꆤo)`) },
    { wrap: txt => toBoldUnicode(`❚█══ ${txt} ══█❚`) },
    { wrap: txt => toBoldUnicode(`෴${txt}෴`) },
    { wrap: txt => toBoldUnicode(`♛${txt}♛`) },
    { wrap: txt => toBoldUnicode(`♠${txt}♠`) },
    { wrap: txt => toBoldUnicode(`☢${txt}☢`) },
    { wrap: txt => toBoldUnicode(`⫷${txt}⫸`) },
    { wrap: txt => toBoldUnicode(`✴${txt}✴`) },
    { wrap: txt => toBoldUnicode(`♞${txt}♞`) },
    { wrap: txt => toBoldUnicode(`◦•●◉✿ ${txt} ✿◉●•◦`) },
    { wrap: txt => toBoldUnicode(`↤↤↤↤↤ ${txt} ↦↦↦↦↦`) },
    { wrap: txt => toBoldUnicode(`↫↫↫↫↫ ${txt} ↬↬↬↬↬`) },
    { wrap: txt => toBoldUnicode(`░▒▓█►─═ ${txt} ═─◄█▓▒░`) },
    { wrap: txt => toBoldUnicode(`▁ ▂ ▄ ▅ ▆ ▇ █ ${txt} █ ▇ ▆ ▅ ▄ ▂ ▁`) },
    { wrap: txt => toBoldUnicode(`ღ(¯◕‿◕¯) ${txt} ღ(¯◕‿◕¯)`) },
    { wrap: txt => toBoldUnicode(`ஜ۩۞۩ஜ ${txt} ஜ۩۞۩ஜ`) },
    { wrap: txt => toBoldUnicode(`(¯·..·¯·..-> ${txt} <-..·¯·..·¯)`) },
    { wrap: txt => toBoldUnicode(`—(••÷[ ${txt} ]÷••)—`) },
    { wrap: txt => toBoldUnicode(`➶➶➶➶ ${txt} ➶➶➶➶`) },
    { wrap: txt => toBoldUnicode(`(-_-) ${txt} (-_-)`) },
    { wrap: txt => toBoldUnicode(`♛ ${txt} ♛`) },
    { wrap: txt => toBoldUnicode(`✿ ${txt} ✿`) },
    { wrap: txt => toBoldUnicode(`╰☆☆ ${txt} ☆☆╮`) },
    { wrap: txt => toBoldUnicode(`★·.· ${txt} ·.·★`) },
    { wrap: txt => toBoldUnicode(`♦ ${txt} ♦`) },
    { wrap: txt => toBoldUnicode(`▌│█║▌║▌║ ${txt} ▌│█║▌║▌║`) },
    { wrap: txt => toBoldUnicode(`▀▄▀▄▀▄ ${txt} ▀▄▀▄▀▄`) },
    { wrap: txt => toBoldUnicode(`.•♫•♬• ${txt} •♬•♫•.`) },
    { wrap: txt => toBoldUnicode(`•?((¯°·._.• ${txt} •._.·°¯))؟•`) },
    { wrap: txt => toBoldUnicode(`]|I{•------» ${txt} «------•}I|[`) },
    { wrap: txt => toBoldUnicode(`🌙 ${txt} 🌙`) },
    { wrap: txt => toBoldUnicode(`☁ ${txt} ☁`) },
    { wrap: txt => toBoldUnicode(`♩♪♫ ${txt} ♫♩♪`) },
    { wrap: txt => toBoldUnicode(`༄ ${txt} ༄`) },
    { wrap: txt => toBoldUnicode(`૮₍ ´• ˕ • ₎ა ${txt} ૮₍ ´• ˕ • ₎ა`) },
    { wrap: txt => toBoldUnicode(`(≧◡≦) ${txt} (≧◡≦)`) },
    { wrap: txt => toBoldUnicode(`✩ ${txt} ✩`) },
    { wrap: txt => toBoldUnicode(`[ ${txt} ]`) },
    { wrap: txt => toBoldUnicode(`.•°¤*(¯\`★´¯)*¤°   🎀  ${txt}  🎀   °¤*)¯´★\`¯(*¤°•.`) }
];

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