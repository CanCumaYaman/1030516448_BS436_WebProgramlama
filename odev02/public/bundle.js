var CardGame;(()=>{"use strict";var e={d:(i,t)=>{for(var n in t)e.o(t,n)&&!e.o(i,n)&&Object.defineProperty(i,n,{enumerable:!0,get:t[n]})},o:(e,i)=>Object.prototype.hasOwnProperty.call(e,i),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},i={};e.r(i),e.d(i,{Card:()=>n}),window.onload=function(){var e=["images/cat.jpg","images/dog.jpg"],i=Math.floor(3*Math.random()+1);1==i&&(document.getElementById("img1").src=e[0],document.getElementById("img2").src=e[1],document.getElementById("img3").src=e[1]),2==i&&(document.getElementById("img2").src=e[0],document.getElementById("img1").src=e[1],document.getElementById("img3").src=e[1]),3==i&&(document.getElementById("img3").src=e[0],document.getElementById("img1").src=e[1],document.getElementById("img2").src=e[1])};var t=2;function n(e){var i=e.id;if("img4"==i){document.getElementById("img1").style.visibility="visible";var n=document.getElementById("img1").src,l=document.getElementById("img2").style.visibility,m=document.getElementById("img3").style.visibility;if(n.includes("cat")){var d='<p >Kazandınız tebrik ederiz yeni oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin</p>';document.getElementById("text").innerHTML=d,document.getElementById("img2").style.visibility="visible",document.getElementById("img3").style.visibility="visible"}else if(0==(t-=1)){d='<p >Kaybettiniz yeni oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin</p>';document.getElementById("text").innerHTML=d,"hidden"==l?document.getElementById("img2").style.visibility="visible":"hidden"==m&&(document.getElementById("img3").style.visibility="visible")}else{d="<p >1 hakkınız kaldı</p>";document.getElementById("text").innerHTML=d}}if("img5"==i){l=document.getElementById("img2").src,n=document.getElementById("img1").style.visibility,m=document.getElementById("img3").style.visibility;if(document.getElementById("img2").style.visibility="visible",l.includes("cat")){d='<p >Kazandınız tebrik ederiz yeni oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin</p>';document.getElementById("text").innerHTML=d,document.getElementById("img1").style.visibility="visible",document.getElementById("img3").style.visibility="visible"}else if(0==(t-=1)){d='<p >Kaybettiniz yeni oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin</p>';document.getElementById("text").innerHTML=d,"hidden"==n?document.getElementById("img1").style.visibility="visible":"hidden"==m&&(document.getElementById("img3").style.visibility="visible")}else{d="<p >1 hakkınız kaldı</p>";document.getElementById("text").innerHTML=d}}if("img6"==i){m=document.getElementById("img3").src,l=document.getElementById("img2").style.visibility,n=document.getElementById("img1").style.visibility;if(document.getElementById("img3").style.visibility="visible",m.includes("cat")){d='<p >Kazandınız tebrik ederiz yeni oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin</p>';document.getElementById("text").innerHTML=d,document.getElementById("img2").style.visibility="visible",document.getElementById("img1").style.visibility="visible"}else if(0==(t-=1)){d='<p >Kaybettiniz yeni oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin</p>';document.getElementById("text").innerHTML=d,"hidden"==l?document.getElementById("img2").style.visibility="visible":"hidden"==n&&(document.getElementById("img1").style.visibility="visible")}else{d="<p >1 hakkınız kaldı</p>";document.getElementById("text").innerHTML=d}}}CardGame=i})();