import Element from "../constructor/Element.js";


const sidebarContent = new Element('div', 'sidebar-content', 'Sidebar');


const sidebar = new Element('div', 'sidebar', [sidebarContent.get()]);

export default sidebar;