var e=qSel(".pTtl > span"),t=new Date,months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],formattedDate=` - Today <span style="font-size: 18px;">(${months[t.getMonth()]} ${t.getDate()}, ${t.getFullYear()})</span>`;e.innerHTML=e.innerHTML+formattedDate;
function handleQueryResponse(e){if(e.isError()){console.error("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());return}for(var t=e.getDataTable(),r=document.getElementById("dataTable"),a=r.createTHead().insertRow(0),n=0;n<t.getNumberOfColumns();n++){var o=document.createElement("th");o.textContent=t.getColumnLabel(n),a.appendChild(o)}for(var l=document.createElement("tbody"),n=0;n<t.getNumberOfRows();n++)for(var s=l.insertRow(n),d=0;d<t.getNumberOfColumns();d++)s.insertCell(d).textContent=t.getFormattedValue(n,d);r.appendChild(l),addArrowsToColumn3(r),addLinksToTable(r),updatePetrolPrice()}
function addArrowsToColumn3(e){for(var t=1;t<e.rows.length;t++){var n=e.rows[t].cells[2],r=n.textContent.trim(),a=r.match(/(-?[\d,]+\.*\d*)/);if(a&&a.length>0){var l=parseFloat(a[0].replace(",","").trim()),o=document.createElement("span");o.classList.add("arrow"),isNaN(l)||(l>0?(o.textContent='\u25B2',o.style.color="red"):l<0?(o.textContent='\u25BC',o.style.color="green"):(o.textContent='\u25FC',o.style.fontWeight="bold"));var d=document.createElement("span");d.textContent=a[0];var p=document.createElement("span");p.textContent=r.replace(a[0],""),n.innerHTML="",n.appendChild(p),n.appendChild(d),n.appendChild(document.createTextNode(" ")),n.appendChild(o)}}}
function addLinksToTable(e){for(var t={},n=1;n<e.rows.length;n++){var r=e.rows[n].cells[0],a=r.textContent.trim();if(t.hasOwnProperty(a)){var o=document.createElement("a");o.href=t[a],o.textContent=a,r.innerHTML="",r.appendChild(o)}}}
