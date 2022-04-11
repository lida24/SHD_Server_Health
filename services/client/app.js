var url = "http://127.0.0.1:5000/get_heatmap";

let names1 = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3'];
let names2 = ['H2', 'H1', 'G4', 'G3', 'G2', 'G1', 'F4', 'F3', 'F2', 'F1', 'E4', 'E3', 'E2', 'E1', 'D4'];
let colors = ['	#00008B', '	#0000CD', '	#0000EE', '	#0000FF', '#3A5FCD', '#436EEE', '#4876FF', '#54FF9F', '#4EEE94', '#43CD80', '#FFF68F', '#EEE685', '#CDC673', '#FFB90F', '#EEAD0E', '#CD950C', '#FF3030', '#EE2C2C', '#CD2626', '#8B1A1A'];

 fetch(url)
 .then((resp) =>resp.json())
 .then(function(data) {
    for(let j = 0; j < data.heatmap.length; j++) {
        var tr = document.createElement("tr");
        for(let n = data.heatmap[j].length - 1; n >= 0 ; n--) {
            tr.appendChild(setStyles(data.heatmap[j][n], n, j));
        }
        document.getElementById('tbody').appendChild(tr);
    }
 })
 .catch(function(error) {
     console.log(error)
 });

 let setStyles = (number, index_n, index_j) => {
    var th = document.createElement("th");
    if (number == 0) {
        th.textContent = "--";
        th.className = "none_temperature ";
        let styleElem = th.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".none_temperature::after {background-color: transparent;}";
    } else {
        th.textContent = number.toString();
        th.className = `temperature-${index_n}-${index_j} `;
        let styleElem = th.appendChild(document.createElement("style"));
        styleElem.innerHTML = `.temperature-${index_n}-${index_j}::after {background-color: ${colors[number - colors.length - 1]}}`;
/*         console.log(colors[number - colors.length]);
        console.log(number - colors.length); */
    }
    if (index_j % 2 == 0) {
        th.className += ` th-${index_n}_1`;
        let styleElem = th.appendChild(document.createElement("style"));
        styleElem.innerHTML = `.th-${index_n}_1::before {content: '${names1[index_n]}';}`;
    } else {
        th.className += ` th-${index_n}_2`;
        let styleElem = th.appendChild(document.createElement("style"));
        styleElem.innerHTML = `.th-${index_n}_2::before {content: '${names2[index_n]}';}`;
    }
    return th;
 }