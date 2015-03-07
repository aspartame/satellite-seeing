function mapViewModel() {
	var _map;
	var _isBusy = ko.observable(false);

	function load(onLoaded) {
		/* Map theme by Adam Krogh (http://atmist.com)
		 * For more themes check out https://snazzymaps.com/
		 *
		 * var mapStyles = [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},
		 * {"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},
		 * {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},
		 * {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},
		 * {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},
		 * {"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},
		 * {"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},
		 * {},{"featureType":"road","stylers":[{"lightness":20}]}];
		 *
		 */

		google.maps.event.addDomListener(window, 'load', function() {
			var mapOptions = {
				mapTypeId: google.maps.MapTypeId.TERRAIN,
				center: {
					lat: 0,
					lng: 0
				},
				zoom: 2 //,
				//styles: mapStyles
			};

			_map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

			onLoaded();
		});
	}

	this.load = load;
	this.isBusy = _isBusy;
}
