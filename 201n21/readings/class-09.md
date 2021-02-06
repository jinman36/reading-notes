# Reading Assignment - 09
### Date 2-4-2021
 
## Summarize the topics in the below chapters
1. [HTML Chapter 7 Forms 144-175](#chapter-7-html)
1. [HTML Chapter 14 List, tables and forms](#chapter-14-html)
1. [JS Chapter 6 Events 243-292](#chapter-6-js)

## Chapter 7 HTML
### Forms
 - Form Controls
  - Adding Text
    - Text input
    - Password Input
    - Text area
  - making Choices
    - Radio Buttons
    - checkboxes
    - Drop-down boxes
  - Submitting Forms
    - Submit button
    - image button
  - Uploading Files
    - File upload
- Forms work in the following sequence
  1. User fills in form and submitss info
  1. each form control nmaen is sent to the server along witht eh value the user enters or selects
  1. **The server processes the informaiton using a programming language such as PHP, C#, VB.net, or Java. It may also store the informaiton in a database.**
  1. the server creates a new page to send back to the browser based on the information recieved

- Summary
  - Whenever you want ot collect information from visitors you will need a form, which lives insoide a <form> element
  - information from a form is sent in name/value pairs.
  - Each form control is given a name, and the text the user types in or the values of the options they select are sent to the server.
  - HTML5 introduces new form elements which make it easier for visitors to fill in forms.

## Chapter 14 HTML
### List, tables and forms
- Summary
  - In addition to the CSS properties covered in other chapters which work witht eh contents of all elements, there are several others that are specificaly used to control the appearance of lists, tables, and forms.
  - List markers can be given different appearances using the list-style-type and list-style image properties
  - Table cells can have different borders and sp[acing in differnt browsers, but there are prperties you can use to control them and make them more consistent.
  - Forms are easier to use if the form controls are vertically aligned using CSS.
  - Forms benefit from styles that make them feel more interactive.
## Chapter 6 JS
### Events
- Summary Form
  - Events are the browsers way of indicating when something has happened (such as when a page has finished loading or a button has been clicked).
  - Binding is the process of stating which event you are waiting to happen, and which element you are waiting for that event to happen upon.
  - When an event occurs on an element, it can trigger a JS function. When this function then changes the web page in some way, it feels interactive becuase it has responded to the user.
  - You can y\use event delegation to monitor for events that happen on all of the childran elements.
  - The most commonly used events are W3C DOM events, although there are others in the HTML5 specification as well as browser specific events.