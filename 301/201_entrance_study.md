## Entrance Study Guide

## Table of Contents

- [Quiz 1](#quiz_1)

## Quiz 1

1. Q1 - Which is the correct example of concatenation in JS?

- 'I brush my ' + bodyPart + ' in the morning'

2. What java script tag do you need to add JS to an HTML file

- <script></script>

3. WHich is not a data type

- attribute

4. What command would we wise to create and switch to a new branch called debug in Git

- git checkout -b debug

5. What defines the structure of a webpage

- HTML

6. When writing clean code, which should you avoid/

- no whitespace

7. WHat Unix xommand would create a new directory called thursday

- mkdir thursday

8. Which of these combinations evaluates to true

-
true && false

false && true

false || false

-T- true || true

-T- true || false

-T- false || true

-T- true && true

false && false

9. Analyze code block and find error in JS

- missing opening curly bracket

10. Which is not an example of JS statement

- 1 =! loneliestNumber;
  - chosen because I do not recognize the =!

## Quiz 2

1. HTML attributes and CSS declarations are examples of key-value pairs.

- True

2. Assuming there are no other CSS declarations, and no inline CSS styles, what will the following CSS declaration do to the body element and other HTML elements inside the body tag?

body {
color: white;
background-color: black;
}

- Change background color of all HTML elements within body to black and change color of all text to white

3. Please pick the statement that best describes the default display for the HTML elements listed below:

<span>
<div>
<h1>, <h2>, <h3>, <h3>, <h5>, <h6>
<ul>

- **Not correct** all listed elements, except <ul>, are block elements by default 

4. Which of the following are true about HTML elements with inline display?

- 1. The content of inline elements determines their default width - T
- 2. <p> element will display inline by default - F
- 3. All HTML elements with inline display can be changed to block display - T
- 4. Inline elements flow within the text and do not start on a new line - T
- 5. Inline elements cannot have any margins - F

- 1, 3, 4

5. Which of the following correctly lists the outside-in ordering of the components of the CSS “box model”?

- Margin, Border, Padding, Content

6. Pick the statement that best describes the following JavaScript code

var movies = ["The Matrix", "Frozen"];
typeof(typeof(movies));

- The code will produce valid results as both typeof calls are invoked with valid JavaScript types

7. Branching practice 3/4 correct

## Quiz #3

1. In JavaScript, the "=" operator is used for what purpose?

- to assign a value to a variable

2. What is the purpose of z-index in CSS positioning?

- In a layout with overlapping elements, determines which element sits on top

3. In our guessing game we used a conditional (if/else statement) to check for what/

- If the guessed answer was equivalent to the stored answer

4. What type of CSS positioning is a subset of absolute positioning and positions an element in relation to the browser window?

- Fixed Positioning

5. 
var units = "years";
var davidAge = 65;
var johnAge = 40;
var ageDifference = davidAge - johnAge;
alert("The age difference is " + ageDifference + " " + units);

Why should we make a separate variable for the age difference?

- The code is more readable with an appropriately named variable, rather than including an arithmetic expression inside of parentheses inside of a concatenation.

6. In JavaScript, what is the difference between the "==" and "===" operators?

- "===" means equality without type coersion, meaning the two values being compared must be of the same data type (and value) to return true.

7. What type of CSS positioning takes an element out of normal flow and positions it in relation to its containing element?

- Absolute positioning

8. 
var meows = true;
while (meows = true) {
  console.log('MEOW!');
  meow = false;
}
console.log('Sorry, no meowing allowed.');

- The code will cause an infinite loop and the console will log many many meows.

9. 
var breakfast = ['banana',
                'chicken wing',
                'coffee',
                'eye of newt',
                'pancakes',
                'avocado',
                'fish biscuit',
                'pecan',
                'corn dog'];
var indexOne = 3;
var indexTwo = 4;
var indexThree = 6;
for (var i = indexOne; i < indexThree; i++) {
  console.log(breakfast[i]);
}

What will be the result of the following JavaScript code?

- The following items will log into the console: eye of newt, pancakes, avocado

10. What does the CSS property 'float' do?

- Allows you to take an element in normal flow and place it as for to the left or the right of the containing element as possible