---
title:  "Python Challenge, Part II"
date:   2018-11-14 12:00:00 +0200
layout: post
---

<img src="/images/PyChallenge.jpg" alt="Python Challenge" align="left" hspace="5" style="width:180px;">

Continuing on our journey through the challenges at [PythonChallenge.com](www.pythonchallenge.com), here are the next 
few levels that we completed during the last meet.

**SPOILERS!** As stated in our last post, We will discuss the challenges, the clues, and how we solved each level. We 
discovered other sites have done the same thing, but chose to solve these on our own. It's more fun that way. 
Afterwards, it's interesting to go back and see how others have solved the same problem, but we recommend you solve the 
problems on your own. 

## Level 4
If you're following along from the last post, and you entered linkedlist.html, you were probably taken to a page simply
saying "linkedlist.php." You'll see a picture of a wooden toy and the hint is in the source. The **hint** recommends, 
"urllib may help. DON'T TRY ALL NOTHINGS, since it will never end. 400 times is more than enough." 

<!--break-->

We puzzled for a bit and noticed a different url was displayed in the browser if you hover over the photo. If you select
the photo your brought to http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=12345 and the text on the page 
says, "and the next nothing is 44827." So the trick is to replace the nothing in the navigation bar with the "nothing" 
found on the page. 

Our first go at this we were able to cycle through and noticed that one line did not provide a next nothing. When we 
entered that into the URL, it did, in fact, provide us with the link to the next puzzle, it wasn't a clean answer. The 
series actually stopped at one point, and told you to divide by two the last next_nothing by two and continue. We saw 
other people had solved it by reentering the new number and rerunning the code, but we wanted to run through the entire 
process without needing to adjust and rerun code. Our solution is as follows:

```python
#Used to make requests
import urllib.request
import re

r = r'[0-9]*$'
base_url = "http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing="
next_nothing = "12345"
previous_nothing=0

# range(start, stop, step)
for i in range(1, 400, 1):
  x = urllib.request.urlopen(base_url + next_nothing)
  response_nothing = x.read().decode("utf-8")
  next_nothing = re.findall(r, response_nothing)[0]

  if next_nothing.isdigit() != True:
    print("STOP! {0}".format(response_nothing))
    print("Your last nothing is: {0}".format(previous_nothing))
    next_nothing = input("Enter your next nothing or 'exit' to quit: ")
    if next_nothing == "exit":
      print("Goodbye!")
      break

  else:
    previous_nothing=next_nothing
    print("Next nothing: {0} at index {1}".format(next_nothing, i))


```

So you can see we start by setting our RegEx mask to find numbers starting from the end. We set up a variable to keep 
track of the previous nothing. then we use urllib to open the base URL and append it with the current next_nothing. We
read the response which needs to be decoded before it can be read and we apply our mask to extract the new next_nothing.
We check if each next nothing is a digit or now. If it is, we continue through the loop. If there is not a next nothing,
we stop the loop, let the user know the last good next_nothing, print off the message, and wait for input. If the user
enters the next nothing, the loop continues until you get to the final break with the answer. This solution does not 
require a user to modify code in order to obtain the final solution. I prefer that to requiring a user to change the 
value of a variable and run the code again. 


Either way, our final output gave us peak.html so we're off to the next level!


## Level 5
<img src="/images/banner.png" alt="banner.p" align="right" hspace="5" style="width:300px;">
Level five brings us to peak. In it, we saw a hill with a hint below saying "pronounce it." In the source we saw a 
comment that said, "peak hell sounds familiar?" When you pronounce it you realize that peak hill sounds a lot like pickle.
It just so happens that pickle is a Python library one can use to serialize and deserialize data structures. Next we had 
to find the pickle file. 

When we inspected the page source we found a "peakhell" tag with a src attribute of "banner.p." We took a guess that 
changing the URL would help us find the file we were looking for. Sure enough, when we changed peak.html to banner.p, 
we got a popup prompting us to download the file. While you can do that, you can also read the file directly from the URL,
deserialize it, and work with the data using urllib. We opted for the latter. 

In the code below you can see we import urllib.request and pickle. You can set the base URL with the location of your 
pickle file, open the URL, and load the file with pickle.  When we printed the output of the pickle file, it appeared to
be a list of lists containing what looked like positional data and a series of hash tags. 
<br /><br />


```python
#Used to make requests
import urllib.request
import pickle

base_url="http://www.pythonchallenge.com/pc/def/banner.p"

x = urllib.request.urlopen(base_url)
y = pickle.loads(x.read())

print(y)

>>>[[(' ', 95)], [(' ', 14), ('#', 5), (' ', 70), ('#', 5), (' ', 1)], [(' ', 15), ...
```

We suspected that each row stacked on top of one another would give us our next clue using the hashtags. We completed the
challenged by adding:
```python
for line in y:
  for t in line:
    print(t[0]*t[1], end = '')
  print("")

```
The output produced "channel." You may encounter some warping if your terminal window is too wide. We reduced the width
and found the text normalized. Either way, we changed our URL to channel.html and it's off to the next challenge! 

<br/>
<hr />
