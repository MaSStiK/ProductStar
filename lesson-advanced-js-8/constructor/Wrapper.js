class Wrapper {
  constructor(rootId, children = []) {
    this.rootId = rootId;
    this.children = children;

    this.init();
  }

  init() {
    const root = document.querySelector(this.rootId);

    if(!root) {
      throw Error('Root element not exist');
    }

    this.root = root;

    this.children.forEach(el => {
      this.root.append(el.get());
    });
  }
}

export default Wrapper;