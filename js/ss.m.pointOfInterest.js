ss.m = ss.m || {};

ss.m.PointOfInterest = function(opts) {
	var options = opts || {};
	
	this.center = options.center;
	this.zoomLevel = options.zoomLevel || 15;
	this.title = options.title || '';
	this.description = options.description || '';
	this.location = options.location || '';
	this.href = options.href = '';
}