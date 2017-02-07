import {Component} from 'angular2/core';

@Component({
    selector: 'foo',
    template: '<h1>Hello World</h1>',
    styles: ['h1 {    color: #ff0000;}h3 {  color: #e6e6e6;}h2 {  background-color: #008000;}']
})
export class ComponentX {
    constructor() { }
}