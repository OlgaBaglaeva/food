!function(){"use strict";function t(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}function e(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",e&&clearInterval(e)}var n=function(n,o){const r=document.querySelectorAll(n),s="img/form/spinner.svg",a="Спасибо! Скоро мы с вами свяжемся",i="Что-то пошло не так...";function c(n){const r=document.querySelector(".modal__dialog");r.classList.add("hide"),e(".modal",o);const s=document.createElement("div");s.classList.add("modal__dialog"),s.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `,document.querySelector(".modal").append(s),setTimeout((()=>{s.remove(),r.classList.add("show"),r.classList.remove("hide"),t(".modal")}),4e3)}r.forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();let n=document.createElement("img");n.src=s,n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",n);const o=new FormData(e);(async(t,e)=>{let n=await fetch(t,{method:"POST",headers:{"Content-type":"application/json"},body:e});return await n.json()})("http://localhost:3000/requests",JSON.stringify(Object.fromEntries(o.entries()))).then((t=>{console.log(t),c(a),n.remove()})).catch((()=>{c(i)})).finally((()=>{e.reset()}))}))}))};window.addEventListener("DOMContentLoaded",(function(){const o=setTimeout((()=>e(".modal",o)),3e3);(function(t,e,n,o){let r=document.querySelectorAll(t),s=document.querySelectorAll(e),a=document.querySelector(n);function i(){s.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),r.forEach((t=>{t.classList.remove(o)}))}function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;s[t].classList.add("show","fade"),s[t].classList.remove("hide"),r[t].classList.add(o)}i(),c(),a.addEventListener("click",(function(e){const n=e.target;n&&n.classList.contains(t.slice(1))&&r.forEach(((t,e)=>{n==t&&(i(),c(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,r){const s=document.querySelectorAll(n),a=document.querySelector(o);s.forEach((t=>{t.addEventListener("click",(()=>e(o,r)))})),a.addEventListener("click",(e=>{e.target!==a&&""!=e.target.getAttribute("data-close")||t(o)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&a.classList.contains("show")&&t(o)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(o,r),window.removeEventListener("scroll",t))}))}("[data-modal]",".modal",o),function(t,e){function n(t){return t>=0&&t<10?`0${t}`:t}!function(t,e){const o=document.querySelector(t),r=o.querySelector("#days"),s=o.querySelector("#hours"),a=o.querySelector("#minutes"),i=o.querySelector("#seconds"),c=setInterval(l,1e3);function l(){const t=function(t){let e,n,o,r;const s=Date.parse(t)-Date.parse(new Date);return s<=0?(e=0,n=0,o=0,r=0):(e=Math.floor(s/864e5),n=Math.floor(s/36e5%24),o=Math.floor(s/1e3/60%60),r=Math.floor(s/1e3%60)),{total:s,days:e,hours:n,minutes:o,seconds:r}}(e);r.innerHTML=n(t.days),s.innerHTML=n(t.hours),a.innerHTML=n(t.minutes),i.innerHTML=n(t.seconds),t.total<=0&&clearInterval(c)}l()}(t,e)}(".timer","2023-02-24"),function(){class t{constructor(t,e,n,o,r,s){this.src=t,this.alt=e,this.title=n,this.descr=o,this.price=r;for(var a=arguments.length,i=new Array(a>6?a-6:0),c=6;c<a;c++)i[c-6]=arguments[c];this.classes=i,this.parent=document.querySelector(s),this.transfer=40,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.element="menu__item",t.classList.add(this.element)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(t)}}(async function(t){let e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return await e.json()})("http://localhost:3000/menu").then((e=>{e.forEach((e=>{let{img:n,altimg:o,title:r,descr:s,price:a}=e;new t(n,o,r,s,a,".menu .container").render()}))}))}(),function(){const t=document.querySelector(".calculating__result span");let e,n,o,r,s;function a(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function i(){t.textContent=e&&n&&o&&r&&s?"female"===e?Math.round((447.6+9.2*o+3.1*n-4.3*r)*s):Math.round((88.36+13.4*o+4.8*n-5.7*r)*s):"No data!"}function c(t,n){const o=document.querySelectorAll(t);o.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(s=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),o.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),i()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":o=+e.value;break;case"age":r=+e.value}i()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?s=localStorage.getItem("ratio"):(s=1.375,localStorage.setItem("ratio",1.375)),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),i(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),n("form",o),function(t){let{container:e,slide:n,nextArrow:o,prevArrow:r,totalCounter:s,currentCounter:a,wrapper:i,field:c}=t,l=0,d=1;const u=document.querySelectorAll(n),m=document.querySelector(e),h=document.querySelector(r),g=document.querySelector(o),f=document.querySelector(s),y=document.querySelector(a),p=document.querySelector(i),v=window.getComputedStyle(p).width,_=document.querySelector(c);u.length<10?(f.textContent=`0${u.length}`,y.textContent=`0${d}`):(f.textContent=u.length,y.textContent=d),_.style.width=100*u.length+"%",_.style.display="flex",_.style.transition="0.5s all",p.style.overflow="hidden",u.forEach((t=>{t.style.width=v})),m.style.position="relative";const w=document.createElement("ol"),L=[];w.classList.add("carousel-indicators"),w.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ",m.append(w);for(let t=0;t<u.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        ",0==t&&(e.style.opacity=1),w.append(e),L.push(e)}function S(t){return+t.replace(/\D/g,"")}g.addEventListener("click",(()=>{l==S(v)*(u.length-1)?l=0:l+=S(v),_.style.transform=`translateX(-${l}px)`,d==u.length?d=1:d++,u.length<10?y.textContent=`0${d}`:y.textContent=d,L.forEach((t=>t.style.opacity=".5")),L[d-1].style.opacity=1})),h.addEventListener("click",(()=>{0==l?l=S(v)*(u.length-1):l-=S(v),_.style.transform=`translateX(-${l}px)`,1==d?d=u.length:d--,u.length<10?y.textContent=`0${d}`:y.textContent=d,L.forEach((t=>t.style.opacity=".5")),L[d-1].style.opacity=1})),L.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");d=e,l=S(v)*(e-1),_.style.transform=`translateX(-${l}px)`,u.length<10?y.textContent=`0${d}`:y.textContent=d,L.forEach((t=>t.style.opacity=".5")),L[d-1].style.opacity=1}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}();
//# sourceMappingURL=bundle.js.map