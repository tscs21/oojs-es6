import $ from 'jquery';

export class BaseElement{
	constructor(){
		this.element = null; //jquery object
	}

	appendToElement(el){
		this.createElement();
		el.append(this.element);
		this.enableJS();
	}

	createElement(){
		let s = this.getElementString();
		this.element = $(s);
	}

	getElementString(){
		throw 'getElementString must be overridden BaseElement';
	}

	enableJS(){
		componentHandler.upgradeElement(this.element[0]);
	}
}	