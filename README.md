# Install required dependencies
```
sudo apt-get install ruby-full build-essential zlib1g-dev
```

It is best to avoid installing Ruby Gems as the root user. Set up a gem installation directory by adding the following 
variables to your ~/.bashrc file to configure the gem installation path:

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
```

``` bash
source ~/.bashrc
```

# Install Jekyll

```bash 
gem install jekyll bundler
```

# Clone project from repository
```bash
git clone git@github.com:PythonTrier/pythontrier.github.io.git 
```

Enter the pythontrier.github.io folder and install any missing gems with 

```bash
bundle install
```

# Launch Jekyll
Launch the application with 
```bash
jekyll serve
```

Jekyll build builds the site and outputs a static site to the _site directory. Jekyll serve does the same thing as 
jekyll build except it rebuilds any time you make a change.

NOTE: You may get the following error. 
```bash
FATAL: Listen error: unable to monitor directories for changes.
```
If you get that, you can raise the limit with the following 
[[1]](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers):

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```