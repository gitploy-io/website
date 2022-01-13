"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9774:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:7},s="Notification",p={unversionedId:"concepts/notification",id:"concepts/notification",title:"Notification",description:"Gitploy notifies users when deployments and reviews are created or updated. Now, Gitploy supports browser notification and Slack.",source:"@site/docs/concepts/notification.md",sourceDirName:"concepts",slug:"/concepts/notification",permalink:"/docs/concepts/notification",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/notification.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Permission",permalink:"/docs/concepts/permission"},next:{title:"Metrics",permalink:"/docs/concepts/metrics"}},l=[{value:"Browser",id:"browser",children:[],level:2},{value:"Slack",id:"slack",children:[],level:2}],u={toc:l};function f(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notification"},"Notification"),(0,i.kt)("p",null,"Gitploy notifies users when deployments and reviews are created or updated. Now, Gitploy supports browser notification and Slack."),(0,i.kt)("h2",{id:"browser"},"Browser"),(0,i.kt)("p",null,"Gitploy provides the browser notification to alert events as default. Almost modern browsers provide ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/API/notification"},"notification API"),", but unfortunately, some browsers are not supported. To avoid browser compatibility, you can replace it with Slack."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note that if the notification doesn't work even though your browser provides it, you should check the setting that it is enabled or not.")),(0,i.kt)("h2",{id:"slack"},"Slack"),(0,i.kt)("p",null,"Slack is a popular messaging app for businesses globally. Gitploy supports Slack to notify events of deployments and reviews. You can figure out the Connect button on the settings page after integrating with Slack. Check ",(0,i.kt)("a",{parentName:"p",href:"/docs/tasks/integration"},"the documentation")," for details."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Slack Notification",src:n(9588).Z})))}f.isMDXComponent=!0},9588:function(e,t,n){t.Z=n.p+"assets/images/slack-notification-8b7e43c98f7d78acbe65e5498f115e61.png"}}]);