function is_mit_ip (ip) {
	ipg = ip.split('.');
	ipg = $.map(ipg, function(n, i) {return parseInt(n);});
	if (ipg[0] == 18) {return true;}
	if ((ipg[0] == 128) & ((ipg[1] == 30) | (ipg[1] == 31))) {return true;}
	if ((ipg[0] == 128) & (ipg[1] == 52)) {return true;}
	if ((ipg[0] == 129) & (ipg[1] == 55)) {return true;}
	if ((ipg[0] == 192) & (ipg[1] == 52) & ((ipg[2] >= 61) & (ipg[2] <= 66))) {return true;}
	if ((ipg[0] == 198) & (ipg[1] == 125) & ((ipg[2] >= 160) & (ipg[2] <= 163))) {return true;}
	if ((ipg[0] == 198) & (ipg[1] == 125) & ((ipg[2] >= 176) & (ipg[2] <= 191))) {return true;}
	return false;
}

function cb(obj) {
	ip = obj.ip;
	
	if (is_mit_ip(ip)){
		console.log('If you are reading this you are both visiting from MIT and an even bigger nerd than me.');
		$('#custom_greeting').hide();
		$('#custom_greeting').text('Hello, MIT visitor!');
		$('body').toggleClass('fade');
		$('body').toggleClass('mit');
		$('#custom_greeting').fadeIn(4000);
	}
}
