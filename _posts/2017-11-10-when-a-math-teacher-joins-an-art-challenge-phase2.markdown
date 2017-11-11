---
layout: post
title:  A math teacher joins an art challenge - ISZAF Challenge Phase 2
date:   2017-11-10 11:12:42
categories:
  - coding
  - art
tags:
  - coding
  - art
author: Drew Wheeler
images:
  - images/Art_Challenge_P2_Triangles.png
excerpt:
  My experimentation with Processing continues with the Phase 2 of the International Shenzhen Artist Forum's (ISZAF) art challenge.
---

My experimentation with Processing continues with the Phase 2 of the International Shenzhen Artist Forum's (ISZAF) art challenge. If anyone is curious to learn more about ISZAF and this challenge you can check out their website [here](http://iszaf.com/challenge.html){:target="_blank"}.<br><br>

In this phase I needed to fuel my inspiration for my next three pieces from another participants Phase 1 submission. My inspiration came from a set of three paper/book ripping pieces. They created circular patterning with a natural element of randomness, which I felt aligned nicely with my current experimentations and skillset with Processing. Also, you can find my code for both Phase 1 and 2 [here](https://github.com/awheels/ISZAF-Art-Challenge){:target="_blank"}.<br><br><br><br>

#### Piece #1 - Concentric Circles

My first piece came from the simplicity of concentric circles. I then added a gradient effect and colour change, which is triggered by the mouse pointer's horizontal location. I'd like to take this a little further in the future and see if I can add a little randomness to the drawing of my circles, either through their location or by adding a little wave/randomness to their lines.<br><br>

<div id="myCanvas4" class="processingCanvas">

</div>
<script src="/javascripts/p5Sketches/art_concentric_circles.js" type="text/javascript"></script>

<br><br>

#### Piece #2 - Recursive Rose

My next idea grew out of some experimentaion with rotating squares and recursion. The discovering of the similarity to a rose was a pleasant discovery. If I have some time, I think I am going to try to add a slider to allow for the changing of the amount of rotation and square sizes by the viewer.<br><br>

<br><br>

<div id="myCanvas5" class="processingCanvas">

</div>
<script src="/javascripts/p5Sketches/art_recursion_rose.js" type="text/javascript"></script>

<br><br>

#### Piece #3 - Triangles

My final piece was another example of a pleasant surprise. I had experimented with patterning in the past using triangles, but what I had created had a limited amount of randomness. I wanted to increase the randomness and see where that took me. The initial piece that you see below draws a specific number of triangles, with the constraint that they must fall within a specific square area. This constraining square is resized several times to lead to different sized triangles. This led to the work below.<br><br>


<br><br>

<div id="myCanvas6" class="processingCanvas">

</div>
<script src="/javascripts/p5Sketches/art_triangles.js" type="text/javascript"></script>

<br><br>

I then wanted to make the pattern redraw on a clean slate when the mouse is clicked, to allow for the generation of different patterns. However, I accidentally forgot to set the background blank before redrawing. This led to the same patterning script being called over and over and drawing the pattern overtop of the previous one. I liked the results of this accident and in the end decided to submit the resulting image. The image below shows an example of an image initially created compared to what was generated and a bunch of mouse clicks. Feel free to experiment with the sketch above by simply clicking the mouse. <br><br>

![art_challenge](/images/Art_Challenge_P2_Triangles_x2.png)

#### One more phase!
Learning a bunch and having a blast...and there is still one more phase!

