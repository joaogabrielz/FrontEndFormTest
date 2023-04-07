class PackStickerView {

  constructor(PackSticker, valid = false) {
    this.PackSticker = PackSticker;
    this.valid = valid;

    if(this.PackSticker) {
      this.stickersObj = PackSticker.getStickers;
    }
  }

  template() {
    return `
    <header class="header mb-16">
      <h1 class="title">
        <span class="block">Formulário</span> para compra de <span class="bold block">Pacote de Stickers</span>
      </h1>
    </header>

    <form id="form">

    <fieldset class="fieldset stickersSection mb-32">

    <legend class="section-title mb-16">Quais stickers:</legend>

    <ul class="stickerList">
      <li class="mb-10">
        <label for="reactInput">React</label>
        <input type="checkbox" id="reactInput" name="react" class="checkBox" ${this.PackSticker && this.stickersObj.react ? "checked" : ""}/> 
      </li>

      <li class="mb-10">
        <label for="vueInput">Vue</label>
        <input type="checkbox" id="vueInput" name="vue" class="checkBox" ${this.PackSticker && this.stickersObj.vue ? "checked" : ""}/> 
      </li>
      
      <li class="mb-10">
        <label for="angularInput">Angular</label>
        <input type="checkbox" id="angularInput" name="angular" class="checkBox" ${this.PackSticker && this.stickersObj.angular ? "checked" : ""}/> 
      </li>
    </ul>  
    
  </fieldset>

  

  <fieldset class="fieldset counterSection mb-32">

    <legend class="section-title mb-16">Quantos stickers de cada?</legend>

    <section class="quantitySection">
      <button class="decrement" aria-label="Diminuir quantidade">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </button>

      <input type="number" placeholder="0"  min="0" class="range" aria-label="Quantidade de stickers" aria-describedby="quantity-description"
      value="${this.PackSticker && this.PackSticker.getQty ? this.PackSticker.getQty : ""}"/>

      <button class="increment" aria-label="Aumentar quantidade">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </button>
    </section>

    <div id="quantity-description" class="display-hidden" aria-live="polite"></div>

  </fieldset>


  <fieldset class="fieldset mb-32">

    <legend class="section-title mb-16">Observações:</legend>
    <textarea name="observacao" placeholder="Algum complemento?" class="textArea" aria-label="Observações">${this.PackSticker && this.PackSticker.getObs ? this.PackSticker.getObs: ""}</textarea>     

  </fieldset>

  </form>

  <footer class="footer">

    <span  aria-live="polite" class="${this.valid ? "" : "display-hidden"}">${this.valid ? "Formulário enviado com sucesso!" : ""}</span>
    <button class="send" type="submit">Enviar</button>

  </footer>
    `;
  }
}