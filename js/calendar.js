//some functions require datejs
var days=['SUN','MON','TUE','WED','THUS','FRI','SAT'];
var months=['January','February','March','April','May','June','July','August','September','October','November','December'];
var d =  new Date();
var year = d.getFullYear();
var month = d.getMonth();
monName = months[month];

var firstDate = new Date(year, month, 1);
var firtDay = firstDate.getDay();
var thisMonDays=Date.getDaysInMonth(year,month);
var blank = firtDay;

function nextMon(){
	month++;
	if (month==12) {
		month=0;
		year++;
	}
	monName = months[month];
	$('#head-month').html(monName+" "+year);
	firstDate = new Date(year, month, 1);
	firtDay = firstDate.getDay();
	thisMonDays=Date.getDaysInMonth(year,month);
	blank = firtDay;
	myCalendar(year,days,thisMonDays,blank);

}
function preMon() {
	month--;
	if (month==-1) {
		month=11;
		year--;
	}
	monName = months[month];
	$('#head-month').html(monName+" "+year);
	firstDate = new Date(year, month, 1);
	firtDay = firstDate.getDay();
	thisMonDays=Date.getDaysInMonth(year,month);
	blank = firtDay;
	myCalendar(year,days,thisMonDays,blank);
}
$(document).ready(function(){

$('#head-month').html(monName+" "+year);
for (var i = 0; i < days.length; i++) {
	$('.days').append($('<div id="days"></div>').text(days[i]));
}
	var row=1;
	balnkCol=0
	$('.dates').append($('<div class="table-rows" id="row'+row+'"></div>'));
	var count=1;
	for (var i=1;i<=thisMonDays;i++) {
		if(balnkCol<blank){
			for(j=0;j<blank;j++){
				$("#row"+row).append("<div class='table-blank'></div>");
				balnkCol++;
				count++;
			}
		}

		if((count-1)%7==0){
			$('.dates').append("<div class='table-rows' id=row"+(row+1)+"></div>");
			row++;
			//console.log(row);
		}
		if(d.getDate()==i){
				$("#row"+row).append($("<div id='today' class='table-data' id="+i+"></div>").text(i));
			//console.log(d);
			count++;
			}
		else{
		$("#row"+row).append($("<div class='table-data' id="+i+"></div>").text(i));
		//console.log(d);
		count++;
		}
	}
});

function myCalendar(year,days,thisMonDays,blank) {
	$('.days').html('');
	$('.dates').html('');
	for (var i = 0; i < days.length; i++) {
		$('.days').append($('<div id="days"></div>').text(days[i]));
	}
		var row=1;
		balnkCol=0
		$('.dates').append($('<div class="table-rows" id="row'+row+'"></div>'));
		var count=1;
		for (var i=1;i<=thisMonDays;i++) {
			if(balnkCol<blank){
				for(j=0;j<blank;j++){
					$("#row"+row).append("<div class='table-blank'></div>");
					balnkCol++;
					count++;
				}
			}

			if((count-1)%7==0){
				$('.dates').append("<div class='table-rows' id=row"+(row+1)+"></div>");
				row++;
				//console.log(row);
			}
			if(d.getDate()==i && d.getMonth()==month){
				$("#row"+row).append($("<div id='today' class='table-data' id="+i+"></div>").text(i));
			//console.log(d);
			count++;
			}
			else{
			$("#row"+row).append($("<div class='table-data' id="+i+"></div>").text(i));
			//console.log(i);
			count++;
		}
	}
}