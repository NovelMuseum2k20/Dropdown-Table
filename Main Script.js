var e = qSel(".pTtl > span");
  var t = new Date();
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var formattedDate = ` - Today (${months[t.getMonth()]} ${t.getDate()} ${t.getFullYear()})`;
  e.innerText = e.innerText + formattedDate;
function handleQueryResponse1(response) {
        if (response.isError()) {
            console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var data1 = response.getDataTable();

        // Extract the first row of data (header)
        var table1Header = '<tr>';
        for (var i = 0; i < data1.getNumberOfColumns(); i++) {
            table1Header += '<th>' + data1.getValue(0, i) + '</th>';
        }
        table1Header += '</tr>';

        // Populate table body with data (excluding the header)
        var table1Body = '';
        for (var i = 1; i < data1.getNumberOfRows(); i++) {
            table1Body += '<tr>';
            for (var j = 0; j < data1.getNumberOfColumns(); j++) {
                table1Body += '<td>' + data1.getValue(i, j) + '</td>';
            }
            table1Body += '</tr>';
        }

        // Set the header and body in the HTML
        document.getElementById('dataTable1').getElementsByTagName('thead')[0].innerHTML = table1Header;
        document.getElementById('table1Body').innerHTML = table1Body;
    }

    function handleQueryResponse2(response) {
        if (response.isError()) {
            console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var data2 = response.getDataTable();

        // Extract the first row of data (header)
        var table2Header = '<tr>';
        for (var i = 0; i < data2.getNumberOfColumns(); i++) {
            table2Header += '<th>' + data2.getValue(0, i) + '</th>';
        }
        table2Header += '</tr>';

        // Populate table body with data (excluding the header)
        var table2Body = '';
        for (var i = 1; i < data2.getNumberOfRows(); i++) {
            table2Body += '<tr>';
            for (var j = 0; j < data2.getNumberOfColumns(); j++) {
                table2Body += '<td>' + data2.getValue(i, j) + '</td>';
            }
            table2Body += '</tr>';
        }

        // Set the header and body in the HTML
        document.getElementById('dataTable2').getElementsByTagName('thead')[0].innerHTML = table2Header;
        document.getElementById('table2Body').innerHTML = table2Body;
    }

    function goToFuelURL() {
        var dropdown = document.getElementById("fuelSelect");
        var selectedOption = dropdown.options[dropdown.selectedIndex];
        var url = selectedOption.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    }

    function goToStateURL() {
        var dropdown = document.getElementById("stateSelect");
        var selectedOption = dropdown.options[dropdown.selectedIndex];
        var url = selectedOption.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    }

    function goToCityURL() {
        var dropdown = document.getElementById("citySelect");
        var selectedOption = dropdown.options[dropdown.selectedIndex];
        var url = selectedOption.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    }
