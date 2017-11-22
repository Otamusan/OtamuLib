function fac(k) {
	var j = 1;
	for (var i = 1; i <= k; i++) {
		j *= i;
	}
	return j;
}

function per(k, i) {
	return fac(k) / fac(k - i);
}
//opokkpo
function com(k, i) {
	return per(k, i) / fac(i);
}
