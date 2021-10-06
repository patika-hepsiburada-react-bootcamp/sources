function uyan(name, callback) {
  console.log(`${name} uyanıyor...`);

  setTimeout(() => {
    console.log(`${name} uyandı!`);

    callback(name);
  }, 1000);
}

function kahvaltiniYap(name) {
  console.log(`${name} kahvaltını yap.`);
}

uyan('Mehmet', kahvaltiniYap);
