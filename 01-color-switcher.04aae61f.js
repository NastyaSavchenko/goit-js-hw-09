!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.body},o=null;t.start.addEventListener("click",(function(){o=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.start.disabled=!0,t.stop.disabled=!1}),1e3)})),t.stop.addEventListener("click",(function(){clearInterval(o),t.stop.disabled=!0,t.start.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.04aae61f.js.map
