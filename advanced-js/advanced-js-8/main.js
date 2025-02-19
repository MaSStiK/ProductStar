import Wrapper from "./constructor/Wrapper.js";
import contentWrapper from "./modules/content-wrapper.js";
import sidebar from "./modules/sidebar.js";

new Wrapper('#root', [contentWrapper, sidebar]);