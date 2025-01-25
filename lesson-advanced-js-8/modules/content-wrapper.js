import Element from "../constructor/Element.js";
import content from "./content.js";
import footer from "./footer.js";
import header from "./header.js";

const contentWrapper = new Element('div', 'content-wrapper', [header.get(), content.get(), footer.get()]);

export default contentWrapper;