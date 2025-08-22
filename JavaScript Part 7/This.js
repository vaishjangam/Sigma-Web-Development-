//Type 1 :Object method - 'this' points to the object
const person = {
    name : "Vaishnavi",

    greet(){
        console.log("Hello my name is, " + this.name);
    }
};
person.greet();


///// O/P - Hello my name is, Vaishnavi

//------------------------------------------------------------------------------------------//


//Type 2 : Standalone fuction - 'this is global in browser 
function show(){
    console.log(this);
}
show();

///// O/P - Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//------------------------------------------------------------------------------------------//


//tYPE 3 : Arrow Function -  Arrow function inherits `this` from parent
const obj = {
    value : 9, 
    show: function(){
        const arrow = () => console.log(this.value);
        arrow();
    }

}
obj.show();
////// O/P = 9