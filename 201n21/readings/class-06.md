# Reading Assignment - 06
### Date 1-26-2021
 
## Summarize the topics in the below chapters
- Duckett JS Book
1. [HTML Chapter 3: Object Literal 100-105](#chapter-3-js)
1. [HTML Chapter 5: Document Object Model 183-242](#chapter-5-js)

## Chapter 3 JS
- Creating an object: Literal Notation
  - Easiest and most popular way rto create objects
  - The object is the curly brace and their contents
    - the period is referred to as the member operator
    - 

- Accessing an object and dot notation
  - 
Practice JS code from book

// Set up the object
var hotel = {
  name : 'Park',
  rooms : 120,
  booked : 77,
  checkAvailability : function() {
    return this.rooms - this.booked; // Need "this" because inside function
  }
};

// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.textContent = hotel.checkAvailability();   // Update HTML with property of the object

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note the security issues on p228-231
*/

## Chapter 5 JS
- DOM Tree
  - Document Object Model - specifies how browsers create a model of an HTML page and how JavaScript can access and update the contents of a web page while browser window.

  - The browser represents the page using DOM tree
  - DOM trees have four types of nodes: document nodes, element nodes, attribute nodes, and text nodes.
  - You can select element nodes by their id or class attributes, by tag name or using CSS selector syntax
  - whenever a DOM query can return more than one node, it will always return a NodeList
  - From an element node, you can access and update its content using properties such as textContent adn innerHTML or using DOM manipulation techniques
  - An element node can contain multiple text nodes and child elements that are siblings 
  - in older browsers, implementation of the DOM in inconsistant (and is a popular reason for using Jquery)
  - Browsers offer tools for viewing the DOM tree


- Textbook example HTML code
<!-- <!DOCTYPE html>
<html>
  <head>
    <title>JavaScript &amp; jQuery - Chapter 5: Document Object Model - Initial Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/c05.css">
  </head>
  <body>
    <div id="page">
      <h1 id="header">List King</h1>
      <h2>Buy groceries</h2>
      <ul>
        <li id="one" class="hot"><em>fresh</em> figs</li>
        <li id="two" class="hot">pine nuts</li>
        <li id="three" class="hot">honey</li>
        <li id="four">balsamic vinegar</li>
      </ul>
    </div>
  </body>
</html> -->

- 