class PackStickerController {

  constructor() {
    this.formContainer =  document.querySelector(".main")
    this.formContainer.innerHTML = new PackStickerView().template();

    this.hasSent = false;
    this.hasError = false;
    this.bind();
  }

  bind() {

    document.querySelector(".send").addEventListener('click', (e) => {
      e.preventDefault();
      this.validateForm();
      this.checkHasErrorAll();
    });

    document.querySelector(".decrement").addEventListener('click', (e) => {
    e.preventDefault();
    this.decrement();
    this.checkHasErrorAll();
   });

   document.querySelector(".increment").addEventListener('click', (e) => {
    e.preventDefault();
    this.increment();
    this.checkHasErrorAll();
   });


   document.querySelectorAll('.checkBox').forEach((el) => {
    el.addEventListener('change', (e) => {

      if(this.hasSent) {
        const checkBoxesList = document.querySelectorAll(".checkBox");
        const checkboxesObj = {};
        checkBoxesList.forEach((checkbox) => {
          checkboxesObj[checkbox.name] = checkbox.checked;
        });
        this.validateCheckboxes(checkboxesObj)
      }

      this.checkHasErrorAll();
    })
   });

  }




  validateForm() {
    this.hasSent = !this.hasSent;

    const checkBoxesList = document.querySelectorAll(".checkBox");
    const checkboxesObj = {};
    checkBoxesList.forEach((checkbox) => {
      checkboxesObj[checkbox.name] = checkbox.checked;
    });

    const checksValid = this.validateCheckboxes(checkboxesObj);
    const inputValid = this.validateInput();

    if(checksValid && inputValid){
      const range = document.querySelector('.range').value;
      const obs = document.querySelector(".textArea").value;
      const pack = new PackSticker(checkboxesObj, range, obs);

      this.formContainer.innerHTML = new PackStickerView(pack, true).template();
      this.bind();
    }
  }


  validateInput(){
    const rangeInput = document.querySelector('.range');

    if(rangeInput.value == 0){
      rangeInput.classList.add('errorInput');
      return false;
    }
    else{
      rangeInput.classList.remove('errorInput');
      return true;
    }
  }

  validateCheckboxes(checkboxesObj){

    if(Object.values(checkboxesObj).every(v => v === false)){
      document.querySelectorAll(".checkBox").forEach((check) => {
        check.classList.add('errorCheck');
      })
      return false;
    }
    else{
      document.querySelectorAll(".checkBox").forEach((check) => {
        check.classList.remove('errorCheck');
      })
      return true;
    }
  }


  checkHasErrorAll(){
    let error = false;
    const rangeInput = document.querySelector('.range');

    document.querySelectorAll(".checkBox").forEach((check) => {
      if(check.classList.contains('errorCheck')){
        error = true;
      };
    });
    if(rangeInput.classList.contains('errorInput')){
      error = true;
    }


    if(error){
      this.hasError = true;
      this.disableButtonSend();
    }
    else{
      this.hasError = false;
      this.enableButtonSend();
    }
  }


  increment() {
    const rangeInput = document.querySelector('.range');

    if(rangeInput.value == 0){
      this.enabledDecrementBtn();
    }
    rangeInput.value++;
    if(this.hasSent){
      this.validateInput();
    }
  }

  decrement() {
    const rangeInput = document.querySelector('.range');

    if(rangeInput.value == 1 && rangeInput.value != "") {
      this.disableDecrementBtn();
    }
    if(rangeInput.value >= 1){
      rangeInput.value--;
    }
    if(this.hasSent){
      this.validateInput();
    }
  }



  disableButtonSend() {
    document.querySelector(".send").disabled = true;
  }
  enableButtonSend() {
    document.querySelector(".send").disabled = false;
  }
  enabledDecrementBtn() {
    document.querySelector(".decrement").disabled = false;
  }
  disableDecrementBtn() {
    document.querySelector(".decrement").disabled = true;
  }
  
}