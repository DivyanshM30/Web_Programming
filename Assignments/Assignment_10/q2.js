// (a) getElementById Example 
let h1 = document.createElement("h1"); 
h1.id = "main-title"; 
h1.textContent = "Original Title"; 
document.body.appendChild(h1); 
 
// (b) getElementsByName Example 
let inputUsername = document.createElement("input"); 
inputUsername.type = "text"; 
inputUsername.name = "username"; 
inputUsername.placeholder = "Enter your name"; 
document.body.appendChild(inputUsername); 
 
let br1 = document.createElement("br"); 
let br2 = document.createElement("br"); 
document.body.appendChild(br1); 
document.body.appendChild(br2); 
 
let maleLabel = document.createElement("label"); 
maleLabel.innerHTML = `<input type="radio" name="gender" value="Male"> Male`; 
document.body.appendChild(maleLabel); 
 
let femaleLabel = document.createElement("label"); 
femaleLabel.innerHTML = `<input type="radio" name="gender" value="Female"> 
Female`; 
document.body.appendChild(femaleLabel); 
 
// (c) getElementsByTagName Example 
let para1 = document.createElement("p"); 
para1.textContent = "This is a paragraph."; 
document.body.appendChild(para1); 
 
let para2 = document.createElement("p"); 
para2.textContent = "Another paragraph."; 
document.body.appendChild(para2); 
 
let ul = document.createElement("ul"); 
let li1 = document.createElement("li"); 
li1.textContent = "Item 1"; 
ul.appendChild(li1); 
 
let li2 = document.createElement("li"); 
li2.textContent = "Item 2"; 
ul.appendChild(li2); 
 
let li3 = document.createElement("li"); 
li3.textContent = "Item 3"; 
ul.appendChild(li3); 
 
document.body.appendChild(ul); 
 
// (d) getElementsByClassName Example 
let input1 = document.createElement("input"); 
input1.type = "text"; 
input1.className = "input-field"; 
input1.placeholder = "Field 1"; 
document.body.appendChild(input1); 
 
let input2 = document.createElement("input"); 
input2.type = "text"; 
input2.className = "input-field"; 
input2.placeholder = "Field 2"; 
document.body.appendChild(input2); 
 
// (e) querySelector Example 
let infoPara1 = document.createElement("p"); 
infoPara1.className = "info"; 
infoPara1.textContent = "Information 1"; 
document.body.appendChild(infoPara1); 
 
let infoPara2 = document.createElement("p"); 
infoPara2.className = "info"; 
infoPara2.textContent = "Information 2"; 
document.body.appendChild(infoPara2); 
 
// (f) querySelectorAll Example 
let hobby1 = document.createElement("label"); 
hobby1.innerHTML = `<input type="checkbox" class="hobby" value="Reading"> 
Reading`; 
document.body.appendChild(hobby1); 
 
let hobby2 = document.createElement("label"); 
hobby2.innerHTML = `<input type="checkbox" class="hobby" value="Coding"> 
Coding`; 
document.body.appendChild(hobby2); 
 
let hobby3 = document.createElement("label"); 
hobby3.innerHTML = `<input type="checkbox" class="hobby" value="Gaming"> 
Gaming`; 
document.body.appendChild(hobby3); 
 
// Now perform the required actions 
 
// (a) Using getElementById 
let mainTitle = document.getElementById("main-title"); 
mainTitle.textContent = "Updated Title"; 
 
// (b) Using getElementsByName 
let usernameField = document.getElementsByName("username")[0]; 
usernameField.value = "Divyansh Mishra"; 
 
let genderButtons = document.getElementsByName("gender"); 
genderButtons.forEach(button => { 
    if (button.checked) { 
        console.log("Selected Gender:", button.value); 
    } 
}); 
 
// (c) Using getElementsByTagName 
let paragraphs = document.getElementsByTagName("p"); 
console.log("Total number of <p> elements:", paragraphs.length); 
 
let listItems = document.getElementsByTagName("li"); 
console.log("List items in <ul>:"); 
for (let item of listItems) { 
    console.log(item.textContent); 
} 
 
// (d) Using getElementsByClassName 
let inputFields = document.getElementsByClassName("input-field"); 
for (let field of inputFields) { 
field.style.backgroundColor = "lightblue"; 
} 
// (e) Using querySelector 
let firstInfoPara = document.querySelector(".info"); 
firstInfoPara.textContent = "This is the first info paragraph"; 
let firstGenderRadio = document.querySelector("input[name='gender']"); 
firstGenderRadio.checked = true; 
// (f) Using querySelectorAll 
let allInfoParas = document.querySelectorAll(".info"); 
allInfoParas.forEach((para, index) => { 
console.log(`Info Paragraph ${index + 1}:`, para.textContent); 
}); 
let hobbyCheckboxes = document.querySelectorAll(".hobby"); 
hobbyCheckboxes.forEach(checkbox => { 
checkbox.checked = true; 
console.log("Checked Hobby:", checkbox.value); 
}); 