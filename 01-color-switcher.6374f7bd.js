const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.setAttribute("disabled","disabled");let d=null;e.addEventListener("click",(function(){clearInterval(d),e.setAttribute("disabled","disabled"),t.removeAttribute("disabled")})),t.addEventListener("click",(function(){t.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)}));
//# sourceMappingURL=01-color-switcher.6374f7bd.js.map