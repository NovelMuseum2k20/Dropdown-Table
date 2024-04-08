google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(drawTable);
var petrolSheetURL; // Declare a variable for petrol sheet URL
function drawTable(){new google.visualization.Query(firstSheetURL).send(handleQueryResponse)}
function handleQueryResponse(e){if(e.isError()){console.error("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());return}for(var t=e.getDataTable(),r=document.getElementById("dataTable"),a=r.createTHead().insertRow(0),n=0;n<t.getNumberOfColumns();n++){var o=document.createElement("th");o.textContent=t.getColumnLabel(n),a.appendChild(o)}for(var l=document.createElement("tbody"),n=0;n<t.getNumberOfRows();n++)for(var s=l.insertRow(n),d=0;d<t.getNumberOfColumns();d++)s.insertCell(d).textContent=t.getFormattedValue(n,d);r.appendChild(l),addArrowsToColumn3(r),addLinksToTable(r),updatePetrolPrice()}
function addArrowsToColumn3(e){for(var t=1;t<e.rows.length;t++){var n=e.rows[t].cells[2],r=n.textContent.trim(),a=r.match(/(-?[\d,]+\.*\d*)/);if(a&&a.length>0){var l=parseFloat(a[0].replace(",","").trim()),o=document.createElement("span");o.classList.add("arrow"),isNaN(l)||(l>0?(o.textContent='\u25B2',o.style.color="red"):l<0?(o.textContent='\u25BC',o.style.color="green"):(o.textContent='\u25FC',o.style.fontWeight="bold"));var d=document.createElement("span");d.textContent=a[0];var p=document.createElement("span");p.textContent=r.replace(a[0],""),n.innerHTML="",n.appendChild(p),n.appendChild(d),n.appendChild(document.createTextNode(" ")),n.appendChild(o)}}}
for(var rowIndex=1;rowIndex<table.rows.length;rowIndex++){var e=table.rows[rowIndex].cells[0],r=e.textContent.trim();if(textToLinkMap.hasOwnProperty(r)){var n=document.createElement("a");n.href=textToLinkMap[r],n.textContent=r,e.innerHTML="",e.appendChild(n)}}}

function updatePetrolPrice() {
    var selectedCity = document.getElementById('citySelect').value;
    // Fetch the petrol price and change from the corresponding row in the Google Sheets
    var query = new google.visualization.Query(petrolSheetURL); // Use the petrolSheetURL variable
    query.send(function(response) {
        if (response.isError()) {
            console.error('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }
        var data = response.getDataTable();
        // Search for the selected city in the first column of the data
var cityIndex = -1;
for (var i = 0; i < data.getNumberOfRows(); i++) {
    var cityFromSheet = data.getValue(i, 0).trim().toLowerCase();
    var selectedCityLowerCase = selectedCity.trim().toLowerCase();
    if (cityFromSheet === selectedCityLowerCase) {
        cityIndex = i;
        break;
    }
}
        // If the city is found, update the petrol price box
        if (cityIndex !== -1) {
            var petrolPrice = data.getValue(cityIndex, 1); // Today Price from second column
            var petrolChange = data.getValue(cityIndex, 2); // Change from third column
            var petrolDate = document.getElementById('petrolDate');
            var petrolPriceValue = document.getElementById('petrolPriceValue');
            var petrolPricePara = document.getElementById('petrolPricePara');
            // Format the date as "Apr 06 2024"
            var options = { month: 'short', day: '2-digit', year: 'numeric' };
            var formattedDate = new Date().toLocaleDateString('en-US', options);
            petrolDate.textContent = formattedDate;
            petrolPriceValue.innerHTML = `<span style="font-size: 19px; font-weight: bold;">${petrolPrice}</span> <span style="font-size: 14px;">/ltr</span>`;
            if (petrolChange > 0) {
                petrolPriceValue.innerHTML += `<span style="font-size: 14px;">(<span>\u20B9</span>${petrolChange.toFixed(2)} <span style="font-weight: bold; color: red;">\u25B2</span>)</span>`;
            } else if (petrolChange < 0) {
                petrolPriceValue.innerHTML += `<span style="font-size: 14px;">(<span>\u20B9</span>${petrolChange.toFixed(2)} <span style="font-weight: bold; color: green;">\u25BC</span>)</span>`;
            } else {
                petrolPriceValue.innerHTML += `<span style="font-size: 14px;">(<span>\u20B9</span>${petrolChange.toFixed(2)} <span style="font-weight: bold;">\u25FC</span>)</span>`;
            }
            // Set the petrol price paragraph
            petrolPricePara.innerHTML = `Petrol prices in ${selectedCity} have been turning more volatile, as prices of crude oil have been showing a firm trend. Petrol price today in ${selectedCity} is Rs. ${petrolPrice} per litre. Remember, petrol and diesel prices are revised daily, so you can lose much, if you are traveling on a long distance. The rupee has also moved lower against the dollar, which has made petrol prices in ${formattedDate} more expensive than before. It is hoped that the government can reduce excise duties, so as to enable rates to become cheaper in the coming days.`;
        } else {
            console.error('City not found in the data.');
        }
    });
}  
function goToStateURL(){var t=document.getElementById("stateSelect"),e=t.options[t.selectedIndex];e.value;var a=e.getAttribute("data-url");""!==a&&(window.location.href=a)}
function goToCityURL(){var t=document.getElementById("citySelect"),e=t.options[t.selectedIndex];e.value;var o=e.getAttribute("data-url");""!==o&&(window.location.href=o)}
