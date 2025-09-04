const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});



// For star and decorative symbols
const starSymbols = "★ ☆ ✡ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⁂ ⁎ ⁑ ✢ ✣ ✤ ✥ ✱ ✲ ✳ ✴ ✵ ✶ ✷ ✸ ✹ ✺ ✻ ✼ ✽ ✾ ✿ ❀ ❁ ❂ ❃ ❇ ❈ ❉ ❊ ❋ ❄ ❆ ❅ ⋆ ≛ ᕯ ✲ ࿏ ꙰ ۞ ⭒ ⍟".split(" ");

const starHTML = starSymbols.map(sy =>
  `<div class="entity" data-clipboard-text="${sy}">${sy}
    <div class="tooltip">Copied!</div>
  </div>`).join("\n");

// Fill existing .entity-grid (or use a new class if needed)
document.querySelector(".entity-grid1").innerHTML = starHTML;

// For chess & card symbols
const chesssymbols = "♔ ♕ ♖ ♗ ♘ ♙ ♚ ♛ ♜ ♝ ♞ ♟ ♤ ♠ ♧ ♣ ♡ ♥ ♢ ♦".split(" ");
const card = chesssymbols.map(sym =>
  `<div class="entity" data-clipboard-text="${sym}">${sym}
    <div class="tooltip">Copied!</div>
  </div>`).join("\n");

// Fill existing .entity-grid
document.querySelector(".entity-grid2").innerHTML = card;

// For arrow symbols
const symbols = "↕ ↖ ↗ ↘ ↙ ↚ ↛ ↜ ↝ ↞ ↟ ↠ ↡ ↢ ↣ ↤ ↥ ↦ ↧ ↨ ↩ ↪ ↫ ↬ ↭ ↮ ↯ ↰ ↱ ↲ ↳ ↴ ↶ ↷ ↸ ↹ ↺ ↻ ↼ ↽ ↾ ↿ ⇀ ⇁ ⇂ ⇃ ⇄ ⇅ ⇆ ⇇ ⇈ ⇉ ⇊ ⇋ ⇌ ⇍ ⇎ ⇏ ⇕ ⇖ ⇗ ⇘ ⇙ ⇚ ⇛ ⇜ ⇝ ⇞ ⇟ ⇠ ⇡ ⇢ ⇣ ⇤ ⇥ ⇦ ⇧ ⇨ ⇩ ⇪ ⌅ ⌆ ⌤ ⏎ ▶ ☇ ☈ ☊ ☋ ☌ ☍ ➔ ➘ ➙ ➚ ➛ ➜ ➝ ➞ ➟ ➠ ➡ ➢ ➣ ➤ ➥ ➦ ➧ ➨ ➩ ➪ ➫ ➬ ➭ ➮ ➯ ➱ ➲ ➳ ➴ ➵ ➶ ➷ ➸ ➹ ➺ ➻ ➼ ➽ ➾ ⤴ ⤵ ↵ ↓ ↔ ← → ↑ ⌦ ⌫ ⌧ ⇰ ⇫ ⇬ ⇭ ⇳ ⇮ ⇯ ⇱ ⇲ ⇴ ⇵ ⇷ ⇸ ⇹ ⇺ ⇑ ⇓ ⇽ ⇾ ⇿ ⬳ ⟿ ⤉ ⤈ ⇻ ⇼ ⬴ ⤀ ⬵ ⤁ ⬹ ⤔ ⬺ ⤕ ⬶ ⤅ ⬻ ⤖ ⬷ ⤐ ⬼ ⤗ ⬽ ⤘ ⤝ ⤞ ⤟ ⤠ ⤡ ⤢ ⤣ ⤤ ⤥ ⤦ ⤪ ⤨ ⤧ ⤩ ⤭ ⤮ ⤯ ⤰ ⤱ ⤲ ⤬ ⬐ ⬎ ⬑ ⬏ ⤶ ⤷ ⥂ ⥃ ⥄ ⭀ ⥱ ⥶ ⥸ ⭂ ⭈ ⭊ ⥵ ⭁ ⭇ ⭉ ⥲ ⭋ ⭌ ⥳ ⥴ ⥆ ⥅ ⥹ ⥻ ⬰ ⥈ ⬾ ⥇ ⬲ ⟴ ⥷ ⭃ ⥺ ⭄ ⥉ ⥰ ⬿ ⤳ ⥊ ⥋ ⥌ ⥍ ⥎ ⥏ ⥐ ⥑ ⥒ ⥓ ⥔ ⥕ ⥖ ⥗ ⥘ ⥙ ⥚ ⥛ ⥜ ⥝ ⥞ ⥟ ⥠ ⥡ ⥢ ⥤ ⥣ ⥥ ⥦ ⥨ ⥧ ⥩ ⥮ ⥯ ⥪ ⥬ ⥫ ⥭ ⤌ ⤍ ⤎ ⤏ ⬸ ⤑ ⬱ ⟸ ⟹ ⟺ ⤂ ⤃ ⤄ ⤆ ⤇ ⤊ ⤋ ⭅ ⭆ ⟰ ⟱ ⇐ ⇒ ⇔ ⇶ ⟵ ⟶ ⟷ ⬄ ⬀ ⬁ ⬂ ⬃ ⬅ ⬆ ⬇ ⬈ ⬉ ⬊ ⬋ ⬌ ⬍ ⟻ ⟼ ⤒ ⤓ ⤙ ⤚ ⤛ ⤜ ⥼ ⥽ ⥾ ⥿ ⤼ ⤽ ⤾ ⤿ ⤸ ⤺ ⤹ ⤻ ⥀ ⥁ ⟲ ⟳".split(" ");
const htmlBlocks = symbols.map(sym =>
  `<div class="entity" data-clipboard-text="${sym}">${sym}
    <div class="tooltip">Copied!</div>
  </div>`).join("\n");

// Fill existing .entity-grid2
document.querySelector(".entity-grid3").innerHTML = htmlBlocks;

// For legal, communication, and miscellaneous symbols
const miscSymbols = "© ® ™ ℠ ℡ ℗ ‱ № ℀ ℁ ℅ ℆ ⅍ ☊ ☎ ☏ ⌨ ✁ ✂ ✃ ✄ ✆ ✇ ✈ ✉ ✎ ✏ ✐ ✑ ✒ ‰ § ¶ ✌️ ☝️ ☞ ☛ ☟ ☜ ☚ ✍️".split(" ");

const miscHTML = miscSymbols.map(sy =>
  `<div class="entity" data-clipboard-text="${sy}">${sy}
    <div class="tooltip">Copied!</div>
  </div>`).join("\n");

// Fill existing .entity-grid (or use another grid class if needed)
document.querySelector(".entity-grid4").innerHTML = miscHTML;

// 2. THEN attach event listeners
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