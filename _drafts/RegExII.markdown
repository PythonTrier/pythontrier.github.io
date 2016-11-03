---
title:  "RegEx"
date:   2016-09-21 12:00:00 +0200
---
## Regular Expressions II

### Tutorial Regular expressions
"Regular expressions" are a kind of language that can be used when programming for various problem-solving tasks, especially when it comes to editing, checking, or searching for string strings.

And because the name "Regular Expressions" is a little bulky, the "Regular Expressions" are often simply "RegEx(s)".

### Introduction
Here is a small tutorial on these esoterically appealing but incredibly powerful string strings, which trigger the associations of a small child and his first attempts at the keyboard with the unobtrusive observer.

**What are regular expressions?** As I have said, string expressions can be tested for a particular composition using regular expressions, such as e.g. Is important for applications that expect user input.

Examples:

* school grades
* postal codes
* E-mail addresses
* Order numbers

### Concrete application

Popular places where you can encounter regular expressions and apply this knowledge:

* Web applications (e.g. in PHP, Perl)
* Unix scripts

In the following, it is assumed that you have a corresponding place and have already informed yourself on how regular expressions are used in the environment of your choice. In PHP this is done, for example, with the functions preg_match (checking  and finding strings) and preg_replace (replacing strings).

The best way to test your expression is with a "dry-run". You can use an online tool like [regex 101](https://regex101.com/) or [the regex coach](http://www.weitz.de/regex-coach/). There are numerous other options, but those are just two examples.

### Good style

Often you will find that there are a lot of different solutions to a problem. In this case, they are facing each other

* **An exact solution and a more general one.** If there is a risk that the exact solution is too "restrictive" (and thus may frustrate a user if their correct input is not accepted), take the general one. If the problem is very "clear", rather take the exact one.

* **An accurate solution and a fast.** Long regular expressions can take a lot of time to process. Again, you have to weigh what is more important to you. It could annoy users if checking an input takes a very long time.

* **A simple solution and an "elegant".** You could express in 10 characters what others could not with 60, great, but remember that you may want to change something later! And that can be harder than you think. Therefore, it's better to take the simpler variant or comment complicated expressions.

### Problems

If your regular expression is troublesome, but you're pretty sure it's right, check out the special characters and what you have to do with them to use them. Special characters are already "banal" things like a point.

In addition you should really test your expressions in the RegEx-Coach or the like! This sometimes provokes incredible irresponsible behavior. ;-)

You can also use Google. ;-) One can find lots of good information and many templates to various common problems. Google Groups are also very helpful.

### Conventions

In this tutorial the following colors are used for texts (strings):
~~~
Regular expression that you can use theoretically with
Marked new parts
Intentionally erroneous code
~~~
{: .r}
I often use the programmers not strange "string" (I spare me the underwear joke) for a piece of text. In addition, an expression "meets" = "describes a text exactly" = "does the desired function" = "matcht" = "eats (something)"

### Simple expressions
 
#### One-element regular expressions

Let's start small. We want to check whether an input corresponds to a school grade of 1-6.
~~~
[123456]
~~~
Do it for us. You see: in square brackets is a list of characters that are allowed. Overall, the entire braked expression is only for one character: 1 or 2 or ... or 6.

Since our numbers from 1 to 6 follow so beautiful, we can also write
~~~
[1-6]
~~~
Which makes things a bit clearer. Exactly so you could eg. Check whether an entry corresponds to a track on a station:
~~~
[1-9]
~~~
For a station with 9 tracks. On our station, today, track 4 was blocked, so not allowed as input:
~~~
[1-35-9]
~~~
So we divided the input area into two areas 1-3 and 5-9. You can see: The two areas are simply written behind each other. This is in the beginning habituationbedürftig (intuitively one would like to make a space), but we will meet more often.

### Multiple regular expressions

What if it is grown on our station? Let's say it is extended to 12 tracks:
~~~
[1-12]
~~~
(Track 4 is again open ;-)). **But beware, here's a mistake!**

As mentioned above, the *entire* expression in the brackets is for only one character. "12" contains two characters. The code above will not work: it means "1 to 1" or "2". We will demonstrate how to deal with railway stations with more than 9 tracks later.

For the moment we want something different Check: Platforms 1-9 still have each section "a" and "b". We shall therefore check for 1a, 1b, 2a, ..., 9a, 9b:
~~~
[1-9] [ab]
~~~
Let's say a number 1-9 followed by a letter a or b.

Thus, several rectangular brackets correspond to several characters. If an expression describes several characters, they are simply hung one after the other. Then the input from left to right is compared with your expression.

Of course not all letters have to be listed:
~~~
[1-9] [a-d]
~~~
Also now applies e.g. 4d.

Please note that upper and lower case letters are handled separately. A meaningful extension would therefore be e.g.
~~~
[1-9] [a-dA-D]
~~~

### Options

Let's look at entering a house number. These can consist of one or more (up to 3) digits and an a-z at the end. But do not have to.
~~~
[1-9] [0-9]? [0-9]? [A-z]?
~~~
The question mark behind an element (and [1-9] is an element!) States: The preceding element *can* occur but does not have to.

The last code is: A digit (1-9), optionally two more digits (0-9), optionally a letter.

Considering such a construction with e.g. 10 digits, you can easily imagine that it will be very long. Therefore, there is a different way of writing if you want to allow an element more than once:
~~~
a{1,3}h
~~~
Matches "ah" exactly as on "aaah". The number in parentheses stands for the {minimum, maximum} number of characters. Therefore, we can also formulate our house numbers as follows:
~~~
[1-9] [0-9] {0,2} [a-z]?
~~~
And then synonymous without problems for longer streets (USA ;-)) circumscribe:
~~~
[1-9] [0-9] {1,4} [a-z]?
~~~
Now allows house numbers in the five-digit range, but requires at least a two-digit (note the change before the comma).

A construction like
~~~
[0-9]{5}
~~~
(Ie, a parenthesis with only one entry) requires an exact x-time repetition of the preceding expression. In our case 5 times: This regular expression would be suitable to check (German) postal codes.

We can also express a "at least"
~~~
[0-9]{3,}
~~~
Calls at least 3 digits.

### Any repetitions

So far we have always had to know how many characters are to be found. There are, however, cases in which a sign may be repeated as often as desired.

Let's look at the phone number verification. If you write a regular expression, it is often a good idea to make a note of what it should do. Our telephone numbers should be of this format:

* 0651/55541-36
* 0049 160 555678
* 0180.23.555.63

In addition to numbers, there may also be hyphens, traces, blanks, and dots. A valid element would be
~~~
[0-9 /. -]
~~~
(So ​​this one character consists of a number between 0 and 9 or a slash or a point or a space or a minus.) Be careful! As you can see, there are two hyphens in the parentheses: once in a special function to indicate a range of numbers, and once as a "real" hyphen, which may appear. In order to rule out confusion, we have to mask the latter, so they show that he has no special function here. This can be done with a pre-defined backslash:
~~~
[0-9 /. \ -]
~~~
And then let's say that these characters may occur as often as you like:
~~~
[0-9 /. \ -] +
~~~
The plus means: one or more of the preceding character, ie at least one time. If we would also allow an empty telephone number (the mathematician would say: the null number), there is a different character:
~~~
[0-9 /. \ -] *
~~~
Is now also on "" (empty string) and of course our telephone numbers.

This expression is, of course, a very general expression (see discussion above). It also allows phone numbers, which are obviously not correct, like
~~~
--..//123
~~~
If you want to further restrict this, you have to develop a more complex expression.

So again summarized: The + stands for a at least one-time repetition. * Means: no time or any number of times.

### Placeholders

Let's look at another example: We want to search for a writer in a library, but we do not know if he has a second first name. After the first name can be any characters come and then then the surname. A possible solution is as follows:
~~~
Marius .*Easter Bunny
~~~
The individual means: "Marius", followed by a space followed by an arbitrary character (the point stands for it!) As often as desired (and possibly even none) and then the surname. This applies to "Marius Osterhase" as well as to "Marius Müller Osterhase".

Just like that, you can also follow the point, of course, to get at least one character.

The point "normally eats" almost everything, but no line breaks. You can find him in modifiers.

The "attentive reader" will not have escaped the fact that we already had a point above, within the square brackets. As with many, but not all, special characters, these must be masked outside of square brackets as such (backslash before), but not within.

### Negate the characters

Suppose we do not know the author's second first name, but we can remember that it does not contain q and no z. Also no problem:
~~~
Marius [^qz]+ Easter bunny
~~~
Requires a second first name (therefore the plus), and assigns an arbitrary character that is not q or z. The ^ negates therefore a character class and applies exactly to the closing parenthesis.

### Brackets

Brackets can be used to summarize longer expressions into an element, thereby allowing the above-learned to be applied to partial expressions:
~~~
Marius (miller )?Easter bunny
~~~
"Marius Müller Osterhase" or "Marius Osterhase" and nothing else: The question mark refers - thanks to the brackets - to the complete second first name and the following space.

It is also possible to write:
~~~
Ba(na)*na
~~~
What now applies to this yellow thing as well as e.g. For "Banananane". Again, the notation with braces can be used:
~~~
Ba(na){2.5}ne
~~~
Which of course now has a different meaning.

### Alternatives

With brackets, however, other things can also be made, e.g. Specify alternatives to a partial expression:
~~~
The weather is (great|really bad)
~~~
In this example, last words may be "great" or "really bad", but not both.

### Modifiers

In all RegEx variants, you can set so-called modifiers and thus control the exact behavior of the expression. In Java you can do this for example. When constructing a matcher object, in PHP, a regular expression always has the syntax
~~~
[Limits][RegEx][Limits][Modifier(s)]
~~~
E.g.
~~~
/(My|Expression)/im
~~~
The slashes are the limiting characters (others are conceivable here, for example ~), and "i" and "m" in this case are modifiers. Common modifiers include:

* I Case-Insensitivity (case-insensitive)
* S point is multilineable: the point also eaves line breaks, this is not the case as a rule.
* M line mode: The characters ^ and $ also match the beginning and end of the lines. Without the modifier, they only match the start and end of the entire string.

Modifiers always refer to the entire expression and are therefore an easily overlooked source of error.

## More complex expressions

### Nesting

Of course, various brackets may also be nested in one another, e.g. In the following expression:
~~~
(VW (Golf|Polo)|Fiat (Punto|Panda))
~~~
Which meets "VW Golf", "VW Polo", "Fiat Punto" and "Fiat Panda". This allows quite short expressions for long string strings, but it can also take a lot of time to process.

These alternatives can also be repeated:
~~~
(10|01)+
~~~
Describes a sequence of zeros and ones in which a maximum of 2 zeros or ones follow one another. (If this is not clear now, just think about what you can do with "10" and "01".)

### Greedy expressions

An example from the practice: The following, somewhat longer code is to look for us from an HTML file the links or their destination addresses. A link in an HTML source code has i.d.R. A format like this:
~~~
<a href="[...Additional information ...]>
~~~
(E.g.
~~~
<a href="http://www.example.org/" target="_blank">
~~~
A possible expression for this is found quite quickly:
~~~
<a href=".*".*>
~~~
Looks good, but does not work. Why?

The author has thought the expression would stop at the link to the link, but it does not. The following is a section from an HTML file with a selected hit:
~~~
<BODY> Bla Blubb 1 2 3 <a href="http://www.example.org/" target="_blank"> link text </a> Much, much more <i> Text </ i> Blubb 42
~~~
This is clearly too far! The second point is too "greedy" and eats all signs even over several closing angle brackets. In other situations it would be possible for the first point to be similar.

For our case, there are two possible solutions. Often however only one of them remains, so I present both:

* Replace the point with something that does not eat any more pointed braces:
~~~
<a href=".*"[^>]*>
~~~
* This is a method that is often used (consider which characters mark the end and exclude it from the one to be hit). The whole thing must now be done analogously for the first point:
~~~
<a href="[^"]*"[^>]*>
~~~

* The point "re-educate" (or make enough) so that both together only eat as much as is absolutely necessary. This is an attached question mark, which of course no longer has the known function:
~~~
<a href=".*?".*?>
~~~
Of course this special use of the question mark also works behind a plus sign.

### Groups

Virtually all RegEx dialects allow for the formation of groups and their storage for later use. Brackets can also be used for this purpose.

Subsequent use may e.g. Mean that an expression is supposed to hit a longer character string, but only a part of it should be used.

So, in conjunction with the above expression, it would be very useful to filter all the destination addresses from an HTML page.

How exactly you get to the contents of the groups, is in the guidance of the language you use. For PHP you'll find it for example. At preg_match and java as far as I can remember somewhere near regex.matcher. Google should know since more.
~~~
<a href="(.*?)".*?>
~~~
The first point and its "multipliers" are bracketed. The first group now contains the URL.

Note that when the groups are numbered, the order of the parenthesis counts. This is important to note when using nested brackets. In addition, all brackets are usually included, even if they are only used to identify alternatives (see above).

### Credentials

There is another, very useful purpose for groups. Imagine if you want to find all the numbers that start and end with the same number in a sequence of numbers (say they are separated by a space).

So we have
~~~
129 337873 78324 43938 9388 824998 349734
~~~
We can use such an expression:
~~~
([0-9])[0-9]*\1
~~~
Where the \1 points to the content of the first parenthesis and therefore must be the same as in this parenthesis. The first and last characters of our expression are each a space to indicate the end and beginning of a number.

Let's look at what it is:
~~~
129 337873 78324 43938 9388 824998 349734
~~~
As you can see, the first and last spaces are still added to the respective hit. This is no miracle, after all there is also a space in front of and behind our expression. This is not really good, if this blank really does not interest us. Therefore, the RegEx language also provides a means, which also works if we do not want or can not use groups:

### Special characters: word boundaries

There are signs that stand in the regular expression, but not in the text, which is afterwards matched. This does not tell you now? Well, let's look at an example of how to write the above expression without the spaces:
~~~
\b([0-9])[0-9]*\1\b
~~~
This "\b" is a related element and indicates a word beginning or a word end (ie a word boundary). Do you know what is often used in word processing programs and editors "Search for a whole word only" in the search function? If you choose these, In a search for "Kai" instead of these hits
~~~
Kai goes after
Kaiserslautern
~~~
Only this match found:
~~~
Kai goes after
Kaiserslautern
~~~
The latter can be translated or expressed in regular expressions:
~~~
\bKai\b
~~~
So "Kai" only if it is surrounded by word boundaries. What exactly is a word boundary? A word boundary occurs between a word character and a nonword character. Hh (Explanation follows!)

### Special characters: Other characters

There is - surprise! - even more special characters that you can use and which can shorten a RegEx beautifully. These always consist of a backslash followed by another character (letters). Incidentally, a large letter always stands for the opposite of a small one.
~~~
\w \W
~~~
A word-sign (small w) stands exactly for [a-zA-Z0-9] and a non-word sign (large W) stands exactly for everything else, thus [^a-zA-Z0-9].
~~~
\d \ D
~~~
A digit, that is a digit from 0-9. Corresponds to [0-9] and uppercase [^0-9].
~~~
\b \B
~~~
The "small" variant you have already known above. A large B stands accordingly for all places where no word boundary occurs.
~~~
\s \S
~~~
The small variant stands for all whitespaces: these are almost all signs that you can not see. So Return (or Enter), Empty (Space), Tab (ulator).
~~~
\\
~~~
If you start with Backslash, as you have seen, special characters begin, you have to make the backslash somehow, if you mean exactly this. This is done simply by a double one. It is said that the first "masks" the second.
~~~
\. \+ \* \( \) \[ \] \- \$ \|
~~~
The point and many other characters, as you have seen above, have a special function. Therefore, they are blocked ( "masked") by means of a backslash. This applies to the minus sign only within character classes, but you can omit the backslash in the same for many other characters.

### Beginning and ending characters

Imagine you want to check a date, let's say
~~~
1\.3\.2004
~~~
And this expression leaves you
~~~
11.3.2004
~~~
Go What comes out? Your expression will tell you that it hits. Is also clear somewhere, after all, if you omit one, your date is there. But you want the entire date to look like yours? Is not there what of Ratiodingsbums? However,
~~~
^1\.3\.2004$
~~~
This roof at the beginning says: Only meet if the string to be searched starts here. And the dollar sign stands for: Only if the string to be searched ends here.

Of course, one can also use them individually; As an example, let's look at two regular expressions: the first is a string that ends with a number. The second is a string that begins with an opening parenthesis. In doing so, we use the above mentioned masking for the parenthesis.
~~~
\d$
^\(
~~~
### Positive lookaheads and lookbehinds

You have now learned how to determine word boundaries without actually eating them yourself. There is also a universal possibility.

The following sequence is used as an example:
~~~
000566403580000345050052301078906040092800100001007680
~~~
From this sequence of numbers, all those sequences containing three digits not equal to zero and bounded by a zero on each side are to be fished out. In our case, therefore, "358", "345", "523", "789", "928" and "768". You can use the following code:
~~~
(?<=0)[1-9]{3}(?=0)
~~~
No panic! To explain, and we begin in the middle: the [1-9]{3} should be clear (3 digits not equal to zero). Before that you can find the brace (? <= 0). The characters? <= You have to look "en bloc" and they indicate a special function for the brace. This stands for "voredran a zero". And because "foreedran" in the normal reading direction of the Western world means that the clip looks "backwards", this function is called "positive lookbehind".

Just as with the characters "? =", These assign the special function "hintendran must ... come" to the bracket, in our case, therefore, "hintendran a zero". The whole is called "positive lookahead", because the clip looks "forward".

So, if we use our knowledge about "\W", we could also express our "\b" example from above:
~~~
(?<=\W)(\d)\d*\1(?=\W)
~~~
For the explanation, we start again in the middle: There is the code known from above (one digit, any number of additional digits and another digit which is the same as the first one). The very first parenthesis requires a non-word character before the first digit and the last parenthesis a non-word character after the last digit.

Obviously, lookaheads and lookbehinds can also occur individually in a regular expression and even multiple times. The only thing that does not go is a lookbehind with an unknown number of characters. (Ie, as things like \*, + and {0,4})

All right? If not, then back to the beginning of this section, do not go through "Go" and do not include 200 regExes.

### Negative lookaheads and lookbehinds

You found that complicated and look as slow as voodoo are regular expressions? It gets even better.

Here is another example: You want to check an e-mail address that is not from France. First, let's look at a simple e-mail address check without the restriction:
~~~
[^@]+@.+\.[^.] +
~~~
(A character other than the @ sign, followed by an @ sign, any character (but at least one), a dot, and any character behind it, but no more. Matches toll@example.com exactly as it does on many characters @ Noch.mehr.Punkte.example.com.) Important: the last pair of square brackets always eats the last part (the top-level domain, in the example "com") of the email address.

Now we add a restriction and want to exclude "fr" at this point. The point may not follow "fr".
~~~
[^@]+@.+\.(?!fr)[^.]+
~~~
Do it for us. As shown in Fig. Therefore, a parenthesis is "not allowed to follow".

This could also make a special search for a word.
~~~
\bF(?!eta\b).*\b
~~~
Applies to all words that start with "F" but are not "Feta". The following text highlights all strings that are taken:
~~~
Grease Feta False Feuchte Fuffziger
~~~
This was the "negative lookahead".

And because it was so beautiful, I put another, the "negative lookbehind":
~~~
.*(?<!Garbage)bucket
~~~
Applies to all buckets in which no garbage belongs, thus means "meet at this point, if there is no" garbage "in front of it.
