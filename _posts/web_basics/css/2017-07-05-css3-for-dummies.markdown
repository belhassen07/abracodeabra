---
title : "CSS3 Animation For Dummies"
author: "Belhassen Chelbi"
layout: post
permalink: /css/css3-for-dummies
category: css
post_description: "Have you ever wondered how to make an HTML element dance?
Well, after reading this you'll be ready to make them dance thanks to CSS3 animation. Are you ready? "
authorImage: https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/13920861_1021182767980753_951566742596259721_n.jpg
---


## **Have you ever wondered how to make an HTML element dance?**

Well, after reading this you'll be ready to make them dance thanks to CSS3 animation. Are you ready?
# Animation declaration
First, you have to declare the animation.

***What is declaring?**
Declaring is building all the process of the animation, it's like a dance, you'll say that on step one I'll do the rotate move , on step two: I'll go to the right with 200px for example, it's where you create your own dance.
## How to declare? (NOW STOP TALKING ABOUT DANCING AND SHOW ME SOME CSS!!)
okay, calm down, now that you get the whole idea, I'll tell you how to declare it:
 ```css
@keyframes dance {
 0%{
  transform: rotate(30deg)
 }

100%{
   transform: rotate(60deg);
   background: rgb(41, 128, 185);
}
```
Here's an example of a stupid animation called dance.
we write @keyframes + the name you choose for your animation (I chose dance as I'm obsessed with dancing since the beginning of this post), then you open your curly braces {} and inside the animation you define your steps.
You can write as many steps as you want 10% 20% 30% .. maybe even 0.1% 0.2% 0.3%.. but that won't be necessary (hah!).
Inside the steps, play with css like you want as you can use what ever CSS property you want to.
Now, before going to the next step to make your animation works, I've just a little notice:
0% => from.
100% => to.
that's it! what's that? well, to make an animation with only two steps, you can use 0% and 100% or "from" and "to" instead like that: 
```css
 @keyframes dance {
 from{
   transform: rotate(30deg)
 }

 to{

   transform: rotate(60deg);
   background: rgb(41, 128, 185);
 }
```
So if you see something like that you'll understand it (I know you will because it's obvious and readable ,but I thought I should mention it)
Now, after creating your dance , will the element dance ?
HELL NO!
You've just wrote the steps of the animation but you didn't call it.
# Calling the animation
I'll just write a code example and I'll explain what's not obvious!
```css
 your-element{

   animation-name:dance;
   animation-duration:1s;
   animation-delay:2s;
   animation-iteration-count: infinite;
 }
```
This is how to call your animation (I didn't mention all animation properties but I'll do later).
 First, **animation-name** is to tell what animation should work and make your element dance. 
 
 Then, **animation-duration** (in seconds) is obvious (the time the dance should take).
 
 **animation-delay** (in seconds) : the time when the animation is holding up before starts working (it's like the time you wait the music to start dancing).
 
 **animation-iteration-count** : is how many times you want the animation to repeat itself: 2, 4 , 5 ? or infinite : the animation repeats itself ∞ times! 
# animation other properties
**animation-timing-function** : it looks like as a frightening name as Voldemort but it's nothing but a transition like property and here are the possibilities:
```css 
your-element {animation-timing-function: linear}
your-element {animation-timing-function: ease}
your-element {animation-timing-function: ease-in}
your-element {animation-timing-function: ease-out}
your-element {animation-timing-function: ease-in-out}
```
so, **animation-timing-function** specifies how the speed will be from the beginning of the dance to the end :

**animation-timing-function: linear**  defines a constant speed from the beginning of the animation until the end.

 **animation-timing-function: ease** makes the animation goes first then it will goes as fast as Bolt then it goes slow again like the beginning.
 
 **animation-timing-function: ease-in**  : slow beginning.
 
 **animation-timing-function: ease-out** : slow ending.
 
 **animation-timing-function: ease-in-out** : it's the cocktail of the last two properties (slow beginning and slow ending).
 
 **animation-direction** like its name it defines the direction of the animation:
Do you remember the first time you saw a video playing in reverse and you were fascinated?
well, you can do that too here:

 **animation-direction: reverse**  :The animation will begin from the last steps to the first ones.
 
 **animation-direction:alternate** : The animation will be reversed the first repetition then it goes normal (from the first steps to the last ones) then reverse then normal until there's no other animation repetition (animation-iteration-count).

 **animation-play-state** : it takes whether running(default) or paused (i think it's more than obvious).
## animation shorthand
 You can merge all the properties in a shorthand (I only recommend using this after a quite good practice duration).
```css
   your-element{
   animation: duration | timing-function | delay | 
   iteration-count | direction | fill-mode  | play-state | name}

 for example: 
   your-element{
   animation: 2s ease-in 1s 8 reverse both paused dance}
```
Now you know how to create your own animation and how to call it, I'll give you a simple animation I've made called the dance (for sure) , edit it as you like !

[My simple Codepen animation](http://codepen.io/belhassen_chelbi/pen/PpVZbJ)

[a better one?](https://codepen.io/belhassen_chelbi/pen/mWvEBJ)
> ***Make yours too and dance with it !***