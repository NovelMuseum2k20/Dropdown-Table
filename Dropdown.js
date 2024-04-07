
google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(drawTable);

  function drawTable() {
    var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1qB8H0Ot9t9hSkpnD-RuZTn_zIAR4Vm-Ib7NSwvQ9pXM/gviz/tq?sheet=Trivandrum');

    query.send(handleQueryResponse);
  }

  function handleQueryResponse(e){if(e.isError()){console.error("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());return}for(var t=e.getDataTable(),n=document.getElementById("dataTable"),r=n.createTHead().insertRow(0),a=0;a<t.getNumberOfColumns();a++){var l=document.createElement("th");l.textContent=t.getColumnLabel(a),r.appendChild(l)}for(var o=document.createElement("tbody"),a=0;a<t.getNumberOfRows();a++)for(var d=o.insertRow(a),i=0;i<t.getNumberOfColumns();i++)d.insertCell(i).textContent=t.getFormattedValue(a,i);n.appendChild(o),addArrowsToColumn3(n),addLinksToTable(n),updatePetrolPrice()}function addArrowsToColumn3(e){for(var t=1;t<e.rows.length;t++){var n=e.rows[t].cells[2],r=n.textContent.trim(),a=r.match(/(-?[\d,]+\.*\d*)/);if(a&&a.length>0){var l=parseFloat(a[0].replace(",","").trim()),o=document.createElement("span");o.classList.add("arrow"),isNaN(l)||(l>0?(o.textContent='\u25B2',o.style.color="red"):l<0?(o.textContent='\u25BC',o.style.color="green"):(o.textContent='\u25FC',o.style.fontWeight="bold"));var d=document.createElement("span");d.textContent=a[0];var i=document.createElement("span");i.textContent=r.replace(a[0],""),n.innerHTML="",n.appendChild(i),n.appendChild(d),n.appendChild(document.createTextNode(" ")),n.appendChild(o)}}}function goToStateURL(){var e=document.getElementById("stateSelect"),t=e.options[e.selectedIndex];t.value;var n=t.getAttribute("data-url");""!==n&&(window.location.href=n)}function goToCityURL(){var e=document.getElementById("citySelect"),t=e.options[e.selectedIndex];t.value;var n=t.getAttribute("data-url");""!==n&&(window.location.href=n)}document.getElementById("stateSelect").addEventListener("change",updatePetrolPrice),document.getElementById("citySelect").addEventListener("change",updatePetrolPrice),document.querySelectorAll('input[type="radio"]').forEach(e=>{e.addEventListener("change",()=>{let t=e.nextElementSibling.querySelector("a");t&&t.click()})});
  function addLinksToTable(table) {
    var textToLinkMap = {
      'Wipro': 'https://www.example1.com',
      'TCS': 'https://www.example2.com',
    };
for(var rowIndex=1;rowIndex<table.rows.length;rowIndex++){var e=table.rows[rowIndex].cells[0],r=e.textContent.trim();if(textToLinkMap.hasOwnProperty(r)){var n=document.createElement("a");n.href=textToLinkMap[r],n.textContent=r,e.innerHTML="",e.appendChild(n)}}}

function updatePetrolPrice() {
    var selectedCity = document.getElementById('citySelect').value;

    // Fetch the petrol price and change from the corresponding row in the Google Sheets
    var spreadsheetURL = 'https://docs.google.com/spreadsheets/d/1RRGz_8gPzEkmmP2IVci6c-5YagK5vK250TX0a6cRhVk/gviz/tq?sheet=Tamil%20Nadu';
    var query = new google.visualization.Query(spreadsheetURL);
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
