var displayVal = 0;
var previousVal = 0;
var opt='+';
var result;

 function calculate(operand){

 	displayVal+= operand;
 	document.getElementById('result').value=displayVal;
 	console.log(operand);
 }
 function operation(operator){
 	console.log(previousVal);
 	switch(opt){
 		case '+':
 		result = parseFloat(parseFloat(previousVal)+ parseFloat(displayVal));
 		document.getElementById('result').value=result;
 		break;
 		case '-':
 		result = parseInt(parseInt(previousVal)- parseInt(displayVal));
 		document.getElementById('result').value=result;
 		break;
 		case '/':
 		result = parseInt(parseInt(previousVal) / parseInt(displayVal));
 		document.getElementById('result').value=result;
 		break;
 		case '*':
 		result = parseFloat(parseFloat(previousVal) * parseFloat(displayVal));
 		document.getElementById('result').value=result;
 		break;
 		case '=':
 		document.getElementById('result').value=result;
 		break;
 	}
 	displayVal=0;
 	previousVal=result;
 	opt=operator;

 }
 function clearresult(d1) {
 	displayVal="";
 	previousVal=0;
 	result=0;
 	    document.getElementById('result').value=" "
 }