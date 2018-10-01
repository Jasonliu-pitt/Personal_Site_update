window.onload = function () {
var btn_text = document.getElementsByClassName("btn_text");
var output = document.getElementById("output");
var btn_fun = document.getElementsByClassName("btn_fun");
var res=[]

 for (var i = 0; i < btn_fun.length; i++) {
     btn_fun[i].onclick = function () {
     if (this.value == "AC") {
		 //AC
         res = [];
         output.value = "";
    }
     else {
		 // DEL
         output.value = output.value.substr(0, output.value.length - 1);
    }
   }
}

  for (var i = 0; i < btn_text.length; i++) {
     btn_text[i].onclick = function () {
		if (output.value == "" && this.value == ".") {
                 output.value = "0.";
        }
		else{
			if(!isNaN(this.value)){
				output.value += this.value;
			}
			if(this.value == "."){
				if (output.value.indexOf(".") == -1){
					output.value += this.value;
				}
			}
			if(this.value == "+"||this.value == "-"||this.value == "*"||this.value == "/") {
				res[res.length] = output.value;
				res[res.length] = this.value;
				output.value = ""; //clear the screen
			}
			if(this.value == "=") {
				res[res.length] = output.value;
				output.value = eval(res.join(""));
				var word = "This time,the result is: "+eval(res.join(""))
				var para = document.createElement("P");
				var t = document.createTextNode(word);
				para.appendChild(t);
				document.getElementById("result").appendChild(para);
				res = [];
			}
		}
	 }
  }
}