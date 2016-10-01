---
title:  "Code Challenge"
date:   2016-08-09 12:00:00 +0200
---
### Challenge 09
<img src="/images/code.png" alt="Code Challenge" align="left" hspace="5" style="width:180px;">

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^1000?

<br/>


|Special Characters| Quantifiers|
| ----- | ------- |
|`\` escape special characters|`*` 0 or more (append ? for non-greedy)|
|`.` matches any character|`+` 1 or more (append ? for non-greedy)|
|`^` matches beginning of string|`?` 0 or 1 (append ? for non-greedy)|
|`$` matches end of string|`{m}` exactly mm occurrences|
|`[5b-d]` matches any chars '5', 'b', 'c' or 'd'|`{m, n}` from m to n. m defaults to 0, n to infinity|
|`[^a-c6]` matches any char except 'a', 'b', 'c' or '6'|`{m, n}?` from m to n, as few as possible|
| <code>S &#124; R</code> matches either regex R or regex S|Test|
|`()` creates a capture group and indicates precedence||



### Challenge 10

`n!` means `n × (n − 1) × ... × 3 × 2 × 1`
For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800, and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
Find the sum of the digits in the number 100!

### Want to give it a try?

We have a Jupyter notebook where code challenges are presented for the group to try. The link can be found at <https://srv.derpy.ws:55523/tree/Challenges>. There is a password so if you haven’t received it already, please feel free to contact me on MeetUp and I’ll send you the current password.

Past solutions will remain in each challenge notebook. Feel free to add your own solution at any time. Consider commenting your code to help others understand your approach. If you can’t understand why you wrote something after not looking at it for a while, it could probably benefit from a little extra commenting. A few new challenges will be posted every month.

<hr />
