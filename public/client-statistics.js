var socket = io.connect('http://localhost:3000');
var table = document.getElementById("statistics");

//Ամեն 10000 մլվրկ֊ը մեկ
setTimeout(function(){
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 5000);

//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats",function(statistics){
    console.log(statistics);
    //Պատրսատում ենք աղյուսակը
    statistics = JSON.parse(statistics);
    table.innerHTML = "";
    tableHTML = "<tr><td>խոտակերի քանակ</td><td>խոտի քանակ</td><td>գիշատիչի քանակ</td><td>որսորդի քանակ</td><td>բոմբեռի քանակ</td><td>դինոի քանակ</td></tr>";
    for(var st in statistics){
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.xotakeriqanak+"</td>";
        tableHTML+="<td>"+st.xotiqanaky+"</td>";
        tableHTML+="<td>"+st.gishatichiqanak+"</td>";
        tableHTML+="<td>"+st.vorsordiqanak+"</td>";
        tableHTML+="<td>"+st.dinoiqanak+"</td>";
        tableHTML+="<td>"+st.bomberiqanak+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
    //console.log(statistics);
})

