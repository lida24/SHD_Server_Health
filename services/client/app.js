var url = "http://127.0.0.1:5000/get_heatmap";

 fetch(url)
 .then((resp) =>resp.json())
 .then(function(data) {
    for(let j = 0; j < data.heatmap.length; j++) {
        var tr = document.createElement("tr");
        for(let n = data.heatmap[j].length - 1; n >= 0 ; n--) {
            var th = document.createElement("th");
            th.textContent = data.heatmap[j][n].toString();
            tr.appendChild(th);
        }
        document.getElementById('tbody').appendChild(tr);
    }
 })
 .catch(function(error) {
     console.log(error)
 });