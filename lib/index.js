'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isNegativeInteger = require( 'validate.io-negative-integer' );


// IS NEGATIVE INTEGER ARRAY //

/**
* FUNCTION: isNegativeIntegerArray( value )
*	Validates if a value is a negative integer array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a negative integer array
*/
function isNegativeIntegerArray( value ) {
	var len, i;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( i = 0; i < len; i++ ) {
		if ( !isNegativeInteger( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isNegativeIntegerArray()


// EXPORTS //

module.exports = isNegativeIntegerArray;
