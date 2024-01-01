document.write("20.to check two given integers whether one is positive and another one is negative.  "+"<br>");
function test20(a,b){
    if((a>0 && b<0) ||(a<0 && b>0))
    {
        return true;
    }
    return false;
}
document.write("The numbers are -2,1, Ans : "+test20(-2,1)+"<br>");
document.write("The numbers are 2,1, Ans : "+test20(2,1)+"<br>");
document.write("The numbers are 2,-1, Ans : "+test20(2,-1)+"<br>");
document.write("The numbers are -2,-1, Ans : "+test20(-2,-1)+"<br><br>");