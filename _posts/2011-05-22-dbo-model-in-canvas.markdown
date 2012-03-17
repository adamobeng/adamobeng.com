---
layout: post
title: The DBO model in HTML5 Canvas and Javascript
categories: academic, sociology, web
---

I've had a little bit of [experience](../analytical-sociology-thesis/) with [agent-based modelling](http://en.wikipedia.org/wiki/Agent-based_model), and so far, I've stumbled across some interesting results. But statistical summaries of models are one thing, while actually having a feel for how a model works is another. These models are inherently dynamic, so there will necessarily be something lost from static pictures of the model, even from graphs of statistics over time. Moreover, ABMs are part of a very quantitative branch of sociology, so it might even be refreshing to reintroduce a little bit of qualitative information (and who doesn't like [blinkenlights](http://en.wikipedia.org/wiki/Blinkenlights)?).

For example, here's one of the graphs I used in my thesis:

![A graph showing the relation between the initial proportion of desires and beliefs and the eventual proportion of desires and beliefs in a basic version of the DBO model](/DBO_example_graph.png)

Now that's a good summary of what's going on in the model, don't get me wrong. You can see a nice relationship between the parameters. Obviously, graphs like these are essential for summarising information, and you couldn't infer this from interacting with the simulation directly. Indeed, in some cases, interacting with the simulation will not even be possible (like when there are too many agents to display comfortably).

In addition, you couldn't really have a dynamic, interactive presentation of the model on paper (or even in a PDF). But on the web at least, with a little bit of HTML5 (in particular the [Canvas](https://developer.mozilla.org/en/Canvas_tutorial) element) you can produce this:

<script type="text/javascript" src="../dbo-minified.js"></script>

<canvas id="canvas" width="400" height="400" style="margin: 2em;"></canvas>

Click the nodes to change their DBO state; <font color="#0000FF">blue</font> nodes have desire, <font color="#FF0000">red</font> nodes have belief and <font color="#FF00FF">purple</font> nodes have both. The 'step' button advances the simulation by one step, and the 'reset' button randomly assigns DBO states to all of the nodes.

As you may notice this is a simulation of the DBO model with a fixed set of parameters (in particular, opportunity is being ignored). As such, the behaviour exhibited is pretty limited. This is also for the time being *very* alpha-quality code. Still, it shouldn't take too long to get a worthwhile implementation of the DBO model and its variants up and running. 

Who knows, I might even expand it to cover some other sociologically-interesting ABMs. [Sugarscape](https://secure.wikimedia.org/wikipedia/en/wiki/Sugarscape) in Javascript, anyone?
