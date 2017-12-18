---
title : "ADAVANCED JAVASCRIPT: THE WEIRD CLOSURES"
author: "Belhassen Chelbi"
layout: post
permalink: /javascript/closures
category: js
post_description: "Since I’ve started learning javascript, I heard a lot that it’s a really weird language, but I didn’t really get this weirdness until I discovered the closures.
What’s a closure? "
authorImage: https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/16266301_1193188357446859_2815577307034812969_n.jpg?oh=f048a6b28a8ce13e87529db5ae982f10&oe=5AD012E2
---
Since I’ve started learning javascript, I heard a lot that it’s a really weird language, but I didn’t really get this weirdness until I discovered the closures.
What’s a closure?
A closure is a function that returns another function, wich is very simple as a concept and we’ll see a little example that may clarify things for us:

 ![example](https://cdn-images-1.medium.com/max/800/1*sMdDEw38_rXo6T-UqrFHsg.png )

first exampleWell, there’s nothing fancy here : we call message(‘hi javascript lovers’) and we assign it to a variable msg , this variable is now a copy of the inner function (wich is returned by an outer function with an argument:

“Hi javascript lovers”, that means if we call msg() , it will return the passed argument ich is the message ”Hi javascript lovers”. To make sure that’s true, we tried that with document.write().

Now, the example I’ve shown isn’t maybe that hard and may not show what’s weird in the closure , just you have to keep in mind that it returns a function (and this last function can return what ever you want).

Now, let’s see another example that shows us how weird and a beautiful a closure is .

![example](https://cdn-images-1.medium.com/max/800/1*Evk2nI7JjEwLYvWIcIZO8g.png )

Here, the outer and the inner function have different arguments, The outer was assigned to the variable a with a parameter 2, so a is an inner function of an outer function with a parameter x wich is here 2 .

Now we need to call with other parameter y that we choose (here 3), so a(3) will multiply 2 (argument of outer function) and 3 (argument of the inner function). Then we’ve assigned it to a variable b and wrote that with document.write to see the result wich is of course 6 .

The closure as you see is weird and require some time to be fully understood.
Practise what you’ve learnt , and you discover more about closures on MDN.

