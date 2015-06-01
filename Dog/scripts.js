function test(){
   var str=document.getElementById("t1").value;
   var result="";
   var x=1;
   for(var i=0;i<str.length;i++){
	   result+=str.substring(0,x);
	   x++;
	   result+=" ";
   }
   x=1;
   for(var i=0;i<=str.length;i++){
	   result+=str.substring(1,x);
	   x++;
	   result+=" ";
   }
   alert(result);
}