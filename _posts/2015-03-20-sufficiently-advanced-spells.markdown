---
layout: post
title: Sufficiently advanced spells
categories: sociology, STS
---

[Samuel Arbesman](https://twitter.com/arbesman) over at Aeon has written an article claiming that [we don't understand what our computers are doing because computing is too easy](http://aeon.co/magazine/technology/computing-is-too-easy/). I'm not so sure that's the problem.


# The command-line is not dead

The machine I'm currently sitting at is a mid-2014 Retina MacBook Pro, running OS&nbsp;X Mavericks. Until [a few days ago](http://www.macrumors.com/2015/03/09/apple-new-macbook-2015/), it was the cutting-edge of Apple's laptop lineup. 

And yet, I'm writing this blog post using Vim --- a 23-year-old UNIX text editor. I've got 30 Chrome tabs open, but also 10 terminal windows: 5 with various other Vim sessions relating to my dissertation, a couple compiling those files from TeX (37 years old) into PDF, one running the command-line RSS reader newsbeuter, and one with my mail client, mutt[^signature] (20 years old). I also happen to be in the process of editing my [hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) to block my machine from accessing undesirable websites.

So the situation isn't as dire as Arbesman claims. OS&nbsp;X, Apple's operating system for the past 13 years, is pretty much unrelated to the previous versions of the "Classic" Mac OS (including the System 7 that Neal Stephenson was complaining about). In fact, OS&nbsp;X [is a certified UNIX](http://www.opengroup.org/openbrand/register/brand3602.htm). It's not open enough to satisfy some philosophies, but it absolutely permits exploration. I install software on this machine via Homebrew and GitHub; I don't type in all of the source code by hand, but it's there if I want to read it (or modify it). I've made countless little changes to this machine: to make the VPN connection icon more clear, to control the system volume remotely, to display the value of a mutual fund in my shell prompt. I regularly use five different computers (three OS&nbsp;X, two GNU/Linux) and they play nicely together --- by means of SSH, rsync and Duplicity. 

And yes, most of this happens despite OS&nbsp;X's graphical user interface --- I prefer white text on a black background (which is exquisitely-sharply-rendered, thanks to the high-DPI display). In a room of the sort of tech-savvy people who pride themselves on their control over their machines, the brushed aluminium and softly glowing white apple are almost ubiquitous.

# Poking holes in abstractions

I think I can trace back my interest in computers to a single event, a few years later than when Arbesman was typing code into his VIC-20. On my 10th birthday, I was given a copy of the Lucas Arts game *Jedi Knight: Dark Forces II*. My parents generally let me have the run of our massive black [Time Computers](https://en.wikipedia.org/wiki/Granville_Technology_Group) laptop, but they wouldn't buy me games. However, they didn't have the heart to forbid me this one.

A couple of the game's design choices turned out to be critical for me. The developers decided to implement a large part of the game's logic in [a simple language called COG](http://www.gamasutra.com/view/feature/3233/adding_languages_to_game_engines.php). This, combined with user-accessible files and [permissive checksums](http://starwars.wikia.com/wiki/Star_Wars:_Jedi_Knight:_Dark_Forces_II#Multiplayer) lead to the proliferation of modifications to the game known as ["cogs"](http://www.inside3d.com/jk/cog12.shtml). Modders added many features to the game, including jet-packs and grappling hooks. But more importantly, by typing a few specific words into a particular file, I could modify the game *myself*. I could make it so that all of the weapons produced Force Lightning rather than their usual projectiles, and use this in network matches against my little brother.[^network]

It's true that walled-garden operating systems are a threat to this kind of computing, just as undocumented extensions to the OBD-II protocol make it more difficult to get under your car's hood. If a device doesn't have an SSH client, I'll struggle to find a use for it. But despite the proliferation of shiny user interfaces, it's not quite yet the time to lament the death of hackability.

# HyperCard vs. the Web

It's not just OS&nbsp;X's compatibility with Free/Libre/Open-Source Software that leaves the hood propped open. There's still one obvious gateway to understanding what's going on behind the scenes in your computer: the Web.

There is a truism that software is shifting from native applications to ones running in the browser. In fact, you can now play an FPS significantly more advanced than *Dark Forces II* [inside your web browser](http://www.tomshardware.com/news/Firefox-WebGL-BananaBread-HTML5-FPS,17241.html). It just so happens that all of the HTML, CSS, and JavaScript code that makes up web-pages is freely readable to the user --- just a [few button presses away](https://developer.chrome.com/devtools/docs/console). If you wanted to, you could even examine an [online emulator for the Commodore VIC-20](http://www.mdawson.net/vic20chrome/vic20.php). That is, not only could you [type in programs in BASIC](https://ia801603.us.archive.org/zipview.php?zip=/28/items/Commodore_VIC20_TOSEC_2012_04_23/Commodore_VIC20_TOSEC_2012_04_23.zip), you could play around with the operating system itself.

As with OS&nbsp;X, the openness of the web is sometimes an uneasy compromise. Code might be obfuscated to prevent end-users understanding it, web standards have begun to include DRM, and even reading the page that your browser renders doesn't give you access to the server-side logic. Still, there's a vast range of web pages whose construction you can explore, understand and modify --- and you might just take that as the inspiration to make your own.

All this goes without mentioning the attempts to explicitly make computers more modifiable. The Raspberry Pi, for one, is the spiritual successor to the BBC Micro on which many British programmers got their start. It offers hackability up and down the levels of abstraction: it will run various flavours of GNU/Linux, but you can also bit-bang the IO ports if you feel like it.

# Still distinguishable from magic

Not only are there still hackable devices, but it's not really the case that hackability and ease-of-use are opposed to each other.  Achieving 'easy' computing is hard, and it has more to do with the comprehensibility of the abstractions than their comprehensiveness. I'd [much rather use vim than ed](https://xkcd.com/378/), or Python than C. They're more powerful [*because* they're more abstract](http://www.paulgraham.com/avg.html).

It's not just polished and shiny high-level interfaces that can seem like magic. Talking to Siri[^speech] might make you feel like a wizard, but then again, so might typing the incantation:

{% highlight sh %}
tar -czv * -f pics.tar.gz
{% endhighlight %}

The difference is, indeed, the degree to which the interface relies on the conventions of computational thinking, rather than the more commonsense interactional conventions of everyday life. Because intuitive interfaces are so difficult to implement (in part because everyday interactional conventions are difficult to think about[^Suchman]), being able to think like a software engineer still allows users greater access to the underlying machine.

Finally, I feel compelled as a sociologist to conclude on Arbesman's point that looking inside machines allows us to see what role they play in society. I agree that this is an important project, but it's not restricted to machines whose functioning is transparent. Indeed, it's at least as important to understand how machines can close off options, restrict behaviour, and instantiate power dynamics.[^ANT] As Akrich points out, a photo-voltaic panel designed to work robustly in harsh environments can also prevent users from fixing the battery, connecting their own devices, and reinforce the control of the power company over the people actually using the electricity. We should not just consider the components that make up a machine (although see the tensions between FLOSS and proprietary/commercial software illustrated above) but the affordances that a technology permits: who is it built by and for, what assumptions is makes about the capabilities and goals of the user, and ultimately how fits into broader social life.

[^signature]: Yes, my email signature does say 'Sent from my command-line'.
[^network]: Over RS-232, natch.
[^ANT]: See [Latour, Bruno. "Where are the missing masses? The sociology of a few mundane artifacts."](http://www.bruno-latour.fr/sites/default/files/50-MISSING-MASSES-GB.pdf) and [Akrich, Madeleine. "Comment décrire les objets techniques?."](https://halshs.archives-ouvertes.fr/halshs-00005830/)
[^speech]: OS&nbsp;X's speech synthesis engine does turn out to be [quite configurable](/hackny-hackathon-winner).
[^Suchman]: See [Suchman, Lucy A. Plans and situated actions: the problem of human-machine communication](https://books.google.com/books?id=AJ_eBJtHxmsC&lpg=PR7&ots=KqIqnJHJGO&dq=plans%20and%20situated%20action&lr&pg=PR7#v=onepage&q=plans%20and%20situated%20action&f=false)
