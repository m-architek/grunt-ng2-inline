import {Component} from 'angular2/core';

@Component({
    selector: 'foo',
    template: '<h1>Hello World From Second Component</h1>',
    styles: ['h1 {    color: #ff0000;}div {    width: 100%;}']
})
export class SecondComponent {
    constructor() { }
}