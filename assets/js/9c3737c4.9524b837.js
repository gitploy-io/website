"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3564],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9546:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l="Use Cases",c={unversionedId:"tasks/usecases",id:"tasks/usecases",title:"Use Cases",description:"Deploying the head of the main branch",source:"@site/docs/tasks/usecases.md",sourceDirName:"tasks",slug:"/tasks/usecases",permalink:"/docs/tasks/usecases",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tasks/usecases.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/docs/tasks/database"},next:{title:"Integration",permalink:"/docs/tasks/integration"}},u=[{value:"Deploying the head of the <code>main</code> branch",id:"deploying-the-head-of-the-main-branch",children:[],level:2},{value:"Deploying with the version",id:"deploying-with-the-version",children:[],level:2},{value:"Deploying the artifact",id:"deploying-the-artifact",children:[],level:2},{value:"Auto deployment",id:"auto-deployment",children:[],level:2},{value:"Questions?",id:"questions",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-cases"},"Use Cases"),(0,a.kt)("h2",{id:"deploying-the-head-of-the-main-branch"},"Deploying the head of the ",(0,a.kt)("inlineCode",{parentName:"h2"},"main")," branch"),(0,a.kt)("p",null,"The general way of deployment is deploying the head of the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch that has only verified commits. To constrain deploying only the head of the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"auto_merge")," parameter of GitHub ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/repos#create-a-deployment"},"deployment API")," to ensure that the deployment is the head of the branch, and set ",(0,a.kt)("inlineCode",{parentName:"p"},"deployable_ref")," field with the ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"envs:\n  - name: production\n    auto_merge: true\n    deployable_ref: main\n    production_environment: true\n")),(0,a.kt)("h2",{id:"deploying-with-the-version"},"Deploying with the version"),(0,a.kt)("p",null,"The versioning is the general way to specify the artifact or the commit, and GitHub provides the release page for versioning. If your team (or organization) wants to constrain deploying with the version, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployable_ref")," field like below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"envs:\n  - name: production\n    auto_merge: false\n    deployable_ref: 'v.*\\..*\\..*'       # Semantic versioning\n    production_environment: true\n")),(0,a.kt)("h2",{id:"deploying-the-artifact"},"Deploying the artifact"),(0,a.kt)("p",null,"The artifact could be a binary file from compiling source codes or a docker image, which means we have to build the artifact before we deploy. The commit status is the best way to verify if the artifact exists or not. The builder, such as GitHub Action or Circle CI, posts the commit status after building the artifact, and we can verify it by the ",(0,a.kt)("inlineCode",{parentName:"p"},"required_contexts")," parameter when we deploy. You can reference the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.yml")," of Gitploy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'envs:\n  - name: production\n    auto_merge: false\n    required_contexts:\n      - "publish-image"         # The commit status of building the artifact.\n    production_environment: true\n')),(0,a.kt)("h2",{id:"auto-deployment"},"Auto deployment"),(0,a.kt)("p",null,"If you want to enable the auto-deployment when the pull request is merged into the main branch, you should configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"auto_deploy_on")," field like the below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"envs:\n  - name: production\n    auto_merge: true\n    required_contexts: []\n    auto_deploy_on: refs/heads/main\n    deployable_ref: main\n    production_environment: true\n")),(0,a.kt)("h2",{id:"questions"},"Questions?"),(0,a.kt)("p",null,"We are always happy to help with questions you might have. You can post questions or comments to our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gitploy-io/gitploy/discussions"},"community"),". "),(0,a.kt)("p",null,"And we are very welcome to share your deployment pipeline at our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gitploy-io/gitploy/discussions"},"community"),"."))}d.isMDXComponent=!0}}]);