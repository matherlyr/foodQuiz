var sayHi = function  ()
{
var node= document.createElement("h2")
node.innerText="Gina went to the  grocery store. She bought ingredients to make a lasagna. She bought noodles, pasta sauce, hamburger meat, tomatoes, and cheese."

var body=document.querySelector("body")
    body.appendChild(node) ;
    
 document.querySelector("#button1")
    .setAttribute("onClick",null);
    
    
}
var macncheeseButton = function  ()
{
var node= document.createElement("h2")
node.innerText="She took all her ingredients home and started cooking. First, she browned her hamburger meat and cooked the noodles. Then, she started layering the lasagna. And finally, she put it in the oven."

var body=document.querySelector("body")
    body.appendChild(node) ;
    
 document.querySelector("#button2")
    .setAttribute("onClick",null);
    
    
}
var spaghettiButton = function  ()
{
var node= document.createElement("h2")
node.innerText="When she got it out of the oven, it smelled wonderful! She set it on the kitchen table and her family enjoyed it!"

var body=document.querySelector("body")
    body.appendChild(node) ;
    
 document.querySelector("#button3")
    .setAttribute("onClick",null);
    
}
