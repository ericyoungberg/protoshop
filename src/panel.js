export default class Panel {

    constructor(parent, className = '') {
        this.elem = document.createElement('div');
        this.elem.className = `protoshop__panel ${className}`;

        parent.appendChild(this.elem);
    }

}
