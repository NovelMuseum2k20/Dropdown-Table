var e=qSel(".pTtl > span"),t=new Date,months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],formattedDate=` - Today <span style="font-size: 18px;">(${months[t.getMonth()]} ${t.getDate()}, ${t.getFullYear()})</span>`;e.innerHTML=e.innerHTML+formattedDate;
function handleQueryResponse1(e){if(e.isError()){console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());return}for(var t=e.getDataTable(),r="<tr>",a=0;a<t.getNumberOfColumns();a++)r+="<th>"+t.getValue(0,a)+"</th>";r+="</tr>";for(var g="",a=1;a<t.getNumberOfRows();a++){g+="<tr>";for(var n=0;n<t.getNumberOfColumns();n++)g+="<td>"+t.getValue(a,n)+"</td>";g+="</tr>"}document.getElementById("dataTable1").getElementsByTagName("thead")[0].innerHTML=r,document.getElementById("table1Body").innerHTML=g,addLinksToTable(document.getElementById("dataTable1"),linkMapForTable1)}
function addLinksToTable(e,t){for(var n=1;n<e.rows.length;n++){var r=e.rows[n].cells[0],a=r.textContent.trim();if(t.hasOwnProperty(a)){var o=document.createElement("a");o.href=t[a],o.textContent=a,r.innerHTML="",r.appendChild(o)}}}
