export default class Panel {

    constructor(name) {
        this.name = name;
        this.elem = document.createElement('div');
        this.elem.className = `protoshop__panel ${name}`;

        this.body = document.createElement('div');
        this.body.className = 'protoshop__panel-body';
        this.elem.appendChild(this.body);
    }

}
