<!DOCTYPE html>
<html>
	<head>
		<title>Calendar</title>
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<style type="text/css">
			#head-month{
				position: relative;
				left: 29%;
			}

			#preMon{
				display:inline-block;float:left;text-align: left;font-size: 2rem;
			}
			#preMon:hover{
				cursor: pointer;
			}
			#head-month{
				display:inline-block;font-size: 2rem;
			}
			#nextMon{
				display:inline-block;float:right;text-align: right;font-size: 2rem;
			}
			#nextMon:hover{
				cursor: pointer;
			}
			#days{
				display:inline-block;
				width: 13%;
				text-align: center;
				border:solid white 1px;
				margin: 2px;
			}
			.table-data{
				display: inline-block;
				width: 13%;
				text-align: center;
				height: 25px;
				border:solid white 1px;
				margin: 2px;
			}
			.table-blank{
				display: inline-block;
				width: 13%;
				margin: 2px;
			}
			#today{
				background: white;
				color: black;
			}

		</style>
		
	</head>
	<body>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6" style="background: grey;color: white; height: auto;">
					<div class="cal-head" style="width: 100%;">
						<div id="preMon" onclick="preMon()"><</div>
						<div id="head-month" >August 2018</div>
						<div id="nextMon" onclick="nextMon()">></div>
					</div>
					<div class="days "></div>
					<div>
						<!--<table class="dates"></table>-->
						<div class="dates "></div>
					</div>
				</div>
				<div class="col-md-6">
					
				</div>
			</div>
		</div>
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/date.js"></script>
		<script type="text/javascript" src="js/calendar.js">
		</script>
	</body>
</html>