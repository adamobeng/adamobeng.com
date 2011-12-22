is_mit_ip = function(ip) {
	if (ip.slice(0, 2) == '18') {return true;}
	if (ip.slice(0, 6) == '128.30') {return true;}
	if (ip.slice(0, 6) == '128.31') {return true;}
	if (ip.slice(0, 6) == '128.52') {return true;}
	if (ip.slice(0, 6) == '128.55') {return true;}
	if (ip.slice(0, 10) == '192.52.61.') {return true;}
	if (ip.slice(0, 10) == '192.52.62.') {return true;}
	if (ip.slice(0, 10) == '192.52.63.') {return true;}
	if (ip.slice(0, 10) == '192.52.64.') {return true;}
	if (ip.slice(0, 10) == '192.52.65.') {return true;}
	if (ip.slice(0, 10) == '192.52.66.') {return true;}
	console.log(ip.slice(0, 5));
	return false;
}

cb = function(obj) {
	ip = obj.ip;
	
	if (is_mit_ip(ip)){
		$('#custom_greeting').hide();
		$('#custom_greeting').text('Hello, MIT visitor!');
		$('body').toggleClass('mit');
		$('#custom_greeting').fadeIn(4000);
	}
}
