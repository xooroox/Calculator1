function typeField(current){
	//въвеждане на стойности в полето
	var id = current.id; 
	var num = document.getElementById(id).value;
	document.getElementById('field').value += num;
}
function clearField(){
	//clear
	var input = document.getElementById('field').value = '';
}

function calculateNumbers(){
    //изчисления
    var allInput = document.getElementById('field').value;
    var result = eval(allInput);
    
    document.getElementById('field').value = result;
}

function squareRoot(){
	//корен квадратен
	var allInput = document.getElementById('field').value;
	var square = Math.sqrt(allInput); 
	document.getElementById('field').value = square;
}
function backNum(){
	//функцията за триене на последното число (BACKSPACE)
	var allInput = document.getElementById('field').value;
	var arr = allInput.split('');
	arr.pop();	
	var result = arr.join('');
	document.getElementById('field').value = result;
}
