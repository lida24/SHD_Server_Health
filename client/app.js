let names1 = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3'];
let names2 = ['H2', 'H1', 'G4', 'G3', 'G2', 'G1', 'F4', 'F3', 'F2', 'F1', 'E4', 'E3', 'E2', 'E1', 'D4'];
let colors = ['#3D3950', '#41396B',  '#5A4F95',	'#5C4EA3', '#5F52AA', '#5B50A6', '#5C52A1', '#5A529F', '#5B53A7', '#5A53AA', '#5956A5', '#5657A7', '#5659A8', '#525BA8', '#4F61AB', '#4B68AC', '#476EAF', '#3D77B4', '#3580BB', '#3584BF', '#3584BE', '#3289C0', '#378FBE', '#3A94B8', '#429BB3', '#46A1B3', '#4BA8AD', '#51B0AB', '#59B6AB', '#5EBDA8', '#64C5A4', '#76C4A5', '#7BC8A4'/* , '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#' */];

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
            styleElem.innerHTML = `.temperature-${index_n}-${index_j}::after {background-color: ${colors[number - colors.length]}}`;
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
        console.log(colors.length)
        return th;
    }
}

let test = new Main().init();