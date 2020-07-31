var $ = function (id) {
    return document.getElementById(id);
};


var calculateClick = function () {
    var hours1 = parseFloat( $("hrs1").value);
    var grade1 = $("grd1").value;
    var hours2 = parseFloat( $("hrs2").value);
    var grade2 = $("grd2").value;
    var hours3 = parseFloat( $("hrs3").value);
    var grade3 = $("grd3").value;
    var hours4 = parseFloat( $("hrs4").value);
    var grade4 = $("grd4").value;
    var hours5 = parseFloat( $("hrs5").value);
    var grade5 = $("grd5").value;
    var hours6 = parseFloat( $("hrs6").value);
    var grade6 = $("grd6").value;
    
    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
    var num4 = 0;
    var num5 = 0;
    var num6 = 0;
    
    if(grade1 == 'A') {
        num1 = 4.0;
    }
    else if(grade1 == "B") {
        num1 = 3.0;
    }
    else if(grade1 == "C") {
        num1 = 2.0;
    }
    else if(grade1 == "D") {
        num1 = 1.0;
    }
    else if(grade1 == "F") {
        num1 = 0;
    }
    
    if(grade2 == "A") {
        num2 = 4.0;
    }
    else if(grade2 == "B") {
        num2 = 3.0;
    }
    else if(grade2 == "C") {
        num2 = 2.0;
    }
    else if(grade2 == "D") {
        num2 = 1.0;
    }
    else if(grade2 == "F") {
        num2 = 0;
    }
    
    if(grade3 == "A") {
        num3 = 4.0;
    }
    else if(grade3 == "B") {
        num3 = 3.0;
    }
    else if(grade3 == "C") {
        num3 = 2.0;
    }
    else if(grade3 == "D") {
        num3 = 1.0;
    }
    else if(grade3 == "F") {
        num3 = 0;
    }
    
    if(grade4 == "A") {
        num4 = 4.0;
    }
    else if(grade4 == "B") {
        num4 = 3.0;
    }
    else if(grade4 == "C") {
        num4 = 2.0;
    }
    else if(grade4 == "D") {
        num4 = 1.0;
    }
    else if(grade4 == "F") {
        num4 = 0;
    }
    
    if(grade5 == "A") {
        num5 = 4.0;
    }
    else if(grade5 == "B") {
        num5 = 3.0;
    }
    else if(grade5 == "C") {
        num5 = 2.0;
    }
    else if(grade5 == "D") {
        num5 = 1.0;
    }
    else if(grade5 == "F") {
        num5 = 0;
    }
    
    if(grade6 == "A") {
        num6 = 4.0;
    }
    else if(grade6 == "B") {
        num6 = 3.0;
    }
    else if(grade6 == "C") {
        num6 = 2.0;
    }
    else if(grade6 == "D") {
        num6 = 1.0;
    }
    else if(grade6 == "F") {
        num6 = 0;
    }
    
    var x = (hours1 * num1) + (hours2 * num2) + (hours3 * num3) + (hours4 * num4) + (hours5 * num5) + (hours6 * num6);
    
    var total = x / (hours1 + hours2 + hours3 + hours4 + hours5 + hours6);
    
    $("overall").value = total.toFixed(2);
    
};

function myFunction() {
  var d = new Date();
  var n = d.toDateString();
  //document.getElementById("demo").innerHTML = n;
}

window.onload = function() {
    $("process").onclick = calculateClick;
    $("date").innerHTML = n;
};