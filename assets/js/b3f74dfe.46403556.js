"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9413],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4213:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},p="How it works",s={unversionedId:"concepts/how-it-work",id:"concepts/how-it-work",title:"How it works",description:"Gitploy builds the system around GitHub deployment API. It's an event-driven decoupled way to deploy your code. Internally, Gitploy creates a new Github deployment resource, and Github dispatches a deployment event that external services can listen for and act. It enables developers and organizations to build loosely coupled tooling.",source:"@site/docs/concepts/how-it-work.md",sourceDirName:"concepts",slug:"/concepts/how-it-work",permalink:"/docs/concepts/how-it-work",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/how-it-work.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Gitploy",permalink:"/docs/"},next:{title:"deploy.yml",permalink:"/docs/concepts/deploy.yml"}},c=[],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Gitploy builds the system around GitHub ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/deployments#deployments"},"deployment API"),". ",(0,a.kt)("strong",{parentName:"p"},"It's an event-driven decoupled way to deploy your code.")," Internally, Gitploy creates a new Github deployment resource, and Github dispatches a deployment event that external services can listen for and act. It enables developers and organizations to build loosely coupled tooling. "),(0,a.kt)("p",null,"This approach has several pros:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Replace deployment tools easily without changing your deployment pipeline. "),(0,a.kt)("li",{parentName:"ul"},"Easy to implement details of deploying different types of applications (e.g., web, native).")),(0,a.kt)("p",null,"Below is a simple diagram for how these interactions would work:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+---------+             +--------+             +---------+         +-------------+\n| Gitploy |             | GitHub |             |  Tools  |         | Your Server |\n+---------+             +--------+             +---------+         +-------------+\n     |                      |                       |                     |\n     |  Create Deployment   |                       |                     |\n     |---------------------\x3e|                       |                     |\n     |                      |                       |                     |\n     |  Deployment Created  |                       |                     |\n     |<---------------------|                       |                     |\n     |                      |                       |                     |\n     |                      |   Deployment Event    |                     |\n     |                      |----------------------\x3e|                     |\n     |                      |                       |     SSH+Deploys     |\n     |                      |                       |--------------------\x3e|\n     |                      |                       |                     |\n     |                      |   Deployment Status   |                     |\n     |                      |<----------------------|                     |\n     |   Deployment Status  |                       |                     |\n     |<---------------------|                       |                     |\n     |                      |                       |                     |\n     |                      |                       |   Deploy Completed  |\n     |                      |                       |<--------------------|\n     |                      |   Deployment Status   |                     |\n     |                      |<----------------------|                     |\n     |   Deployment Status  |                       |                     |\n     |<---------------------|                       |                     |\n     |                      |                       |                     |\n")),(0,a.kt)("p",null,"Gitploy lets you can build the advanced deployment system so your team and organization enable to deploy the application with lower risk and faster."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Keep in mind that Gitploy is never actually accessing your servers. It's up to your tools to interact with deployment events.")))}d.isMDXComponent=!0}}]);