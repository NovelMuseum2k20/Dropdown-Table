document.addEventListener("DOMContentLoaded",function(){async function e(e){try{let t=((await (await fetch(`https://www.frisqoo.com/feeds/posts/summary/-/${e}?alt=json&max-results=5`)).json()).feed.entry||[]).map((e,t)=>{let r;return`<p style="margin: 0; padding: 0;">${t+1}. <a href="${e.link.find(e=>"alternate"===e.rel).href}" target="_blank">${e.title.$t}</a></p>`}).join("");document.getElementById("aRel").innerHTML=t}catch(r){console.error("Error fetching related posts:",r)}}e("Fuel"),[{text:"Visit our blog for more details: ",url:"https://your-blogger-page-url1",linkText:"Blogger Page 1"},{text:"Check out our latest post: ",url:"https://your-blogger-page-url2",linkText:"Blogger Page 2"},{text:"Read our tutorials: ",url:"https://your-blogger-page-url3",linkText:"Blogger Page 3"}].forEach(e=>{let t=document.createElement("p");t.style.margin="0",t.style.padding="0";let r=document.createTextNode(e.text);t.appendChild(r);let l=document.createElement("a");l.href=e.url,l.className="extL",l.textContent=e.linkText,l.target="_blank",l.style.marginLeft="5px",t.appendChild(l),document.getElementById("blogger-link-section").appendChild(t)})});
