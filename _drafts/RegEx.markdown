---
title:  "RegEx"
date:   2016-09-21 12:00:00 +0200
---
### Regular Expressions

So this month we started chapter seven in Sweigart's, [Automate the Boring Stuff](https://tinyurl.com/owk3jpu). In it, he covers Regular Expressions, and their uses. More than a simple search tool, regular expressions can help you look for patterns, like all emails or phone numbers, instead just the ones you know.

^\d{3}\-|.\d{3}\-|.\d{4}
415-867-5309, (415) 867-5309, (415) 867.5309, 415.867.5309, 4158675309
### STEPS
1. Import the regex module with import re. [1]
    * `import re`

2. Create a Regex object with the re.compile() function. (Remember to use a raw string.) [2]
    * `phoneNum = re.compile(^\d{3}\-|.\d{3}\-|.\d{4})`

3. Pass the string you want to search into the Regex object’s search() method. This returns a Match object. [3]
    * `phoneBook = phoneNum.search('search text here')`

4. Call the Match object’s group() method to return a string of the actual matched text. [4]
    * `print(phoneBook.group())`


### Cheatsheet

|---
| Special Characters | Quantifiers
|-|:-
| `\` escape special characters | `*` 0 or more (append ? for non-greedy)
| `.` matches any character | `+` 1 or more (append ? for non-greedy)
| `^` matches beginning of string | `?` 0 or 1 (append ? for non-greedy)
| `$` matches end of string | `{m}` exactly mm occurrences
| `[5b-d]` matches any chars '5', 'b', 'c' or 'd' |`{m, n}` from m to n. m defaults to 0, n to infinity
| `[^a-c6]` matches any char except 'a', 'b', 'c' or '6' |`{m, n}?` from m to n, as few as possible
| `R` &#124; `S` matches either regex R or regex S |
| `()` creates a capture group and indicates precedence |
|---
{:.tablestyle}

<br/>

|---
|Special Sequences
|-|:-
|\A start of string
|\b matches empty string at word boundary (between \w and \W)
|\B matches empty string not at word boundary
|\d digit
|\D non-digit
|\s whitespace: [ \t\n\r\f\v]
|\S non-whitespace
|\w alphanumeric: [0-9a-zA-Z_]
|\W non-alphanumeric
|\Z end of string
|\g<id> matches a previously defined group
{:.tablestyle}
<hr />

[1]: https://automatetheboringstuff.com/chapter7/
[2]: https://automatetheboringstuff.com/chapter7/
[3]: https://automatetheboringstuff.com/chapter7/
[4]: https://automatetheboringstuff.com/chapter7/
