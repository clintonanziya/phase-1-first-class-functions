// Define a function called receivesAFunction
function receivesAFunction(callback) {
    // Take a callback function as an argument and call it
    callback();
}

// Define a function called returnsANamedFunction
function returnsANamedFunction() {
    // Return a named function
    return namedFunction;

    // Define the named function
    function namedFunction() {
        // Function logic here
    }
}

// Define a function called returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        // Function logic here
    };
}
