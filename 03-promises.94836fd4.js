var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const i={form:document.querySelector(".form"),firstDelay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),btnSubmit:document.querySelector("button")};function u(e,t){const o={position:e,delay:t};return new Promise(((e,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?e(o):n(o)}),t)}))}i.btnSubmit.addEventListener("click",(function(e){e.preventDefault(),setTimeout((()=>{for(let e=1;e<=i.amount.value;e+=1)u(e,i.step.value*e).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}),i.firstDelay.value)}));
//# sourceMappingURL=03-promises.94836fd4.js.map
