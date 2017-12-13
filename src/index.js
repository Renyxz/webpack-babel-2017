// CSS
import './css/styles.css';


// Test module
import test from './test_module/test';


// Greeting
const greeting = () => {
    console.log('Hello World! What is your name?');
};

greeting();


// Call test function from test module
test();