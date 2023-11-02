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
