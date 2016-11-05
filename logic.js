
//test comment
var textArrayA = textString.split(',');

//alert(textArrayA.length);

		//input/split('')
		var userLetters = [];
		//$('.status-box').val().split();
		//["g", "i", "p", "n", "t", "d", "i", "v", "e"];

var arrMatches = [];

function checkString(str){
	//this allows holder to be modified without affecting userLetters
	//find a better way to do this******************
	var holderTest = userLetters.join('');
	var holder = holderTest.split('');
	//capture the length of holder before it's modified
	var len = holder.length;
	//loop through each letter of str
	for(var i = 0; i < str.length; i++){
		//use indexOf to test if str[i] is in userLetters
		if(holder.indexOf(str[i]) != -1){
			//if so, then you have used that userLetter so it must be removed 
			//remove holder.indexOf(str[i]) from holder
			holder.splice(holder.indexOf(str[i]), 1);
			//to have match we must remove the number of characters in str from holder
			//compare holders current length to it's original length minus str.length.
			//if the number of chars removed from holder equals str.length then return the string
			if(holder.length === (len - str.length)){
				return str;
			};
			continue;
		};
		//return undefined instead of no match - change codepen
		return;
	}	
}

var main = function(){
	for(var x in textArrayA){
		if(textArrayA[x].length > 4){
			//only run if a string is returned i.e. a match
			if(typeof checkString(textArrayA[x]) == 'string'){
				//alert(checkString(words[x]));
				arrMatches.push(checkString(textArrayA[x]));		
			};
		};
	
	};
	//maybe write a simple for loop to print each answer as a new list item so can use document ready?
	//document.write(arrMatches.sort(function(a, b){return b.length - a.length;}).join('<br>'));	
	arrMatches.sort(function(a, b){return b.length - a.length;})
	for(var y in arrMatches){
		$('<li>').text(arrMatches[y]).appendTo('.posts');
	};
	
};

$('.btn').click(function(){
		userLetters = $('.status-box').val().toLowerCase().split();
		//delete previous list before running new search*******
		main();
		$('.status-box').val('');
		userLetters = [];
	});	
		


//main();
//$(document).ready(main);
