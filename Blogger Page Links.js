document.addEventListener("DOMContentLoaded",function(){async function e(e){try{let t=((await (await fetch(`https://www.frisqoo.com/feeds/posts/summary/-/${e}?alt=json&max-results=5`)).json()).feed.entry||[]).map((e,t)=>{let r;return`<p>${t+1}. <a href="${e.link.find(e=>"alternate"===e.rel).href}" target="_blank">${e.title.$t}</a></p>`}).join("");document.getElementById("related-posts").innerHTML=t}catch(r){console.error("Error fetching related posts:",r)}}e("Fuel");let t;t=document.getElementById("text-links"),[{text:"Visit our blog for more details: ",url:"https://your-blogger-page-url1",linkText:"Blogger Page 1"},{text:"Check out our latest post: ",url:"https://your-blogger-page-url2",linkText:"Blogger Page 2"},{text:"Read our tutorials: ",url:"https://your-blogger-page-url3",linkText:"Blogger Page 3"}].forEach(e=>{let r=document.createElement("p");r.style.margin="0",r.style.padding="0";let l=document.createTextNode(e.text);r.appendChild(l);let a=document.createElement("a");a.href=e.url,a.className="extL",a.textContent=e.linkText,a.target="_blank",a.style.marginLeft="5px",r.appendChild(a),t.appendChild(r)})});
