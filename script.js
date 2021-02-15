let i = 1;
function first(){
    i = 1;
    fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10").then(response => response.json())

    .then(data => {
        //console.log(data);
        let table= document.getElementById("table");
        table.setAttribute("id","table");
        for(let k=0;k<10;k++){
            var row = table.insertRow(k);

            var aliases = row.insertCell(0);
            aliases.innerHTML=data[k]["aliases"].join(",");

            var allengiances = row.insertCell(1);
            allengiances.innerHTML=data[k]["allengiances"];

            var books = row.insertCell(2);
            books.innerHTML=data[k]["books"].join(",");

            var born = row.insertCell(3);
            born.innerHTML=data[k]["born"];

            var culture = row.insertCell(4);
            culture.innerHTML=data[k]["culture"];

            var died = row.insertCell(5);
            died.innerHTML=data[k]["died"];

            var father = row.insertCell(6);
            father.innerHTML=data[k]["father"];

            var gender = row.insertCell(7);
            gender.innerHTML=data[k]["gender"];

            var mother = row.insertCell(8);
            mother.innerHTML=data[k]["mother"];

            var name = row.insertCell(9);
            name.innerHTML=data[k]["name"];

            var played_by = row.insertCell(10);
            played_by.innerHTML=data[k]["playedBy"].join(",");

            var povbooks = row.insertCell(11);
           povbooks.innerHTML=data[k]["povBooks"].join(",");

            var spouse = row.insertCell(12);
            spouse.innerHTML=data[k]["spouse"];

            var titles = row.insertCell(13);
            titles.innerHTML=data[k]["titles"].join(",");

            var tvseries = row.insertCell(14);
            tvseries.innerHTML=data[k]["tvSeries"].join(",");

            var url = row.insertCell(15);
            url.innerHTML=data[k]["url"];

        }
        //var ele = document.getElementById("result");
        //ele.append(table);
        //console.log(data);

    }).
    catch(error=>console.log(error)
        
)};

function next(){
    i = i+1;
    fetch(`https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=10`).then(response => response.json())

    .then(data => {
        //console.log(data);
        let table= document.getElementById("table");
        table.setAttribute("id","table");
        for(let k=0;k<10;k++){
            var row = table.insertRow(k);

            var aliases = row.insertCell(0);
            aliases.innerHTML=data[k]["aliases"].join(",");

            var allengiances = row.insertCell(1);
            allengiances.innerHTML=data[k]["allengiances"];

            var books = row.insertCell(2);
            books.innerHTML=data[k]["books"].join(",");

            var born = row.insertCell(3);
            born.innerHTML=data[k]["born"];

            var culture = row.insertCell(4);
            culture.innerHTML=data[k]["culture"];

            var died = row.insertCell(5);
            died.innerHTML=data[k]["died"];

            var father = row.insertCell(6);
            father.innerHTML=data[k]["father"];

            var gender = row.insertCell(7);
            gender.innerHTML=data[k]["gender"];

            var mother = row.insertCell(8);
            mother.innerHTML=data[k]["mother"];

            var name = row.insertCell(9);
            name.innerHTML=data[k]["name"];

            var played_by = row.insertCell(10);
            played_by.innerHTML=data[k]["playedBy"].join(",");

            var povbooks = row.insertCell(11);
           povbooks.innerHTML=data[k]["povBooks"].join(",");

            var spouse = row.insertCell(12);
            spouse.innerHTML=data[k]["spouse"];

            var titles = row.insertCell(13);
            titles.innerHTML=data[k]["titles"].join(",");

            var tvseries = row.insertCell(14);
            tvseries.innerHTML=data[k]["tvSeries"].join(",");

            var url = row.insertCell(15);
            url.innerHTML=data[k]["url"];

        }
       // var ele = document.getElementById("result");
        //ele.append(table);
        //console.log(data);

    }).
    catch(error=>console.log(error)
        
)};

function prev(){
    if(i==1){
        i=1;
    }
    else{
    i = i-1;
    }
    fetch(`https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=10`).then(response => response.json())

    .then(data => {
        //console.log(data);
        let table= document.getElementById("table");
        table.setAttribute("id","table");
        for(let k=0;k<10;k++){
            var row = table.insertRow(k);

            var aliases = row.insertCell(0);
            aliases.innerHTML=data[k]["aliases"].join(",");

            var allengiances = row.insertCell(1);
            allengiances.innerHTML=data[k]["allengiances"];

            var books = row.insertCell(2);
            books.innerHTML=data[k]["books"].join(",");

            var born = row.insertCell(3);
            born.innerHTML=data[k]["born"];

            var culture = row.insertCell(4);
            culture.innerHTML=data[k]["culture"];

            var died = row.insertCell(5);
            died.innerHTML=data[k]["died"];

            var father = row.insertCell(6);
            father.innerHTML=data[k]["father"];

            var gender = row.insertCell(7);
            gender.innerHTML=data[k]["gender"];

            var mother = row.insertCell(8);
            mother.innerHTML=data[k]["mother"];

            var name = row.insertCell(9);
            name.innerHTML=data[k]["name"];

            var played_by = row.insertCell(10);
            played_by.innerHTML=data[k]["playedBy"].join(",");

            var povbooks = row.insertCell(11);
           povbooks.innerHTML=data[k]["povBooks"].join(",");

            var spouse = row.insertCell(12);
            spouse.innerHTML=data[k]["spouse"];

            var titles = row.insertCell(13);
            titles.innerHTML=data[k]["titles"].join(",");

            var tvseries = row.insertCell(14);
            tvseries.innerHTML=data[k]["tvSeries"].join(",");

            var url = row.insertCell(15);
            url.innerHTML=data[k]["url"];

        }
        //var ele = document.getElementById("result");
        //ele.append(table);
        //console.log(data);

    }).
    catch(error=>console.log(error)
        
)};

function last(){
    i = i+1;
    fetch(`https://www.anapioficeandfire.com/api/characters?page=214&pageSize=10`).then(response => response.json())

    .then(data => {
        //console.log(data);
        let table= document.getElementById("table");
        table.setAttribute("id","table");
        for(let k=0;k<10;k++){
            var row = table.insertRow(k);

            var aliases = row.insertCell(0);
            aliases.innerHTML=data[k]["aliases"].join(",");

            var allengiances = row.insertCell(1);
            allengiances.innerHTML=data[k]["allengiances"];

            var books = row.insertCell(2);
            books.innerHTML=data[k]["books"].join(",");

            var born = row.insertCell(3);
            born.innerHTML=data[k]["born"];

            var culture = row.insertCell(4);
            culture.innerHTML=data[k]["culture"];

            var died = row.insertCell(5);
            died.innerHTML=data[k]["died"];

            var father = row.insertCell(6);
            father.innerHTML=data[k]["father"];

            var gender = row.insertCell(7);
            gender.innerHTML=data[k]["gender"];

            var mother = row.insertCell(8);
            mother.innerHTML=data[k]["mother"];

            var name = row.insertCell(9);
            name.innerHTML=data[k]["name"];

            var played_by = row.insertCell(10);
            played_by.innerHTML=data[k]["playedBy"].join(",");

            var povbooks = row.insertCell(11);
           povbooks.innerHTML=data[k]["povBooks"].join(",");

            var spouse = row.insertCell(12);
            spouse.innerHTML=data[k]["spouse"];

            var titles = row.insertCell(13);
            titles.innerHTML=data[k]["titles"].join(",");

            var tvseries = row.insertCell(14);
            tvseries.innerHTML=data[k]["tvSeries"].join(",");

            var url = row.insertCell(15);
            url.innerHTML=data[k]["url"];

        }
       // var ele = document.getElementById("result");
       // ele.append(table);
       // console.log(data);

    }).
    catch(error=>console.log(error)
        
)};