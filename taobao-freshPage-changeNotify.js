// ==UserScript==
// @name         My Fancy New Userscript 2
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
  var pattern = "tb-out-of-date";
  var bRet = false;
    
  var x=document.getElementsByClassName(pattern);
    //document.write(x.length);
    if(x.length)
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
