export default class Panel {

    constructor(parent, name) {
        this.name = name;
        this.elem = document.createElement('div');
        this.elem.className = `protoshop__panel ${name}`;

        this._attachTitle();

        this.body = document.createElement('div');
        this.body.className = 'protoshop__panel-body';
        this.elem.appendChild(this.body);

        parent.appendChild(this.elem);
    }


    _attachTitle() {
        const title = document.createElement('div');
        title.className = 'protoshop__panel-title';
        title.innerText = this.name[0].toUpperCase() + this.name.substr(1, this.name.length);

        title.addEventListener('mousedown', () => {

        });

        this.elem.appendChild(title);
    }

}
