import{_ as s,c as a,a as e,o as t}from"./app-CjaSKhBf.js";const p="/front-ent/blog/assets/set-pjjDgrsD.jpg",l="/front-ent/blog/assets/WeakSet-hdM6Dd9f.jpg",c="/front-ent/blog/assets/WeakMap-C1G_yDJ5.jpg",i={};function o(u,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h2 id="var-const-和-let-区别" tabindex="-1"><a class="header-anchor" href="#var-const-和-let-区别"><span>var const 和 let 区别</span></a></h2><ul><li><code>var</code>声明的变量会挂载在window上，而let和const声明的变量不会</li><li><code>let</code> 是块作用域，即其在整个大括号 {} 之内可见</li><li><code>const</code> 变量一旦被赋值，就不能再改变了</li></ul><h2 id="数组扁平化-去重-排序" tabindex="-1"><a class="header-anchor" href="#数组扁平化-去重-排序"><span>数组扁平化，去重，排序</span></a></h2><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">var arr= [1, 2, [3, 4]].flat();</span>
<span class="line">arr = Array.form(new Set(arr));</span>
<span class="line">arr.sort()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构赋值-变量值交换" tabindex="-1"><a class="header-anchor" href="#结构赋值-变量值交换"><span>结构赋值 变量值交换</span></a></h2><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">let a = 1;let b = 2;</span>
<span class="line">[a,b] = [b,a];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class类的继承" tabindex="-1"><a class="header-anchor" href="#class类的继承"><span>class类的继承</span></a></h2><p><em><strong>ES5</strong></em></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>ES6</strong></em></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="箭头函数-箭头函数的特点" tabindex="-1"><a class="header-anchor" href="#箭头函数-箭头函数的特点"><span>箭头函数，箭头函数的特点</span></a></h2><ol><li>箭头函数this为父作用域的this，不是调用时的this</li><li>箭头函数不能作为构造函数，不能使用new</li><li>箭头函数没有arguments，caller</li><li>箭头函数通过call和apply调用，不会改变this指向，只会传入参数</li><li>箭头函数没有原型属性</li><li>箭头函数不能作为Generator函数，不能使用yield关键字</li><li>箭头函数返回对象时，要加一个小括号</li><li>箭头函数在ES6 class中声明的方法为实例方法，不是原型方法</li><li>多重箭头函数就是一个高阶函数，相当于内嵌函数</li></ol><h2 id="set-weakset-weakmap-的区别" tabindex="-1"><a class="header-anchor" href="#set-weakset-weakmap-的区别"><span>Set WeakSet WeakMap 的区别</span></a></h2><ul><li><code>set</code>类似于数组，但是成员的值都是唯一的，没有重复的值。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 创建 Set</span></span>
<span class="line"><span class="token keyword">const</span> letters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 向 Set 添加一些值</span></span>
<span class="line">letters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">letters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">letters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">letters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//Set(3) {&quot;a&quot;, &quot;b&quot;, &quot;c&quot;}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="W3C"></p><ul><li><code>WeakSet</code>的成员只能是对象，而不能是其他类型的值。WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中。这个特点意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>fun<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Object<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Function<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Window<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="W3C"></p><ul><li><code>WeakMap</code> 结构提供了[值:值]的对应，是一种更完善的Hash结构实现。如果你需要&quot;键值对&quot;的数据结构，Map比Object更合适。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键,map可通过set赋值，get取值。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&quot;object对象&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>fun<span class="token punctuation">,</span><span class="token string">&quot;function对象&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span><span class="token string">&quot;Window对象&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+'" alt="W3C"></p><h2 id="every-和-some-的区别" tabindex="-1"><a class="header-anchor" href="#every-和-some-的区别"><span>every 和 some 的区别</span></a></h2><ul><li><code>every</code>：一假即假,必须所有都返回true才会返回true，哪怕有一个false，就会返回false；</li><li><code>some</code>：一真即真, 只要其中一个为true 就会返回true</li></ul><h2 id="promise-函数" tabindex="-1"><a class="header-anchor" href="#promise-函数"><span>promise 函数</span></a></h2><ul><li><code>Promise</code>是异步编程的一种解决方案</li><li><code>resolve</code> 把正确的值返回出去</li><li><code>reject</code> 把错误的值返回出去</li><li><code>then</code> 接收resolve的回调</li><li><code>catch</code> 接收reject的回调</li></ul><h2 id="async-和-await" tabindex="-1"><a class="header-anchor" href="#async-和-await"><span>async 和 await</span></a></h2><ul><li><code>async</code> 异步函数,返回的是一个promise 对象，如果要获取到promise 返回值，我们应该用then 方法</li><li><code>await</code> 写异步代码就像写同步代码一样了，再也没有回调地域</li></ul>',29)]))}const d=s(i,[["render",o],["__file","es6.html.vue"]]),k=JSON.parse('{"path":"/es6.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"var const 和 let 区别","slug":"var-const-和-let-区别","link":"#var-const-和-let-区别","children":[]},{"level":2,"title":"数组扁平化，去重，排序","slug":"数组扁平化-去重-排序","link":"#数组扁平化-去重-排序","children":[]},{"level":2,"title":"结构赋值 变量值交换","slug":"结构赋值-变量值交换","link":"#结构赋值-变量值交换","children":[]},{"level":2,"title":"class类的继承","slug":"class类的继承","link":"#class类的继承","children":[]},{"level":2,"title":"箭头函数，箭头函数的特点","slug":"箭头函数-箭头函数的特点","link":"#箭头函数-箭头函数的特点","children":[]},{"level":2,"title":"Set WeakSet WeakMap 的区别","slug":"set-weakset-weakmap-的区别","link":"#set-weakset-weakmap-的区别","children":[]},{"level":2,"title":"every 和 some 的区别","slug":"every-和-some-的区别","link":"#every-和-some-的区别","children":[]},{"level":2,"title":"promise 函数","slug":"promise-函数","link":"#promise-函数","children":[]},{"level":2,"title":"async 和 await","slug":"async-和-await","link":"#async-和-await","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"es6.md"}');export{d as comp,k as data};
