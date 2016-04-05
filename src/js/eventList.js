var HTMLEvent = '    <div class="well bs-component"> '+
'		<div class="fluid-container">	'+
'			<div class="row-section">'+
'				<div class="row">'+
'					<div class="col-md-4">Event Name:</div> 	'+
'					<div class="col-md-8">%eventName%</div>'+
'				</div>'+
'				<div class="row">'+
'					<div class="col-md-4">Event Start:</div> 	'+
'					<div class="col-md-8">%eventStart%</div>'+
'				</div>		'+
'			</div>'+
'			<div class="row-section">	'+
'				<div class="row">'+
'					<div class="col-md-4">Event Type:</div> 	'+
'					<div class="col-md-8">%eventType%</div>'+
'				</div>'+
'				<div class="row">'+
'					<div class="col-md-4">Event End:</div> 	'+
'					<div class="col-md-8">%eventEnd%</div>'+
'				</div>'+
'			</div>'+
'			<div class="row-section">'+
'				<div class="row">'+
'					<div class="col-md-4">Event Host:</div> 	'+
'					<div class="col-md-8">%eventHost%</div>'+
'				</div>	'+
'				<div class="row">'+
'					<div class="col-md-4">Event Location:</div> 	'+
'					<div class="col-md-8">%eventLocation%</div>'+
'				</div>'+
'			</div>'+
'			<div class="row-section">'+
'				<div class="row">'+
'					<div class="col-md-4">Attendees:</div> 	'+
'					<div class="col-md-8">%eventAttendees%</div>'+
'				</div>'+
'			</div>'+
'			<div class="row-section">'+
'				<div class="row">'+
'					<div class="col-md-4">Message:</div> 	'+
'					<div class="col-md-8">%eventMessage%</div>'+
'				</div>'+
'			</div>'+
'		</div>			'+
'	</div>';

var header = document.getElementById('replaceMe');
var myStorage = localStorage;
var eventRet = [];
if(myStorage['eventList'])
	eventRet = JSON.parse(myStorage['eventList']);
var innerHTML = '';
for (var i in eventRet){
	var myEvent = HTMLEvent.replace('%eventName%', eventRet[i].eventName).replace('%eventType%', eventRet[i].eventType).replace('%eventHost%', eventRet[i].eventHost).replace('%eventStart%', eventRet[i].eventStart).replace('%eventEnd%', eventRet[i].eventEnd).replace('%eventLocation%', eventRet[i].eventLocation).replace('%eventAttendees%', eventRet[i].eventAttendees).replace('%eventMessage%', eventRet[i].eventMessage);
	innerHTML += myEvent;
}
header.innerHTML = innerHTML;