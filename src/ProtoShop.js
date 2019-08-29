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
