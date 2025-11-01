-*-Mode: markdown;-*-

<meta name="robots" content="noindex, nofollow">

Interactive HTML editor/generator
=============================================================================

  Canva

Generating HTML from BibTeX
=============================================================================

bibtex-js: https://github.com/pcooksey/bibtex-js

citation.js: https://citation.js.org


Generating Static HTML from BibTeX
=============================================================================

Summary:
----------------------------------------
- bib2xhtml:
  Inserts BibTeX references *as inlined html* from html-based macros

- bibtex2html:
  Converts BibTeX to html file, which can be merged into a master html.

- bibtex2web:
  Converts BibTeX to html file, 


bib2xhtml
----------------------------------------
  Source: https://www.spinellis.gr/sw/textproc/bib2xhtml/
  Note: bib2xhtml supports 'pdf' and 'url' fields.
  
```
  pushd /opt/tallent/bib2xhtml/<bib2xhtml> # Invoke from within source!
  export MYBIB="$HOME/1research/1me-archive.github/cv/texmf/bibtex/bib/pubs.bib"
  export MYHTML="$HOME/1research/1me-www.github/research.html"
  ./bib2xhtml -s unsort -i -n Tallent -d pubs-selected ${MYBIB} ${MYHTML}

  #./bib2xhtml -s unsort -i -n Tallent -d pubs-other   ${MYBIB} ${MYHTML}
```


Jekyll: Generate static HTML from markdown + template
=============================================================================

Install Ruby
----------------------------------------

Cf: https://kinsta.com/blog/jekyll-static-site/

  ```
  brew doctor
  brew install chruby ruby-install
  ruby-install <version> # replace <version>
  
  source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh
  source $(brew --prefix)/opt/chruby/share/chruby/auto.sh
  chruby ruby-3.4.7
  ```

Install jekyll
----------------------------------------
  See: https://jekyllrb.com
  See: https://kinsta.com/blog/jekyll-static-site/

  `gem install jekyll bundler`
  


To create a new blank/default repo:
----------------------------------------

  ```
  jekyll new <dir> # <dir> will be a newly created directory
  cd <dir>
  jekyll serve
  ```

To use a template, first clone, then use:
----------------------------------------

 ```
  git clone git@github.com:artemsheludko/flexible-jekyll.git
  bundle install # Install from Gemfile
  jekyll serve # or: bundle exec jekyll serve
  
  git clone git@github.com:pages-themes/dinky.git
  # add to Gemfile: gem "github-pages", group: :jekyll_plugins
  bundle install
  bundle exec jekyll serve
  ```

Themes:
----------------------------------------

Good:
  https://github.com/pages-themes/dinky
  https://jekyllthemes.io/theme/flexible-jekyll


Hyde is good but broken (needs jekyll-paginate)
  https://jekyllthemes.io/theme/hyde 

  https://stackoverflow.com/questions/35639303/jekyll-getting-an-error-when-i-have-paginate-in-my-project
  https://yangxiaozhou.github.io/learning/2019/09/25/set-up-blog.html

Others: 
  See: https://jekyllthemes.io/free

  https://github.com/andrewbanchich/editorial-jekyll-theme
  https://github.com/sharu725/online-cv
  https://github.com/andrewbanchich/editorial-jekyll-theme

  https://github.com/vaibhavvikas/jekyll-theme-minimalistic

  https://jekyllthemes.io/theme/index-portfolio-jekyll-theme (nice but costly)

  https://jekyllthemes.io/theme/just-the-docs
