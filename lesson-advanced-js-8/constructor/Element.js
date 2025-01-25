class Element {
  constructor(tag, classes, children = '') {
    this.tag = tag;
    this.classes = classes;
    this.children = children;

    this.init();
    this.appendChildren();
  }

  init() {
    const element = document.createElement(this.tag);
    element.classList.add(this.classes);

    this.element = element;
  }

  appendChildren() {
    if (typeof this.children === 'string') {
      this.element.textContent = this.children;
    } else {
      this.children.forEach(el => {
        this.element.append(el);
      });
    }
  }

  get() {
    return this.element;
  }

  append(element) {
    this.element.append(element);
  }

  remove() {
    this.element.remove();
  }
}

export default Element;