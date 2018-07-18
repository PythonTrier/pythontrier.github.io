---
title:  "Python Challenge, Part I"
date:   2018-07-17 12:00:00 +0200
layout: post
---

<img src="/images/code.png" alt="Code Challenge" align="left" hspace="5" style="width:180px;">

Exercism.io was down during our last meeting as they were upgrading to a new and improved version of their site. As 
such, we decided to try some of the challenges that can be found at [PythonChallenge.com](www.pythonchallenge.com). It's 
a clever site that creates a series of riddle-like puzzles that challenge users to figure out what question needs to be 
answered before you think of how to start writing code to solve it. There are currently 33 levels so we've started 
working through the challenges and thought we'd share our progress. 

**SPOILERS!** We will discuss the challenges, the clues, and how we solved each level. We discovered other sites have 
done the same thing, but chose to solve these on our own. It's more fun that way. Afterwards, it's interesting to go back 
and see how others have solved the same problem, but we recommend you solve the problems on your own. 

## Level 0
The first challenge starts at http://www.pythonchallenge.com/pc/def/0.html. The URLs seem to be a big part of these 
challenges and often require manipulation. The **hint** for this level is to "try to change the URL." The photo shows a 
$$2^{38}$$ in the middle of the screen. It's entitled "warm up" so we took this one right to the console and entered: 

```python
2**23
>>> 274877906944
```

After that, you change the URL from 0.html to 274877906944.html and you're off to the next!

<!--break-->

## Level 1
This challenge shows a notebook with the following written:<br/>
K -> M<br/>
O -> Q<br/>
E -> G<br/>

The **hint** was "everybody thinks twice before solving this." Below that was the following text:

g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc<br/> 
dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr<br/> 
gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw<br/> 
ml rfc spj.

We surmised this was merely a substitution exercise where the alphabet is shifted by two, and each letter or a text is 
replaced accordingly. After some first attempts we discovered the maketrans method and applied the following bit of 
code.
```python
# We assigned the mystery text to a variable we called string. 
string = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."

# Pass the desired string and the shifted string to the maketrans method. 
print(string.translate(str.maketrans('abcdefghijklmnopqrstuvwxyz', 'cdefghijklmnopqrstuvwxyzab')))
```

Well leave you to find the final text on your own, but to find the next level, one must apply this transformation to the
URL. So map.html becomes ocr.html and it's off to the next level!

## Level 2
Here we see an open book where the **hint** says, "recognize the characters. Maybe they are in the book, but MAYBE they 
are in the page source." After inspecting the page source we discovered a block of text with an additional **hint** 
telling us we should, "find rare characters in the mess below." Here is a ver small sample of the provided text:

```python
""""%%$@_$^__#)^)&!_+]!*@&^}@[@%]()%+$&[(_@%+%$*^@$^!+]!&_#)_*}{}}!}_]$[%"""
```

To solve this we decided we should check for letters

```python
# We simply copy/pasted the text into a triple quoted string.
rare_characters = """
%%$@_$^__#)^)&!_+]!*@&^}@[@%]()%+$&[(_@%+%$*^@$^!+]!&
more in exercise..."""

# We created a variable to hold the characters we found
characters_found = ""

# We iterated over each character in our string.
for i in rare_characters:
  # Did a check to see if it's a letter by using the .isalpha() method.
  if i.isalpha():
    # Added each letter found to our letter-holding variable. 
    characters_found += i
# And printed the return.     
print(characters_found)

>>> equality
```

So ocr.html becomes equality.html and it's off to the next level!

## Level 3
Level three was similar to level two in the fact that both had a text to sort through hidden in the source code. We 
could have used something to extract that, but opted for copy/paste. Perhaps we will refine these more later. So this 
level has a photo fo some candles and the **hint** says, "One small letter, surrounded by EXACTLY three big bodyguards
on each of its sides." The text to sort through looked something like this:

kAewtloYgcFQaJNhHVGxXDiQmzjfcpYbzxlWrVcqsmUbCunkfxZWDZjUZMiGqhRRiUvGmYmvnJIHEmbT
MUKLECKdCthezSYBpIElRnZugFAxDRtQPpyeCBgBfaRVvvguRXLvkAdLOeCKxsDUvBBCwdpMMWmuELeG
ENihrpCLhujoBqPRDPvfzcwadMMMbkmkzCCzoTPfbRlzBqMblmxTxNniNoCufprWXxgHZpldkoLCrHJq

So this sounds like a problem for regex!

```python
import re


characters = """
kAewtloYgcFQaJNhHVGxXDiQmzjfcpYbzxlWrVcqsmUbCunkfxZWDZjUZMiGqhRRiUvGmYmvnJIHEmbT
MUKLECKdCthezSYBpIElRnZugFAxDRtQPpyeCBgBfaRVvvguRXLvkAdLOeCKxsDUvBBCwdpMMWmuELeG
more in exercise..."""

# We set the mask. The first time we focused on a group of three large characters, followed by
# one small character, followed by a group of three large characters, but found that gave 
# several false positives. If you look for a small character before and after, you will find the
# results you need. 
r = r'[a-z][A-Z]{3}[a-z][A-Z]{3}[a-z]'

# A placeholder variable for all of the characters we fine.
answer = ""

# Here we use the findall method and pass the mask and the variable with the searchable text. 
search_results = re.findall(r, characters)

# We iterate through the search 
for i in search_results:
  answer += i[4]
print(answer)

>>> linkedlist

```

So equality.html becomes linkedlist.html and it's off to the next level! We'll post the next few levels in our next post. 
Happy coding!

<br/>
<hr />
