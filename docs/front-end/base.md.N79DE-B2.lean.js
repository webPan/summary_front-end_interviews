import{_ as o,c as l,a0 as a,o as i}from"./chunks/framework.BVQnv-NB.js";const c="/front-end/w3c.BN-5f6sK.jpg",d="/front-end/ie.CWQlIl09.jpg",t="/front-end/csl.DeHzpQpu.png",r="/front-end/get-post.BSlw0v7e.png",q=JSON.parse('{"title":"基础类","description":"","frontmatter":{},"headers":[],"relativePath":"base.md","filePath":"base.md"}'),s={name:"base.md"};function n(h,e,p,u,m,f){return i(),l("div",null,e[0]||(e[0]=[a('<h1 id="基础类" tabindex="-1">基础类 <a class="header-anchor" href="#基础类" aria-label="Permalink to &quot;基础类&quot;">​</a></h1><h2 id="css3-选择器有哪些" tabindex="-1">CSS3 选择器有哪些 <a class="header-anchor" href="#css3-选择器有哪些" aria-label="Permalink to &quot;CSS3 选择器有哪些&quot;">​</a></h2><ul><li><p><code>:first-child</code>选择某个元素的第一个子元素；</p></li><li><p><code>:last-child</code>选择某个元素的最后一个子元素；</p></li><li><p><code>:first-of-type</code>选择一个上级元素下的第一个同类子元素；</p></li><li><p><code>:last-of-type</code>选择一个上级元素的最后一个同类子元素；</p></li><li><p><code>:nth-child(n)</code>选择某个元素的一个或多个特定的子元素；</p></li><li><p><code>:nth-last-child(n)</code> 选择器匹配属于其元素的第 N 个子元素的每个元素，不论元素的类型，从最后一个子元素开始计数。</p></li><li><p><code>:nth-of-type(n)</code> 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素</p></li><li><p><code>:nth-last-of-type(n)</code>选择指定的元素，从元素的最后一个开始计算；</p></li><li><p><code>:only-child</code>选择的元素是它的父元素的唯一一个了元素；</p></li><li><p><code>:only-of-type</code>选择一个元素是它的上级元素的唯一一个相同类型的子元素；</p></li><li><p><code>:empty</code>选择的元素里面没有任何内容。</p></li><li><p><code>:not(selector)</code> 选择器匹配非指定元素/选择器的每个元素。</p></li></ul><h2 id="html语义化" tabindex="-1">HTML语义化 <a class="header-anchor" href="#html语义化" aria-label="Permalink to &quot;HTML语义化&quot;">​</a></h2><ul><li>用正确的标签做正确的事情。</li><li>html语义化让页面的内容结构化，结构更清晰，便于对浏览器，搜索引擎解析；</li><li>即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的；</li><li>搜索引擎的爬虫也依赖于HTML标记确定上下文和各个关键字的权重，利于SEO;</li><li>使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。</li></ul><h2 id="常见的浏览器内核" tabindex="-1">常见的浏览器内核 <a class="header-anchor" href="#常见的浏览器内核" aria-label="Permalink to &quot;常见的浏览器内核&quot;">​</a></h2><ul><li><code>Trident</code>内核 [ˈtraɪdnt]：<code>IE</code>,<code>360</code>,搜狗浏览器等。</li><li><code>Gecko</code>内核[ˈɡekəʊ]：<code>Netscape6</code>及以上版本；</li><li><code>Presto</code>内核 [ˈprestəʊ]：<code>Opera7</code>及以上。</li><li><code>Webkit</code>内核：<code>Safari,Chrome</code>等。</li></ul><h2 id="简单介绍对浏览器内核的理解" tabindex="-1">简单介绍对浏览器内核的理解 <a class="header-anchor" href="#简单介绍对浏览器内核的理解" aria-label="Permalink to &quot;简单介绍对浏览器内核的理解&quot;">​</a></h2><p>主要分成两部分：渲染引擎和JS引擎。</p><ul><li>渲染引擎：将代码转换成页面。负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等）、以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其他需要编辑、显示网络内容的应用程序都需要内核。</li><li>JS引擎：解析和执行javascript来实现网页的动态效果。</li></ul><p>最开始渲染引擎和JS引擎并没有区分得很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。</p><h2 id="src和href的区别" tabindex="-1">src和href的区别 <a class="header-anchor" href="#src和href的区别" aria-label="Permalink to &quot;src和href的区别&quot;">​</a></h2><ul><li>src是指向外部资源的位置，指向的内容会嵌入到文档中当前标签所在的位置，在请求src资源时会将其指向的资源下载并应用到文档内，如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，知道将该资源加载、编译、执行完毕，所以一般js脚本会放在底部而不是头部。</li><li>href是指网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。</li></ul><h2 id="选择器优先级" tabindex="-1">选择器优先级 <a class="header-anchor" href="#选择器优先级" aria-label="Permalink to &quot;选择器优先级&quot;">​</a></h2><p>!important&gt;行内样式&gt;id选择器&gt;类选择器&gt;标签选择器&gt;通配符&gt;继承</p><h2 id="html5新标签" tabindex="-1">HTML5新标签 <a class="header-anchor" href="#html5新标签" aria-label="Permalink to &quot;HTML5新标签&quot;">​</a></h2><p><code>header</code> <code>footer</code> <code>main</code> <code>nav</code> <code>aside</code> <code>article</code> <code>figcaption</code> <code>figure</code> <code>progress</code> <code>dialog</code> <code>bdi</code> <code>details</code> <code>mark</code> <code>menuitem</code> <code>meter</code> <code>rp</code> <code>rt</code> <code>ruby</code> <code>section</code> <code>summary</code> <code>time</code> <code>wbr</code></p><h2 id="css-布局" tabindex="-1">CSS 布局 <a class="header-anchor" href="#css-布局" aria-label="Permalink to &quot;CSS 布局&quot;">​</a></h2><h4 id="两栏布局-左侧宽度固定-右侧自适应" tabindex="-1">两栏布局(左侧宽度固定，右侧自适应) <a class="header-anchor" href="#两栏布局-左侧宽度固定-右侧自适应" aria-label="Permalink to &quot;两栏布局(左侧宽度固定，右侧自适应)&quot;">​</a></h4><ul><li><code>float + margin</code></li><li><code>float + overflow</code></li><li><code>float + position</code></li><li><code>flex</code></li></ul><h4 id="三栏布局-两边固定中间自适应" tabindex="-1">三栏布局(两边固定中间自适应) <a class="header-anchor" href="#三栏布局-两边固定中间自适应" aria-label="Permalink to &quot;三栏布局(两边固定中间自适应)&quot;">​</a></h4><ul><li><code>float + margin</code></li><li><code>position + margin</code></li><li><code>flex</code></li></ul><p><a href="https://www.cnblogs.com/xuepei/p/9990553.html" target="_blank" rel="noreferrer">布局参考</a></p><h2 id="css-盒模型" tabindex="-1">CSS 盒模型 <a class="header-anchor" href="#css-盒模型" aria-label="Permalink to &quot;CSS 盒模型&quot;">​</a></h2><h4 id="w3c" tabindex="-1">W3C <a class="header-anchor" href="#w3c" aria-label="Permalink to &quot;W3C&quot;">​</a></h4><p><code>margin + border + padding + content</code><img src="'+c+'" alt="W3C"></p><h4 id="ie" tabindex="-1">IE <a class="header-anchor" href="#ie" aria-label="Permalink to &quot;IE&quot;">​</a></h4><p><code>margin + content</code> (content里面包含了padding border) <img src="'+d+'" alt="IE"></p><h2 id="cookie、localstorage、sessionstorage-的区别" tabindex="-1">cookie、localstorage、sessionstorage 的区别 <a class="header-anchor" href="#cookie、localstorage、sessionstorage-的区别" aria-label="Permalink to &quot;cookie、localstorage、sessionstorage 的区别&quot;">​</a></h2><p><img src="'+t+'" alt="本地存储"></p><h2 id="array方法有哪些" tabindex="-1">array方法有哪些 <a class="header-anchor" href="#array方法有哪些" aria-label="Permalink to &quot;array方法有哪些&quot;">​</a></h2><h4 id="不会改变原来数组的有" tabindex="-1">不会改变原来数组的有： <a class="header-anchor" href="#不会改变原来数组的有" aria-label="Permalink to &quot;不会改变原来数组的有：&quot;">​</a></h4><ul><li><code>concat</code>：连接两个或更多的数组，并返回结果。</li><li><code>every</code>：检测数组元素的每个元素是否都符合条件。</li><li><code>some</code> ：检测数组元素中是否有元素符合指定条件。</li><li><code>filter</code> ：检测数组元素，并返回符合条件所有元素的数组。</li><li><code>indexOf</code> ：搜索数组中的元素，并返回它所在的位置。</li><li><code>join</code> ：把数组的所有元素放入一个字符串。</li><li><code>toString</code> ：把数组转换为字符串，并返回结果。</li><li><code>lastIndexOf</code> ：返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。</li><li><code>map</code> ：通过指定函数处理数组的每个元素，并返回处理后的数组。</li><li><code>slice</code> ：选取数组的的一部分，并返回一个新数组。</li><li><code>valueOf</code> ：返回数组对象的原始值。</li></ul><h4 id="会改变原来数组的有" tabindex="-1">会改变原来数组的有： <a class="header-anchor" href="#会改变原来数组的有" aria-label="Permalink to &quot;会改变原来数组的有：&quot;">​</a></h4><ul><li><code>pop</code> ：删除数组的最后一个元素并返回删除的元素。</li><li><code>push</code> ：向数组的末尾添加一个或更多元素，并返回新的长度。</li><li><code>shift</code>： 删除并返回数组的第一个元素。</li><li><code>unshift</code> ：向数组的开头添加一个或更多元素，并返回新的长度。</li><li><code>reverse</code> ：反转数组的元素顺序。</li><li><code>sort</code>： 对数组的元素进行排序。</li><li><code>splice</code> ：用于插入、删除或替换数组的元素。</li></ul><div class="warning custom-block"><p class="custom-block-title">注意</p><p>slice不会改变原数组，但是splice会直接改变原数组。</p></div><h2 id="get-和-post-的区别" tabindex="-1">get 和 post 的区别 <a class="header-anchor" href="#get-和-post-的区别" aria-label="Permalink to &quot;get 和 post 的区别&quot;">​</a></h2><p><img src="'+r+'" alt="get 和 post 的区别"></p><h2 id="_8种数据类型" tabindex="-1">8种数据类型 <a class="header-anchor" href="#_8种数据类型" aria-label="Permalink to &quot;8种数据类型&quot;">​</a></h2><ul><li><p><code>Number</code>：typeof instance === &quot;number&quot;</p></li><li><p><code>String</code>：typeof instance === &quot;string</p></li><li><p><code>Boolean</code>：typeof instance === &quot;boolean&quot;</p></li><li><p><code>Object</code>：typeof instance === &quot;object&quot;。</p></li><li><p><code>undefined</code>：typeof instance === &quot;undefined&quot;</p></li><li><p><code>null</code>：typeof instance === &quot;object&quot;</p></li><li><p><code>BigInt</code>：typeof instance === &quot;bigint&quot;</p></li><li><p><code>Symbol</code> ：typeof instance === &quot;symbol&quot;</p></li></ul><h2 id="javascript内置对象有哪些" tabindex="-1">javascript内置对象有哪些 <a class="header-anchor" href="#javascript内置对象有哪些" aria-label="Permalink to &quot;javascript内置对象有哪些&quot;">​</a></h2><ul><li><code>String</code>： 字符串对象</li><li><code>Array</code> ：数组</li><li><code>Boolean</code>： 布尔对象</li><li><code>Number</code> ：数值对象</li><li><code>Object</code> ：基础对象</li><li><code>Function</code> ：函数构造器</li><li><code>Arguments</code>： 函数参数集合</li><li><code>Error</code>： 异常对象</li><li><code>Date</code> ：日期时间</li><li><code>Math</code>： 数学对象</li><li><code>RegExp</code> ：正则表达式对象</li></ul><h2 id="getelementsbyclassname-和-queryselectorall-的区别" tabindex="-1">getElementsByClassName 和 querySelectorAll 的区别 <a class="header-anchor" href="#getelementsbyclassname-和-queryselectorall-的区别" aria-label="Permalink to &quot;getElementsByClassName 和 querySelectorAll 的区别&quot;">​</a></h2><ul><li><code>querySelectorAll()</code>方法是HTML5新增的方法，通过传入一个css选择符，返回所有匹配的元素而不仅仅是一个元素。这个方法返回的是一个NodeList的实例</li><li><code>document.getElementsByClassName</code>是动态查询的过程，会随着dom结构的变化，得到的结点列表也会发生变化，而<code>querySelector</code>得到的是一个静态列表，它不会对dom结构进行动态查询。</li></ul>',44)]))}const g=o(s,[["render",n]]);export{q as __pageData,g as default};
