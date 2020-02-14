var femaleAkanNames = [
	"Akosua",
	"Adwoa",
	"Abenaa",
	"Akua",
	"Yaa",
	"Afua",
	"Ama" 
];
var maleAkanNames = [
	"Kwasi",
	"Kwadwo",
	"Kwabena",
	"Kwaku",
	"Yaw",
	"Kofi",
	"Kwame"
];
var daysOfWeek=[
    "Sunday","Monday","Tuesday", "Wednesday", "Thursday","Friday","Saturday"
 ];
 

 //calling functions
function getName(){
	var year=parseInt(document.getElementById("year").value);
	var month =parseInt(document.getElementById("month").value);
	var day=parseInt(document.getElementById("day").value);
	var male = document.getElementById("male");
	var female = document.getElementById("female");
	
	//validation
	if(day<=0||day>31)
	alert("Oops!please enter a valid day");
	else if(month<0||month>12 ||month ==2 && day>29)
	alert("Oops!please enter a valid month");
	
	
	var day = new Date(year + "/" + month + "/" + day);
	
	var birthDay=day.getDay();
	if(male.checked==true){
	   alert("You were born on " +daysOfWeek[birthDay]+ " and your akan name is " + maleAkanNames[birthDay])
	}
	else if(female.checked==true){
	   alert("You were born on " +daysOfWeek[birthDay]+ " and your akan name is " + femaleAkanNames[birthDay])

	}

	}
	
	