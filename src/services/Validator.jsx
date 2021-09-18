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
  //vahtii tyyppien määriä verraten sovittuihin tag-määriin / kysymys
  if (item.type === 1) {
    let count = 0; 
    lista.forEach((element) => {
      if (element.type === 1) {
        count++; 
      }
    })
    if (count > 0) {
      pal = false; 
    }
  }

  if (item.type === 2) {
    let count = 0; 
    lista.forEach((element) => {
      if (element.type === 2) {
        count++; 
      }
    })
    if (count >= 2) {
      pal = false; 
    }

  }
  if (item.type === 3) {
    var count = 0; 
    lista.forEach((element) => {
      if (element.type === 3) {
        count++; 
      }
    })
    if (count >= 1) {
      pal = false; 
    }

  }
  if (item.type === 4) {
    let count = 0; 
    lista.forEach((element) => {
      if (element.type === 4) {
        count++; 
      }
    })
    if (count >= 2) {
      pal = false; 
    }
  }
  //pätevyyksien määrää ei vahdita, vain duplikaatteja. 
  return pal;
}
