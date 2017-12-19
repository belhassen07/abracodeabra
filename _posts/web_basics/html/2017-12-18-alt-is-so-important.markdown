---
title : "Why is The 'alt' attribute so important for images?"
author: "Belhassen Chelbi"
layout: post
permalink: /html/why-alt-attribute-is-important
category: html
description: "Maybe it seems basic, but I remember when I used to ignore this attribute when Writing an image tag, The alt attribute has to be there in the image tag and it should be describing so  people with disabilities know what's there with screen readers.  "
authorImage: /images/belhassen.jpg
---

Maybe it seems basic, but I remember when I used to ignore this attribute when Writing an image tag. You shouldn't do that for the following reasons: 

# It is shown when the image doesn't exist [really basic]

Sometimes you copy the link of an image from another site and you put it in the source attribute(src)  like this from example 
```html
<img src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-

9/23844430_1595292810569743_8608995995175264766_n.jpg?

oh=4ec53eb36555985367848ef693bd824f&oe=5ABD4CDC" >
```
This is my cover picture of [my Facebook profile](https://www.facebook.com/belhassen07) , and let's I used it in my website, then I want to delete  it from facebook, so t would be deleted too in my website, it will give me something like this: 

![image not found](https://thepracticaldev.s3.amazonaws.com/i/3drxlbd8t5ubut0x7t9e.PNG)
The user won't even know what the missing is even describing so  we need to add the "alt" property like this

```html
<img src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-

9/23844430_1595292810569743_8608995995175264766_n.jpg?

oh=4ec53eb36555985367848ef693bd824f&oe=5ABD4CDC" 

alt="minimal design"> 
```

this gives this: 

![minimal design](https://thepracticaldev.s3.amazonaws.com/i/o3fybhlhwlvjjyj83c50.PNG)

so it doesn't save your life but at least the users knows what's hidden.

# Accessibility matters 

"web accessibility means that people with disabilities can use the web" 
So, we should work on accessibility when making websites, it's just awesome to provide EQUALITY in this world. 

The alt attribute has to be there in the image tag and it should be describing so  people with disabilities know what's there with screen readers. 
Facebook uses AI to recognize what does the image contain and puts the description automatically in the value of the alt attribute.

For example, this is an image one year ago with two of my friends : 

![with my friends](https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/16473183_979309875534963_475963488166732354_n.jpg?oh=f12eabea3c13ec07fe4f152cb522ab8c&oe=5AD202B3) 

in the alt attribute I found : 'Image may contain: 3 people, eyeglasses'. and yeah, the eyglasses are mine. This was auto-generated after the image was being uploaded, and this is awesome, everyone can know what's in there and it will be more awesome if you provide the alt yourself, you the human.

# For Search engine optimization sake

Search engines love alt, that means they want to know information about your image, so they look at alt attribute value; so if you care about SEO, add the alt.
you can learn more basic things about SEO [in this youtube playlist course](https://www.youtube.com/watch?v=bpE-bIX1z9M&list=PLWjCJDeWfDddFOJYmcgNnUIhUHcsNEBTd)

 **So yes, alt matters!**
