import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,a as e,b as r,e as o}from"./app-CA4RrtX9.js";const i="/blog/assets/OMP_DO-CutKbO7f.png",s={},l=o(`<h2 id="two-familers-of-parallel-machines" tabindex="-1"><a class="header-anchor" href="#two-familers-of-parallel-machines"><span>Two familers of parallel machines</span></a></h2><h3 id="shared-memory-architecture" tabindex="-1"><a class="header-anchor" href="#shared-memory-architecture"><span>Shared-memory architecture</span></a></h3><p>These parallel machines are build up on a set of processors which have access to a common memory. Usually the name of <strong>SMP machines</strong> is used for computers based on this architecture, where SMP stands for <strong>Symmetric Multi Processing</strong>.</p><h3 id="distributed-memory-architecture" tabindex="-1"><a class="header-anchor" href="#distributed-memory-architecture"><span>Distributed-memory architecture</span></a></h3><p>In these parallel machines each processor has its own private memory and information is interchanged between the processors through messages. The name of <strong>clusters</strong> is commonly used for this type of computing devices.</p><h3 id="openmp" tabindex="-1"><a class="header-anchor" href="#openmp"><span>OpenMP</span></a></h3><p>A new industry standard has been created with the aim to serve as a good basis for the development of parallel programs on <strong>shared-memory machines</strong>.</p><h2 id="open-the-directives-of-openmp-and-conditional-compliation" tabindex="-1"><a class="header-anchor" href="#open-the-directives-of-openmp-and-conditional-compliation"><span>Open the directives of OpenMP and conditional compliation</span></a></h2><div class="language-Fortran line-numbers-mode" data-ext="Fortran" data-title="Fortran"><pre class="language-Fortran"><code>!$OMP

!$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>!$OMP</code>: The OpenMP-compliant compiler knows that the following information in the line is an OpenMP directive.</p><p><code>!$</code>: The corresponding line is said to be affected by a <strong>conditional compilation</strong>. When execution start, these two characters <code>!</code> and <code>$</code> will be replaced by two white spaces so that the compiler is taking into account the line</p><h2 id="parallel-regions" tabindex="-1"><a class="header-anchor" href="#parallel-regions"><span>Parallel regions</span></a></h2><div class="language-Fortran line-numbers-mode" data-ext="Fortran" data-title="Fortran"><pre class="language-Fortran"><code>!$OMP PARALLEL

!$OMP END PARALLEL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="openmp-constructs" tabindex="-1"><a class="header-anchor" href="#openmp-constructs"><span>OpenMP constructs</span></a></h2><div class="language-Fortran line-numbers-mode" data-ext="Fortran" data-title="Fortran"><pre class="language-Fortran"><code>!$OMP DO 
    do i = 1, 1000 
    ...
    enddo 
!$OMP END DO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=e("img",{src:i,alt:"Graphical representation of the example explaining the general working principle of the !OMP END DO directive-pair",tabindex:"0",loading:"lazy"},null,-1),d={class:"MathJax",jax:"SVG",style:{position:"relative"}},m={style:{"vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.163ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4934 1000","aria-hidden":"true"},p=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mi" transform="translate(763,0)"><path data-c="1D440" d="M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z"></path></g><g data-mml-node="mi" transform="translate(1814,0)"><path data-c="1D443" d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path></g><g data-mml-node="mi" transform="translate(2565,0)"><path data-c="1D437" d="M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z"></path></g><g data-mml-node="mi" transform="translate(3393,0)"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(4156,0)"><g data-mml-node="mo"><path data-c="2F" d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path></g></g><g data-mml-node="mo" transform="translate(4656,0)"><path data-c="21" d="M78 661Q78 682 96 699T138 716T180 700T199 661Q199 654 179 432T158 206Q156 198 139 198Q121 198 119 206Q118 209 98 431T78 661ZM79 61Q79 89 97 105T141 121Q164 119 181 104T198 61Q198 31 181 16T139 1Q114 1 97 16T79 61Z"></path></g></g></g>',1),h=[p],Q=e("mjx-assistive-mml",{unselectable:"on",display:"inline"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"O"),e("mi",null,"M"),e("mi",null,"P"),e("mi",null,"D"),e("mi",null,"O"),e("mrow",{"data-mjx-texclass":"ORD"},[e("mo",null,"/")]),e("mo",null,"!")])],-1);function u(g,T){return a(),t("div",null,[l,e("figure",null,[c,e("figcaption",null,[r("Graphical representation of the example explaining the general working principle of the !"),e("mjx-container",d,[(a(),t("svg",m,h)),Q]),r("OMP END DO directive-pair")])])])}const y=n(s,[["render",u],["__file","intro.html.vue"]]),b=JSON.parse(`{"path":"/posts/HPC/OpenMP/intro.html","title":"Baisc knowlodges of parallel computing","lang":"zh-CN","frontmatter":{"title":"Baisc knowlodges of parallel computing","icon":"file","order":3,"author":"Krigo","category":["HPC"],"tag":["Parallel Computing"],"footer":"Thank's myself","copyrigh":"无版权","description":"Two familers of parallel machines Shared-memory architecture These parallel machines are build up on a set of processors which have access to a common memory. Usually the name o...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/posts/HPC/OpenMP/intro.html"}],["meta",{"property":"og:site_name","content":"Krigo's 博客"}],["meta",{"property":"og:title","content":"Baisc knowlodges of parallel computing"}],["meta",{"property":"og:description","content":"Two familers of parallel machines Shared-memory architecture These parallel machines are build up on a set of processors which have access to a common memory. Usually the name o..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T06:43:47.000Z"}],["meta",{"property":"article:author","content":"Krigo"}],["meta",{"property":"article:tag","content":"Parallel Computing"}],["meta",{"property":"article:modified_time","content":"2024-05-06T06:43:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Baisc knowlodges of parallel computing\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-06T06:43:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Krigo\\"}]}"]]},"headers":[{"level":2,"title":"Two familers of parallel machines","slug":"two-familers-of-parallel-machines","link":"#two-familers-of-parallel-machines","children":[{"level":3,"title":"Shared-memory architecture","slug":"shared-memory-architecture","link":"#shared-memory-architecture","children":[]},{"level":3,"title":"Distributed-memory architecture","slug":"distributed-memory-architecture","link":"#distributed-memory-architecture","children":[]},{"level":3,"title":"OpenMP","slug":"openmp","link":"#openmp","children":[]}]},{"level":2,"title":"Open the directives of OpenMP and conditional compliation","slug":"open-the-directives-of-openmp-and-conditional-compliation","link":"#open-the-directives-of-openmp-and-conditional-compliation","children":[]},{"level":2,"title":"Parallel regions","slug":"parallel-regions","link":"#parallel-regions","children":[]},{"level":2,"title":"OpenMP constructs","slug":"openmp-constructs","link":"#openmp-constructs","children":[]}],"git":{"createdTime":1714977827000,"updatedTime":1714977827000,"contributors":[{"name":"Krigo","email":"14226817+krigo@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":0.81,"words":243},"filePathRelative":"posts/HPC/OpenMP/intro.md","localizedDate":"2024年5月6日","excerpt":"<h2>Two familers of parallel machines</h2>\\n<h3>Shared-memory architecture</h3>\\n<p>These parallel machines are build up on a set of processors which have access to a common memory. Usually the name of <strong>SMP machines</strong> is used for computers based on this architecture, where SMP stands for <strong>Symmetric Multi Processing</strong>.</p>","autoDesc":true}`);export{y as comp,b as data};