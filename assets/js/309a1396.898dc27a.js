"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2514],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},609:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:4},s="Review",p={unversionedId:"concepts/review",id:"concepts/review",title:"Review",description:"About required review",source:"@site/docs/concepts/review.md",sourceDirName:"concepts",slug:"/concepts/review",permalink:"/docs/concepts/review",editUrl:"https://github.com/gitploy-io/website/tree/main/docs/concepts/review.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Rollback",permalink:"/docs/concepts/rollback"},next:{title:"Lock",permalink:"/docs/concepts/lock"}},l={},u=[{value:"About required review",id:"about-required-review",level:2},{value:"Pro Tips",id:"pro-tips",level:2},{value:"Confirm Changes",id:"confirm-changes",level:3}],d={toc:u};function f(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"review"},"Review"),(0,i.kt)("h2",{id:"about-required-review"},"About required review"),(0,i.kt)("p",null,"Users can enable the review in the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file for each environment, and the users who review are specified here. Reviewers must have at least read permission."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},'envs:\n  - name: production\n    review:\n      enabled: true\n      reviewers: ["octocat", "dreamer"]\n')),(0,i.kt)("p",null,"After the review is enabled, reviews are requested when a user deploys. And the deployment waits until a review is approved and has a status of ",(0,i.kt)("inlineCode",{parentName:"p"},"waiting"),". Only one of the required reviewers needs to approve it to proceed. If one rejects it, deployment is not possible. If a deployment is not approved within 30 minutes, it will be automatically canceled."),(0,i.kt)("p",null,"The notification will navigate to the deployment page when a review is requested. And when the reviewer presses the 'Review' button on the page, a pop-up shows options for approval and rejection. To approve, click ",(0,i.kt)("strong",{parentName:"p"},"Approve and Deploy"),". After approved, the deployment will proceed (after any deployment protection rules have passed)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Review",src:r(2377).Z,width:"771",height:"334"})),(0,i.kt)("h2",{id:"pro-tips"},"Pro Tips"),(0,i.kt)("h3",{id:"confirm-changes"},"Confirm Changes"),(0,i.kt)("p",null,"The 'Changes' field at the bottom of the page shows what changes have been made. Reviewers can quickly check what has changed through the commit messages."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Changes",src:r(1916).Z,width:"714",height:"436"})))}f.isMDXComponent=!0},1916:function(e,t,r){t.Z=r.p+"assets/images/changes-19a1960e1f8cc6121a3e2195bb950823.png"},2377:function(e,t,r){t.Z=r.p+"assets/images/review-9b2962bc121e0f22d2dc80fc84f49d07.png"}}]);