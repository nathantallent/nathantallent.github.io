-*-Mode: markdown;-*-

<meta name="robots" content="noindex, nofollow">


Jekyll
=============================================================================

What are all the steps required to create a new jekyll site from the Hyde theme that is based on Poole?

To create a new jekyll site from the Hyde theme do you need to clone Poole first?


Install Ruby
----------------------------------------


  ```
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
