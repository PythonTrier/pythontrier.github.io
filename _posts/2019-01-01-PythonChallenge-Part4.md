---
title:  "Python Challenge, Part IV"
date:   2019-01-01 23:00:00
layout: post
---

<img src="/images/PyChallenge.jpg" alt="Python Challenge" align="left" hspace="5" style="width:180px;">


Continuing on our journey through the challenges at [PythonChallenge.com](www.pythonchallenge.com), here are the next 
few levels that we completed during the last meet.

**SPOILERS!** As stated in our last post, We will discuss the challenges, the clues, and how we solved each level. We 
discovered other sites have done the same thing but chose to solve these on our own. It's more fun that way. Afterward, 
it's interesting to go back and see how others have solved the same problem, but we recommend you solve the problems on 
your own. 

## Level 7
Level seven begins with a pretty obvious feature, a photo with a stripe running across the middle comprised of a series 
of grayscale boxes. One can process the photo directly from the URL (similar to how we handled the last challenge), or 
one could download the file and process it locally. The following code follows the latter approach. 

<!--break-->

Pillow is a common library used to process images. Here we import Image from PIL and then we open and load the locally 
saved image. 

```python
from PIL import Image
# Open and load locally saved image file.
img = Image.open('oxygen.png')
pxbuffer = img.load()

print(output)
```
Once we load the image, we read the values of the blocks. One of the team members inspected the image and realized it 
was 629 pixels wide, and the blocks were seven pixels wide. If you don't have a tool to help you figure out those 
details, you can use python to get some of the image properties. 

```python
>>> img.width
629
```

So we iterate through using:

```python
for x in range(0, img.width, 7):
    output += chr(pxbuffer[x, img.height/2][0])

```

From the docs we know that the parameters for range are range(start, stop, step), so we're starting with 0 and go to the
end or, the width of the image in steps of seven. As the stripe goes down the middle we can use img.height/2 to specify 
which line we want to use. We return a readable message by mapping the output to a Unicode character by using the chr() 
function. When we run through the loop, we discover the secret message:

```python
smart guy, you made it. the next level is [105, 110, 116, 101, 103, 114, 105, 116, 121]pe_ 
```

We assumed that the numbers in the initial output just needed to be run through the same conversion as the first batch. 
We can extract the numbers using regex and findall. We can search for a digit with one or more digits following and pass
it the first output. 

```python 
numbers = re.findall("\d+", output)
```

When we do that we get a list that returns the numbers in string form:

```python
['105', '110', '116', '101', '103', '114', '105', '116', '121']
```

We can iterate through the list converting each string to an integer, and then using the chr() function to map it to its
Unicode character. 

```python
for x in numbers:
    output2 += (chr(int(x)))
```

When we print the second output, we discover that our next URL needs to be changed to *integrity*. So we change
.../pc/def/oxygen.html to .../pc/def/integrity.html and off we go to the next challenge! 

<br/>
<hr />