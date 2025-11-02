-*-Mode: markdown;-*-

<meta name="robots" content="noindex, nofollow">

Interactive HTML editor/generator
=============================================================================

  Canva


Generating Dynamic HTML from BibTeX
=============================================================================

bibtex-js: https://github.com/pcooksey/bibtex-js

citation.js: https://citation.js.org


bibtex-js
----------------------------------------

Serve local HTML site:
  1. `python3 -m http.server 8000`
  2. Navigate to: http://localhost:8000/
  

Within <www>/style:
```
  cp ~/1research/1me-archive.github/cv/texmf/bibtex/bib/pubs.bib ~/1research/1me-www.github/bib/pubs.bib
  
  cd ~/1research/1me-www.github/style/
  curl -O https://github.com/pcooksey/bibtex-js/blob/master/src/bibtex_js.js
```

TEST:
```
<h2>***TEST***</h2>

<div class="bibtex_template" style="font-family: sans-serif">
  <ul> <li>
      <span class="year" style="font-weight: bold"></span>.
      <span class="author"></span>.<br />
      <span class="title" style="font-weight: bold"></span>.<br />
      <span class="booktitle" style="font-style: italic"></span>.

      <span class="if journal" style="">
        <span class="journal"></span>,
        <span class="volume"></span>(<span class="number"></span>):
      </span>
      <span class="if month">
        <span class="month"></span>,
      </span>
      <span class="year"></span>.
      <span class="if pages">
        <span class="pages"></span>
      </span>
      
      <span class="if url" style="">
        <a class="url">(online)</a>
      </span>
      <span class="if doi" style="">
        <a class="doi">(doi)</a>
      </span>

  </li></ul>

</div>

<!-- <div id="bibtex_display"></div> -->

<div class="bibtex_display" bibtexkey="Mehboob:2025:SOCC-PowerTrip"></div>
<div class="bibtex_display" bibtexkey="Fu:2025:ICDM-ProHD"></div>
<div class="bibtex_display" bibtexkey="Sun:2025:SC-PDSW-LLMTailor"></div>
<div class="bibtex_display" bibtexkey="Tang:2025:SC-PDSW-AWSGw"></div>
<div class="bibtex_display" bibtexkey="Zhang-Fang:2025:ICS-bmqsim"></div>
<div class="bibtex_display" bibtexkey="Firoz:2025:SSDBM-fastflow"></div>
<div class="bibtex_display" bibtexkey="Lee:2025:IPDPS-flowforecaster"></div>
<div class="bibtex_display" bibtexkey="Newaz:2025:IPDPS-locality-aware-graph-remapping"></div>
<div class="bibtex_display" bibtexkey="Abebe:2025:SamIAm-semantic-boosting"></div>
<div class="bibtex_display" bibtexkey="Guo:2024:BPOD-fastflow-vision"></div>
<div class="bibtex_display" bibtexkey="Egersdoerfer-Fang:2024:SC-PDSW-cross-app-io-interference"></div>
<div class="bibtex_display" bibtexkey="Hou:2024:ISNCC-near-data"></div>
<div class="bibtex_display" bibtexkey="Suetterlein:2024:hpec-auto-network-config"></div>
<div class="bibtex_display" bibtexkey="Suriyakumar:2024:memfriend-spatial-affinity"></div>
<div class="bibtex_display" bibtexkey="Sarkar:2024:CLUSTER-massive-gnn"></div>
<div class="bibtex_display" bibtexkey="Tang:2024:CLUSTER-dayu"></div>
<div class="bibtex_display" bibtexkey="Newaz:2024:IPDPS-jellyfish-graph-analytics"></div>
<div class="bibtex_display" bibtexkey="Lee:2023:SC-datalife-dataflowlifecycles}
<div class="bibtex_display" bibtexkey="Chen:2023:JPDC-bitgraphblas"></div>
<div class="bibtex_display" bibtexkey="Kilic:2022:CLUSTER-memgaze"></div>
<div class="bibtex_display" bibtexkey="Sathanur:2022:learning"></div>
<div class="bibtex_display" bibtexkey="Chen:2022:IPDPS-bitgraphblas"></div>
<div class="bibtex_display" bibtexkey="Bel:2021:BigData-BPOD-winnow-ml"></div>
<div class="bibtex_display" bibtexkey="Ghosh:2021:SC-optane-graph-analytics"></div>
<div class="bibtex_display" bibtexkey="Ghosh:2021:TPDS-graph-neighborhood-comm"></div>
<div class="bibtex_display" bibtexkey="Bel:2021:diolkos"></div>
<div class="bibtex_display" bibtexkey="Friese:2020:BigData-tazer-io-composition"></div>
<div class="bibtex_display" bibtexkey="Barik:2020:IISWC-vertex-reordering"></div>
<div class="bibtex_display" bibtexkey="Bel:2020:MSST-geomancy"></div>
<div class="bibtex_display" bibtexkey="Kilic:2020:ISPASS-footprint-access-patterns"></div>
<div class="bibtex_display" bibtexkey="Li:2020:TPDS-gpu-interconnect"></div>
<div class="bibtex_display" bibtexkey="Suetterlein:2019:BigData-tazer"></div>
<div class="bibtex_display" bibtexkey="Kilic:2019:HPCMASPA-loop-footprints"></div>
<div class="bibtex_display" bibtexkey="Schram:2019:CHEP-dl-workflows"></div>
<div class="bibtex_display" bibtexkey="Bhuiyan:2019:LNCS-JSSPP-resource-selection-uncertainty"></div>
<div class="bibtex_display" bibtexkey="Singh:2018:BPOD-dl-workflow-faults"></div>
<div class="bibtex_display" bibtexkey="Li:2018:IISWC-tartan"></div>
<div class="bibtex_display" bibtexkey="Friese:2018:CLUSTER-optimizing-workflows"></div>
<div class="bibtex_display" bibtexkey="Gawande:2018:FGCS-dgx1-vs-knl"></div>
<div class="bibtex_display" bibtexkey="Tallent:2017:SC-representative-paths"></div>
<div class="bibtex_display" bibtexkey="Tallent:2017:SC-PMBS-gpu-interconnects"></div>
<div class="bibtex_display" bibtexkey="Schram:2017:JPhys-chep"></div>
<div class="bibtex_display" bibtexkey="Friese-Tallent:2017:IPDPS-modeling-irregular-apps"></div>
<div class="bibtex_display" bibtexkey="Tallent:2016:NAS-siphon"></div>
<div class="bibtex_display" bibtexkey="Tallent:2016:IPDPS-seak"></div>
<div class="bibtex_display" bibtexkey="Vishnu:2016:IPDPS-app-fault-tolerance"></div>
<div class="bibtex_display" bibtexkey="Halappanavar:2015:WORKS-workflow-scheduling"></div>
<div class="bibtex_display" bibtexkey="Venkatesh:2015:SC-energy-efficient-mpi"></div>
<div class="bibtex_display" bibtexkey="Gawande:2015:ASAP-stap-power-perf"></div>
<div class="bibtex_display" bibtexkey="Tallent:2015:PPoPP-onesided-network-contention"></div>
<div class="bibtex_display" bibtexkey="Tallent:2014:highlights-palm"></div>
<div class="bibtex_display" bibtexkey="Tallent-Hoisie:2014:ICS-palm"></div>
<div class="bibtex_display" bibtexkey="perfect-suite-man:2013"></div>
<div class="bibtex_display" bibtexkey="Liu-MC-Tall:2012:hpctoolkit-SCC"></div>
<div class="bibtex_display" bibtexkey="Tallent-MC:2012:PTools-hpctoolkit-sampling"></div>
<div class="bibtex_display" bibtexkey="Tallent-Kerbyson:2012:WHIST-hpctoolkit-data-centric-tracing"></div>
<div class="bibtex_display" bibtexkey="Tallent-MC:2011:ICS-hpctoolkit-scalable-tracing"></div>
<div class="bibtex_display" bibtexkey="Tallent-MC:2010:SC-hpctoolkit-load-imbalance"></div>
<div class="bibtex_display" bibtexkey="Adhianto-MC-Ta:2010:PSTI-hpcviewer"></div>
<div class="bibtex_display" bibtexkey="Adhianto:2010:CPE-hpctoolkit"></div>
<div class="bibtex_display" bibtexkey="Tallent-MC-Porterfield:2010:PPoPP-hpctoolkit-lock-contention"></div>
<div class="bibtex_display" bibtexkey="Tallent-MC:2009:IEEE-Computer"></div>
<div class="bibtex_display" bibtexkey="Tallent-MC:2009:SC-hpctoolkit-petascale"></div>
<div class="bibtex_display" bibtexkey="Tallent-MC-Fagan:2009:PLDI-hpctoolkit-binary-analysis"></div>
<div class="bibtex_display" bibtexkey="Fowler:2009:SciDAC-libra-hpctoolkit"></div>
<div class="bibtex_display" bibtexkey="Tallent-MC:2009:PPoPP-hpctoolkit-work-stealing"></div>
<div class="bibtex_display" bibtexkey="Tallent:2008:SciDAC-hpctoolkit"></div>
<div class="bibtex_display" bibtexkey="Adhianto:2008:SC-NLPLSS-hpctoolkit"></div>
<div class="bibtex_display" bibtexkey="MellorCrummey-Ta:2008:ISPASS-TIMERS-methodology"></div>
<div class="bibtex_display" bibtexkey="Utke:2008:TOMS-OpenAD"></div>
<div class="bibtex_display" bibtexkey="Froyd-Ta-MC-Fo:2006:GCCSummit-csprof"></div>
<div class="bibtex_display" bibtexkey="MellorCrummey-Fo-Ma-Ta:2002:JoSC-hpcview"></div>



```


Generating Static HTML from BibTeX
=============================================================================

Summary:
----------------------------------------
- bib2xhtml:
  Inserts BibTeX references *as inlined html* from html-based macros

- bibtex2html:
  Converts BibTeX to html file, which can be merged into a master html.

- bibtex2web:
  Converts BibTeX to html file
 
- Similarly cumbersome solutions with python:
  https://marcel.bollmann.me/blog/turning-bibtex-into-bibliographies-with-python/
  https://pypi.org/project/bibtex2html.py/


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
