// 8 - Loaded Events

// document.addEventListener('DOMContentLoaded',()=>{
//     alert("Dom content will loaded")
// })


// const myApp = document.getElementById("myApp");
// myApp.innerHTML = `<h1>H1 will changed</h1>`
// console.log(myApp)

//          full content changed via DOMcontentLaded
// document.addEventListener("DOMContentLoaded", () => {
//     const myApp = document.getElementById("myApp");
//     myApp.innerHTML = `<h1>H1 will changed</h1>`
//     console.log(myApp);
// })

//  particular elements content change
// document.addEventListener("DOMContentLoaded", () => {
//     const myApp = document.getElementById("myApp");
//     const head = myApp.children[0];
//     const img = myApp.children[1];
//     head.innerHTML = `<h1>head will changed</h1>`;
//     console.log(head, img);
// })

//  height checking
// document.addEventListener("DOMContentLoaded", () => {
//     const myApp = document.getElementById("myApp");
//     const head = myApp.children[0];
//     const img = myApp.children[1];
//     head.innerHTML = `<h1>head will changed</h1>`;
//     console.log(head, img);
//     console.log(img.offsetWidth,img.offsetHeight);
// })


// document.addEventListener("DOMContentLoaded", () => {
//     const myApp = document.getElementById("myApp");
//     const head = myApp.children[0];
//     const img = myApp.children[1];
//     head.innerHTML = `<h1>head will changed</h1>`;
//     console.log(head, img);
//     console.log(`image size: ${img.offsetWidth},${img.offsetHeight}`);
// })


//      LOAD
// window.addEventListener("load", () => {
//     const myApp = document.getElementById("myApp");
//     const head = myApp.children[0];
//     const img = myApp.children[1];
//     head.innerHTML = `<h1>head will changed</h1>`;
//     console.log(head, img);
//     console.log(`image size: ${img.offsetWidth},${img.offsetHeight}`);
// });

// LOAD another option

// window.onload = function () {
//     const myApp = document.getElementById("myApp");
//     const head = myApp.children[0];
//     const img = myApp.children[1];
//     head.innerHTML = `<h1>head will changed</h1>`;
//     console.log(head, img);
//     console.log(`image size: ${img.offsetWidth},${img.offsetHeight}`);
// }


//      onunload

// window.onunload = function(){
//     alert("onunloaded will triggered")
// }

//      before onunload
// window.onbeforeunload = function(){
//     alert("onbeforeunload will triggered")
// }



//  09 - Dom Nodes

// console.log(document);
// console.dir(document);
// console.dir(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.body.constructor.name);
// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof HTMLElement);
// console.log(document.head instanceof HTMLElement);
// console.log(document.head instanceof Element);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof EventTarget);

// console.log(document.body.nodeType);
// console.log(document.body.nodeName);



//      12 - DOM elements & UI Buildings

// base method
// console.log(document.body.children[0].children[1]);



//  13 - getElementID()

// const h1 = document.getElementById("h1");
// console.log(h1);
// console.log(h1.innerText);
// h1.innerText = "DOM JS";
// console.log(h1.innerText);

// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const response = document.getElementById("response")

// console.log(input,btn);

// btn.addEventListener("click",()=>{
// alert("I have been clicked");
// console.log(input.value);
// response.innerText = input.value;
// })


//  14 - getElementClassName()


// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const lists = document.getElementById("lists");

// btn.addEventListener("click", () => {
// let listadd = `<li>${input.value}</li>`;
// console.log(listadd)
// lists.append(listadd);
//     lists.innerHTML += `<li class="list">${input.value.toUpperCase()}</li>`;
// })
// const list = lists.getElementsByClassName("list");
// console.log(list[0].innerText);

// const listli = [].map.call(list,(e) => e.textContent);
// console.log(listli);



//  14 - getElementsTagName()

// const listitems = document.getElementsByTagName("li");
// console.log(listitems);
// console.log(listitems.length);
// console.log(`I have ${listitems.length} lists`);

//      getElementsName()
// const name = document.getElementsByName("input");
// console.log(name);


//      15 - Queryselector

// const query = document.querySelector("li");
// console.log(query);
// const query = document.querySelector("li:last-child");
// console.log(query);
// const query = document.querySelector("main input");
// console.log(query.value);

//  queryselectorAll

// const query = document.querySelectorAll("li");
// console.log(query);
// console.log(query[1].innerText);



//      16 - createElement

// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const lists = document.getElementById("lists");

// btn.addEventListener("click", () => {
//     lists.innerHTML += `<li class="list">${input.value.toUpperCase()}</li>`;
// });

// const main = document.getElementById("main");

// // creating div element
// const div = document.createElement("div");

// // assigning class
// div.className = "alert";
// const textCreate = document.createTextNode("Dom is updated");

// // or
// div.textContent = "Dom is updated";

// div.append(textCreate);

// main.prepend(div);

// console.log(div);


// with formula

// function submitTrigger() {
//     const input = document.getElementById("input");
//     const btn = document.getElementById("btn");
//     const lists = document.getElementById("lists");

//     btn.addEventListener("click", () => {
//         // 1st method
//         lists.innerHTML += `<li class="list">${input.value.toUpperCase()}</li>`;
//         // 2nd method
// const li = document.createElement("li");
// const text = document.createTextNode(input.value);
//         // creating comments
//         const comment = document.createComment("adding a list")

// li.className = "list";
// li.append(text);
//         li.append(comment);

// lists.append(li);
// });

//     //  create alert
//     const main = document.getElementById("main");

//     // creating div element
//     const div = document.createElement("div");

//     // assigning class
//     div.className = "alert";
//     const textCreate = document.createTextNode(e);

//     // or
//     // div.textContent = "Dom is updated";

//     div.append(textCreate);

//     main.prepend(div);

// //     console.log(div);
// };
// submitTrigger();



//       17   innerHTML vs innerTEXT

// createElement
// function submitTriggerviaEle(e) {

//     //  create alert
//     const main = document.getElementById("main");

//     // creating div element
//     const div = document.createElement("div");

//     // assigning class
//     div.className = "alert";
//     const textCreate = document.createTextNode(e);

//     // or
//     // div.textContent = "Dom is updated";

//     div.append(textCreate);

//     main.prepend(div);
//     console.log(typeof div);

//     console.log(div);
// }


//              innerHTML via templatiterature
// submitTriggerviaEle("Hello i was created via createElement");


// function creationviaTemp(e) {
//     const temp = `<div class="alert">${e}</div>`;
//     main.innerHTML += temp;
//     console.log(typeof temp)
// }

// creationviaTemp("Hello i was created via Templatelit");



//   19 - DocumentFragment   for page performance

// const lists = document.getElementById("lists");
// const fragment = document.createDocumentFragment("li");

// console.time("frag way");
// for (let i = 1; i < 10; i++){
//     const li = document.createElement("li");
//     li.className = "list";
//     li.textContent = `fragment add: ${i}`;
//     fragment.append(li);
// }
// lists.append(fragment);
// console.timeEnd("frag way");

// challenge in docfragment
// const lists = document.getElementById("lists");

// addLists = ['Query', 'fragment', 'elements'];

// const listfrag = document.createDocumentFragment();

// addLists.forEach(element => {
//     const li = document.createElement("li");
//     li.textContent = element;
//     li.className = "list";

//     listfrag.append(li);
// });

// lists.append(listfrag);



// 20 - inserting DOM elements

// const lists = document.getElementById("lists");
// const li = document.createElement("li")
// li.textContent = "query";
// li.className = "list";

// new way of insertings
// lists.append(li);
// lists.prepend(li);
// lists.before(li);
// lists.after(li);

// old way of inserting
// lists.parentNode.insertBefore(li,lists);
// lists.parentNode.insertBefore(li,lists.nextSibling);


//  21 - inserting DOM as string

// const lists = document.getElementById("lists");
// lists.insertAdjacentHTML("afterbegin","DOM-ITEMS");
// lists.insertAdjacentHTML("afterend","DOM-ITEMS-END");
// lists.insertAdjacentHTML("beforebegin","<h1>DOM-ITEMS-TOP</h1>");
// lists.insertAdjacentHTML("beforeend","<h3>DOM-ITEMS-BOTTOM</h3>");


// lists.insertAdjacentText("beforeend","<h3>DOM-ITEMS-BOTTOM</h3>");

// const li = document.createElement("li");
// li.textContent = "query";
// li.classList = "list";

// lists.insertAdjacentElement("afterbegin",li)
// lists.insertAdjacentElement("afterend",li)
// lists.insertAdjacentElement("beforebegin",li)
// lists.insertAdjacentElement("beforeend",li);


//      22 - Replacing DOM

// const lists = document.querySelector("#lists :first-child");
// const lists = document.querySelector("#lists");
// console.log(lists);

// const li = document.createElement("li");
// li.textContent = "DOM Class";
// li.className = "list";

// new way
// lists.replaceWith(li);
// old way
// lists.parentNode.replaceChild(li, lists);
// lists.replaceChildren("one 1", "two 2");
// lists.replaceChildren("<li>one 1</li>", "<li>two 2</li>");

// const query = document.createElement("li");
// query.textContent = "Query";
// query.className = "list";

// const queryAll = document.createElement("li");
// queryAll.textContent = "QueryAll";
// queryAll.className = "list";

// lists.replaceChildren(query, queryAll);


//          23  - Cloning DOM


// const lists = document.querySelector("#lists");
// const duplicate = document.querySelector("#duplicate");
// const btnSync = document.getElementById("btnSync");

// const listCLone = lists.cloneNode();
// console.log(listCLone);
// const listCLoneTrue = lists.cloneNode(true);
// console.log(listCLoneTrue);

// btnSync.addEventListener("click", () => {
//     duplicate.innerHTML = "";
//     const listCLoneTrue = lists.cloneNode(true);
//     duplicate.append(listCLoneTrue);
// });


//     24 -      Removing DOM

//      insert method
// function submitTrigger() {
//     const input = document.getElementById("input");
//     const btn = document.getElementById("btn");
//     const lists = document.getElementById("lists");

//     btn.addEventListener("click", () => {
//         const li = document.createElement("li");
//         const divItem = document.createElement("div");
//         const divRemoveBtn = document.createElement("div");

//         li.append(divItem,divRemoveBtn);

//         divRemoveBtn.parentElement.setAttribute("onclick","removebtn(event)");
//         divRemoveBtn.innerHTML = '<i class="fa fa-xmark"></i>';

//         divItem.textContent = input.value;
//         li.className = "list";

//         lists.append(li);
//         li.append(divItem);
//         li.append(divRemoveBtn);

//     });
// }
// submitTrigger();

// remove method
// function removebtn(event){
// console.log(event.target.parentNode.parentNode)
// let removeli = event.target.parentNode.parentNode;

// // New way of remove
// removeli.remove();

// // Old way of remove
// //     removeli.parentNode.removeChild(removeli);
// };


//      25 - Looping DOM


//      many types of methods
// const lists = document.querySelectorAll(".lists li");

// const listitems = [];

// for(const item of lists){
//     listitems.push(item.innerText);
// }

// console.log(listitems);



// spread operator methods
// const lists = document.querySelectorAll(".lists li");
// lists.forEach((list) => console.log("list",list));

// const lists = document.querySelectorAll(".lists li");
// [...lists].forEach((list) => console.log("lists",list));


// Array.from
// const lists = document.querySelectorAll(".lists li");
// Array.from(lists).forEach((list) => console.log("lists",list));


//      26 - Finding Child DOM

//          .children:  HTMLCollections
// const lists = document.querySelector("#lists");
// console.log(lists.children, lists.children.length);

//          queryselectorAll: Nodelist
// const list = document.querySelectorAll("li");
// console.log(list, list.length);

//          .childNodes
// const lists = document.querySelector("#lists");
// console.log(lists.childNodes);


//      .firstChild   &  firstElementChild
// const lists = document.querySelector("#lists");
// console.log(lists.firstChild, lists.firstElementChild);


//      .lastChild   &  lastElementChild
// const lists = document.querySelector("#lists");
// console.log(lists.lastChild, lists.lastElementChild);


// null examples
// const header = document.querySelector("header");
// console.log(header.children);
// console.log(header.firstChild);
// console.log(header.childNodes);


//          27 - Finding Parend DOM

// const lists = document.querySelector(".list");
// console.log(lists.parentElement);
// console.log(lists.parentNode);
// console.log(lists.parentNode.innerText);

// console.log(document.body.parentNode);
// console.log(document.body.parentElement);

// console.log(document.documentElement.parentNode);
// console.log(document.documentElement.parentElement);

// console.log(lists.closest('main'));


//          28 - Finding Sibilings DOM

// const allUl = document.querySelector("ul:last-child li");
// any nodes: Node
// console.log(allUl.nextSibling);
// console.log(allUl.previousSibling);

// any Element nodes : Element
// console.log(allUl.nextElementSibling);
// console.log(allUl.nextElementSibling.innerText) ;
// console.log(allUl.previousElementSibling);
// console.log(allUl.previousElementSibling.innerText);



//                  30 - Setting & Getting DOM HTML Attributes

// const input = document.querySelector(".input-container input");

// input.setAttribute("value","MohanR");

// const isALiveDOm = input.getAttribute("isAlive");

// console.log(isALiveDOm);

// console.log(input.attributes);
// console.log(input.attributes[4]);
// console.log(input.attributes[4].value);
// console.log(input.attributes[4].name);
// console.log(input.attributes.name.value);
// console.log(input.attributes["placeholder"]);
// console.log(input.attributes["placeholder"].value);

// console.log(input.hasAttribute("placeholder"));

// console.log(input.removeAttribute("placeholder"));

// console.log(input.getAttribute("style"));
// console.log(input.style);

// console.log(input);
// console.log(input.dataset);
// console.log(input.dataset["name"]);
// console.log(input.dataset.true);
// console.log(input.dataset.true === "true");
// console.log(input.dataset.true === "false");

// for(let attr of input.attributes){
//     console.log(attr);
// }
// for(let attr of input.attributes){
//     console.log(`${attr.name} is ${attr.value}`);
// }



//              31 - inline styles with DOM


// const input = document.querySelector(".input-container input"),
// btn = document.querySelector(".input-container button");

// setAttribute
// btn.setAttribute("style","background:royalblue;padding:3px 7px;color:white;border-radius:5px")

// Direct property
// btn.style.padding = "3px 7px";
// btn.style.fontSize = "12px";
// btn.style.backgroundColor = "royalblue";
// btn.style.color = "#fff";
// btn.style.border = "none";
// btn.style.borderRadius = "5px";

//  cssTest
// btn.style.cssText = "background:royalblue;padding:3px 7px;color:white;border-radius:5px";
// btn.style.cssText += "font-weight:bold";

//     //  getting css value
// console.log(btn.style.color);

// // getComputedStyle
// console.log(window.getComputedStyle(btn));
// console.log(window.getComputedStyle(btn,"color"));



//      css class in DOM


// const input = document.querySelector(".input-container input"),
// btn = document.querySelector(".input-container button");

// get class
// console.log(input.className);

// set
// input.setAttribute("class","newincon");
// input.className = "newincon";
// append classes
// input.className += " newincon";
// input.className += " newincon newincon1 newincon2";

// classList
// console.log(input.classList);


// forloop
// for(cssLists of input.classList){
//     console.log(cssLists);
// }

// Manipulations
// input.classList.add("newincon3");
// console.log(input.className);
// console.log(input.classList);
// console.log(input.classList.length);
// true or false
// console.log(input.classList.contains("newinc"));
// console.log(input.classList.replace("newincon3","newincon33"));
// console.log(input.classList.remove("newincon"));
// console.log(input.classList);

// setTimeout(()=>{

//     console.log(input.classList.toggle("rm-class"));
// },5000)
// console.log(input.classList);


// const input = document.querySelector(".input-container"),button = document.querySelector("#showbtn");

// button.addEventListener("click",()=>{
//     // console.log("clicked");
//     if (input.style.display === "none") {
//         button.innerText = "Show Div";
//         input.style.display = "block";
//     }
//     else{
//         input.style.display = "none"
//         button.innerText = "Hide Div";
//     }
// });



//          33 - Animations DOM


// const input = document.querySelector(".input-container"),button = document.querySelector("#showbtn");

// button.addEventListener("click",()=>{
//     // console.log("clicked");
//     if (input.classList.contains("hide")) {
//         button.innerText = "hide Div";
//         button.style.backgroundColor = "white";
//         button.style.color = "black";
//         input.classList.remove("hide");
//     }
//     else{
//         input.classList.add("hide");
//         button.style.backgroundColor = "black";
//         button.style.color = "white";
//         button.innerText = "Show Div";
//     }
// })



//      34 - Event Listerners


// const hbtn = document.querySelector("header span");

// hbtn.onclick = function () {
//     alert("onclick event is clicked")
// }

// hbtn.setAttribute("onclick","alert('onclick is clicked')");

// function clickfun() {
//     alert("click event")
// }

// hbtn.onclick = clickfun;



// hbtn.addEventListener("click",()=>{
//     alert("alert event is clicked")
// });
// hbtn.addEventListener("click",()=>{
//     alert("alert event is clicked2")
// });

// hbtn.addEventListener("dblclick",()=>{
//     alert("alert event is clicked")
// })


// function handleclick() {
//     alert("alert evert one")
// };

// function handleclick2() {
//     alert("alert evert two")
// }

// hbtn.addEventListener("click",handleclick);
// hbtn.addEventListener("click",handleclick2);


// function handleclick() {
//     console.log(this);
// };
// hbtn.addEventListener("click",handleclick);


// function handleclick() {
//     console.log(this);
// };

// const handleclick = (event) =>{
//     console.log(this);
// };

// const handleclick = (event) => {
//     alert("alert is clicked")
//     console.log(event.target);
// }

// hbtn.addEventListener("click", handleclick);
// document.addEventListener("contextmenu", handleclick);


//          35 - RemoveEventListeners

// const hbtn = document.querySelector("header span");

// const handleclick = (event) => {
//     alert("alert is clicked")
//     console.log(event.target);
// }

// hbtn.addEventListener("click", handleclick);

// hbtn.removeEventListener("click", handleclick);

// setTimeout(()=>{
//     hbtn.removeEventListener("click", handleclick);
// },5000);


// const handleclick = (event) => {
//     alert("alert is clicked")
//     console.log(event.target);
//     hbtn.removeEventListener("click", handleclick);

// }

// hbtn.addEventListener("click", handleclick);


// const handleclick = (event) => {
//     alert("alert is clicked")
//     console.log(event.target);
//     hbtn.removeEventListener("click", handleclick);

// }

// hbtn.addEventListener("click", handleclick,{once:true});


// 37 - PreventDefault()

// const formEl = document.querySelector("form");
// const inputEl = document.querySelector("form input");
// const checkboxEl = document.querySelector("form input[type='checkbox']");

// formEl.addEventListener("submit", ()=>{
//     console.log("form Submitted");
// });


// formEl.addEventListener("submit", ()=>{
//     event.preventDefault();
//     console.log("form Submitted");
// })

// formEl.addEventListener("submit", ()=>{
//     event.preventDefault();
//     console.log("form Submitted", inputEl.value,checkboxEl.value);
// })

// formEl.addEventListener("submit", ()=>{
//     event.preventDefault();
//     console.log("form Submitted", inputEl.value,checkboxEl.checked);
// })

// formEl.addEventListener("submit", ()=>{
//     event.preventDefault();
//     console.log("form Submitted", inputEl.value,checkboxEl.checked);
//     console.log("defaultPrevented :", event.defaultPrevented);
// });


// formEl.addEventListener("submit", ()=>{
//     event.preventDefault();
//     console.log("form Submitted", inputEl.value,checkboxEl.checked);
//     console.log("defaultPrevented :", event.defaultPrevented);
// },{passive: true});



// formEl.addEventListener("submit", ()=>{
//     event.preventDefault();
//     if (!checkboxEl.checked) {
//         alert("checked the terms");
//         return
//     }
//     console.log("form Submitted", inputEl.value,checkboxEl.checked);
//     console.log("defaultPrevented :", event.defaultPrevented);
// });



//  38 - Event delegation

// const formEl = document.querySelectorAll("form li");

// formEl.forEach((li) => {
//     li.addEventListener("click", () => {
//         console.log(`Clicked: ${li.innerText}`);
//     })
// })

// const tableEl = document.querySelector("table");

// let selectedID;

// tableEl.addEventListener("click",(e)=>{
//     const target = e.target;
//     const closeTr = target.closest("tr");

//     if(target.tagName === "TH") return;

//     if(selectedID != undefined) selectedID.classList.remove("active");

//     selectedID = closeTr;

//     closeTr.classList.add("active");

//     alert(`ClosesetTr: ${closeTr.children[0].textContent}`);

// });

// document.addEventListener("click",(e)=>{
//     // const id = e.target.dataset;
//     const id = e.target.dataset.toggleId;
//     if(!id) return;
//     const btnid = document.getElementById(id);
//     btnid.hidden = !btnid.hidden;
//     console.log(id);
// })

// const amount = document.querySelector("#donate-form");

// amount.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const targentAmount = e.target.querySelector("input").value;
//     alert(`Thanks for donating $.${targentAmount}`)
//     console.log(targentAmount);
// })


//          39 - Mouse events

// document.addEventListener("mousedown",(e)=>{
//     console.log("mousedown",e);
// });

// document.addEventListener("mouseup",(e)=>{
//     console.log("mouseup",e);
// });
// document.addEventListener("mouseenter",(e)=>{
//     console.log("mouseenter",e);
// })

// const lists = document.getElementById("lists");

// lists.addEventListener("mouseenter",(e)=>{
//     console.log("mouseenter",e);
// });

// lists.addEventListener("mouseleave",(e)=>{
//     console.log("mouseleave",e);
// });

// lists.addEventListener("mousemove",(e)=>{
//     console.log("mousemove");
// });

// lists.addEventListener("mouseout",(e)=>{
//     console.log("mouseout");
// });

// lists.addEventListener("mouseover",(e)=>{
//     console.log("mouseover");
// });

// lists.addEventListener("dblclick",(e)=>{
//     console.log("dblclick");
// });

// lists.addEventListener("mouseup", (e) => {
//     switch (e.which) {
//         case 1:
//             alert("left click");
//             break;
//         case 2:
//             alert("Middle click");
//             break;
//         case 3:
//             alert("right click");
//             break;
//         default:
//             alert(`clicked mouse event is ${e.which}`);
//             break;
//     }
// });


//      40  - keyboard events

// const lists = document.getElementById("lists");

// document.addEventListener("keydown",(e)=>{
//     console.log("keydown",e);
// });

// document.addEventListener("keydown",(e)=>{
//     console.log("keydown key is:",e.key,e);
// });

// document.addEventListener("keyup",(e)=>{
//     console.log("keyup key is:",e.key,e);
// });

// document.addEventListener("keyup", (e) => {
//     switch (e.key) {
//         case "Arrowup":
//             alert("you have pressed Arrowup key")
//             break;
//         case "Arrowdown":
//             alert("you have pressed Arrowdown key")
//             break;
//         case "Arrowleft":
//             alert("you have pressed Arrowleft key")
//             break;
//         case "ArrowRight":
//             alert("you have pressed ArrowRight key")
//             break;
//         default:
//             alert(`You have pressed ${e.key}`)
//             break;
//     }
// });


// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const lists = document.getElementById("lists");

// const additems = () => {
//     const li = document.createElement("li");
//     const text = document.createTextNode(input.value);

//     li.className = "list";
//     li.append(text);
//     lists.append(li);
// };

// btn.addEventListener("click", additems);

// input.addEventListener("keyup", (e) => {
//     if (e.key === "Enter") {
//         additems();
//     // } else if (e.key === "keyZ") {
//     } else if (e.key === "keyZ" && (e.ctrlKey || e.metaKey)) {
//         input.value = "";
//     }
// });



//          41 - Forms and elemens

// const fname = document.querySelector("#fname");
// console.log(fname);
// console.log(document);
// console.log(document.forms);

// by index method
// const formEL = document.forms[0];
// console.log(formEL);

// by name method
// const formEL = document.forms.feedback;
// console.log(formEL);


// const formEL = document.forms.feedback;

// const fullname1 = formEL.elements;
// const fullname1 = formEL.elements[0];
// const email1 = formEL.elements[4];
// const fullname = formEL.elements.fname;
// const type = formEL.elements.type;
// const email = formEL.elements.email;
// const textarea = formEL.elements.textarea;

// const fullname = formEL.fname;

// const {fname} = formEL.elements;
// const {fname,type,email,textarea,terms} = formEL.elements;

// console.log(formEL);
// console.log(fullname1);
// console.log(fullname1.placeholder,email1.placeholder);
// console.log(fullname,type,email,textarea);
// console.log(fname,type,email);

// formEL.addEventListener("click", (e) => {
//     const { fname, type, email, textarea, terms } = formEL.elements;
//     console.log("Form has been submitted");
// });

// formEL.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const { fname, type, email, textarea:description, terms } = formEL.elements;
//     console.log(fname,type,email,description,terms);
//     console.log("Form has been submitted");
// });

// formEL.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(new FormData(formEL));
//     console.log("Form has been submitted");
// });

// formEL.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(...new FormData(formEL));
//     console.log("Form has been submitted");
// });

// formEL.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log([...new FormData(formEL)]);
//     console.log("Form has been submitted");
// });


//          own example forEach method
// formEL.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const each = [...new FormData(formEL)];
//     each.forEach((d) => {
//         console.log(d);
//     })
//     console.log("Form has been submitted");
// });

// const handleSubmit = (e) => {
//     e.preventDefault();
//      console.log([...new FormData(formEL)]);
// };

// const handleFormData = (e) => {
//     console.log("formdata is triggered");
//     const formData = e.formData;
//     console.log(formData);
// }

// formEL.addEventListener("submit", handleSubmit);
// formEL.addEventListener("formdata", handleFormData);


// const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(formEL);
//     console.log(formData.get("api-key"));
// };

// const handleFormData = (e) => {
//     const formData = e.formData;
//     // useful methods
//     formData.append("api-key", "dddddfggg");
//     // key and values return
//     console.log([...formData.entries()]);
//     // values return
//     console.log([...formData.values()]);
//     // name values return
//     console.log(formData.get("fname"));
//     // all values return
//     console.log(formData.getAll("type"));
//     // true or false by has method
//     console.log(formData.has("type"));
//     //  keys return
//     console.log(formData.keys());
//     //  keys return
//     console.log([...formData.keys()]);
//     // set method
//     formData.set("hobbies", "learning codes");
//     console.log([...formData.values()]);
//     // delete method
//     formData.delete("terms");
//     console.log([...formData.values()]);
//     console.log(formData);
// };

// formEL.addEventListener("submit", handleSubmit);
// formEL.addEventListener("formdata", handleFormData);


//      transforming HTML FORMDATA to server

// const formEL = document.forms.feedback;


// const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(formEL);
//     // console.log(...formData.entries());
//     const data = [...formData.entries()];

// 1. Query method

// const dataArray = data.map(x => `${x[0]} = ${x[1]}`);
// const dataArray = data.map(x => `${encodeURIComponent(x[0])} = ${encodeURIComponent(x[1])}`);
// const dataArray = data.map(x => `${encodeURIComponent(x[0])} = ${encodeURIComponent(x[1])}`).join("&");
// console.log(dataArray);
// old way
// const dataArray = data.map(([key,value]) => `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`).join("&");
// console.log(data);
// new way
// const dataArray1 = new URLSearchParams(formData).toString();
// console.log(dataArray1);

// 2.JSON method
// const JSONData = Object.fromEntries(formData)
// const JSONData = JSON.stringify(Object.fromEntries(formData));
// console.log(JSONData);
// };

// formEL.addEventListener("submit", handleSubmit);



//  44 -  Posting formData via fetch

// const formEL = document.forms.feedback;

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(formEL);
//     const JSONData = JSON.stringify(Object.fromEntries(formData));


// send to Backend
// 1. XHMHttpRequest();
// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://reqres.in/api/users/2", true);
// xhr.onload = function () {
//     // console.log(xhr.responseText);
//     const obj = JSON.parse(xhr.responseText);
//     // console.log(obj.data.first_name);

//     // adding fontend page
//     document.getElementById("response").innerText = obj.data.first_name;
// }
// xhr.send();

// 2. fetch()
// fetch("https://reqres.in/api/users/2", {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application-json"
//     },
//     body: JSONData
// });
// fetch("https://reqres.in/api/users?page=2", {
//     method: 'GET',
// headers: {
//     "Content-Type": "application-json"
// },
// body: JSONData
// }).then((res)=>res.json()).then((data)=>{console.log(data.data)})
// }).then((res) => res.json()).then((data) => { document.getElementById("response").innerText = JSON.stringify(data.data) });

// };
// formEL.addEventListener("submit", handleSubmit);



//          46 - Forms input Handling

// const formEL = document.forms.feedback;
// const nameEL = formEL.elements.fname;

// task
// const nameGreetEl = document.querySelector("#headername");

// nameEL.addEventListener("input", (e) => {
//     nameGreetEl.innerText = `Hello ${e.target.value}, `;
// });

// nameEL.addEventListener("input", (e) => document.querySelector("#headername").innerText = `Hello ${e.target.value}, `);

// nameEL.addEventListener("change", (e) => document.querySelector("#headername").innerText = `Hello ${e.target.value}, `);

// console.log(nameEL);

// 1 -  attributes
// nameEL.value = "Mohan";
// nameEL.disabled = "true";
// nameEL.readOnly = "true";
// console.log(nameEL.required);
// console.log(nameEL);

//  2 -   Events
// nameEL.addEventListener("focus", () => console.log("focused"));
// nameEL.addEventListener("blur", () => console.log("blur"));
// nameEL.addEventListener("input", () => console.log("input"));
// nameEL.addEventListener("input", (e) => console.log(`your enter key is: ${e.target.value}`));
// nameEL.addEventListener("change", (e) => console.log(`Changed key is: ${e.target.value}`));
// nameEL.addEventListener("cut", (e) => console.log(`Cut key is: ${e.target.value}`));
// nameEL.addEventListener("paste", (e) => console.log(`Paste key is: ${e.target.value}`));


//  3 - Methods

// nameEL.focus();
// nameEL.blur();

// const handleSubmit = (e) => {
//     e.preventDefault();
// console.log(nameEL.value);
// console.log(nameEL.required);
// const formData = new FormData(formEL);


// };
// formEL.addEventListener("submit", handleSubmit);



//              46 - Handling Radio input

// const formEL = document.forms.feedback;
// const categoryEl = formEL.elements.type;
// const inputCategory = document.querySelector("#input-container");

// const allCategoryEl = [...categoryEl];

// console.log(categoryEl);
// console.log(categoryEl[0]);
// console.log(allCategoryEl);

// 1 -  attributes

// allCategoryEl.forEach((e) => console.log(e));
// allCategoryEl.forEach((e) => console.log(e.value));
// allCategoryEl.forEach((e) => console.log(e.checked));

// 2 - Events

// inputCategory.addEventListener("change",()=>{
//     console.log(("changed"));
// });

// inputCategory.addEventListener("change", (e) => {
//     const chkd = allCategoryEl.find((category) => {
//         return category.checked;
//     })
//     // console.log(("changed:", chkd));
//     console.log(("changed:", chkd.value));
//     console.log(e.target.value);
// });


// 3 - methods

// allCategoryEl[1].select();
// allCategoryEl[2].select();
// // allCategoryEl[2].checked = 'true';

// inputCategory.addEventListener("change", (e) => {
//     // const checked = allCategoryEl.find((category) => category.checked);
//     const checked = e.target;

//     if (checked.value === "contribution") {
//         // alert("alert");
//         setTimeout(() => {
//             alert("Thanks");
//         }, 2000);
//     }
// })


// const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(formEL);
// };
// formEL.addEventListener("submit", handleSubmit);



//          47 - Handling checkbox

// const formEL = document.forms.feedback;
// const hobbiesEl = formEL.elements.hobbies;
// const hobbiesAll = [...hobbiesEl];
// const termsEL = formEL.elements.terms;

// console.log(hobbiesAll);
// console.log(hobbiesAll[0]);
// console.log(hobbiesAll[0].value);
// console.log(termsEL);


//  1- Attributes

// hobbiesAll[0].checked = 'true';
// termsEL.checked = 'true';
// termsEL.indeterminate = 'true';
// console.log(termsEL.value);

// 2 - Events

// termsEL.addEventListener("change",(e)=>{
//     console.log(e.target.value);
// })

//  3 - Methods

// termsEL.select();
// termsEL.checked = 'true';

// hobbiesAll.forEach((e)=>{
//     console.log(e.checked);
// })

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(formEL);
// };
// formEL.addEventListener("submit", handleSubmit);




//      48 - HTML select tag


// const formEL = document.forms.feedback;
// const selectEl = formEL.elements.country;

//      1-     Attributes
// properties
// console.log(selectEl);
// console.log(selectEl.value);
// selectEl.value = "LK";
// console.log(selectEl.value);

// selected index
// selectEl.selectedIndex = "3";
// console.log(selectEl[3]);
// console.log(selectEl[3].value);

//  selected DOM elements
// console.log(selectEl.options[country.selectedIndex].value);
// console.log(selectEl.options.selectedIndex);

//  2- Events

// selectEl.addEventListener("change",()=>{
//     console.log(selectEl);
// });

// selectEl.addEventListener("change", (e) => {
//     console.log(e.target);
// });

// selectEl.addEventListener("change", (e) => {
//     console.log(e.target.options[e.target.selectedIndex]);
//     console.log(e.target.options[e.target.selectedIndex].value);    //get value
//     console.log(e.target.options[e.target.selectedIndex].text);     //get text
// });


// options
// using DOM elements
// const optEl = document.createElement("option");
// optEl.value = "FAZ";
// optEl.text = "South Aftice";
// console.log(optEl);

// const optEl2 = new Option("Indonesia","IDN");

// Adding
// selectEl.add(optEl);
// selectEl.add(optEl,2);
// selectEl.add(optEl2,4);

// selectEl.remove(2);
// console.log(selectEl);

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(formEL);
// };
// formEL.addEventListener("submit", handleSubmit);



// //          49  - Finishing app

// // keyboard
// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const lists = document.getElementById("lists");
// const noListEl = document.getElementById("no-lists");
// const listTotal = document.getElementById("divTotal");

// input.focus();

// // button enter in keyboard
// input.addEventListener("keyup", (e) => {
//     if (e.key === "Enter") {
//         additems();
//     } else if (e.key === "keyZ" && (e.ctrlKey || e.metaKey)) {
//         input.value = "";
//     }
// });


// // Remove
// function removebtn(event) {
//     console.log(event.target.parentNode.parentNode)
//     let removeli = event.target.parentNode.parentNode;
//     removeli.remove();
//     refreshEL();
// };


// // adding list items with click button
// const additems = () => {
//     const li = document.createElement("li");
//     const divItem = document.createElement("div");
//     const divRemoveBtn = document.createElement("div");

//     li.append(divItem, divRemoveBtn);

//     divItem.textContent = input.value;
//     li.className = "list";

//     divRemoveBtn.parentElement.setAttribute("onclick", "removebtn(event)");
//     divRemoveBtn.innerHTML = '<i class="fa fa-xmark"></i>';
//     li.append(divRemoveBtn);

//     lists.append(li);
//     input.value = "";

//     // localStorage
//     localStorage.setItem("list","Saved");

//     refreshEL();

//     // li.append(divItem);

//     // optional background css
//     // if ("click") {
//     //     lists.classList.add("lists");
//     // } else {
//     //     lists.classList.remove("lists");
//     // }
// };

// btn.addEventListener("click", additems);


// // function refreshEL() {
// //     if (lists.children.length > 0) {
// //         noListEl.hidden = true;
// //         listTotal.innerText = `You have ${lists.children.length} lists`;
// //     } else {
// //         noListEl.hidden = false;

// //     }
// // };


// // Ternary function
// function refreshEL() {
//     listTotal.innerText = `You have ${lists.children.length} lists`;
//     lists.children.length > 0 ? ((noListEl.hidden = true), (listTotal.hidden = false),(listTotal.add("divTotal"))) : ((noListEl.hidden = false), (listTotal.hidden = true),(listTotal.remove("divTotal")))
// }



//      50 - LocalStorage

//          49  - Finishing app

// keyboard
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const lists = document.getElementById("lists");
const noListEl = document.getElementById("no-lists");
const listTotal = document.getElementById("divTotal");

// input focussing
input.focus();


document.addEventListener("DOMContentLoaded", () => {
    // const addingLists = localStorage.getItem("lists");
    // const addingLists = JSON.parse(localStorage.getItem("lists"));
    const addingLists = JSON.parse(localStorage.getItem("lists"));

    addingLists.forEach((e) => {
        const li = document.createElement("li");
        const divItem = document.createElement("div");
        const divRemoveBtn = document.createElement("div");

        li.append(divItem, divRemoveBtn);

        divItem.textContent = e.list;
        li.className = "list";

        divRemoveBtn.parentElement.setAttribute("onclick", "removebtn(event)");
        divRemoveBtn.innerHTML = '<i class="fa fa-xmark"></i>';
        li.append(divRemoveBtn);

        lists.append(li);

        refreshEL();

        // console.log(e.list);
    })
    console.log(addingLists);
});

// adding list items with click button
const additems = () => {
    const li = document.createElement("li");
    const divItem = document.createElement("div");
    const divRemoveBtn = document.createElement("div");

    li.append(divItem, divRemoveBtn);

    divItem.textContent = input.value;
    li.className = "list";

    divRemoveBtn.parentElement.setAttribute("onclick", "removebtn(event)");
    divRemoveBtn.innerHTML = '<i class="fa fa-xmark"></i>';
    li.append(divRemoveBtn);

    lists.append(li);


    // localStorage
    // localStorage.setItem("lists","Saved");
    // localStorage.setItem("lists", localStorage.getItem("list") || "[]");
    localStorage.setItem("lists", JSON.stringify([...JSON.parse(localStorage.getItem("lists") || "[]"), { list: input.value },]));

    // resetting the input value 
    input.value = "";

    refreshEL();
};
btn.addEventListener("click", additems);

// button enter in keyboard
input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        additems();
    } else if (e.key === "keyZ" && (e.ctrlKey || e.metaKey)) {
        input.value = "";
    }
});

// Remove
function removebtn(event) {
    // console.log(event.target.parentNode.parentNode);

    let removeli = event.target.parentNode.parentNode;
    removeli.remove();

    // remove from localStorage
    const fetchItem = [...JSON.parse(localStorage.getItem("lists"))];

    fetchItem.forEach((e) => {
        if (e.list === removeli.innerText) {
            fetchItem.splice(fetchItem.indexOf(e), 1);
        }
    });
    localStorage.setItem("lists", JSON.stringify(fetchItem));

    refreshEL();
};

// Ternary function
function refreshEL() {
    listTotal.innerText = `You have ${lists.children.length} lists`;
    lists.children.length > 0 ? ((noListEl.hidden = true), (listTotal.hidden = false)) : ((noListEl.hidden = false), (listTotal.hidden = true));
}