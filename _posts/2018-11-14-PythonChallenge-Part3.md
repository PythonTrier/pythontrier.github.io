---
title:  "Python Challenge, Part III"
date:   2018-11-14 23:00:00
layout: post
---

<img src="/images/PyChallenge.jpg" alt="Python Challenge" align="left" hspace="5" style="width:180px;">

Continuing on our journey through the challenges at [PythonChallenge.com](www.pythonchallenge.com), here are the next 
few levels that we completed during the last meet.

**SPOILERS!** As stated in our last post, We will discuss the challenges, the clues, and how we solved each level. We 
discovered other sites have done the same thing, but chose to solve these on our own. It's more fun that way. 
Afterwards, it's interesting to go back and see how others have solved the same problem, but we recommend you solve the 
problems on your own. 

## Level 6
So we left the green hill to an interesting shot of some unzipped jeans. For some of these, I think we had a tendency to 
way over think the problem. In this case, we hit on the idea that it may have something to do with zip files pretty quick,
but it took a minute before someone suggested we just try renaming the URL from channel.html to channel.zip. 

<!--break-->

Sure enough, we were prompted to download a zip file. When you extract the file you see 910 text files each with a 
number.txt. There was a readme.txt at the bottom that gave the following hint. Hint one was "Start from 90052" and hint 
two was "answer is inside the zip." This lookd a lot like challenge four so we adapted our code to process the text files
in a similar way. 

When we attempted these challenges, we first tried to solve the problem, but afterwards, we tried to accomplish as much
of the entire process as we could without needing human intervention. This means we wanted to download the code, extract
the files, process them, and output the answer without needing to stop. The following is our final version:

```python
#Used to make requests
import urllib.request
import re
import os
import zipfile
import sys

r = r'[0-9]*$'
base_url = "http://www.pythonchallenge.com/pc/def/channel.zip"

# Download File
x = urllib.request.urlopen(base_url)
# Open the file, give it a name,
download_file = open("channel.zip", 'bw')
# Read the zip file and write the bytes to the channel.zip file
download_file.write(x.read())
download_file.close()

# Unzip file
# Check if the output directory exists.
if not os.path.exists("output"):
   # If not, make it.
   os.makedirs("output")

# Open zip file in read mode.
zip_ref = zipfile.ZipFile("channel.zip", 'r')
# Extract zip file
zip_ref.extractall("output")

commentSum = ""

# Open and printout the readme.txt for the user.
readme = open("output/readme.txt", 'r')
print(readme.read())

# Basic interface to either enter first number or exit.
next_nothing = input("Enter file number or 'exit' to quit: ")
if next_nothing == "exit":
    print("Goodbye!")
    sys.exit()

while next_nothing.isdigit() == True:
    # Open file with given number
    number_file = open("output/{0}.txt".format(next_nothing), 'r')
    # Extract next nothing
    # RegEX Mask
    r = r'[0-9]*$'
```

Now a quick note, apparently you can store comments in zip files and you can also extract them with zip_ref. So as we 
went through each file, we processed it for it's comment and added it to the commentSum variable. Since we learned about
this after we were able to follow the numeric path, we decided to expand our final output to automatically print out the 
final output created bby the comments. 
```python
    curFile = str(next_nothing) + ".txt"
    commentSum += zip_ref.getinfo(curFile).comment.decode("utf-8")

    previous_nothing = 0
    response_nothing = number_file.read()
    next_nothing = re.findall(r, response_nothing)[0]
    number_file.close()
    
    # Go to next nothing file
    if next_nothing.isdigit() != True:
        print("STOP! {0}".format(response_nothing))
        print("Your last nothing is: {0}".format(previous_nothing))
        print("Comments : {0}".format(commentSum))
        next_nothing = input("Enter your next nothing or 'exit' to quit: ")
        if next_nothing == "exit":
            print("Goodbye!")
            # break

    else:
        previous_nothing=next_nothing
        print("Next nothing: {0}".format(next_nothing))

```

So after all of this, what do we get? HOCKEY! Change the URL from channel.zip to hockey.html and we move on to... a 
sub-challenge... The clue was, "It's in the air. Look at the letters." What letters? We looked for additional clues and 
then someone took a closer look at the hockey output and realized that each of the letters in HOCKEY were made out of 
another letter. The H was made out of Os, the O was made out Xs, the C was made out of Ys, the K was made out of Gs, the 
E was made out of Es, and the Y was made out of Ns. So what's that spell? OXYGEN! So change hockey.html to oxygen.html 
and off we go!
 
<br/>
<hr />