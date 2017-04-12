---
title:  "Virtual Environments"
date:   2017-04-12 12:00:00 +0200
layout: post
---

<img src="/images/virtualenvs.png" alt="Virtual environments" align="left" hspace="5" style="width:180px;">

If you've ever tried to upgrade your Mac's system installed Python, you know that it can be a pain, and it's not at all 
recommended. Apple and other third-party installers rely on the installed version to operate correctly, so changing it 
can cause complications. There is a better way to safely install different versions of Python while maintaining the 
integrity of the system installed version; enter, virtual environments. Using virtual environments allows you to install 
multiple different versions while keeping a healthy separation between your system and your projects.

Getting started is simple. Install virtualenv with pip:
```python
pip install virtualenv
```

```bash
export WORKON_HOME=$HOME/Envs
export PROJECT_HOME=$HOME/Envs/Projects
export VIRTUALENV_PYTHON=/usr/local/bin/python3
source /usr/local/bin/virtualenvwrapper.sh
source /usr/local/opt/autoenv/activate.sh
```
