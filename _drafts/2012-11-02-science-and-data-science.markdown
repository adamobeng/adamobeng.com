---
layout: post
title: Science and Data Science
categories: data-science, academia
---

Thanks to [Introduction to Data Science](http://columbiadatascience.wordpress.com/), and Peter Bearman's Research Design class, I've been thinking about doing science.[^1] The Research Design class this week was about the debate between Eric Klinenberg and Mitchell Duneier about the social causes of mortality in the 1995 Chicago Heatwave. One of the problems is that there are many variables and few cases, which makes the sort of statistical analyses usually carried out in sociology quite difficult. However, data scientists deal with this kind of thing all the time, especially those in industry who are trying to predict a user's purchasing behaviour based on a huge sparse vector of previously visited websites. There are [methods](http://scikit-learn.org/stable/modules/ensemble.html#gradient-tree-boosting) which can effectively ignore useless (read 'unpredictive') variables. Advertisers (and other flavours of data scientist) don't particularly care to understand the models they use as long as they continue to work.

But this predictive accuracy comes at a cost of producing models which can't necessarily being interpreted. I found myself (re-)reading Peter Norvig's [On Chomsky and the Two Cultures of Statistical Learning](http://norvig.com/chomsky.html) in this light. Norvig distinguishes three types of statistical models:

>	A *mathematical model* specifies a relation among variables, either in functional form that maps inputs to outputs (e.g. y = m x + b) or in relation form (e.g. the following (x, y) pairs are part of the relation).
>
>	A *probabilistic model* specifies a probability distribution over possible values of random variables, e.g., P(x, y), rather than a strict deterministic relationship, e.g., y = f(x).
>
>	A *trained model* uses some training/learning algorithm to take as input a collection of possible models and a collection of data points (e.g. (x, y) pairs) and select the best model. Often this is in the form of choosing the values of parameters (such as m and b above) through a process of statistical inference.

Previously, I've adhered to Peter Hedström's [mantra](http://www.amazon.com/Dissecting-Social-Principles-Analytical-Sociology/dp/0521796679) of opening the black boxes to reveal the individual-level social mechanisms. But now I'm not so sure.

Consider the Desires, Beliefs and Opportunities (DBO) model in Hedström's [*Dissecting the Social*](http://www.amazon.com/Dissecting-Social-Principles-Analytical-Sociology/dp/0521796679). Used for agent-based modelling, this 'folk psychology' model of individual behaviour, assumes that an individuals' action with respect to a particular goal is uniquely determined by their desire for the goal, their beleif that the action will allow them to acheive the goal, and on them having the opportunity to act.
<div class="sidenote">lorem ipsum dolor sit amet</div>

algorithmic modeling culture "produce a form that, while accurately modeling reality, is not easily interpretable by humans, and makes no claim to correspond to the generative process used by nature."

"for complex problems there are usually many alternative good models, each with very similar measures of goodness of fit."





[^1]: Which is always a contentious debate for us in the... *less hard* sciences
