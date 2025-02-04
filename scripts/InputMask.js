const rootSelector = "[data-js-input-mask]";

class InputMask {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.init();
  }

  init() {
    const isLiReady = typeof window.IMask !== "undefined";
    window.Imask(this.rootElement, {
      mask: this.rootElement.dataset.jsInputMask,
    });
    if (isLiReady) {
    } else {
      console.error('Библиотека "imask" не подключена!');
    }
  }
}

class InputMaskCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new InputMask(element);
    });
  }
}

export default InputMaskCollection;
