// скрипт для buy-now для версії десктоп та планшет
(() => {
    const refs = {
      openModalBtn: document.querySelector("[id='buy-modal-open']"),
      closeModalBtn: document.querySelector("[id='buy-modal-close']"),
      modal: document.querySelector("[id='buy-modal']"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();


  
