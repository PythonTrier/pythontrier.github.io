---
title:  "New Mailing List"
date:   2018-07-08 12:00:00 +0200
layout: post
---

<img src="/images/code.png" alt="Code Challenge" align="left" hspace="5" style="width:180px;">

In our most recent MeetUp we added some challenges to the mix. We decided to start working our way through the exercises
at [exercism.io](http://exercism.io). Everyone broke off into groups and here are a couple examples of what people came
up with. We will continue to add a few new entries every month and work through all of the examples. Feel free to try 
them yourselves or come out to the next meet up and try them with the group.  

## Challenge 01
Challenge one, write a function that reverses a string. If you input "python," you'll get "nohtyp."  

### Group 1
```python

def reverse(input=''):
    return input[::-1]

```

### Group 2
```python
def reverse(input=''):
    x = list(input)
    # Iterate over half of the string.
    for i in range(int(len(input) / 2)):
        # Set temp placeholder variable
        c = x[i]
        # Swap characters with temp value
        x[i] = x[len(input)-1-i]
        x[len(input)-1-i] = c
    # Rebuild string from list.
    return "".join(x)
```

### Tests
If you want to try these at home, you can use the following to tests:
```python
import unittest

from reverse_string import reverse


# Tests adapted from `problem-specifications//canonical-data.json` @ v1.1.0

class ReverseStringTest(unittest.TestCase):
    def test_empty_string(self):
            self.assertEqual(reverse(''), '')

    def test_a_word(self):
            self.assertEqual(reverse('robot'), 'tobor')

    def test_a_capitalized_word(self):
            self.assertEqual(reverse('Ramen'), 'nemaR')

    def test_a_sentence_with_punctuation(self):
            self.assertEqual(reverse('I\'m hungry!'), '!yrgnuh m\'I')

    def test_a_palindrome(self):
            self.assertEqual(reverse('racecar'), 'racecar')


if __name__ == '__main__':
    unittest.main()
```

## Challenge 02
Challenge two is called leap. It takes a year and tells you whether or not that year is a leap year. Some of the rules
include, every leap year is evenly divisible by four, except years that are also divisible by 100, unless it is also 
divisible by 400. 

### Group 1
```python
def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)
```

### Group 2
```python
def is_leap_year(year):
    if not year % 4 and (year % 100 or not year % 400):
        return True
    return False
```

### Group 3
```python
def is_leap_year(year):
    return year % 4 == 0 and (year % 400 == 0 or year % 100 != 0)

```

### Tests
If you want to try these at home, you can use the following to tests:
```python
import unittest

from leap import is_leap_year


# Tests adapted from `problem-specifications//canonical-data.json` @ v1.3.0

class LeapTest(unittest.TestCase):
    def test_year_not_divisible_by_4(self):
        self.assertIs(is_leap_year(2015), False)

    def test_year_divisible_by_4_not_divisible_by_100(self):
        self.assertIs(is_leap_year(1996), True)

    def test_year_divisible_by_100_not_divisible_by_400(self):
        self.assertIs(is_leap_year(2100), False)

    def test_year_divisible_by_400(self):
        self.assertIs(is_leap_year(2000), True)


if __name__ == '__main__':
    unittest.main()

```

Good luck and happy coding!

<br/>
<hr />
