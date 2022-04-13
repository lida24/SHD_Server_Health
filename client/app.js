let names1 = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3'];
let names2 = ['H2', 'H1', 'G4', 'G3', 'G2', 'G1', 'F4', 'F3', 'F2', 'F1', 'E4', 'E3', 'E2', 'E1', 'D4'];
let colors = ['#3D3950', '#41396B',  '#5A4F95',	'#5C4EA3', '#5F52AA', '#5B50A6', '#5C52A1', '#5A529F', '#5B53A7', '#5A53AA', '#5956A5', '#5657A7', '#5659A8', '#525BA8', '#4F61AB', '#4B68AC', '#476EAF', '#3D77B4', '#3580BB', '#3584BF', '#3584BE', '#3289C0', '#378FBE', '#3A94B8', '#429BB3', '#46A1B3', '#4BA8AD', '#51B0AB', '#59B6AB', '#5EBDA8', '#64C5A4', '#76C4A5', '#7BC8A4' , '#85CFA4', '#8CD2A3', '#99D4A6', '#A3D8A8', '#AADBA6', '#B0DCA7', '#B4DEA3', '#BBE4A2', '#C6E99E', '#CDEC9D', '#D5EF98', '#E0F399', '#E8F697', '#EBF8A1', '#ECF8A5', '#F1F8A9', '#F9FDB2', '#FDFEB9', '#FFFCBB', '#FFF2AD', '#FEE99F', '#FFDF8B', '#FED37C', '#FFCE7B', '#FAC675', '#FFBB69', '#FCB764', '#FCAD62', '#FEA85C', '#FD9D58', '#FD9555', '#FA8A50', '#F7814A', '#F27C47', '#F17342', '#F06F40', '#ED6941', '#EA6243', '#E86042', '#E55C43', '#E45B43', '#E25949', '#E1574B', '#E0514C', '#DD4D4C', '#D6444E', '#D44051', '#D03B50', '#CC3650', '#C5314B', '#C02B4B', '#B92349', '#B51748', '#AC0D45', '#A50743', '#9F0143', '#9B0041', '#7F0B3B', '#3C1324'];

class Main {

    init() {
        this.bindDownloadInterval();
    }

    makeHeatmapDataRequest() {
      fetch('http://127.0.0.1:5000/get_heatmap')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          document.getElementById('tbody').innerHTML = " ";
          for(let j = 0; j < data.heatmap.length; j++) {
            var tr = document.createElement("tr");
            for(let n = data.heatmap[j].length - 1; n >= 0 ; n--) {
              tr.appendChild(this.setStyles(data.heatmap[j][n], n, j));
            }
            document.getElementById('tbody').appendChild(tr);
        }
        })
        .catch((error) => {
          console.log(error)
        });
    }

    async bindDownloadInterval() {
      await this.makeHeatmapDataRequest();
      
      setInterval(() => {
        this.makeHeatmapDataRequest();
      }, 5000)
    }

    setStyles(number, index_n, index_j) {
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
            styleElem.innerHTML = `.temperature-${index_n}-${index_j}::after {background-color: ${colors[number]}}`;
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
}

let test = new Main().init();