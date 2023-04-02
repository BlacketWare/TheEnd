(async () => {
  if (location.pathname !== '/bazaar') return alert('You must be on the Bazaar to run this script.');

  let seller = prompt('Enter a name to filter...');

  blacket.requests.get(`https://blacket.org/worker/user/${seller}`, (data) => {
    if (data.error) return alert('That\'s not a Blacket player.');
    if (data.user.id === blacket.user.id) return alert('For your own Bazaar listings, just click the Listings button.');
    
    blacket.getBazaar(data.user.id);
  });
})();