# Day 12
### Date 2-6-2021
  
## Table of Contents
1. []()

## Links

## Vocabulary

Event Handling

- Event: Fired or Raised
- Code: triggered
- Event Types: 
  - click (clicking on page)
  - submit (when a form button clicked)
  - hover/ mouseover
  - on page loader
- Event Listner: code that is going to TRIGGER when an event is FIRED
- Bind: bind or tether an event listener TO the event
- Event Handler: code that runs in response to event

### DOM Level 2 event Handlers
- convention - these live at the bottom of JS page
- in js
    - element.addEventListener('event', functionName)
    - example: myContainer.addEventListener('click', handleClick)
#### Welcome to Asynchronous code!
- Code that runs out of order:)


## event bubbling 
- this is used often - see diagram (assuming I can get it in my notes, lol)
    - main->section->article
    - when you click on anything within the container, the event bubbles out to the entire container
      - we can 'listen' to the 'main' element, and 'hear' when the article was clicked.

## event capturing - no example "it's useful sometimes"
  - this works opposite from bubbling because it only listens to one event

## Call Back Function



### Things to avoid with event handling
- <article onClick='handleClick'> 
- element.onEvent='functionName;button(document.getElementByID('button')).onSubmit = handleEvent...etc

## Partner Power Hour
- Who was the speaker(s) and what company or companies were they from? What was the topic of the talk?

- Share 1 or 2 ways the speaker’s information will change your approach to your career transition.

- Do you have any other key take-aways, or observations about this Partner Power Hour?



- [Main Page](https://jinman36.github.io/reading-notes/)