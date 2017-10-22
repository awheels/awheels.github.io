---
layout: post
title:  A math teacher joins an art challenge - ISZAF Challenge Phase 1
date:   2017-10-14 10:24:54
categories:
  - coding
  - art
tags:
  - coding
  - art
author: Drew Wheeler
images:
  - images/art_challenge_cracked_line.jpg
excerpt:
  I've been keen to experiment more with Processing, so when I heard about an art challenge being organized by the International Shenzhen Artist Forum (ISZAF) I was eager to participate. I do not identify as an expert coder nor an artist, but they are both areas that I am looking to grow in and further explore.
---

I've been keen to experiment more with Processing, so when I heard about an art challenge being organized by the International Shenzhen Artist Forum (ISZAF) I was eager to participate. I do not identify as an expert coder nor an artist, but they are both areas that I am looking to grow in and further explore.<br><br>

In Phase 1 of this challenge we were provided with an initial image that served as inspiration for our creation of 3 pieces of work. The initial image was of cracked/broken egg shells. Below you will find the 3 pieces that I created using Processing (more specifically [P5.js](https://p5js.org){:target="_blank"}), which is piece of software and programming language that is great for both learning to code and creating visual art. You can read more and check it out [here](https://processing.org){:target="_blank"}. You can also look at my code [here](https://github.com/awheels/ISZAF-Art-Challenge){:target="_blank"} (just be kind...I'm mostly self taught and still learning).<br><br>

#### Piece #1 - Backyard Chickens

Back at home my parents have backyard chickens, which provides us with a neverending supply of breakfast eggs. So when I saw the image of egg shells it was our families clutch of chickens that first popped into my head. I've also seen other generative art that generate unique characters (faces, monsters, robots, etc) and I'd always been intrigued by this. My goal here was to create a program that would create a "clutch" of random chicks and when you click the screen a new "clutch" will be generated. The final result is not quite as "random" as I would like. All the chicks are different sizes, colours and their other features are slightly different - but they are still too similar (at least compared to my initial goal). The constraints of keeping the similar body type, feet and beak/eyes limited the amount of freedom there was with generating the chicks. With more time, I'd like to find ways to maintain the key features needed to identify them as chicks but have more diversity and randomness within their creation.<br><br>

<div id="myCanvas2" class="processingCanvas">

</div>
<script src="/javascripts/p5Sketches/chicken_sketch_p5js.js" type="text/javascript"></script>

<br><br>

#### Piece #2 - Generating Cracks

My next idea was to play with the idea of cracks. This also aligned with book that I've been reading called ["Generative Art: A Practice Guide"](http://zenbullets.com/book.php){:target="_blank"} by Matt Pearson. The book finds an excellent balance between giving concrete examples with code and discussing the artistic side of the creative process. It is amazing to take a precise machine like a computer and code and push it in a creative direction with certain level of unpredictability and randomness. The program esssentially draws a series of cracks across the screen with different colours schemes (the colour schemes can be changed with a button click). The cracks are simply a collection of straight lines but together with a certain level of randomness to create the crack/jagged effect.

<br><br>

<div id="myCanvas" class="processingCanvas">

</div>
<script src="/javascripts/p5Sketches/art_challenge_line2.js" type="text/javascript"></script>

<br><br>

#### Piece #3 - Orbitting Albumen

My last piece again comes from a combination of the idea of cracked egg shells and Matt Pearson's generative art book. He also examines the idea of spheres and how to add unpredictability to shapes that we generally view as being precisely defined. Some basic code from his book was used as a starting point and this was further adapted and updated to fit my needs. This piece definitely had a steeper learning curve on the coding side of things. It forced me to dive deeper into my knowledge of Javascript, so a lot was learned. The piece below has been resized down a little from the original, as it was not as smooth and clean here on my blog.

<br><br>

<div id="myCanvas3" class="processingCanvas">

</div>
<script src="/javascripts/p5Sketches/art_challenge_sphere_6x2.js" type="text/javascript"></script>

<br><br>

#### Two More Phases Still to Come!
There are still two more phases to the art challenge. After submitting our phase 1 works, we will select other contributions to inspire 3 more works of our own in phase 2. This will repeat again in phase 3. Once the whole challenge is complete I hope to be share all my creations on my site and I'll include a link to my code. Looking forward to more learning and experimenting!

