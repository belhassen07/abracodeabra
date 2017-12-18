---
title : "Why we shouldn't use jQuery anymore"
author: "Belhassen Chelbi"
layout: post
permalink: /javascript/WhyweshouldntusejQueryanymore
category: plugins
post_description: "Eminem said about a developer who uses jQuery :There's vomit on his sweater already, mom's spaghetti
You don't need Eminem to say that about you right? "
authorImage: https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/16266301_1193188357446859_2815577307034812969_n.jpg?oh=f048a6b28a8ce13e87529db5ae982f10&oe=5AD012E2
---


## Sometimes You don't need it !

Sometimes, when building a website that doesn't need a lot of javascript code, I find myself including jQuery in the project directory, why? because I used to use it, it makes life easier. But, I was working on a  project and in the index.js I wrote 5-6 lines of jquery code (so I can make an accordion, so it was just addClass , removeClass ..).

So what I did is that included a 93.5 ko file so I can write 5 lines of easy code.So performance matters right? I tried to write it in vanilla and I wrote 20 line of code (It can be more optimized) and the file was less than 1 ko, so I saved 92-93 ko which does matter.

So I took more time and it was a bit tricky because it was vanilla so it was building the jquery methods and it improves me as a developer.

## Vanilla isn't that bad

Writing vanilla javascript is programming, it seems basic right? But the reality is when I write jQuery code I don't feel like I'm really programming, it's just throwing spaghetti code.

## avoiding Spaghetti code
```javascript
console.log("testing spaghetti")
```

Throw some code and it will work, but are you going to be a better developer if you do that ? of course not. Imperative programming with jquery is really the worst thing I've ever experienced even if I made things work. It's hard to read some spaghetti code after one month of writing it. 

So are you someone who cares about performance(and even if jQuery isn't that heavy) and who wants to develop his knowledge in programming in js, stop using jQuery. 

## I'm learning React , what I feel

Of course, I won't compare jQuery and React but when working with React I loved how we can divide the application building components and every component has a precise function to do... It was a revolution in my Js knowledge. I'll talk about my "coup de foudre" with React in a later post maybe, but what I wanted to say is that jQuery is a really spaghetti encouraging library that you need to avoid because it's harmful.

and Eminem said about a developer who uses jQuery :"There's vomit on his sweater already, mom's spaghetti"
You don't need Eminem to say that about you right? 