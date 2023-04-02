let newblook = prompt('Blook name:');

blacket.blooks[newblook] = {
  art: prompt('Blook Background Image URL:'),
  image: prompt('Blook Image URL:'),
  price: prompt('Blook sell price:'),
  rarity: prompt('Blook Rarity:'),
  rgb: prompt(`Blook color:\n\nCommon: white\nUncommon: #4bc22e\nRare: #0a14fa\nEpic: #be0000\nLegedary: #ff910f\nChroma: #00ccff\nMystical: #a335ee`)
};

blacket.user.blooks[newblook] = prompt('Blook quantity (in your inventory):');

blacket.rarities[blacket.blooks[newblook].rarity] = {
  color: blacket.blooks[newblook].rgb
};

if (!$('.styles__setText___1PQLQ-camelCase')[21]) $(`.styles__blooksHolder___3qZR1-camelCase`).append(`<div class="styles__setHolder___rVq3Z-camelCase"><div class="styles__setTop___wIaVS-camelCase"><div class="styles__setTopBackground___342Wr-camelCase" style="background-image: url('/content/blookTile.png');"></div><div class="styles__setText___1PQLQ-camelCase">Miscellaneous</div><div class="styles__setDivider___3da0c-camelCase"></div></div><div id="blooks" class="styles__setBlooks___3xamH-camelCase"></div></div>`);
$('.styles__setBlooks___3xamH-camelCase')[21].append(`<div id="${newblook}" onclick="blacket.selectBlook('${newblook}');" class="styles__blookContainer___3JrKb-camelCase" style="cursor: pointer" role="button" tabindex="0"><div class="styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase "><img loading="lazy" src="${blacket.blooks[newblook].image}" draggable="false" class="styles__blook___1R6So-camelCase"></div><div class="styles__blookText___3AMdK-camelCase" style="background-color: ${blacket.blooks[newblook].rgb};">${blacket.user.blooks[newblook]}</div></div>`);