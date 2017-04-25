---
title:  "Up and Running with Virtual Environments, Part II"
date:   2017-04-25 12:00:00 +0200
layout: post
---

<img src="/images/virtualenvs.png" alt="Virtual environments" align="left" hspace="5" style="width:180px;">

One of the problems I encountered working with Brew, was a difficulty controlling which versions of Python I was able to
use specifically. You can check which versions you currently have on your system by executing ```brew info <desired 
forumla>```. As you can see in my example here, I have 3.5.1, 3.5.2, 3.6.0, and 3.6.1 on my system.  You can see that 
version 3.6.1 is starred as the currently selected version.

```
➜  ~ brew info python3
python3: stable 3.6.1 (bottled), HEAD
Interpreted, interactive, object-oriented programming language
https://www.python.org/
/usr/local/Cellar/python3/3.5.1 (3,628 files, 53.6MB)
 Poured from bottle on 2016-05-29 at 22:21:58
/usr/local/Cellar/python3/3.5.2_1 (3,571 files, 54.7MB)
 Poured from bottle on 2016-08-08 at 21:48:40
/usr/local/Cellar/python3/3.5.2_3 (3,686 files, 55.4MB)
 Poured from bottle on 2016-11-12 at 21:33:29
/usr/local/Cellar/python3/3.6.0 (3,704 files, 57.5MB)
 Poured from bottle on 2017-02-25 at 20:16:45
/usr/local/Cellar/python3/3.6.1 (3,778 files, 57.5MB) *
 Poured from bottle on 2017-04-08 at 00:22:46
From: https://github.com/Homebrew/homebrew-core/blob/master/Formula/python3.rb
```

Using ```mkvirtualenv <env name>``` will install the starred version. But what if I'm working on a project that uses an 
older version of Python? If you have the version that you want in your cellar, then you can use 
```brew switch <formula> <version>```. Here you can see that I switched to version 3.5.1. When I enter 
```brew info python3``` again, it now shows me that my starred version of Python is indeed version 3.5.1.

<!--break-->

```
➜  ~ brew info python3
python3: stable 3.6.1 (bottled), HEAD
Interpreted, interactive, object-oriented programming language
https://www.python.org/
/usr/local/Cellar/python3/3.5.1 (3,628 files, 53.6MB) *
  Poured from bottle on 2016-05-29 at 22:21:58
/usr/local/Cellar/python3/3.5.2_1 (3,571 files, 54.7MB)
  Poured from bottle on 2016-08-08 at 21:48:40
/usr/local/Cellar/python3/3.5.2_3 (3,686 files, 55.4MB)
  Poured from bottle on 2016-11-12 at 21:33:29
/usr/local/Cellar/python3/3.6.0 (3,704 files, 57.5MB)
  Poured from bottle on 2017-02-25 at 20:16:45
/usr/local/Cellar/python3/3.6.1 (3,778 files, 57.5MB)
  Poured from bottle on 2017-04-08 at 00:22:46
From: https://github.com/Homebrew/homebrew-core/blob/master/Formula/python3.rb
```

I can test this by creating a virtualenv and see which version is installed. Here I created a virtualenv called testEnv,
and sure enough, it installed version 3.5.1. The problem one may run into is when you want a version that existed prior 
to when you installed Python with Brew. The repository for previous formula versions has been deprecated, which has led 
to several articles and StackOverflow questions on how to fill this void.  

```
➜  ~ mkvirtualenv testEnv
Running virtualenv with interpreter /usr/local/bin/python3
Using base prefix '/usr/local/Cellar/python3/3.5.1/Frameworks/Python.framework/Versions/3.5'
New python executable in /Users/Steglitz/Envs/testEnv/bin/python3.5
Also creating executable in /Users/Steglitz/Envs/testEnv/bin/python
Installing setuptools, pip, wheel...done.
virtualenvwrapper.user_scripts creating /Users/Steglitz/Envs/testEnv/bin/predeactivate
virtualenvwrapper.user_scripts creating /Users/Steglitz/Envs/testEnv/bin/postdeactivate
virtualenvwrapper.user_scripts creating /Users/Steglitz/Envs/testEnv/bin/preactivate
virtualenvwrapper.user_scripts creating /Users/Steglitz/Envs/testEnv/bin/postactivate
virtualenvwrapper.user_scripts creating /Users/Steglitz/Envs/testEnv/bin/get_env_details
```

My preferred method is to use pyenv.  Installing is easy with Brew. ```brew install pyenv```.  Once you've installed 
pyenv, you can check which versions are available by using ```pyenv install --list```. The list of options is quite 
extensive. It includes versions of Python 2, Python 3, Anaconda, Anaconda 2 & 3, ironpython, jython, miniconda, 
miniconda 2 & 3, pypy, pyston, and stackless python.  Let's keep it simple though and install Python 3.1.4.  

One important thing to note is that you need your pyenv directory to be before /usr/local/bin in your path.  You can 
configure that in your .rc file by adding the following exports. 
```
export PATH=/usr/local/bin:$PATH
export PYENV_ROOT=/usr/local/var/pyenv
export PATH="$PYENV_ROOT/bin:$PATH"
```
By default pyenv saves each version of Python in ```~/.pyenv/``` I want my virtualenvs to be stored in the same 
neighborhood with my homebrew, so I've set my ```PYENV_ROOT``` to ```/usr/local/var/pyenv```. This is where it will 
store all of my Python versions. Now everything will be installed in a nice, easy to find, spot. Now it's a matter of 
installing the version you want. The following installs Python 3.1.4:

```
➜  ~ pyenv install 3.1.4
Downloading Python-3.1.4.tgz...
-> https://www.python.org/ftp/python/3.1.4/Python-3.1.4.tgz
Installing Python-3.1.4...
patching file ./Modules/readline.c
Hunk #1 succeeded at 178 (offset -53 lines).
Hunk #2 succeeded at 692 (offset -81 lines).
Hunk #3 succeeded at 744 (offset -82 lines).
Hunk #4 succeeded at 801 (offset -83 lines).
Hunk #5 succeeded at 841 with fuzz 2 (offset -102 lines).
patching file ./Lib/ssl.py
patching file ./Modules/_ssl.c
Hunk #3 succeeded at 1799 (offset -1 lines).
Installed Python-3.1.4 to /usr/local/var/pyenv/versions/3.1.4

Downloading setuptools-17.1.1.tar.gz...
-> https://pyenv.github.io/pythons/5bf42dbf406fd58a41029f53cffff1c90db5de1c5e0e560b5545cf2ec949c431
Installing setuptools-17.1.1...
Installed setuptools-17.1.1 to /usr/local/var/pyenv/versions/3.1.4

Downloading pip-1.5.6.tar.gz...
-> https://pypi.python.org/packages/source/p/pip/pip-1.5.6.tar.gz
Installing pip-1.5.6...
Installed pip-1.5.6 to /usr/local/var/pyenv/versions/3.1.4
```

You can check which versions you have installed with: 

```
➜  ~ pyenv versions
  system
  3.1.4
* 3.5.3 (set by /usr/local/var/pyenv/version)
  3.6.0

```

You can see that installing doesn't change the global version. You can change that with ```pyenv global 3.1.4```.  Now 
when you check the versions again you'll see that it has updated the global version.

```
➜  ~ pyenv versions
  system
* 3.1.4 (set by /usr/local/var/pyenv/version)
  3.5.3
  3.6.0
```


```
➜  ~ virtualenv -p /usr/local/var/pyenv/versions/3.5.3/bin/python3.5 ~/Envs/Projects/test353
Running virtualenv with interpreter /usr/local/var/pyenv/versions/3.5.3/bin/python3.5
Using base prefix '/usr/local/var/pyenv/versions/3.5.3'
New python executable in /Users/Steglitz/Envs/Projects/test353/bin/python3.5
Also creating executable in /Users/Steglitz/Envs/Projects/test353/bin/python
Installing setuptools, pip, wheel...done.
```