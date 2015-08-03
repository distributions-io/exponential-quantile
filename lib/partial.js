'use strict';

// FUNCTIONS //

var ln = Math.log;

// PARTIAL //

/**
* FUNCTION: partial( lambda )
*	Partially applies rate parameter `lambda` and returns a function for evaluating the quantile function for an exponential distribution.
*
* @param {Number} lambda - rate parameter
* @returns {Function} quantile function
*/
function partial( lambda ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for an exponential distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
		return - ln( 1 - p ) / lambda;
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
