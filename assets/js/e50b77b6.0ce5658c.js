"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1893],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,m=u["".concat(p,".").concat(y)]||u[y]||c[y]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4801:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:2},p=void 0,s={unversionedId:"concepts/deploy.yml",id:"concepts/deploy.yml",title:"deploy.yml",description:"Gitploy provides the way users can configure pipelines by a simple file, such as deployment trigger, deployment safety, and deploying to a runtime environment\ud83d\ude80. The syntax is designed to be easy to read and expressive so that anyone can understand the pipeline. You can check the documentation for the syntax of the file.",source:"@site/docs/concepts/deploy.yml.md",sourceDirName:"concepts",slug:"/concepts/deploy.yml",permalink:"/docs/concepts/deploy.yml",editUrl:"https://github.com/gitploy-io/website/tree/main/docs/concepts/deploy.yml.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How it works",permalink:"/docs/concepts/how-it-work"},next:{title:"Deployment",permalink:"/docs/concepts/deployment"}},d=[{value:"Quick Start",id:"quick-start",children:[],level:2},{value:"Deployment Trigger",id:"deployment-trigger",children:[{value:"Auto Deploy",id:"auto-deploy",children:[],level:3}],level:2},{value:"Deployment safety",id:"deployment-safety",children:[{value:"Deployable Ref",id:"deployable-ref",children:[],level:3},{value:"Deploy Freeze Window",id:"deploy-freeze-window",children:[],level:3},{value:"Review",id:"review",children:[],level:3}],level:2},{value:"Deploy \ud83d\ude80",id:"deploy-",children:[{value:"Parameters of GitHub deployment API",id:"parameters-of-github-deployment-api",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Gitploy provides the way users can configure pipelines by a simple file, such as ",(0,i.kt)("strong",{parentName:"p"},"deployment trigger"),", ",(0,i.kt)("strong",{parentName:"p"},"deployment safety"),", and ",(0,i.kt)("strong",{parentName:"p"},"deploying")," to a runtime environment\ud83d\ude80. The syntax is designed to be easy to read and expressive so that anyone can understand the pipeline. You can check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/deploy.yml"},"documentation")," for the syntax of the file."),(0,i.kt)("p",null,"Pipelines are configured by placing a ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file in the root of your git repository. And if you want to change the file path, you can do it on the settings page.  "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u26a0\ufe0f Note that the configuration file must be at the head of the default branch.")," "),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"If you want to get started quickly, you should click the ",(0,i.kt)("em",{parentName:"p"},"New Configuration")," link, copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file, and push it into your git repository. Then you can find the ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," environment in the deploy tab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Quick Start",src:n(2317).Z,width:"579",height:"268"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},"envs:\n  - name: production\n    auto_merge: false\n    # To avoid the context verification.\n    # required_context: []\n")),(0,i.kt)("h2",{id:"deployment-trigger"},"Deployment Trigger"),(0,i.kt)("h3",{id:"auto-deploy"},"Auto Deploy"),(0,i.kt)("p",null,"Gitploy provides continuous delivery basically, but it also provides ",(0,i.kt)("strong",{parentName:"p"},"continuous deployment"),". The deployment will be triggered automatically if any new push events are detected from GitHub.\nTo enable continuous deployment, you should configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"auto_deploy_on")," field. Gitploy triggers a deployment when a ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," of the push event is matched with the field."),(0,i.kt)("p",null,"This configuration also supports a regular expression to match with the specific pattern. It allows you to deploy on any tag (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"refs/tags/.*"),") or to match specific branches (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"refs/heads/(main|master)"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},"envs:\n  - name: production\n    auto_deploy_on: refs/heads/main\n")),(0,i.kt)("h2",{id:"deployment-safety"},"Deployment safety"),(0,i.kt)("h3",{id:"deployable-ref"},"Deployable Ref"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," can be any named branch, tag, or SHA. But sometimes, a ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," must be specific branches or tags. You can verify a ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," matched with the format by configuring the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployable_ref")," field. And this configuration also supports a regular expression."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},'envs:\n  - name: production\n    deployable_ref: "v.*"\n')),(0,i.kt)("h3",{id:"deploy-freeze-window"},"Deploy Freeze Window"),(0,i.kt)("p",null,"If you want to prevent deployments for a particular period, such as during a planned vacation period or out of working time, you can configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"frozen_windows")," field. During a deploy freeze period, users can not execute any deployment. "),(0,i.kt)("p",null,"And this configuration uses the cron expression to handle repetitive periods. You can check the detail in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/deploy.yml"},"documentation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},'envs:\n  - name: production\n    frozen_windows:\n      # Freeze every midnights\n      - start: "50 23 * * *"\n        duration: 20m\n        location: America/New_York\n      # Freeze every weekends\n      - start: "0 * * * SAT,SUN"\n        duration: 1h\n        location: Asia/Seoul\n')),(0,i.kt)("h3",{id:"review"},"Review"),(0,i.kt)("p",null,"If you require a specific person, such as a service owner or product manager, to review what is deployed before deployment, you can configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"review")," field. You can list up users as reviewers under the ",(0,i.kt)("inlineCode",{parentName:"p"},"review")," field. Then Gitploy requests a review to users by sending a notification when a deployment is triggered."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},'envs:\n  - name: production\n    review:\n      enabled: true\n      reviewers: ["ocotocat", "manager"]\n')),(0,i.kt)("h2",{id:"deploy-"},"Deploy \ud83d\ude80"),(0,i.kt)("h3",{id:"parameters-of-github-deployment-api"},"Parameters of GitHub deployment API"),(0,i.kt)("p",null,"As the 'How it works' documentation mentioned, Gitploy sends a request by deployment API. You can configure all the parameters in a configuration file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},"envs:\n  - name: production\n    task: deploy:lambda\n    description: Deploy to the production lambda.\n    auto_merge: false\n    required_contexts:\n      - test\n      - integration-test\n    production_environment: true\n")))}u.isMDXComponent=!0},2317:function(e,t,n){t.Z=n.p+"assets/images/quickstart-dec63d06127634e1bcf2520347b74a64.png"}}]);