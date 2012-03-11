$(document).ready(function(){ // Standard wrapper for all jQuery code. Essentially, run everything contained herein after the page has loaded.

	update_handles = function(slider) { // This is a function which updates the labels on the slider's handles. It's called when the slider is first initialised (line 39) and whenever the handles are moved (line 33)
		var values = $(slider).slider("values"); // values is an array which contains the values (i.e. numeric measures of the positions) of the handles. The way we get this is to ask jQuery to select ($) the DOM element corresponding to variable with which the function has been called (slider), and ask the jQuery slider attached to that element for its values
		var handles = $(".ui-slider-handle > div"); // similarly, select the actual DOM elements for the handles, which are divs which are child elements of elements in the .ui-slider-handle class
		
		var sorted_values = values.slice(0); // .slice(0) makes a copy of a list and calls it 'sorted_values'. If we didn't have the '.slice(0)', we would have a new reference to the same object, such that if the value of one changed, so would the value of the other
		sorted_values.sort(); // sort this new array lexicographically
		var max = sorted_values[2]; // the last element of the array is the largest, which is all we really wanted to know
		
		for (var i=0; i<=2; i++) { // a standard for-loop
			if (values[i] < max) { // if this obtains, then the current value isn't the greatest. The trick here is that we want to know which handle has the greatest value. In order to do this, we find out what the greatest value is, then iterate over the list of values in order to find the position (index) of the greatest value in the 'values' list. The index of the biggest value in the values list is also the index of the handle in the list of handles.
				handles.eq(i).text("room " + i + ": -$" + (max - values[i])); // so change the text of the 'i'th element of the handles list to indicate how far it is from the maximum (also, the name of the room is just assumed to be a number here)
			}
			else {
				handles.eq(i).text("room " + i + " is your favourite"); // but if the value of the handle is not smaller than the maximum (i.e. if it is equal to the maximum), then don't calculate the difference 
			console.log(values[i], max); // output the value at the current index and the maximum value to the console. Useful for debugging purposes, but this line can be deleted for production use.
			}
		}
	};

	initialize_slider = function(slider) { // This function is pure eyecandy to make the handles slide slowly into position when the slider is first created. It's called on line 39 when the slider is first created.
		$(slider).slider("option", "animate", 2000); // Confusingly, I've also called this function's variable 'slider', but, as above, tell the slider object attached to the thing passed as a variable to do something. Notably, to make animations of the handles take 2000 milliseconds.
		$(slider).slider("values", [100, 400, 600]); // Then move the handles into place, which will happen over 2 seconds.
		$(slider).slider("option", "animate", "slow"); // Then set the animation speed for any future movements of the handles to a slow but not ridiculous pace.
	};

	$("#slider1").slider({ // Now, we're actually doing something. Make the element whose id is 'slider1' into a jQuery UI slider.
		orientation: "vertical", // whose orientation is vertical
		values: [0, 0, 0], // and whose handles are initially positioned at 0,0,0 (this gets changed as soon as initialize_slider() is called, in a few lines)
	animate: "slow",// and this gets changed too
	slide: function(event, ui) { // everytime the slider handles are moved, call this new function
		update_handles(this); // which updates the labels
	}, 
	max: 1000, // set the maximum and
	min: 0, // minimum values for the slider
	create: function() { // similarly, every (!) time the slider is created, call this function
		$(".ui-slider-handle").append('<div class="handle-label""></div>'); // insert a div into the slider handle (which will be selected on line 5 and used on lines 13 and 16 to contain the text for the labels).
		initialize_slider(this); // do the eyecandy 
		update_handles(this);  // set the labels
	},
	});
});
