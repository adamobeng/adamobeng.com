---
layout: post
title: Arduino syntax file for vim
categories: arduino, code
---

Recently, I've been tinkering with electronics hardware. Let me tell you, for someone who's more comfortable with software, the experience can be quite scary: if you mess up your code, the worst that happens is that it fails to compile, or maybe the interpreter spits out an error. But this electronics stuff is *real*! If you do something wrong it could literally blow up in your face.

Fortunately, for people like me, there's the [Arduino](http://www.arduino.cc/) project to hold your (badly scorched) hand. Doubly-fortunately, you can still use [your favourite powerful text editor](http://www.vim.org/) to do so. To get syntax-highlighting working in vim for Arduino's .pde, you have to install [a script](http://www.vim.org/scripts/script.php?script_id=2654) written by Johannes Hoff. The Arduino project is constantly changing, so I updated the syntax file to add some new features (notably some stuff relating to the Arduino Mega). 

The updated version is now available on [vim.org](http://www.vim.org/scripts/script.php?script_id=2654). Hopefully it will prevent some explosions (or, more likely, bricked microcontrollers).
