'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */


// Ideas for rules : Positive values / Negative values / odd values / even values /
// specific values / bigger than five /

// if the person object has hair property
validator.hasProperty = (person,property) => {
  return person.hasOwnProperty(property);
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */

validator.isNumber = (input) =>{
  return typeof input === 'number';
};


/**
 * Is this a object?
 * @param input
 * @returns {boolean}
 */

validator.isObject = (input) =>{
  return typeof input === 'object';
};

/**
 * Is this a array?
 * @param input
 * @returns {boolean}
 */

validator.isArray = (input) =>{
  return Array.isArray(input);
};

/**
 * Is this a negative number?
 * @param input
 * @returns {boolean}
 */

validator.notZero = (num,check) =>{
  if(check === 'negative' && num < 0){
    return true;
  }else if(check === 'positive' && num > 0){
    return true;
  }else{
    return false;
  }
};
