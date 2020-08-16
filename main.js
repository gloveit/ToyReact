import {createElement, render, Component} from './ToyReact'

class MyComponent extends Component{
    render () {
        return <div>this is my component</div>
    }
        
    
}
render(<MyComponent name="a" id="ida"></MyComponent>,document.body)