var table = {
	upto : 20,
	calc_table : function()
	{
		var multipliers = [1,2,3,4,5,6,7,8,9,10];
		var arr_len = multipliers.length;
		for (var i = 1; i <= this.upto; i++) {
			for (var j = 0; j < arr_len; j++) {
				console.log(multipliers[j] + " * " + i + " = " + (multipliers[j]*i));
				//console.log("hey buddy " + i );

			}
			console.log("\n");
		}
	}
}
table.calc_table();