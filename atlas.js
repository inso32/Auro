/**
 * Write the header
 */
function writeHeader(baseurl){
	
	var gap = "&nbsp;&nbsp;&nbsp;";
	
	document.write(""
		+"<center><br><h1>Atlas.Node</h1>"
		+"<button class='solobutton' onclick='location.href=\""+baseurl+"index.html\";'>Home</button>"+gap
		+"<button class='solobutton' onclick='location.href=\""+baseurl+"stake.html\";'>Stake</button>"+gap
		+"<button class='solobutton' onclick='location.href=\""+baseurl+"questions.html\";'>Questions</button>"+gap
		+"<br><br>"
		+"");
} 

/**
 * Write the footer
 */
function writeFooter(){
	document.write("</center>");
} 
