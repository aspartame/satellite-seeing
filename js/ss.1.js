var ss = ss || {};

$(document).ready(function() {
	var map = new ss.vm.map();

	map.isBusy(true);

	map.load(function() {
		// Delaying load to show loading spinner
		setTimeout(function() {
			map.isBusy(false);
		}, 2000);
	});

	ko.applyBindings(map);
});
