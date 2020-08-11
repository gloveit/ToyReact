export let ToyReact = {
    createElement(type, attribute, ...children) {
        let element = document.createElement(type)
        for (let name in attribute) {
            element.setAttribute(name, attribute[name])
        }
        console.log('children', children)
        for (let child of children) {
            element.appendChild(child)
        }
        return element
    }
} 