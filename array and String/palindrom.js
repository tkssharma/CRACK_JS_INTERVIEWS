function isPalindrom(str){
	return str === reverse(str);
}
// split revserse and join that's all
function reverse(str){
	return str.split('').reverse().join('');
}

// we have rev for sentence //
function rev(text){
	return text.split(' ').reverse().join(' ')
}
//text.split('').reverse().join('')
//"nurat si eman ym olleh"