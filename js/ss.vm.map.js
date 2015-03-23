ss.vm = ss.vm || {};

ss.vm.map = function() {
	var self = this;
	
	var _map;
	var _isBusy = ko.observable(false);
	var _currentPoi = ko.observable({});
	var _panAnimation;
	
	var _pois = _.map(ss.data, function(poi) {
		return new ss.m.PointOfInterest(poi);
	});
	
	function setCurrentPoi(poi) {
		_map.setZoom(poi.zoomLevel);
		_map.setCenter(poi.center);
		
		_currentPoi(poi);
	}
	
	function nextPoi() {
		var currentIndex = _pois.indexOf(_currentPoi());
		var next = (currentIndex + 1) % _pois.length;
		
		setCurrentPoi(_pois[next]);
	}
	
	function previousPoi() {
		var currentIndex = _pois.indexOf(_currentPoi());
		
		if (currentIndex > 0) {
			setCurrentPoi(_pois[currentIndex - 1]);
		}
	}
	
	function load(onLoaded) {
		google.maps.event.addDomListener(window, 'load', function() {
			var mapOptions = {
				mapTypeId: google.maps.MapTypeId.SATELLITE,
				disableDefaultUI: true,
			  	zoomControl: true,
			    zoomControlOptions: {
			      style: google.maps.ZoomControlStyle.SMALL
			    }
			};

			_map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			
			setCurrentPoi(_pois[0]);
			
			// window.setInterval(function () {
// 				var currentIndex = _pois.indexOf(_currentPoi());
// 				var next = (currentIndex + 1) % _pois.length;
// 				setCurrentPoi(_pois[next]);
// 			}, 10000);
			
			onLoaded();
		});
	}

	this.load = load;
	this.isBusy = _isBusy;
	this.currentPoi = _currentPoi;
	this.next = nextPoi;
	this.previous = previousPoi;
	
	this.hasPrevious = function () {
		return _pois.indexOf(_currentPoi()) > 0;
	}
	
	window.poi = this.currentPoi;
}
