---
title : "How to make an animation-delay before EVERY repetition?[Animation trick]"
author: "Belhassen Chelbi"
layout: post
permalink: /css/animationDelay
category: css
post_description: "You’re probably here because you faced a little problem with making your animation wait some time before it repeats itself again. well, the animation-delay property doesn’t solve the problem because its function is to create a delay of what ever seconds you want before the first repetition of the animation occurs, then , there’s no delay.But how to solve that  "
authorImage: https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/13920861_1021182767980753_951566742596259721_n.jpg
---
You’re probably here because you faced a little problem with making your animation wait some time before it repeats itself again. well, the animation-delay property doesn’t solve the problem because its function is to create a delay of what ever seconds you want before the first repetition of the animation occurs, then , there’s no delay.But how to solve that problem, is there an animation property that may help us ? Unfortunately no, but there’s a trick you can do to solve this problem. Let’s take a primary animation code that needs to be edited so when the animation have to wait some seconds (or what ever time you want) before it repeats itself:

![code](https://cdn-images-1.medium.com/max/1000/1*Zlpt6vc_fr51wLEHN9KGSQ.gif)

The animation works, but what if I want to add a delay of 1s that it should happen after every repetition? As I said previously animation-delay won’t solve the problem so what we have to do is to make the delay as a part of the animation itself , divide the percentages by 2 in the animation and double the animation duration.

![code](https://cdn-images-1.medium.com/max/800/1*7YuiWyHBwgxo8quDrHSVuA.gif)

The first half of the new animation will be the old animation wich will works like previously because its new duration is its old one (4s/2 = 2s). from 50% to 75% the element will return to his old state (not moving), and to keep that state for 1s wich is the delay , we force the element to rotate with 0 deg wich is staying fixed. So, we did the delay with 1s because the movement is stoped from 75% to 100% wich is 25% of the 4s duration = 1s.
So, the main idea of creating this delay is to make mathematical operation to figure out how much time does he must take and with keeping the the movement intact .