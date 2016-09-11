import {Component} from 'angular2/core';

@Component({
    selector: 'foo',
    template: '<h1>Hello World</h1>',
    styles: ['h1{color:red}']
})
export class ComponentX {
    constructor() { }
}