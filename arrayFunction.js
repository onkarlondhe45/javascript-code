<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>String Manipulation</title>
</head>
<body>
	 
	<h2> Array Functions</h2>
	<hr>
	<hr>
	
	<br>
	
	<script>
		
		
		 
			let numList = [0,500, 35, 520, 800, 1500,1800,2000];

			// sort function

			document.write("sort function demo");
			document.write("<br>");


			let sortList = numList.sort((a,b)=>{
				return a-b;
			});

			document.write(sortList);

			document.write("<br>");
			document.write("<br>");



			// forEach function

			document.write("forEach function demo");
			document.write("<br>");


			numList.forEach(function(value){
				document.write(value+" ");
			})

			document.write("<br>");
			document.write("<br>");


			// map function

			document.write("map function demo");
			document.write("<br>");

			let transformedArray = numList.map(function(value){
				return value/2;
			})

			document.write(transformedArray);

			document.write("<br>");
			document.write("<br>");

			document.write("some function demo");
			document.write("<br>");

			let isAnyNumberGreaterThan400 = numList.some(function(value){
				return value>400;
			});

			document.write(isAnyNumberGreaterThan400);

			document.write("<br>");
			document.write("<br>");

			document.write("every function demo");
			document.write("<br>");

			let isAnyNumberGreaterThan300 = numList.every(function(value){
				return value>400;
			});

			document.write(isAnyNumberGreaterThan300);

			document.write("<br>");
			document.write("<br>");

			document.write("filter function demo");
			document.write("<br>");

			let array = [10,21,30,41,50,61];

			let sum = array.filter(function(value){
				return value%2===0;
			})

			document.write(sum);

			document.write("<br>");
			document.write("<br>");

			document.write("reduce function demo");
			document.write("<br>");

			let num1 = [1,2,3,4,5];

			let reduceDemo = num1.reduce((a,b)=> a+b,0);
			document.write(reduceDemo);
		
		
	</script>
	
</body>
</html>