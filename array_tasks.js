var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	 },

	insertAt: function (arr, itemToAdd, index) {

			arr.splice(index, 0, itemToAdd);
			return arr;
	},

	square: function (arr) {
			return arr.map(item => item * item);
	},

	sum: function (arr) {
			let reducer = function(curr, next){
				return curr + next;
			}
			return arr.reduce(reducer,0);
	},

	findDuplicates: function (arr) {
			var uniqueArray = [];
			var duplicatesArray = [];
			arr.forEach(function(element) {
				if (!uniqueArray.includes(element)) {
					uniqueArray.push(element);
				}
				else if (!duplicatesArray.includes(element)) {
					duplicatesArray.push(element);
				}
			})
			return duplicatesArray;
	},

	removeAndClone: function (arr, valueToRemove) {
			let newArray = arr.filter(element => element !== valueToRemove);
			return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexArray = [];
		arr.forEach(function(element, index) {
			if (element === itemToFind) {
				indexArray.push(index);
			}
		})
		return indexArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evensArray = arr.filter(element => element % 2 === 0);


		// var squaredEvens =  evensArray.map(item => item * item);
		// let reducer = function(curr, next){return curr + next;}
		// return squaredEvens.reduce(reducer, 0);

		var squaredEvens = this.square(evensArray);
		return this.sum(squaredEvens);

	}

}

module.exports = arrayTasks
