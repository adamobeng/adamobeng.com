function is_mit_ip (ip) {
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
	if (ip.slice(0, 12) == '198.125.160.') {return true;}
	if (ip.slice(0, 12) == '198.125.161.') {return true;}
	if (ip.slice(0, 12) == '198.125.162.') {return true;}
	if (ip.slice(0, 12) == '198.125.163.') {return true;}
	if ((ip.slice(0, 8) == '198.125.') & (parseInt(ip.slice(9, 11)) < 192) & (parseInt(ip.slice(9, 11)) < 175)) {return true;}
	return false;
}

function cb(obj) {
	ip = obj.ip;
	
	if (is_mit_ip(ip)){
		console.log('MIT');
		$('#custom_greeting').hide();
		$('#custom_greeting').text('Hello, MIT visitor!');
		$('body').toggleClass('mit');
		$('#custom_greeting').fadeIn(4000);
	}
}
