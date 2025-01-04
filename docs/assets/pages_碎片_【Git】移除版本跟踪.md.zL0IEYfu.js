import{_ as e,c as o,o as t,a5 as a}from"./chunks/framework.CkGECXPw.js";const i=JSON.parse('{"title":"移除版本跟踪","description":"","frontmatter":{},"headers":[],"relativePath":"pages/碎片/【Git】移除版本跟踪.md","filePath":"pages/碎片/【Git】移除版本跟踪.md","lastUpdated":1726497216000}'),c={name:"pages/碎片/【Git】移除版本跟踪.md"},r=a('<h1 id="移除版本跟踪" tabindex="-1">移除版本跟踪 <a class="header-anchor" href="#移除版本跟踪" aria-label="Permalink to &quot;移除版本跟踪&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#说明">说明</a></li><li><a href="#总结">总结</a></li></ul></nav><h3 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h3><p><code>git rm -r --cached .\\deploy\\config.js</code> 这条命令的作用是从 Git 仓库中移除指定的文件或目录，但不删除本地工作区中的实际文件。具体说明如下：</p><ol><li><p><strong><code>git rm</code></strong>: Git 的命令，用于从当前的索引（暂存区）中移除文件，这意味着该文件会在下一次提交时从 Git 仓库中删除。</p></li><li><p><strong><code>-r</code></strong>: 递归删除。如果目标是一个目录而不是文件，则需要使用 <code>-r</code> 选项，以便递归地删除该目录及其所有内容。</p></li><li><p><strong><code>--cached</code></strong>: 仅从 Git 的索引（暂存区）中移除文件或目录，而不会删除本地磁盘上的文件。这意味着文件会被从版本控制中移除，但仍然保留在本地的文件系统中。</p></li><li><p><strong><code>.\\deploy\\config.js</code></strong>: 这是文件的相对路径。该命令将从 Git 的索引中移除 <code>.\\deploy\\config.js</code> 文件或目录。</p></li></ol><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>这条命令会将 <code>.deploy/config.js</code> 文件（或目录，如果存在的话）从 Git 的版本控制中移除，但文件仍然会保留在你的本地文件系统中。这通常用于从版本控制中排除某些不应再被跟踪的文件或目录（例如包含敏感信息的配置文件），但你仍然希望在本地保留这些文件。</p>',7),l=[r];function d(n,_,p,h,f,g){return t(),o("div",null,l)}const s=e(c,[["render",d]]),m=Object.freeze(Object.defineProperty({__proto__:null,__pageData:i,default:s},Symbol.toStringTag,{value:"Module"}));export{m as _,i as __pageData,s as default};
