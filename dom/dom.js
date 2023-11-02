// selecting child using parent

// if i want to access 2nd li

const UL = document.querySelector("ul");
UL.children[1];

// UL.childNodes
// it selects all child, which means it will count white spaces and text as well

// if we want to access first child of ul

// UL.firstChild
// it will give us first child which means white space

// UL.firstElementChild
// it will give us first li of ul

// same as lastChild and lastChildElement
// =======================================================================================

// selectiong parent using child

const LI = document.querySelector("li");
LI.parentElement;
// it will give ul

LI.closest("body");
// closest is used for ancestors bcz in this case body is ancestor of li

// ====================================================================================

// selecting previousSibling, previousElementSibling

UL.previousSibling;
//  it give us #text thing bcz it also counts white space and line-break

UL.previousElementSibling;
//  it will give us <header></header> bcz that was the previous sibling of ul

// same as next sibling

UL.nextSibling;
// it will give us white space

UL.nextElementSibling;
// it will give us next sibling element that is button elementgit

// ===================================================================
// if we want to access first li that is tea, withoust using querySelector

const ULL = document.body.firstElementChild.nextElementSibling;
const FIRST_LI = ULL.firstElementChild;

// console.log(FIRST_LI);

// ===================================================================

// Adding styles in js

const SECTION = document.querySelector("section");
SECTION.style.backgroundColor = "orange";

// vdo- 160 styling dom elements

// ===========================================================

// Creating and inserting Elements
// SECTION.innerHTML = "<h2> hello my name is muskan </h2>";

//  so what happens here,  we've changed the innerHTML of section, so whatever presents in the past it will swap with the new one. and here <ul> and <li>'s are swap with the <h2>

// fi we want to add another li inside the ul then

UL.innerHTML = UL.innerHTML + "<li>beer</li>";
console.log(UL.innerHTML);
//  this is not a good practice bcz we know that we've added new li but it also re-renders all li's

// ========================================================

// inserting another li in ul using append child
const LIST = document.createElement("li");
UL.appendChild(LIST);
LIST.textContent = "mojito";
console.log(UL);

LIST.style.backgroundColor = "pink";

// we can add extra text using append("and some text")
// if we want to add something before <li>tea</li> then will use prepend
// UL.prepend(LIST);
// if we want to add something before last li tehn will use   UL.lastElementChild.before(LIST), then it will came back from first place
// UL.lastElementChild.before(LIST);
// UL.lastElementChild.after(LIST);
// UL.firstElementChild.replaceWith(LIST); // tea will replace with mojito, first li is tea and new li which is LIST is mojito

const SECOND_LI = LIST.children[1];
const NEW_LI = document.createElement("li");
NEW_LI.textContent = "apple juice";
LIST.insertAdjacentElement("afterend", NEW_LI);
console.log(LIST);

const NEW_LI2 = NEW_LI.cloneNode(true);
LIST.append(NEW_LI, NEW_LI2); // clone same thing with text inside, if we pass false(which is default) then it will only clone the li not text inside it

// =============================================================================
// REMOVING ELEMENTS
//  1. method
//    UL.remove();
//    console.log(UL);

// 2. method
UL.parentElement.removeChild(UL);
console.log(UL);
