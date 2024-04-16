var e=qSel(".pTtl > span"),t=new Date,months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],formattedDate=` - Today <span style="font-size: 18px;">(${months[t.getMonth()]} ${t.getDate()}, ${t.getFullYear()})</span>`;e.innerHTML=e.innerHTML+formattedDate;
function handleQueryResponse(e){if(e.isError()){console.error("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());return}for(var t=e.getDataTable(),r=document.getElementById("dataTable"),a=r.createTHead().insertRow(0),n=0;n<t.getNumberOfColumns();n++){var l=document.createElement("th");l.textContent=t.getColumnLabel(n),a.appendChild(l)}for(var o=document.createElement("tbody"),n=0;n<t.getNumberOfRows();n++)for(var s=o.insertRow(n),i=0;i<t.getNumberOfColumns();i++){var g=t.getFormattedValue(n,i);if(0===i){var u=g.split(", ");if(2===u.length){var d=u[0].split(" ");2===d.length&&(g=d[0].substring(0,3)+" "+d[1]+", "+u[1])}}s.insertCell(i).textContent=g}r.appendChild(o),addArrowsToColumn3(r),addLinksToTable(r),updatePetrolPrice()}
function addArrowsToColumn3(e){for(var t=1;t<e.rows.length;t++){var n=e.rows[t].cells[2],r=n.textContent.trim(),a=r.match(/(-?[\d,]+\.*\d*)/);if(a&&a.length>0){var o=parseFloat(a[0].replace(",","").trim());if(!isNaN(o)){var l=document.createElement("span");l.classList.add("arrow"),o>0?(l.textContent='\u25B2',l.style.color="red"):o<0?(l.textContent='\u25BC',l.style.color="green"):(l.textContent='\u25FC',l.style.fontWeight="bold");var d=document.createElement("span");d.textContent="₹ "+o.toFixed(2);var i=document.createElement("span");i.textContent=r.replace(a[0],""),n.innerHTML="",n.appendChild(i),n.appendChild(d),n.appendChild(document.createTextNode(" ")),n.appendChild(l)}}}}
function addLinksToTable(e){for(var t={},n=1;n<e.rows.length;n++){var r=e.rows[n].cells[0],a=r.textContent.trim();if(t.hasOwnProperty(a)){var o=document.createElement("a");o.href=t[a],o.textContent=a,r.innerHTML="",r.appendChild(o)}}}
