//20.Return if given number is prime
    var number=7;
		var i,flag=0;
		const prime=(number) => {
		for(i=2; i <= number/2; i++)
		{
			if(number%i == 0)
			{
				flag = 1;
				break;
			}
		}
		if(flag == 0)
		{
			console.log("The input number is Prime");
		}
		else
		{
			console.log("The input number is not Prime");
		}}
		//checking inputs
		const nums=(n) => {
			return((typeof number=='number') ? prime(number) : "Expected array.got something else");
		};
				var res=nums(number);//calling the nums() function
  
//conclusion
//checked with different inputs like "123",[456],boolean values,array.
//input is number like 7 => output is The input number is prime
//input is other than number => output is "Expected array.got something else"

    