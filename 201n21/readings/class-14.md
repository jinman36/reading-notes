# Reading Assignment - 14A / B
### Date 2-23-2021
 
## Summarize the topics in the below chapters
1. [What Google Learned From Its Quest to Build the Perfect Team](#google)
  - [What Google Learned From Its Quest to Build the Perfect Team](https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html)

1. [Read this article on CSS Transforms](#css-transform-property)
  - [CSS Transforms](https://learn.shayhowe.com/advanced-html-css/css-transforms/)

1. [Read this article on CSS Transitions & Animations](#CSS-transitions-&-animations)
  - [Read this article on CSS Transitions & Animations](http://learn.shayhowe.com/advanced-html-css/transitions-animations/)

1. [8 simple CSS3 transitions that will wow your users](#CSS3-transitions)
  - [8 simple CSS3 transitions that will wow your users](http://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users)

1. [6 Buttons animated](#6-Buttons-animated)
  - [6 Buttons animated](http://codepen.io/retyui/pen/ByoaXV)

1. [CSS3 Animations: Keyframes](#CSS3 Animations:-Keyframes]
  - [CSS3 Animations: Keyframes](http://codepen.io/akshaychauhan/pen/oAfae)

  1. [404](#404)
  - [404](http://codepen.io/kieranfivestars/pen/MYdQxX)

  1. [Pure CSS Bounce Animation](#Pure-CSS-Bounce-Animation)
  - [Pure CSS Bounce Animation](http://codepen.io/dp_lewis/pen/gCfBv)


# Google
- Project Aristotle was aimed at researching team at Google, in hopes, to find a coorelation of what made great teams function better than others. This information could then be used towards teh ‘‘employee performance optimization’’ movement and help the  entire organization become a better more productive machine.

- The interesting take aways for me include the following:
  - One engineer, for instance, had told researchers that his team leader was ‘‘direct and straightforward, which creates a safe space for you to take risks.’’

  - psychological safety
    - conversational turn-taking and empathy
    - ‘As long as everyone got a chance to talk, the team did well. But if only one person or a small group spoke all the time, the collective intelligence declined.’
    
# CSS Transform Property
- CSS3
  <!-- div {
  -webkit-transform: scale(1.5);
     -moz-transform: scale(1.5);
       -o-transform: scale(1.5);
          transform: scale(1.5);
} -->

- The vendor prefixes are encouraged for all production environments for the commands in this chapter 

### 2D Transforms
- The transform: rotate will rotate a value from 0-360° (positive values will rotate counterclockwise - default point of rotation is the center of the element)

### 2D Scale
- The scale property allows you to chage the appeared size of an element

### 2D Translate
- works like relative postioning - pushing and pulling an elemetn in differrnt directions without interuppting the normal flow of the document.
  - Use translateX - Horizontal axis
  - user translateY - Vertical Axis
### 2D Skew
  - Skew is used to distort elemetns on the horizontal, and vertical axis
    - skewX(5deg);
    - skewY

### Combining transform properties
 - this is possible but can be tricky
 - Use a transform matrix - similar to the cube matrix example below:
 2D Cube Demo
<!-- HTML
<div class="cube">
  <figure class="side top">1</figure>
  <figure class="side left">2</figure>
  <figure class="side right">3</figure>
</div>

                
CSS

.cube {
  position: relative;
}
.side {
  height: 95px;
  position: absolute;
  width: 95px;
}
.top {
  background: #9acc53;
  transform: rotate(-45deg) skew(15deg, 15deg);
}
.left {
  background: #8ec63f;
  transform: rotate(15deg) skew(15deg, 15deg) translate(-50%, 100%);
}
.right {
  background: #80b239;
  transform: rotate(-15deg) skew(-15deg, -15deg) translate(50%, 100%);
} -->
              
### Transform Origin
- the transform-origin property can accept one or two values. When only one value is specified, that value is used for both the horizontal and vertical axis. If two values are specified, the first is used for the horizontal and the the second for th evert axis.




## CSS Transitions & Animations


# CSS3 transitions