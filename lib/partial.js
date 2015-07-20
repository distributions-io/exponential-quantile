'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( lambda )
*	Partially applies rate parameter `lambda` and returns a function for evaluating the quantile function for a Exponential distribution.
*
* @param {Number} lambda - rate parameter
* @returns {Function} quantile function
*/
function partial( lambda ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Exponential distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
