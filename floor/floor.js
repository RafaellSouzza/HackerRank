class Floor {
  constructor() {
    this.liste = [7,3,4,5,8,7,7,7,7];
  }
  init() {
    const listaCont = this.varrer(this.liste);
    this.floor(listaCont);
  }
  varrer(liste) {
    let objList = {};
    liste.forEach((element) => {
      if (!objList.hasOwnProperty(element)) {
        objList[element] = 1;
      } else {
        objList[element] = objList[element] + 1;
      }
    });
    return objList;
  }
  floor(listaCont) {
    for (const x in listaCont) {
      if (parseInt(x / 2) < listaCont[x]) {
        console.log(
          `Numero:${x},Vezes:${listaCont[x]},Floor:${parseInt(x / 2)}`
        );
      }
    }
  }
}
var floor = new Floor();
floor.init();
