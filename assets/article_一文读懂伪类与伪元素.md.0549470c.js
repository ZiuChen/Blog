import{_ as s,o as a,c as n,R as l}from"./chunks/framework.a304f0f7.js";const b=JSON.parse('{"title":"一文读懂伪类与伪元素","description":"","frontmatter":{},"headers":[],"relativePath":"article/一文读懂伪类与伪元素.md","lastUpdated":1681720043000}'),p={name:"article/一文读懂伪类与伪元素.md"},e=l(`<h1 id="一文读懂伪类与伪元素" tabindex="-1">一文读懂伪类与伪元素 <a class="header-anchor" href="#一文读懂伪类与伪元素" aria-label="Permalink to &quot;一文读懂伪类与伪元素&quot;">​</a></h1><h2 id="🔰-什么是伪类" tabindex="-1">🔰 什么是伪类？ <a class="header-anchor" href="#🔰-什么是伪类" aria-label="Permalink to &quot;🔰 什么是伪类？&quot;">​</a></h2><p>伪类是添加到选择器的 <strong>关键字</strong> ，指定要选择的元素的特殊状态。</p><h3 id="典型的伪类关键字" tabindex="-1">典型的伪类关键字 <a class="header-anchor" href="#典型的伪类关键字" aria-label="Permalink to &quot;典型的伪类关键字&quot;">​</a></h3><p>在大多数情况下，<strong>伪类都与基础选择器搭配使用</strong>，下述是伪类在一些典型场景下的应用。</p><h4 id="hover" tabindex="-1"><code>:hover</code> <a class="header-anchor" href="#hover" aria-label="Permalink to &quot;\`:hover\`&quot;">​</a></h4><p>指针在 <code>&lt;button&gt;</code> 上悬停，但没有激活它时，按钮颜色变为蓝色</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><strong>注意</strong>: 在触摸屏上 <code>:hover</code> 基本不可用。不同的浏览器上<code>:hover</code> 伪类表现不同。网页开发人员不要让任何内容只能通过悬停才能展示出来，不然这些内容对于触摸屏使用者来说是很难或者说不可能看到。</p></blockquote><h4 id="not" tabindex="-1"><code>:not</code> <a class="header-anchor" href="#not" aria-label="Permalink to &quot;\`:not\`&quot;">​</a></h4><p><strong><code>:not()</code></strong> 用来匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为<em>反选伪类</em>（<em>negation pseudo-class</em>）。</p><p>将所有不是<code>&lt;p&gt;</code>的元素颜色改为蓝色：</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">not</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 实测下述代码没有效果 */</span></span>
<span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">not</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p><strong>注意</strong>: 在触摸屏上 <code>:hover</code> 基本不可用。不同的浏览器上<code>:hover</code> 伪类表现不同。网页开发人员不要让任何内容只能通过悬停才能展示出来，不然这些内容对于触摸屏使用者来说是很难或者说不可能看到。</p></blockquote><h4 id="first-child" tabindex="-1"><code>:first-child</code> <a class="header-anchor" href="#first-child" aria-label="Permalink to &quot;\`:first-child\`&quot;">​</a></h4><p>给所有 <code>&lt;ul&gt;</code> 下的第一个 <code>&lt;li&gt;</code> 应用不同的样式</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">li</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">first-child</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="active" tabindex="-1"><code>:active</code> <a class="header-anchor" href="#active" aria-label="Permalink to &quot;\`:active\`&quot;">​</a></h4><p><code>:active</code> 表示的是鼠标从按下到松开的时间，下述代码表示 <code>&lt;a&gt;</code> 在不同状态下的样式。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">link</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;">/* 未访问链接 */</span></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">visited</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> purple</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">/* 已访问链接 */</span></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* 用户鼠标悬停 */</span></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;">/* 激活链接 */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><strong>注意</strong>: <code>:active</code> 赋予的样式可能会被后声明的其他链接相关的伪类覆盖。为保证样式生效，需要把 <code>:active</code> 的样式放在所有链接相关的样式之后。</p></blockquote><p>这种链接伪类先后顺序被称为 <em>LVHA 顺序</em>：<code>:link</code> &gt; <code>:visited</code> &gt; <code>:hover</code> &gt; <code>:active</code>。</p><h3 id="单独使用的伪类关键字" tabindex="-1">单独使用的伪类关键字 <a class="header-anchor" href="#单独使用的伪类关键字" aria-label="Permalink to &quot;单独使用的伪类关键字&quot;">​</a></h3><p>我们常见的伪类关键字的特征是以单个冒号<code>:</code>开头，跟随在基础选择器后面。</p><p><strong>但是单独使用的伪类关键字也可以对页面产生效果，</strong> 例如：</p><p>通过 <code>:focus</code> 伪类，可以让任何元素获得焦点后的颜色变为红色。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">focus</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>更多伪类，见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes#%E6%A0%87%E5%87%86%E4%BC%AA%E7%B1%BB%E7%B4%A2%E5%BC%95" target="_blank" rel="noreferrer">MDN - 标准伪类索引</a></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d77fd1d23840415ca645e9429237b6dc~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h2 id="🔰-什么是伪元素" tabindex="-1">🔰 什么是伪元素？ <a class="header-anchor" href="#🔰-什么是伪元素" aria-label="Permalink to &quot;🔰 什么是伪元素？&quot;">​</a></h2><p>伪元素是一个<strong>附加至选择器末的关键词</strong>，允许你对被选择元素的特定部分修改样式。</p><p>与伪类相同，一个选择器中只能使用一个伪元素。但是，<strong>伪元素必须紧跟在语句中的基础选择器之后</strong>。</p><p>例如，下述代码可以给页面中每个 <code>&lt;a&gt;</code> 标签前添加一个😃表情。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">😃</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>相比于伪类，伪元素的使用方式更加固定，其基本语法：</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">selector::</span><span style="color:#FFCB6B;">pseudo-element</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><strong>注意</strong>: 在书写伪元素时，你会见到单冒号 <code>:</code> 的写法，但此为CSS2过时语法，仅用于支持IE8，大多情况请书写双冒号 <code>::</code> 来表示伪元素。</p></blockquote><p>更多伪元素见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements#%E6%A0%87%E5%87%86%E4%BC%AA%E5%85%83%E7%B4%A0%E7%B4%A2%E5%BC%95" target="_blank" rel="noreferrer">MDN - 标准伪元素索引</a></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17049cd3157f4a368c98d4fcd905c064~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h2 id="📌-伪类与伪元素共同使用" tabindex="-1">📌 伪类与伪元素共同使用 <a class="header-anchor" href="#📌-伪类与伪元素共同使用" aria-label="Permalink to &quot;📌 伪类与伪元素共同使用&quot;">​</a></h2><p>下面一个案例中，同时用到了伪类和伪元素：</p><blockquote><p>用CSS实现一个开关样式，hover时触发，滑块为正方形，具体大小可随意，如下图</p></blockquote><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6e4b09bb9e64989b0561d48d10a2734~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><blockquote><p>尽量实现如下要求，可实现一部分：</p><ol><li>开关动作均有动画过度（滑块移位、背景色）</li><li>只用一个dom元素实现</li><li>开关的高度是固定的，但宽度不固定，即宽度为未知父元素的100%，宽度始终大于高度</li></ol></blockquote><h3 id="题目解读" tabindex="-1">题目解读 <a class="header-anchor" href="#题目解读" aria-label="Permalink to &quot;题目解读&quot;">​</a></h3><p>由于只能使用一个 <code>DOM</code> 元素，而要区分滑块和背景的不同状态，故使用伪元素 <code>::before</code> 在 <code>.box</code> 内部添加一个滑块，滑块采用 <code>inline-block</code> 方式展示，并且由 <code>transition</code> 属性指定过渡动画。</p><p>对于背景也采用了 <code>transition</code> 来指定过渡动画，并且二者都通过 <code>:hover</code> 触发。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ac690e718be445083bc67b7bbcccb7e~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h3 id="实现代码" tabindex="-1">实现代码 <a class="header-anchor" href="#实现代码" aria-label="Permalink to &quot;实现代码&quot;">​</a></h3><p><code>HTML</code></p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">father</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>CSS</code></p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">c2d3e4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> background-color </span><span style="color:#F78C6C;">0.25s</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> white</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> white</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left </span><span style="color:#F78C6C;">0.25s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">348fe4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 父元素宽度任意 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-label="Permalink to &quot;相关链接&quot;">​</a></h3><p><a href="https://code.juejin.cn/pen/7088328950488760334" target="_blank" rel="noreferrer">代码片段</a></p><p><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors" target="_blank" rel="noreferrer"><code>CSS选择器</code></a></p>`,56),o=[e];function c(r,t,i,D,y,C){return a(),n("div",null,o)}const d=s(p,[["render",c]]);export{b as __pageData,d as default};
