'use strict';

// FUNCTIONS //

var ln = Math.log;


// QUANTILE //

/**
* FUNCTION: quantile( p, lambda )
*	Evaluates the quantile function for a Exponential distribution with rate parameter `lambda` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} lambda - rate parameter
* @returns {Number} evaluated quantile function
*/
function quantile( p, lambda ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	return - ln( 1 - p ) / lambda;
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
