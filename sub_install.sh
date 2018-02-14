#!/bin/bash

export GEM_HOME=~/.gem/ruby/2.3.0
export PATH=${GEM_HOME}/bin:${PATH}

# https://jekyllrb.com/docs/installation/
# https://jekyllrb.com/docs/usage/
# https://help.github.com/articles/troubleshooting-jekyll-builds

# https://www.mathjax.org/cdn-shutting-down/
# src="https://cdn.mathjax.org/mathjax/2.7-latest/MathJax.js?...
# https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js

#gem install jekyll
gem install --user-install bundler -v 1.15.1
#gem install jekyll-watch
#bundle install
#bundle update listen

#gem env
#which jekyll
bundle exec jekyll serve --watch
#jekyll serve -w