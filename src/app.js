import $ from 'jquery';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table.js';


// let tb = new TitleBar('Application Title');
// tb.addLink('Home', '');
// tb.addLink('Cars', '');
// tb.addLink('Drones', '');
// tb.addLink('Map', '');

// tb.appendToElement($('body'));


// let b = new Button('click me');
// b.appendToElement($('body'));

// let i = new Image('../images/download.jpg');
// i.appendToElement($('body'));
let headers = "Licence Make Model Miles".split(' ');
console.log(headers);
let cars = [{
	licence: 'abc123',
	make: 'toyota',
	model: 'corolla',
	miles: '123456'
}]
let dt = new DataTable(headers, cars);
dt.appendToElement($('body'));


console.log("hello world from a module");