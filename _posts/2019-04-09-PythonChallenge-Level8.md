---
title:  "Python Challenge, Level 8"
date:   2019-04-09 21:00:00
layout: post
---

<img src="/images/PyChallenge.jpg" alt="Python Challenge" align="left" hspace="5" style="width:180px;">


Continuing on our journey through the challenges at [PythonChallenge.com](www.pythonchallenge.com), here are the next 
few levels that we completed during the last meet.

**SPOILERS!** As stated in our last post, We will discuss the challenges, the clues, and how we solved each level. We 
discovered other sites have done the same thing but chose to solve these on our own. It's more fun that way. Afterward, 
it's interesting to go back and see how others have solved the same problem, but we recommend you solve the problems on 
your own. 

This challenge starts at http://www.pythonchallenge.com/pc/def/integrity.html. There's a picture of a bee on a flower 
with a sub-title asking, "Where is the missing link?" When you hover around the picture you can see the cursor changes 
to a pointer and there's a link to http://www.pythonchallenge.com/pc/return/good.html. If you actually select it, you'll
get a pop-up that requests a user name and password. 

If you search through the source, there's the following in an HTML comment:

```html
<!--
un: 'BZh91AY&SYA\xaf\x82\r\x00\x00\x01\x01\x80\x02\xc0\x02\x00 \x00!\x9ah3M\x07<]\xc9\x14\xe1BA\x06\xbe\x084'
pw: 'BZh91AY&SY\x94$|\x0e\x00\x00\x00\x81\x00\x03$ \x00!\x9ah3M\x13<]\xc9\x14\xe1BBP\x91\xf08'
-->
```

<!--break-->
There is a Python library called BZip. For this one, you can simply import the library bz2, assign each bzip string to a
variable and decompress. 


```python
import bz2

un = b'BZh91AY&SYA\xaf\x82\r\x00\x00\x01\x01\x80\x02\xc0\x02\x00 \x00!\x9ah3M\x07<]\xc9\x14\xe1BA\x06\xbe\x084'
pw = b'BZh91AY&SY\x94$|\x0e\x00\x00\x00\x81\x00\x03$ \x00!\x9ah3M\x13<]\xc9\x14\xe1BBP\x91\xf08'

print(bz2.decompress(un))
print(bz2.decompress(pw))
```

In this case we find out the the user name is "huge" and the password is "file." So we go back and select the link on 
the bee, enter the newly found credentials and off we go. This time there is no need to change the URL. After entering 
the credentials you are automatically redirected and .../pc/def/integrity.html becomes .../pc/return/good.html. 

<br/>
<hr /> 