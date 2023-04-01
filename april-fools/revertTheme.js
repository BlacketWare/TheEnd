(async () => {
  let allcss = await (await fetch('https://raw.githubusercontent.com/BlacketWare/v2/master/april-fools/assets/all.css')).text(),
    gamecss = await (await fetch('https://raw.githubusercontent.com/BlacketWare/v2/master/april-fools/assets/game.css')).text();
  
  $('head').append(`<style>${allcss}</style><style>${gamecss}</style>`)
})();