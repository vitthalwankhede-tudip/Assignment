function validate()
{
	var given=document.getElementById("gnum").value;
	var enterdn=document.getElementById("numtxt").value;
	var name=document.getElementById("ntxt").value;
	var email=document.getElementById("etxt").value;
	if(name=="" || email=="")
	{
		//document.getElementById("erUname").innerHTML="Should not empty!";
		//window.alert("Should not empty!");
	}
	if(given.match(enterdn)&& enterdn!=="")
	{
		
	}
	else
	{
		window.alert("number does not match");
	}
}

function createnum()
{
	var gn=Math.round(Math.random()*100+100);
	document.getElementById("gnum").value=gn;
	getusername();
}

function showmsg()
{
	window.alert("Field should not be empty");
	if(document.regfrm.All.value==="")
	{
		window.alert("Account created successfully !!");
	}
	else
	{
		window.alert("Field should not be empty");
	}
}

function cl()
{
   window.location="LoginPage.html";
}


function getuname(){
	var uname=document.getElementById("uname").value;
	// Check browser support
	if (typeof(Storage) !== "undefined") 
	{
	    // Store
	    localStorage.setItem("lastname", uname);
	    // Retrieve
	    window.alert(lastname);
	} 
	else {
	    document.getElementById("resultUname").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}
function getusername()
{

	var nnn=localStorage.getItem("lastname");
	document.getElementById("liforname").innerHTML+=nnn;
	addNavReviews();
}
function clearusername()
{
	 localStorage.setItem("lastname", "");
}
function check()
{
	
	var n=document.loginfrm.uname.value;
	var p=document.loginfrm.pwd.value;

	if(n=="tudip" && p=="tudip")
	{
		return true;
		getuname();
	}
	else if(n=="admin" && p=="admin")
	{
		
		return true;
		getuname();
	}
	else
	{
		alert("Enter valid username and password");
		return false;
	}
}
function cancel()
{
	document.loginfrm.uname.value="";
	document.loginfrm.pwd.value="";
}
function redirect()
{
	window.location="register.html";
}
function addNavReviews()
{

	var nnn=localStorage.getItem("lastname");
	//window.alert(nnn);
	var d=document.getElementById("liforReview").innerHTML;
	
	if(nnn=="admin")
	{
	document.getElementById("liforReview").innerHTML="Reviews";	
	}
	else
	{
		document.getElementById("liforReview").innerHTML+="";
	}
	
}