---
layout: post
title: HackNY Spring 2015 Hackathon &mdash; And the winner is...
categories: hackathon 
---

#TL;DR

I won second place at the [HackNY Spring 2015 Hackathon](http://hackny.org/a/spring2015hackathon/) with [&#x1f424;&#x1f3b6; (chirp)](/hackny-hackathon-runnerup/#x1f424x1f3b6-chirp). And also first place with [GLaPEP8](/hackny-hackathon-winner/#glapep8)(!) Apparently I'm the first person to win two podium places at a HackNY hackathon.

I've got [a post about (chirp)](/hackny-spring-2015/#x1f424x1f3b6-chirp), but this is about the HackNY Spring 2015 Hackathon winner:

#GLaPEP8

GLaPEP8 is best explained with a demo video:

<iframe src="https://player.vimeo.com/video/121724646" width="500" height="313" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/121724646">Demo of GLaPEP8 v0.1</a> from <a href="https://vimeo.com/adamobeng">Adam Obeng</a> on <a href="https://vimeo.com">Vimeo</a>.</p>


These are the [ChallengePost link](http://challengepost.com/software/glapep8) and [GitHub repo](https://github.com/adamobeng/glapep8).

GLaPEP8 checks a file's Python syntax and sings the error to you in the style of [GLaDOS singing *Still Alive* in the closing credits of Portal](https://www.youtube.com/watch?v=Y6ljFaKRTrI).[^spoiler] I started building this because I wanted to play around with OS X[^os]'s speech synthesis. I'd guess a fair proportion of Mac users know that you can use the command 'say' thus:


{% highlight bash %}
say "Arbitrary text"
{% endhighlight %}


But the speech synthesis engine in OS X is actually [really quite sophisticated and controllable](https://developer.apple.com/library/mac/documentation/UserExperience/Conceptual/SpeechSynthesisProgrammingGuide/FineTuning/FineTuning.html#//apple_ref/doc/uid/TP40004365-CH5-SW3). The interesting thing for our purposes is that you can include commands in the text which let you control various aspects of the synthesised voice, including prosody and tone. I've messed around with this before for livecoding purposes, but I didn't really grok the [TUNE format](https://developer.apple.com/library/mac/documentation/UserExperience/Conceptual/SpeechSynthesisProgrammingGuide/FineTuning/FineTuning.html#//apple_ref/doc/uid/TP40004365-CH5-SW7), which gives you the most control &mdash; and, as it turns out, I needed very fine-grained control for GLaPEP8.

Basically, you can provide 'say' with a list of syllables, and for each of them specify how long to say it for, and at which frequency. The format is called 'TUNE', and looks like this:

{% highlight bash %}
[[ inpt TUNE ]]
~
M {D 60; P 246.00:0}
EH {D 360; P 246.00:0}
r {D 60; P 220.0:0}
IY {D 360; P 220.0:0}
,
h {D 60; P 196.0:0}
AE {D 360; P 196.0:0}
d {D 60; P 196.0:0}
,
UX {D 360; P 220.0:0}
,
l {D 120; P 246.0:0}
IH {D 360; P 246.0:0}
t {D 120; P 246.0:0}
UX {D 120; P 246.0:0}
l {D 120; P 246.0:0}
,
l {D 120; P 246.0:0}
AE {D 480; P 246.0:0}
m {D 60; P 246.0:0}
.
{% endhighlight %}

I only need a subset of the features for GLaPEP8, so the only things I'll change are the syllables, the number after 'D' (the duration in ms), and the number after 'P' (the pitch at time 0 of the syllable).

Supplying individual syllables is not super convenient, so I started off trying to use the standard 'TEXT' input format. In that mode, you can also specify the pitch like so:

{% highlight bash %}
say '[[ pbas 69 ]] [[ pmod 0 ]] The A above middle C'
{% endhighlight %}

'69' is the [MIDI number](http://newt.phys.unsw.edu.au/jw/notes.html) of the frequency you want, and '[[ pmod 0]]' makes the pronunciation monotone. I couldn't use this for GLaPEP8 because there's no way of specifying how long it should take to say a word, so they sound rhythmically weird. You can specify the *rate* in words-per-minute, but to convert that a note duration in milliseconds to a rate you also need to know in advance how long it would take to say the word!

The problem with providing a syllable-level pronunciation guide is that OS X Speech Synthesis uses a [phoneme list](https://developer.apple.com/library/mac/documentation/UserExperience/Conceptual/SpeechSynthesisProgrammingGuide/Phonemes/Phonemes.html#//apple_ref/doc/uid/TP40004365-CH9-SW1) which is, as far as I can tell, a non-standard version of [Arpabet](https://en.wikipedia.org/wiki/Arpabet). I'm converting words to the component phonemes of their pronunciations using [CMUdict (the Carnegie Mellon Pronouncing Dictionary)](http://svn.code.sf.net/p/cmusphinx/code/trunk/cmudict/), which does use Arpabet, so GLaPEP8 ends up converting words to Arpabet phonemes, then to OS X-style phonemes, then to audio.

The vast majority of the work went into getting OS X to sing like [Ellen McLain](https://en.wikipedia.org/wiki/Ellen_McLain), but I also used [flake8](https://pypi.python.org/pypi/flake8) to find the PEP8 violations in the code, [python-midi](https://github.com/vishnubob/python-midi) to read in the melody and the [python ncurses](https://docs.python.org/2/library/curses.html) library to make an interface like Portal's end credits. For a little bit more [2010](https://en.wikipedia.org/wiki/Portal_(video_game)#Plot)-retro-futuristic chic, I demoed GLaPEP8 inside the [vintage terminal emulator Cathode](http://www.secretgeometry.com/apps/cathode/).

I started work on GLaPEP8 quite late, and I realised it might actually be worth finishing even later. There are consequently some very rough edges I'd like to fix, such as:

- It only really works for one-syllable words
- Each syllable within a word is pronounced for the same duration, because 'say' doesn't, as far as I can tell, return the information it uses to determine the length of each syllable
- The lyrics it sings are pretty much fixed, so it only works properly on the demo file. I think I can make it more dynamic with some creativity, but the first two problems need to be fixed first


I think I'm going to spin off the text-to-song part of GLaPEP8 into its own project, because I can see myself re-using that (notably for livecoding). I also remain interested in error messages -- to the extent that my PhD dissertation is going to spend quite some time on them, albeit in a slightly more academic context.


[^os]: Sorry other-OS folks, this one only runs on OS X.
[^spoiler]: Spoiler warning, I guess, for anyone who hasn't played Portal in the 8 years since it was released.
