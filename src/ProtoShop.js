import List from './list';
import Panel from './panel';


export default class ProtoShop {

    constructor() {
        this.app = document.createElement('div');
        this.app.className = 'protoshop';

        this._attachToggles();

        this.panels = [
            this._constructArtboards(),
            this._constructLayers(),
            this._constructPhases(),
        ];

        this._constructWindow();

        document.querySelector('body').appendChild(this.app);
    }


    _attachToggles() {
        Array.from(document.querySelectorAll('*[data-toggle]')).forEach(elem => {
            let { toggle } = elem.dataset;
            let target = elem;

            if (toggle.indexOf(':') !== -1) {
                let layer;
                [layer, toggle] = toggle.split(':');

                target = document.querySelector(`*[data-group="${layer}"], *[data-layer="${layer}"]`);
                if (!target) {
                    elem.classList.add('protoshop__error--toggle');
                    console.error(`"${layer}" is not a valid layer`);
                }
            }

            if (target) {
                elem.addEventListener('click', () => {
                    if (target.classList.contains(toggle)) {
                        target.classList.remove(toggle);
                    }
                    else {
                        target.classList.add(toggle);
                    }
                });
            }
        });
    }


    _constructArtboards() {
        const panel = new Panel('artboards');
        const list = new List();

        Array.from(document.querySelectorAll('*[data-artboard]')).forEach((elem, i) => {
            const text = typeof elem.dataset.artboard === 'string ' ? elem.dataset.artboard : `Artboard ${i + 1}`;

            list.append({ elem, text });
        });

        panel.body.appendChild(list.elem);

        return panel;
    }


    _constructLayers() {
        const panel = new Panel('layers');
        const list = new List();

        list.toggle = elem => {
            if (elem.classList.contains('protoshop__layer--inactive')) {
                elem.classList.remove('protoshop__layer--inactive');
            }
            else {
                elem.classList.add('protoshop__layer--inactive');
            }
        };

        Array.from(document.querySelectorAll('*[data-group], *[data-layer]')).forEach(elem => {
            if (elem.dataset.group) {
                const listNode = list.append({ elem, text: elem.dataset.group });
                const sublist = new List();

                listNode.appendChild(sublist.elem);
            }
            else {

            }
        });

        panel.body.appendChild(list.elem);

        return panel;
    }


     _constructPhases() {
        const panel = new Panel('phases');

        return panel;
    }


    _constructWindow() {
        const _window = document.createElement('div');
        _window.className = 'protoshop__window';

        // Title bar
        const bar = document.createElement('div');
        bar.className = 'protoshop__window-bar';

        bar.addEventListener('mousedown', e => {
            const barPos = e.target.getBoundingClientRect();
            const offset = {
                x: e.x - barPos.x,
                y: e.y - barPos.y,
            };

            const move = e => {
                _window.style.left = `${e.x - offset.x}px`;
                _window.style.top  = `${e.y - offset.y}px`;
            };

            window.addEventListener('mousemove', move);
            window.addEventListener('mouseup', () => {
                window.removeEventListener('mousemove', move);
            });
        });


        const minimize = document.createElement('button');
        minimize.innerText = '—';

        minimize.addEventListener('click', () => {
            if (_window.classList.contains('protoshop__window--minimized')) {
                minimize.innerText = '—';
                _window.classList.remove('protoshop__window--minimized');
            }
            else {
                minimize.innerText = '+';
                _window.classList.add('protoshop__window--minimized');
            }
        });

        bar.appendChild(minimize);


        // Tabs
        const tabs = document.createElement('div');
        tabs.className = 'protoshop__tabs';
        this.tabs = [];

        this.panels.forEach(({ name }, i) => {
            const tab = document.createElement('button');
            tab.className = "protoshop__tab";
            tab.innerText = name[0].toUpperCase() + name.substr(1, name.length).toLowerCase();

            tab.addEventListener('click', () => {
                this.panels.forEach((_panel, i) => {
                    _panel.elem.classList[_panel.name === name ? 'add' : 'remove']('protoshop__panel--active');
                    this.tabs[i] && this.tabs[i].classList[_panel.name === name ? 'add' : 'remove']('active');
                });
            });

            tabs.appendChild(tab);
            this.tabs.push(tab);

            if (i === 0) {
                tab.dispatchEvent(new MouseEvent('click'));
            }
        });


        // Panels
        const panels = document.createElement('div');
        panels.className = 'protoshop__panels';

        this.panels.forEach(panel => panels.appendChild(panel.elem));


        _window.appendChild(bar);
        _window.appendChild(tabs);
        _window.appendChild(panels);

        this.app.appendChild(_window);
    }

};
