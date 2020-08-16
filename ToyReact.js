class ElementWraaper {
    constructor (type) {
        this.root = document.createElement(type)
    }
    setAttribute (name, value) {
        this.root.setAttribute(name,value)
    }
    appendChild (component) {
        this.root.appendChild(component.root)
    }
}
class TextWraaper {
    constructor (content) {
      this.root = document.createTextNode(content) 
      console.log('content:', this.root ) 
    }
}
export function createElement(type, attribute, ...children) {
    console.log('type', type)
    let element
    if (typeof type === 'string') {
        element = new ElementWraaper(type)
    } else {
        element = new type
    }
    for (let name in attribute) {
        element.setAttribute(name, attribute[name])
    }
    for (let child of children) {
        if (typeof child === 'string') {
            child = new TextWraaper(child)
        }
        element.appendChild(child)
    }
    return element
}

export function render (component, parentElement) {
    // console.log('parentElement', parentElement)
    parentElement.appendChild(component.root);
}
export class Component {
    constructor () {
        this.props = Object.create(null)
        this.children = []
        this._root = null
    }
    setAttribute (name, value) {
        this.props[name] = value
    }
    appendChild (component) {
        this.children.push(component.root)
    }
    get root() {
        if (!this._root) {
            this._root = this.render()
        }
        return this._root
    }
}