' use strict ';
//jshint esversion:6
let body = document.querySelector('body');

function DomElements(selector, height, width, bg, fontSize){

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

}
DomElements.prototype.addElement = function(elem){
        elem.style.cssText =`height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};`;

        elem.innerHTML = 'fsdgsdgsdg';
};
DomElements.prototype.createElement = function(){
   
    
    if( this.selector[0] === '.'){
        let div = document.createElement('div');
        div.className = this.selector.slice(1);
        body.append(div);
        this.addElement(div);
        
    }
    if( this.selector[0] === '#'){
        let p = document.createElement('p');
        p.id = this.selector.slice(1);
        body.append(p);
        this.addElement(p);
    }

};
let element = new DomElements('.ssde', '70px', '40px', 'red', '30px');

element.createElement();



