function myfuntion(){
    var fullNam = "";
    var dau = document.getElementById("ten").value;
    var ni = document.getElementById("ni").value;
    switch (ni) {
    case "danglam":
        fullNam += "<tr><td>"+dau+"</td><td id=do>"+ni+"</td></tr>";
        break;
    case "xong" :
        fullNam += "<tr><td>"+dau+"</td><td id=vang>"+ni+"</td></tr>";  
        break;
    default:
        fullNam += "<tr><td>"+dau+"</td><td id=xanh>"+ni+"</td></tr>";
        break;
    }
    document.getElementById("bang").innerHTML = fullNam;
            var d = new Date();
            d.setMinutes(d.getMinutes() + 1);
            var g = d.getHours();  
            var p = d.getMinutes();  
            var x = document.getElementById("hang");
            x.innerHTML = g + ":" + p;
      }

/*
var year = "<option> 1800 </option>" ;
for( var i = 1801; i <= 2020; i++){
    i += "<option>" + i + "</option>";
}
document.getElementById("main").innerHTML = year;
*/

 


