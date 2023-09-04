import Slide from './Slide';

const container = document.getElementById('slide');
const elements = document.getElementById('slide-elements');
const controls = document.getElementById('slide-controls');

// elements retorna htmlcolection -> transforma em array -> tipa como array
if (container && elements && controls && elements.children.length) {
  new Slide(container, Array.from(elements.children), controls, 3000);
}
