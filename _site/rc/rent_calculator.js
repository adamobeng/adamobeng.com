$(document).ready(function(){

	update_handles = function(slider) {
		var values = $(slider).slider("values");
		var handles = $(".ui-slider-handle > div");
		
		var sorted_values = values.slice(0);
		sorted_values.sort();
		var max = sorted_values[2];
		
		for (var i=0; i<=2; i++) {
			if (values[i] < max) {
				handles.eq(i).text("room " + i + ": -$" + (max - values[i]));
			}
			else {
				handles.eq(i).text("room " + i + " is your favourite");
			console.log(values[i], max);
			}
		}
	};

	initialize_slider = function(slider) {
		$(slider).slider("option", "animate", 2000);
		$(slider).slider("values", [100, 400, 600]);
		$(slider).slider("option", "animate", "slow");
	};

	$("#slider1").slider({
		orientation: "vertical",
		values: [0, 0, 0],
	animate: "slow",
	slide: function(event, ui) {
		update_handles(this);
	},
	max: 1000,
	min: 0,
	create: function() {
		$(".ui-slider-handle").append('<div class="handle-label""></div>');
		initialize_slider(this);
		update_handles(this);
	},
	});
});
