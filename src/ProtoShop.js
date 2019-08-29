import List from './list';
import Panel from './panel';


export default class ProtoShop {

    constructor() {
        this.elem = document.createElement('div');
        this.elem.className = 'protoshop';

        this.panels = {
            artboards: this._constructArtboards(),
            layers: this._constructLayers(),
            phases: this._constructPhases(),
        };

        this._attachToggles();

        document.querySelector('body').appendChild(this.elem);
    }


    _attachToggles() {
        Array.from(document.querySelectorAll('*[data-toggle]')).forEach(elem => {
            elem.addEventListener('click', () => {
                if (elem.classList.contains(elem.dataset.toggle)) {
                    elem.classList.remove(elem.dataset.toggle);
                }
                else {
                    elem.classList.add(elem.dataset.toggle);
                }
            });
        });
    }


    _constructArtboards() {
        const panel = new Panel(this.elem, 'artboards');
        const list = new List(panel.body);

        Array.from(document.querySelectorAll('*[data-artboard]')).forEach((elem, i) => {
            const text = typeof elem.dataset.artboard === 'string ' ? elem.dataset.artboard : `Artboard ${i + 1}`;

            list.append({ elem, text });
        });

        return panel;
    }


    _constructLayers() {
        const panel = new Panel(this.elem, 'layers');

        return panel;
    }


     _constructPhases() {
        const panel = new Panel(this.elem, 'phases');

        return panel;
    }

};
