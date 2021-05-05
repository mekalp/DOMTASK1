myFunction= ()=>{
    var amz = document.getElementById("praveenn").value
    var amz2= document.getElementById("textile").value

    if(amz==""||amz.length<3 || amz.length>20){
        alert("values must be in between the characters of 3 and 20")
    }
    if(amz2==""|| amz2.length<=18 || amz2.length >=30){
        alert("values must enter in the preferred specifications")
    }
};

