import {Component} from 'angular2/core';

@Component({
    selector: 'foo',
    template: '<h1>Hello World</h1>',
    styles: ['h1{color:red}h3{color:#e6e6e6}h2{background-color:green}']
})
export class ComponentX {
    constructor() { }
}