"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9413],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),y=r,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4213:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},s="How it works",p={unversionedId:"concepts/how-it-work",id:"concepts/how-it-work",title:"How it works",description:"Gitploy builds the system around GitHub deployment API. Deployment API is a request to deploy a specific ref (branch, SHA, tag), and GitHub dispatches an event to deployment toolings that can listen for and act on when a request is posted. It's an event-driven decoupled way to deploy your code. This article looks under the hood Gitploy interacts with deployment API.",source:"@site/docs/concepts/how-it-work.md",sourceDirName:"concepts",slug:"/concepts/how-it-work",permalink:"/docs/concepts/how-it-work",editUrl:"https://github.com/gitploy-io/website/tree/main/docs/concepts/how-it-work.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"What is Gitploy?",permalink:"/docs/"},next:{title:"deploy.yml",permalink:"/docs/concepts/deploy.yml"}},c=[{value:"GitHub Deployment API",id:"github-deployment-api",children:[{value:"Select a ref(branch, SHA, tag)",id:"select-a-refbranch-sha-tag",children:[],level:3},{value:"Verification",id:"verification",children:[],level:3},{value:"Event Dispatch",id:"event-dispatch",children:[],level:3}],level:2},{value:"Deployment Tooling",id:"deployment-tooling",children:[{value:"Update status",id:"update-status",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"Gitploy builds the system around GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/deployments#deployments"},"deployment API"),". Deployment API is a request to deploy a specific ref (branch, SHA, tag), and GitHub dispatches an event to deployment toolings that can listen for and act on when a request is posted. ",(0,i.kt)("strong",{parentName:"p"},"It's an event-driven decoupled way to deploy your code.")," This article looks under the hood Gitploy interacts with deployment API."),(0,i.kt)("h2",{id:"github-deployment-api"},"GitHub Deployment API"),(0,i.kt)("p",null,"The deployment API consists of these stages:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A user selects a ref(branch, SHA, tag) to deploy."),(0,i.kt)("li",{parentName:"ol"},"It verifies the ref for deployment safety."),(0,i.kt)("li",{parentName:"ol"},"It requests GitHub to deploy a specific ref. ")),(0,i.kt)("p",null,"Of course, Gitploy follows these stages to deploy a ref and enhances each stage to use it easily and safely."),(0,i.kt)("h3",{id:"select-a-refbranch-sha-tag"},"Select a ref(branch, SHA, tag)"),(0,i.kt)("p",null,"A ref can be any named branch, tag, or SHA, and it is determined by how to deploy an application. If an application uses semantic versioning, the ref should be a tag(e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.5.5"),")."),(0,i.kt)("p",null,"Gitploy provides an intuitive UI similar to GitHub, enabling users to select a ref easily even though a user is a newcomer to the system. And it displays the details of a commit such as SHA, message, creator, and creation time. So it enables to let users know which commits are deployed."),(0,i.kt)("h3",{id:"verification"},"Verification"),(0,i.kt)("p",null,"Before deploying a ref, it needs verification for deployment safety. The deployment API provides these verifications: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auto_merge"),": Ensure that the requested ref is not behind the repository's default branch. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"required_contexts"),": Ensure that commit statuses are in that success state.")),(0,i.kt)("p",null,"Gitploy provides the file (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.yml"),") to configure the parameters for each runtime environment, respectively. "),(0,i.kt)("h3",{id:"event-dispatch"},"Event Dispatch"),(0,i.kt)("p",null,"Gitploy posts a request to GitHub, and it dispatches an event to deployment toolings."),(0,i.kt)("h2",{id:"deployment-tooling"},"Deployment Tooling"),(0,i.kt)("h3",{id:"update-status"},"Update status"),(0,i.kt)("p",null,"After deployment, a deployment tooling must update the deployment status if it has succeeded or not by the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/deployments#deployment-statuses"},"deployment status API"),". It enables Gitploy to sync the deployment status and display the deployment status with a redirection link for the deployment details, such as logs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deployment statuses",src:n(9514).Z})),(0,i.kt)("p",null,"Below is a simple diagram for how these interactions would work:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+---------+             +--------+             +---------+         +-------------+\n| Gitploy |             | GitHub |             | Tooling |         | Your Server |\n+---------+             +--------+             +---------+         +-------------+\n     |                      |                       |                     |\n     |  Create Deployment   |                       |                     |\n     |---------------------\x3e|                       |                     |\n     |                      |                       |                     |\n     |  Deployment Created  |                       |                     |\n     |<---------------------|                       |                     |\n     |                      |                       |                     |\n     |                      |   Deployment Event    |                     |\n     |                      |----------------------\x3e|                     |\n     |                      |                       |     SSH+Deploys     |\n     |                      |                       |--------------------\x3e|\n     |                      |                       |                     |\n     |                      |   Deployment Status   |                     |\n     |                      |<----------------------|                     |\n     |                      |                       |                     |\n     |                      |                       |                     |\n     |                      |                       |                     |\n     |                      |                       |   Deploy Completed  |\n     |                      |                       |<--------------------|\n     |                      |   Deployment Status   |                     |\n     |                      |<----------------------|                     |\n     |                      |                       |                     |\n     |                      |                       |                     |\n     |                      |                       |                     |\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Keep in mind that Gitploy is never actually accessing your servers. It's up to your tools to interact with deployment events.")))}d.isMDXComponent=!0},9514:function(e,t,n){t.Z=n.p+"assets/images/statuses-e2dad02b38d698b791b1e35c94beaa7f.png"}}]);