class PackSticker {

  constructor(stickers = { 
    react: false, 
    vue: false, 
    vue: false 
    }, 
    quantity = 0, observation = "") {
    this.stickers = stickers;
    this.quantity = quantity;
    this.observation = observation;
  }

  get getStickers() {
    return this.stickers;
  }
  get getQty() {
    return this.quantity.toString();
  }
  get getObs() {
    return this.observation;
  }

  set setStickers(stickers) {
    this.stickers = stickers;
  }
  set setQty(quantity) {
    this.quantity = quantity;
  }
  set setObs(observation) {
    this.observation = observation;
  }
}