import{_ as s,c as i,o as a,a5 as e}from"./chunks/framework.BMqj9mQ5.js";const n=JSON.parse('{"title":"循环使用in操作符检验key存在否","description":"","frontmatter":{},"headers":[],"relativePath":"pages/碎片/【Js】循环使用in操作符检验key存在否.md","filePath":"pages/碎片/【Js】循环使用in操作符检验key存在否.md","lastUpdated":1726497216000}'),t={name:"pages/碎片/【Js】循环使用in操作符检验key存在否.md"},l=e(`<h1 id="循环使用in操作符检验key存在否" tabindex="-1">循环使用in操作符检验key存在否 <a class="header-anchor" href="#循环使用in操作符检验key存在否" aria-label="Permalink to &quot;循环使用in操作符检验key存在否&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#代码解释">代码解释</a></li><li><a href="#总结">总结</a></li><li><a href="#示例">示例</a></li></ul></nav><p>这句代码的作用是检查 <code>item</code> 对象中是否存在 <code>start_point</code> 这个属性。如果 <code>item</code> 中不存在 <code>start_point</code> 属性，那么代码会跳过当前循环的剩余部分，继续下一次循环。下面是对这句代码的详细解释：</p><h3 id="代码解释" tabindex="-1">代码解释 <a class="header-anchor" href="#代码解释" aria-label="Permalink to &quot;代码解释&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;start_point&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><p><code>(&quot;start_point&quot; in item)</code>：这是一个 <code>in</code> 操作符，它用来检查 <code>item</code> 对象中是否存在 <code>start_point</code> 属性。这个表达式会返回一个布尔值：</p><ul><li>如果 <code>item</code> 中存在 <code>start_point</code> 属性，则返回 <code>true</code>。</li><li>如果 <code>item</code> 中不存在 <code>start_point</code> 属性，则返回 <code>false</code>。</li></ul></li><li><p><code>!</code>：逻辑非操作符，将 <code>in</code> 操作符的结果取反。</p><ul><li>如果 <code>item</code> 中不存在 <code>start_point</code> 属性，<code>(&quot;start_point&quot; in item)</code> 为 <code>false</code>，<code>!</code> 会将其变为 <code>true</code>。</li><li>如果 <code>item</code> 中存在 <code>start_point</code> 属性，<code>(&quot;start_point&quot; in item)</code> 为 <code>true</code>，<code>!</code> 会将其变为 <code>false</code>。</li></ul></li><li><p><code>continue</code>：这是一个循环控制语句。它会跳过当前循环的剩余代码，直接进入下一次循环。</p></li></ul><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><ul><li>如果 <code>item</code> 中没有 <code>start_point</code> 属性，那么 <code>if</code> 条件为 <code>true</code>，执行 <code>continue</code> 语句，跳过当前循环的剩余代码。</li><li>如果 <code>item</code> 中有 <code>start_point</code> 属性，那么 <code>if</code> 条件为 <code>false</code>，循环继续执行下面的代码。</li></ul><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>假设有以下代码片段：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> items</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { start_point: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], end_point: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { end_point: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { start_point: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;start_point&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item.start_point);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>解释：</strong></p><ol><li>第一个对象 <code>{ start_point: [0, 0], end_point: [10, 10] }</code> 中有 <code>start_point</code> 属性，所以会打印 <code>[0, 0]</code>。</li><li>第二个对象 <code>{ end_point: [5, 5] }</code> 中没有 <code>start_point</code> 属性，因此会跳过这次循环。</li><li>第三个对象 <code>{ start_point: [1, 1] }</code> 中有 <code>start_point</code> 属性，所以会打印 <code>[1, 1]</code>。</li></ol>`,13),p=[l];function o(h,c,k,r,E,_){return a(),i("div",null,p)}const d=s(t,[["render",o]]),u=Object.freeze(Object.defineProperty({__proto__:null,__pageData:n,default:d},Symbol.toStringTag,{value:"Module"}));export{u as _,n as __pageData,d as default};
