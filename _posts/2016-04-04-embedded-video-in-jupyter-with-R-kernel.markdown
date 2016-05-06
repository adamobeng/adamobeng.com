---
layout: post
title: Embedded local video in jupyter notebook with R kernel
categories: code, R
---

For some reason, there isn't a default way to embed a local video file in a jupyter notebook.

If you're using a python kernel, you can make use of [this hack](https://www.reddit.com/r/IPython/comments/35tocn/is_it_possible_to_embed_a_local_file_video_in_the/cr7q11e), which inserts the whole video, base64-encoded, into the generated HTML. But because this runs in a code block, not a markdown block, it's dependent on the kernel you're running. Notebooks only support one kernel, so if the rest of your code is R, you'll need an R version.

Nobody else seems to have written the equivalent code for R, so here it is:


{% highlight R %}
    show_video <- function(filename, mimetype) {
    library(IRdisplay)
    library(base64enc)

    data = base64encode(filename, 'raw')

    display_html(paste0('<video controls src="data:',
         mimetype, ';base64,', data, '">'))
    }
{% endhighlight %}
