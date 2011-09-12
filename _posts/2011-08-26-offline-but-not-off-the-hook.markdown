---
layout: post
title: Offline, but not off the hook
categories: networks, sociology, code
---

*Previously, I [discussed](http://adamobeng.com/real-names/) whether Google really cares about real names on Google Plus. In summary, they have little reason to.*

## You're 'online' offline

In his [recent post about the 'nymwars'](http://socialmediacollective.org/2011/08/08/real-name-sites-are-necessarily-inadequate-for-free-speech/) Bernie Hogan also provides some interesting comments on what it means to be 'offline'.

Being 'offline' is defined negatively, by opposition to being online:

>	In fact, I’ll say that even more strongly – *if your speech is not confined to the context you are in – but available to a potentially unknowable audience – you are online.* [emphasis in original]

You're online if what you do and say is "available to a potentially unknowable audience", specifically an audience which you don't select, and to which you can't adapt your actions[^1]. 

Most of the time when you're online it's because your actions are being recorded electronically:

>	 you are online when your actions are being digitized and networked.

You don't have to be carrying out any sort of online activity yourself; if you're at a party and someone uploads a photo of you to Facebook, you're 'online'.


## You're online all the time

I think that this definition of being 'offline' is a bit strong. If Bernie's right then you're always online, unless you're not talking to anyone at all. 

The fact is, your actions *are* being recorded when you're interacting in the real world: they're being recorded by the person you're talking to. And while they're not being "digitized", they are being "networked", passed on through word of mouth, or even encoded at a later time by your interlocutor. And this *is* "by default": unless you make it clear that a conversation is not to be shared[^2], then you can expect it to be shared.

>	 I am engaging in a trust relationship with the curator, but I am not free to say what I want. 

In the real world, everyone that you converse with (bar perhaps medical and legal professionals), is a potential "curator". They can, if they choose, relay your words to others. Of course, you trust them not to do so. And if they were to tell others, there would be no way of proving what you said in private and in confidence [most of the time](http://www.guardian.co.uk/politics/2010/apr/28/gordon-brown-bigoted-woman).

Still, unless you're in the middle of the desert, beyond the range of spy satellites and laser microphones, what you say is "available to a potentially unknowable audience". That's not a particularly useful definition.

A more workable definition of 'offline' might look like what Bernie says just afterwards:

>	 Online is on-the-record. Offline is off-the-record.

Under this definition, it's clear that a real-world conversation can be either online or offline, because it can be either on- or off- the record.

But this binary[^3] definition still isn't sufficient. There is still a difference between the online-ness of the real world and that of social networks. I would say that the real world is inherently more offline, because accessing information about your past actions is difficult. It's not surprising that a technology designed for information retrieval should make it easy to find things out.

In other words, being online is a question of degree. You are totally offline if there's no 'record', or if the 'record' is impossible to access. *The more concrete and available the 'record' of your actions, the more online you are.*

And whether the record is accessible is key: even if you're recorded, but the record can't be transmitted to others, then you can't be 'networked', so you're not meaningfully online.


## Deniable networking

So whether you're online is independent of what medium you're in: real world or Internet. In fact, there are some forms of electronic communication that are 'offline' by default: email, instant messages, and the like. Unlike social networking services, the content of your actions are not published.

Therefore, it should be possible to *intentionally* design a social network which had the 'offline' quality of the real world. We could even give it a cute acronym, like *R*eputationally *U*ntraceable *M*edium *O*ffline *R*elay, or *G*lobally *O*ffline *S*ocial *S*pace over *I*nternet *P*rotocol.

So what would GOSSIP look like?

It would be sensible to base it around something like [Off-the-Record messaging](http://en.wikipedia.org/wiki/Off_the_record_messaging). Communications sent via OTR are encrypted and authenticated, so you know who you're talking to while the conversation takes place, and no-one can eavesdrop. But the protocol also offers [deniable authentication](http://en.wikipedia.org/wiki/Deniable_authentication): after the conversation, it cannot be proved who said what. Your 'friends' are still able to tell others that you said something. 

Just like in the real world, however, they can't prove it.


[^1]: Being able to adapt your actions is important so that your actions are context-sensitive.
[^2]: Yes, it could be implicit in the conversational context.
[^3]: No pun intended, etc, etc.
