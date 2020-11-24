const arr = [ 1, 2, 3, 4, 3, 1, 2, 5, 6, 7, 5, 6, 8, 7 ];
const reducer = (listCount, value) => {
	listCount[value] = value in listCount ? listCount[value] + 1 : 1;
	return listCount;
};
const countElement = arr.reduce(reducer, {});
console.log(countElement);
