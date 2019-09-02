import { noop } from './util';


export default class List {

    constructor() {
        this.elem = document.createElement('ul');
        this.elem.className = 'protoshop__list';

        this.toggle = noop;
    }


    append({ elem, text }) {
        const item = document.createElement('li');

        const eye = document.createElement('button');
        eye.innerHTML = '&#128065;';
        eye.addEventListener('click', () => {
            const inactive = item.classList.contains('inactive');

            if (inactive) {
                item.classList.remove('inactive');
            }
            else {
                item.classList.add('inactive');
            }

            this.toggle(elem, inactive);
        });

        const content = document.createElement('span');
        content.innerText = text;

        item.appendChild(eye);
        item.appendChild(content);

        this.elem.appendChild(item);

        return item;
    }


    toggle(elem, inactive) {
        elem.classList[inactive ? 'remove' : 'add']('protoshop__layer--inactive');
    }

}
