import { Site } from './classes/site';
import { Sidebar } from './classes/sidebar';
import { model } from './model';
import './styles/main.css';


const updateCallback = newBlock => {
    model.push(newBlock);
    site.render(model);
}


const site = new Site('#site');
const sidebar = new Sidebar('#panel', updateCallback);

site.render(model);