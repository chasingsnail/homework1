/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	/** Fill in here **/
	var p = A
	
	while(p.tail !== null) {
		p = p.tail
	}

	p.tail = B
	return A
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
	var i = 0
	var p = L
	var resultArr = []
	while (i < start + len && p !== null) {
		if (i >= start) {
			resultArr.push(p.head)
		}
		p = p.tail
		i ++
	}
	if (resultArr.length < len || !resultArr.length) {
		return new Error('unexpected input of start or len')
	}
	return List.list(resultArr)
	
}
