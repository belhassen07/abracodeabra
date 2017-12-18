---
title : "What are CSS prefixes -moz- , -webkit- .. ?"
author: "Belhassen Chelbi"
layout: post
permalink: /css/css3-prefixes
category: css
post_description: "Have you ever tried to preview your HTML-CSS code on different browsers and you found out that the preview isn’t the same ? Why that happens? "
authorImage: https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/16266301_1193188357446859_2815577307034812969_n.jpg?oh=f048a6b28a8ce13e87529db5ae982f10&oe=5AD012E2
---

### Have you ever tried to preview your HTML-CSS code on different browsers and you found out that the preview isn’t the same ?
***Why that happens?***

Well, your HTML — CSS code won’t be interpreted by Google chrome the same way does Opera, Mozilla Firefox, Internet Explorer or any other X browser. And here’s where the problem of compatibility shows off. In simple words, what we mean by compatibility is that the code you wrote must be understandable by all browsers or atleast by the major browsers (Google Chrome,IE, Mozilla Firefox, Opera , Ms Edge..) so it can be previewed the same way. Here where comes the magic of prefixes.
Mainly, the css properties that should be prefixed are the CSS3 new properties like border-radius, animation, flex-box … (I will tell you later where to find the whole list of css properties that should be prefixed).

*What are the prefixes?*

*  -webkit- (Chrome, Safari, newer versions of Opera.) .
*  -moz- (Firefox).
*  -o- (Old versions of Opera) .
*  -ms- (Internet Explorer) .

Now, let’s take an example to see how things works, how about chossing hmm .. the transform property? it looks like a quite good example. To see if this CSS3 property should be prefixed or not , we got to go to shouldiprefix.com and type transform , what we should get is this:

![transform](http://i.imgur.com/NHaAXKA.png)

So, this cool helpful website tells us that we should prefix the transform property with -webkit- for Chrome with a version less than 36 and iOS < 9.2 .. and -ms- for IE9. What we learn from here is thatwe don’t have to add all 4 prefixes sometimes, here we only added two .The filter property only require one prefix wich the -webkit- one as the picture below show:

![filter](http://i.imgur.com/UMKMxGk.png)

You can visit [shouldiprefix.com](http://shouldiprefix.com/) and see what other properties should be prefixed and what properties don’t need to be prefixed anymore as the compatibility issue has been solved.
Another great ressource for this topic is caniuse.com wich “provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.” as they said.

![caniuse](http://i.imgur.com/cnp9Nj3g.png)

Finally, I insist that you should take care of the compatibility issue before submitting your work to the client or before launching your website because you don’t know what browser other people use. And yes, there still people using Internet Explorer and you don’t want your website to seem messy .
You may would like to use the autoprefixer plugin to solve this problem dynamicly
![autoprefixer](http://i.imgur.com/Ukow8W0.png)

*Sources* : [MDN](http://https://developer.mozilla.org/fr/) , [caniuse.com](http://caniuse.com/#), [shouldiprefix.com](http://shouldiprefix.com/)