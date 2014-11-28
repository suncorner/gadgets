//Javascript for Tampermonkey of Chrome.
//Keep freshing the taobao page until the cargo put on the shelf and then notify the user to place the order.

// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://item.taobao.com/*
// @grant        none
// ==/UserScript==

function myrefresh() 
{ 
    if(!done)
		window.location.reload(); 
} 

function getElements()
{
  var targetStr = "此宝贝已下架 ";
  var bRet = false;
    
  var x=document.getElementsByTagName("p");
    if(targetStr == x[1].innerText)
      	;//alert("Not the time yet...");
    else
        bRet = window.confirm("Time to buy now!");
    if(bRet){
        done = true;
    }
}

var done = false;

getElements();
var timer1 = setInterval(myrefresh(),10000); //指定X秒刷新一次


