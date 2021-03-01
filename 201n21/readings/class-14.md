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

1. [CSS3 Animations: Keyframes](#CSS3-Animations-keyframes]
  - [CSS3 Animations: Keyframes](http://codepen.io/akshaychauhan/pen/oAfae)

  1. [404](#404)
  - [404](http://codepen.io/kieranfivestars/pen/MYdQxX)

  1. [Pure CSS Bounce Animation](#Pure-CSS-Bounce-Animation)
  - [Pure CSS Bounce Animation](http://codepen.io/dp_lewis/pen/gCfBv)


# Google
- Project Aristotle was aimed at researching team at Google, in hopes, to find a coorelation of what made great teams function better than others. This information could then be used towards the ‘‘employee performance optimization’’ movement and help the  entire organization become a better more productive machine.

- The interesting take always for me include the following:
  - One engineer, for instance, had told researchers that his team leader was ‘‘direct and straightforward, which creates a safe space for you to take risks.’’

  - psychological safety
    - conversational turn-taking and empathy
    - ‘As long as everyone got a chance to talk, the team did well. But if only one person or a small group spoke all the time, the collective intelligence declined.’
    
# CSS Transform Property
- CSS3
```CSS
div {
  -webkit-transform: scale(1.5);
     -moz-transform: scale(1.5);
       -o-transform: scale(1.5);
          transform: scale(1.5);
}
```
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
HTML
```HTML
<div class="cube">
  <figure class="side top">1</figure>
  <figure class="side left">2</figure>
  <figure class="side right">3</figure>
</div>
```
                
CSS
```CSS
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
}
```              
### Transform Origin
- the transform-origin property can accept one or two values. When only one value is specified, that value is used for both the horizontal and vertical axis. If two values are specified, the first is used for the horizontal and the the second for th evert axis.

# CSS Transitions & Animations
- Transistion Psudo classes - :hover, :focus, :active, :target

- transition related properties - transition-property, transition-duration, transition-timing-function, and transition-delay

- Not all Properties may be transitioned, only properties with an identifiable halfway point.

    - background-color
    - background-position
    - border-color
    - border-width
    - border-spacing
    - bottom
    - clip
    - color
    - crop
    - font-size
    - font-weight
    - height
    - left
    - letter-spacing
    - line-height
    - margin
    - max-height
    - max-width
    - min-height
    - min-width
    - opacity
    - outline-color
    - outline-offset
    - outline-width
    - padding
    - right
    - text-indent
    - text-shadow
    - top
    - vertical-align
    - visibility
    - width
    - word-spacing
    - z-index
  
# CSS-transitions-&-animations
###  Fade - in
```CSS
.fade
{
        opacity:0.5;
}
.fade:hover
{
        opacity:1;
}
```
### Change COlor
```CSS
.color:hover
{
        background:#53a7ea;
}
```
### Grow and SHrink
```CSS
.grow:hover
{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
}
```
```CSS
.shrink:hover
{
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
}
```

### Rotate Elements
```CSS
.rotate:hover
{
        -webkit-transform: rotateZ(-30deg);
        -ms-transform: rotateZ(-30deg);
        transform: rotateZ(-30deg);
}
```
- Additonal rotation
- skew
- scaleX(1.5)

### Square to circle
```CSS
.circle:hover
{
        border-radius:50%;
}
```
### 3D Shadow
```CSS
.threed:hover
{
        box-shadow:
                1px 1px #53a7ea,
                2px 2px #53a7ea,
                3px 3px #53a7ea;
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
}
```
### Swing 
- requires all of the following - then the lower css tag to identify the hover element for this feature
```CSS
@-webkit-keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
       transform: translateX(-5px);
    } 
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
@keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
```
```CSS
.swing:hover
{
        -webkit-animation: swing 1s ease;
        animation: swing 1s ease;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
}
```
### Inset Border
```CSS
.border:hover
{
        box-shadow: inset 0 0 0 25px #53a7ea;
}
```

# Animated buttons in codepen are fun!