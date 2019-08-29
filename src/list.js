import { noop } from './util';


export default class List {

    constructor(parent) {
        this.elem = document.createElement('ul');
        this.elem.className = 'protoshop__list';

        this.toggle = noop;

        this._active = 'active';

        parent.appendChild(this.elem);
    }


    append({ elem, text }) {
        const item = document.createElement('li');

        const eye = document.createElement('input');
        eye.type = 'checkbox';

        eye.addEventListener('click', () => {
            const active = item.classList.contains(this._active);

            if (active) {
                item.classList.remove(this._active);
            }
            else {
                item.classList.add(this._active);
            }

            this.toggle(elem, active);
        });

        const content = document.createElement('span');
        content.innerText = text;

        item.appendChild(eye);
        item.appendChild(content);

        this.elem.appendChild(item);
    }

}
