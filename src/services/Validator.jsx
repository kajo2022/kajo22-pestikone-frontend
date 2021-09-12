export function validator(lista, item) {
  var pal = true;
  //jos tyhja, palauta true (eli lisää)
  if (lista.length === 0) {
    pal = true;
  }
  //jos elementtejä, palauta true jos ei duplikaatti
  lista.forEach((element) => {
    if (element.id === item.id) {
      pal = false;
    }
  });

  //vahdi tyyppimääriä type = 1
  //KESKEN

  





  return pal;
}
