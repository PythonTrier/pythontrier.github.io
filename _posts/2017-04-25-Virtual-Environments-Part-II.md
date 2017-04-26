---
title:  "Up and Running with Virtual Environments, Part II"
date:   2017-04-25 12:00:00 +0200
layout: post
---

<img src="/images/virtualenvs.png" alt="Virtual environments" align="left" hspace="5" style="width:180px;">

One of the problems I encountered working with Brew, was how to select which versions of Python are used when I 
installed a virtual environment. You can check which versions you currently have on your system by executing 
```brew info <desired forumla>```. As you can see in my example, I have 3.5.1, 3.5.2, 3.6.0, and 3.6.1 on my system. You 
will also notice that version 3.6.1 is starred as the currently selected version.

```commandline
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
```brew switch <formula> <version>```. 

```commandline
➜  ~ brew switch python3 3.5.1
Cleaning /usr/local/Cellar/python3/3.5.1
Cleaning /usr/local/Cellar/python3/3.5.2_1
Cleaning /usr/local/Cellar/python3/3.5.2_3
Cleaning /usr/local/Cellar/python3/3.6.0
Cleaning /usr/local/Cellar/python3/3.6.1
23 links created for /usr/local/Cellar/python3/3.5.1
```

Here you can see that I successfully switched to version 3.5.1. When I enter 
```brew info python3``` again, it now shows that my starred version is indeed 3.5.1.

<!--break-->

```commandline
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

You can also test this by creating a virtualenv and see which version is installed. Here I created a virtualenv called 
testEnv, and sure enough, it installed version 3.5.1.  

```commandline
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

The problem you may run into is when you want a version that existed prior to when you installed Python with Brew. The 
repository for previous formula versions has been deprecated, which has led to several articles and StackOverflow 
questions on how to fill this void. 

So if you can't use ```brew switch```, then you can expand your options using pyenv.  Installing is easy with Brew. 
```brew install pyenv```.  Once you've installed pyenv, you can check which versions are available by using 
```pyenv install --list```. The list of options is quite extensive. It includes versions of Python 2, Python 3, 
Anaconda, Anaconda 2 & 3, ironpython, jython, miniconda, miniconda 2 & 3, pypy, pyston, and stackless python.  

**Note:** As of the posting of this article, I received errors for Python versions 3.1 and 3.2. Support was deprecated 
by virtualenv for certain versions. If you receive something like
```OSError: Command /Users/Steglitz/Envs... - setuptools pip wheel failed with error code 1```, then you may have been 
trying to install an unsupported version. Just something to be aware of.

Also important to note is that you need your pyenv directory to be before ```/usr/local/bin``` in your path.  You can 
configure that in your .rc file by adding the following exports. 

```commandline
export PATH=/usr/local/bin:$PATH
export PYENV_ROOT=/usr/local/var/pyenv
export PATH="$PYENV_ROOT/bin:$PATH"
```
By default, pyenv saves each version of Python in ```~/.pyenv/``` I want my virtualenvs to be stored in the same 
neighborhood with my homebrew, so I've set my ```PYENV_ROOT``` to ```/usr/local/var/pyenv```. This is where it will 
store all of my Python versions. Now everything will be installed in a nice, easy to find, spot. Now it's a matter of 
installing the version you want. So now let's install Python 3.3.0.  

```commandline
➜  ~ pyenv install 3.3.0
Downloading Python-3.3.0.tgz...
-> https://www.python.org/ftp/python/3.3.0/Python-3.3.0.tgz
Installing Python-3.3.0...
patching file ./Modules/readline.c
Hunk #1 succeeded at 225 (offset -6 lines).
Hunk #2 succeeded at 759 (offset -14 lines).
Hunk #3 succeeded at 812 (offset -14 lines).
Hunk #4 succeeded at 870 (offset -14 lines).
Hunk #5 succeeded at 918 with fuzz 2 (offset -25 lines).
patching file ./Lib/ssl.py
Hunk #2 succeeded at 618 (offset -31 lines).
patching file ./Modules/_ssl.c
Hunk #1 succeeded at 1683 (offset -63 lines).
Hunk #2 succeeded at 2750 (offset -94 lines).
Installing pip from https://bootstrap.pypa.io/get-pip.py...
Installed Python-3.3.0 to /usr/local/var/pyenv/versions/3.3.0
```

Assuming everything installed correctly, you should be able to see your newly installed version now.

```commandline
➜  ~ pyenv versions
  system
  3.3.0
* 3.5.3 (set by /usr/local/var/pyenv/version)
  3.6.0

```

You may also note that installing does not change the global version. You can change that with ```pyenv global 3.3.0```.
Now when you check the versions again, you'll see that it has updated the global version.

```commandline
➜  ~ pyenv versions
  system
* 3.3.0 (set by /usr/local/var/pyenv/version)
  3.5.3
  3.6.0
```

Now you create your virtual environment by using 
```virtualenv -p /path/to/your/pyenv/version/bin/ ~/Your/desired/env/location```. If your destination file doesn't 
exist, one will be created automatically.

```commandline
➜  ~ virtualenv -p /usr/local/var/pyenv/versions/3.3.0/bin/python3.3 ~/Envs/Projects/test330
Running virtualenv with interpreter /usr/local/var/pyenv/versions/3.3.0/bin/python3.3
Using base prefix '/usr/local/var/pyenv/versions/3.3.0'
New python executable in /Users/Steglitz/Envs/Projects/test330/bin/python3.3
Also creating executable in /Users/Steglitz/Envs/Projects/test330/bin/python
Installing setuptools, pip, wheel...done.
```

Then activate by sourcing the virtualenv bin with activate: 

```commandline
➜  ~ source ~/Envs/Projects/test330/bin/activate
(test330) ➜  ~
```

You'll know that you're in your virtual env when you see the env name in brackets to the left of your prompt. Just as a 
demonstration, you can see that the version when activated is 3.3.0.

```commandline
(test330) ➜  ~ python -V
Python 3.3.0
```

When you deactivate, the python version reverts to your system python. 

```commandline
(test330) ➜  ~ deactivate
➜  ~ python -V
Python 2.7.13
```

A real quick demonstration of why this happens becomes more apparent when you look at the path file before you activate,

```commandline
➜  ~ echo $PATH
/Users/Steglitz/.rvm/gems/ruby-2.3.0/bin:/Users/Steglitz/.rvm/gems/ruby-2.3.0@global/bin:/Users/Steglitz/.rvm/rubies/
ruby-2.3.0/bin:/usr/local/var/pyenv/bin:/usr/local/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/Steglitz/
.rvm/bin
```

and then once again afterward.

```commandline
➜  ~ source ~/Envs/Projects/test330/bin/activate
(test330) ➜  ~ echo $PATH
/Users/Steglitz/Envs/Projects/test330/bin:/Users/Steglitz/.rvm/gems/ruby-2.3.0/bin:/Users/Steglitz/.rvm/gems/
ruby-2.3.0@global/bin:/Users/Steglitz/.rvm/rubies/ruby-2.3.0/bin:/usr/local/var/pyenv/bin:/usr/local/bin:/usr/local/bin:
/usr/bin:/bin:/usr/sbin:/sbin:/Users/Steglitz/.rvm/bin
```

You can see that after activating, the test330 environment's 'bin' directory was placed at the beginning of the 
```$PATH```. As a result, the virtual env's directory will be the first directory searched, and you end up using the 
virtual env Python instead of the system Python. This should also be a consideration when you have more than one virtual 
env activated. It is possible that running more than one version at a time could create conflicts between environments. 
So keep it simple, keep it separate, and everything should be good. 