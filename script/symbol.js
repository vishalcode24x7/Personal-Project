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
    hamburger.style.color = "#f88a04ff";
    navLinks.style.right = "-100%";
  }
});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
    hamburger.innerHTML = "&#9776"; // Hamburger icon
    hamburger.style.color = "rgb(248, 138, 4)"
    navLinks.style.right = "-100%";
  }
});


// For star and decorative symbols
const starSymbols = "★ ☆ ✡ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⁂ ⁎ ⁑ ✢ ✣ ✤ ✥ ✱ ✲ ✳ ✴ ✵ ✶ ✷ ✸ ✹ ✺ ✻ ✼ ✽ ✾ ✿ ❀ ❁ ❂ ❃ ❇ ❈ ❉ ❊ ❋ ❄ ❆ ❅ ⋆ ≛ ᕯ ✲ ࿏ ꙰ ۞ ⭒ ⍟".split(" ");
const starHTML = starSymbols.map(sy =>
  `<div class="entity" data-clipboard-text="${sy}">${sy}
    <div class="tooltip">Copied!</div>
  </div>`).join("\n");
document.querySelector(".entity-grid1").innerHTML = starHTML;


// For chess & card symbols
const chesssymbols = "♔ ♕ ♖ ♗ ♘ ♙ ♚ ♛ ♜ ♝ ♞ ♟ ♤ ♠ ♧ ♣ ♡ ♥ ♢ ♦ ♩ ♪ ♫ ♬ ♭ ♮ ♯ ° ø ؂ ≠ ≭".split(" ");
const card = chesssymbols.map(sym =>
  `<div class="entity" data-clipboard-text="${sym}">${sym}
    <div class="tooltip">Copied!</div>
  </div>`).join("\n");
document.querySelector(".entity-grid2").innerHTML = card;


// For arrow symbols
const symbols = "↕ ↖ ↗ ↘ ↙ ↚ ↛ ↜ ↝ ↞ ↟ ↠ ↡ ↢ ↣ ↤ ↥ ↦ ↧ ↨ ↩ ↪ ↫ ↬ ↭ ↮ ↯ ↰ ↱ ↲ ↳ ↴ ↶ ↷ ↸ ↹ ↺ ↻ ↼ ↽ ↾ ↿ ⇀ ⇁ ⇂ ⇃ ⇄ ⇅ ⇆ ⇇ ⇈ ⇉ ⇊ ⇋ ⇌ ⇍ ⇎ ⇏ ⇕ ⇖ ⇗ ⇘ ⇙ ⇚ ⇛ ⇜ ⇝ ⇞ ⇟ ⇠ ⇡ ⇢ ⇣ ⇤ ⇥ ⇦ ⇧ ⇨ ⇩ ⇪ ⌅ ⌆ ⌤ ⏎ ▶ ☇ ☈ ☊ ☋ ☌ ☍ ➔ ➘ ➙ ➚ ➛ ➜ ➝ ➞ ➟ ➠ ➡ ➢ ➣ ➤ ➥ ➦ ➧ ➨ ➩ ➪ ➫ ➬ ➭ ➮ ➯ ➱ ➲ ➳ ➴ ➵ ➶ ➷ ➸ ➹ ➺ ➻ ➼ ➽ ➾ ⤴ ⤵ ↵ ↓ ↔ ← → ↑ ⌦ ⌫ ⌧ ⇰ ⇫ ⇬ ⇭ ⇳ ⇮ ⇯ ⇱ ⇲ ⇴ ⇵ ⇷ ⇸ ⇹ ⇺ ⇑ ⇓ ⇽ ⇾ ⇿ ⬳ ⟿ ⤉ ⤈ ⇻ ⇼ ⬴ ⤀ ⬵ ⤁ ⬹ ⤔ ⬺ ⤕ ⬶ ⤅ ⬻ ⤖ ⬷ ⤐ ⬼ ⤗ ⬽ ⤘ ⤝ ⤞ ⤟ ⤠ ⤡ ⤢ ⤣ ⤤ ⤥ ⤦ ⤪ ⤨ ⤧ ⤩ ⤭ ⤮ ⤯ ⤰ ⤱ ⤲ ⤬ ⬐ ⬎ ⬑ ⬏ ⤶ ⤷ ⥂ ⥃ ⥄ ⭀ ⥱ ⥶ ⥸ ⭂ ⭈ ⭊ ⥵ ⭁ ⭇ ⭉ ⥲ ⭋ ⭌ ⥳ ⥴ ⥆ ⥅ ⥹ ⥻ ⬰ ⥈ ⬾ ⥇ ⬲ ⟴ ⥷ ⭃ ⥺ ⭄ ⥉ ⥰ ⬿ ⤳ ⥊ ⥋ ⥌ ⥍ ⥎ ⥏ ⥐ ⥑ ⥒ ⥓ ⥔ ⥕ ⥖ ⥗ ⥘ ⥙ ⥚ ⥛ ⥜ ⥝ ⥞ ⥟ ⥠ ⥡ ⥢ ⥤ ⥣ ⥥ ⥦ ⥨ ⥧ ⥩ ⥮ ⥯ ⥪ ⥬ ⥫ ⥭ ⤌ ⤍ ⤎ ⤏ ⬸ ⤑ ⬱ ⟸ ⟹ ⟺ ⤂ ⤃ ⤄ ⤆ ⤇ ⤊ ⤋ ⭅ ⭆ ⟰ ⟱ ⇐ ⇒ ⇔ ⇶ ⟵ ⟶ ⟷ ⬄ ⬀ ⬁ ⬂ ⬃ ⬅ ⬆ ⬇ ⬈ ⬉ ⬊ ⬋ ⬌ ⬍ ⟻ ⟼ ⤒ ⤓ ⤙ ⤚ ⤛ ⤜ ⥼ ⥽ ⥾ ⥿ ⤼ ⤽ ⤾ ⤿ ⤸ ⤺ ⤹ ⤻ ⥀ ⥁ ⟲ ⟳".split(" ");
const htmlBlocks = symbols.map(sym =>
  `<div class="entity" data-clipboard-text="${sym}">${sym}
    <div class="tooltip">Copied!</div>
  </div>`).join("\n");
document.querySelector(".entity-grid3").innerHTML = htmlBlocks;


// For legal, communication, and miscellaneous symbols
const miscSymbols = "© ® ™ ℠ ℡ ℗ ‱ № ℀ ℁ ℅ ℆ ⅍ ☊ ☎ ☏ ⌨ ✁ ✂ ✃ ✄ ✆ ✇ ✈ ✉ ✎ ✏ ✐ ✑ ✒ ‰ § ¶ ✌️ ☝️ ☞ ☛ ☟ ☜ ☚ ✍️".split(" ");
const miscHTML = miscSymbols.map(sy =>
  `<div class="entity" data-clipboard-text="${sy}">${sy}
    <div class="tooltip">Copied!</div>
  </div>`).join("\n");
document.querySelector(".entity-grid4").innerHTML = miscHTML;


// For currency symbols   
const currencySymbols = "¢ $ € £ ¥ ₮ ৲ ৳ ௹ ฿ ៛ ₠ ₡ ₢ ₣ ₤ ₥ ₦ ₧ ₨ ₩ ₪ ₫ ₭ ₯ ₰ ₱ ₲ ₳ ₴ ₵ ￥ ﷼ ¤ ƒ".split(" ");
const currencyHTML = currencySymbols.map(sy =>
  `<div class="entity" data-clipboard-text="${sy}">${sy}
    <div class="tooltip">Copied!</div>
  </div>`).join("\n");
document.querySelector(".entity-grid5").innerHTML = currencyHTML;


// For weather, science, and measurement symbols
const units = "° ℃ ℉ ϟ ☀ ☁ ☂ ☃ ☉ ☼ ☽ ☾ ♁ ♨ ❄ ❅ ❆ ☇ ☈ ☄ ㎎ ㎏ ㎜ ㎝ ㎞ ㎡ ㏄ ㏎ ㏑ ㏒ ㏕".split(" ");
const unitsHTML = units.map(sy =>
  `<div class="entity" data-clipboard-text="${sy}">${sy}
    <div class="tooltip">Copied!</div>
  </div>`).join("\n");
document.querySelector(".entity-grid6").innerHTML = unitsHTML;


// For numeral symbols
const numeralSymbols = "Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅻ Ⅼ Ⅽ Ⅾ Ⅿ ⅰ ⅱ ⅲ ⅳ ⅴ ⅵ ⅶ ⅷ ⅸ ⅹ ⅺ ⅻ ⅼ ⅽ ⅾ ⅿ ↀ ↁ ↂ ➀ ➁ ➂ ➃ ➄ ➅ ➆ ➇ ➈ ➉ ➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ➓ ⓵ ⓶ ⓷ ⓸ ⓹ ⓺ ⓻ ⓼ ⓽ ⓾ ⓿ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿ ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ⓪ ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱ ⑲ ⑳ ⑴ ⑵ ⑶ ⑷ ⑸ ⑹ ⑺ ⑻ ⑼ ⑽ ⑾ ⑿ ⒀ ⒁ ⒂ ⒃ ⒄ ⒅ ⒆ ⒇ ⒈ ⒉ ⒊ ⒋ ⒌ ⒍ ⒎ ⒏ ⒐ ⒑ ⒒ ⒓ ⒔ ⒕ ⒖ ⒗ ⒘ ⒙ ⒚ ⒛ ㈠ ㈡ ㈢ ㈣ ㈤ ㈥ ㈦ ㈧ ㈨ ㈩ ㊀ ㊁ ㊂ ㊃ ㊄ ㊅ ㊆ ㊇ ㊈ ㊉ ０ １ ２ ３ ４ ５ ６ ７ ８ ９ ⁱ ₐ ₑ ₒ ₓ ₔ".split(" ");
const num = numeralSymbols.map(sym =>
  `<div class="entity" data-clipboard-text="${sym}">${sym}
    <div class="tooltip">Copied!</div>
  </div>`
).join("\n");
document.querySelector(".entity-grid7").innerHTML = num;


// For square symbols
const SquareSymbols = "❏ ❐ ❑ ❒ ▀ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▉ ▊ ▋ █ ▌ ▐ ▍ ▎ ▏ ▕ ░ ▒ ▓ ▔ ▬ ▢ ▣ ▤ ▥ ▦ ▧ ▨ ▩ ▪ ▫ ▭ ▮ ▯ ☰ ☲ ☱ ☴ ☵ ☶ ☳ ☷ ▰ ▱ ◧ ◨ ◩ ◪ ◫ ∎ ■ □ ⊞ ⊟ ⊠ ⊡ ❘ ❙ ❚ 〓 ◊ ◈ ◇ ◆ ⎔ ⎚ ☖ ☗".split(" ");
const Square = SquareSymbols.map(sym =>
  `<div class="entity" data-clipboard-text="${sym}">${sym}
    <div class="tooltip">Copied!</div>
  </div>`
).join("\n");
document.querySelector(".entity-grid8").innerHTML = Square;


// For circle symbols
const circleSymbols = "◉ ○ ◌ ◍ ◎ ● ◐ ◑ ◒ ◓ ◔ ◕ ◖ ◗ ❂ ☢ ⊗ ⊙ ◘ ◙ ◚ ◛ ◜ ◝ ◞ ◟ ◠ ◡ ◯ 〇 〶 ⚫ ⬤ ◦ ∅ ∘ ⊕ ⊖ ⊘ ⊚ ⊛ ⊜ ⊝ ❍ ⦿".split(" ");
const circle = circleSymbols.map(sym =>
  `<div class="entity" data-clipboard-text="${sym}">${sym}
    <div class="tooltip">Copied!</div>
  </div>`
).join("\n");
document.querySelector(".entity-grid9").innerHTML = circle;


// For triangle symbols
const triangleSymbols = "◄ ▲ ▼ ► ◀ ◣ ◥ ◤ ◢ ▶ ◂ ▴ ▾ ▸ ◁ △ ▽ ▷ ∆ ∇ ⊳ ⊲ ⊴ ⊵ ◅ ▻ ▵ ▿ ◃ ▹ ◭ ◮ ⫷ ⫸ ⋖ ⋗ ⋪ ⋫ ⋬ ⋭ ⊿ ◬ ≜ ⑅".split(" ");
const triangle = triangleSymbols.map(sym =>
  `<div class="entity" data-clipboard-text="${sym}">${sym}
    <div class="tooltip">Copied!</div>
  </div>`
).join("\n");
document.querySelector(".entity-grid10").innerHTML = triangle;


// 2. attach event listeners for copy functionality
const entities = document.querySelectorAll('.entity');
entities.forEach(entity => {
  entity.addEventListener('click', () => {
    const code = entity.getAttribute('data-clipboard-text');
    console.log("Copied:", code); // Debug
    navigator.clipboard.writeText(code);
    entity.classList.add('copied');
    entity.style.backgroundColor = 'rgba(235, 154, 13, 1)';
    setTimeout(() => {
      entity.classList.remove('copied');
      entity.style.backgroundColor = '';
    }, 1200);
  });
});