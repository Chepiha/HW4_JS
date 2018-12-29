// PRACTISE
// 1. Напишите функцию, которая принимает массив в качестве аргумента. Используя slice (), извлеките информацию из массива аргументов и верните новый массив, содержащий элементы «warm» и «sunny».
        
//        var array = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];
//         function wather(array) {
//             var hot = array.slice(2,4);
//             return hot;
//         }
//         console.log(wather(array));

// 2. Напишите функцию подсчета градусов Фаренгейта при входящем параметре температуры в цельсиях.
// Алгоритм пересчета из градусов Цельсия в градусы Фаренгейта - это температура в градусах Цельсия, умноженная на 9/5 плюс 32.  
//         var C = +prompt("Градусы Цельсия:");

//             function deg(faringate) {
//              var cel = faringate*9/5+32;
//              return cel;
//         }

//         console.log(deg(C));

// 3. Напишите функцию которая бы переворачивала предоставленную строку
// Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его. 
// Ваш результат должен быть строкой.
// "something"
        
//         var param = 'something';
//         function rev(str) {
//             var arr = str.split('');
//             var reversed = arr.reverse();
//             var newStr = reversed.join();
//             return newStr;
//         }

//         console.log(rev(param));

// 4. Напишите функцию которая возвращает длину самого длинного слова в предложении. 
// Ваш ответ должен быть числом.
// "The quick brown fox jumped over the lazy dog"
// 	var santense = 'The quick brown fox jumped over the lazy dog';
// 	function getMax(str) {
// 		var max = 0;
// 		var arr = str.split(' ');
// 		for (var i=0; i < arr.length; i++) {
// 			if (arr[i].length > max){
// 				max = arr[i].length;
// 			}
// 		}
// 		return max;
// 	}
// 	document.write(getMax(santense));

// HOME WORK 4!!!
// 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
//        Функция должна расчитывать результат операции, исходя из переданного ей знака. 
//        Функция должна проверять корректность введенных чисел и знака операции.
//        Все аргументы для функции принять от пользователя.

// function calculatePlus(operand1, operand2) {
// 	return operand1 + operand2;
// }

// function calculateMinus(operand1, operand2) {
// 	return operand1 - operand2;
// }

// function calculateMultiply(operand1, operand2) {
// 	return operand1 * operand2;
// }

// function calculateDivide(operand1, operand2) {
// 	return operand1 / operand2;
// }

// var operand1 = +prompt("Введите первое число: ");
// var sign = prompt("Введите знак арифметической операции: + - * /");
// var operand2 = +prompt("Введите второе число: ");
// var result;

// switch (sign) {
// 	case "+":
// 		result = calculatePlus(operand1, operand2);
// 		break;
// 	case "-":
// 		result = calculateMinus(operand1, operand2);
// 		break;
// 	case "*":
// 		result = calculateMultiply(operand1, operand2);
// 		break;
// 	case "/":
// 		result = calculateDivide(operand1, operand2);
// 		break;
// 	default:
// 		document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.</p>");
// }

// if (result != undefined) {
// 	document.write("Результат операции: " + result);
// }

//2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем

// function pow(x,y){
// 	var result = x;
// 	for (var i = 1; i < y; i++){
// 		result *= x
// 	}
// 	return result;
// 	}
// var x = +prompt ("Введите любое число :")
// var y = +prompt ("Введите степень, в которую будет возведено Ваше число :")
	  
// 	if (y <= 1) {
// 	alert('Error, введите целую степень, большую 1');
// 	} 
// 	else {
// 	alert(pow(x, y));
// 	}


//3.  Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:  
//         "var computerChoice = Math.random();
//         alert(computerChoice);".
//         Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
	// var myChoice = +prompt("Введите число от 0 до 1")
	// var computerChoice = Math.random();
	// 	alert(computerChoice)
	// 	if (myChoice>computerChoice) {
	// 		alert("YOU WiN");
	// 	}
	// 	else { alert("COMPUTER WIN") }
		
//4. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.
// 1 способ
	function fib(n) {
		return n <= 1 ? n : fib(n - 1) + fib(n - 2);
	}
			var n = +prompt ('Введите число :');	
		alert(fib(n));

// 2 способ
	function fib(n) {
		var a = 1;
		var b = 1;
		for (var i = 3; i <= n; i++) {
			var a = b;
			var b = c;
			var c = a + b;
		}
		return b;
		}
		var n = +prompt ('Введите число :');	
		alert(fib(n));