var key = "e6993fc11f154896b0debecd59023795";
var version = "v2.2";
var format = "JSON";
var count = "5";
var stopid;
$(document).ready(function(){

	$("#getDepGo").click(function () {
		stopid = $("#stopid").val();
		$.getJSON("https://developer.cumtd.com/api/" + version + "/" +
			format + "/GetDeparturesByStop?key=" + key + "&stop_id=" + stopid + "&count=" + count + "&callback=?", null, function (result) {
				if (result.status.code == 404){
					$(".departures").html("Invalid Stop ID");
				}
				else {
					var departures = result.departures;
					if (departures.length === 0) {
						$(".departures").html("There are no buses coming");
					}
					else {
						for (var i in departures) {
							$(".departures").html("<p>" + departures[i].headsign + " in " + departures[i].expected_mins + " minutes." + "</p>");
						}
					}
				}
			});
	});
});