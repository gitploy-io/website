"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1893],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?o.createElement(y,a(a({ref:t},u),{},{components:n})):o.createElement(y,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4801:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:2},p="deploy.yml",c={unversionedId:"concepts/deploy.yml",id:"concepts/deploy.yml",title:"deploy.yml",description:"Gitploy configures a pipeline with a simple, easy\u2011to\u2011read file that you commit to your git repository. The default path is deploy.yml at the root directory, but you can replace the file path in the settings tab of Gitploy. You can check the documentation for the specification of the configuration file and also references Use Cases.",source:"@site/docs/concepts/deploy.yml.md",sourceDirName:"concepts",slug:"/concepts/deploy.yml",permalink:"/docs/concepts/deploy.yml",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/deploy.yml.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How it works",permalink:"/docs/concepts/how-it-work"},next:{title:"Deployment",permalink:"/docs/concepts/deployment"}},u=[{value:"Quick Start",id:"quick-start",children:[],level:2},{value:"Features",id:"features",children:[{value:"Multi Environment",id:"multi-environment",children:[],level:3},{value:"Parameters of GitHub deployment API",id:"parameters-of-github-deployment-api",children:[],level:3},{value:"Auto Deploy",id:"auto-deploy",children:[],level:3},{value:"Deploy Freeze Window",id:"deploy-freeze-window",children:[],level:3},{value:"Review",id:"review",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deployyml"},"deploy.yml"),(0,i.kt)("p",null,"Gitploy configures a pipeline with a simple, easy\u2011to\u2011read file that you commit to your git repository. The default path is ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.yml")," at the root directory, but you can replace the file path in the settings tab of Gitploy. You can check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/deploy.yml"},"documentation")," for the specification of the configuration file and also references ",(0,i.kt)("a",{parentName:"p",href:"/docs/tasks/usecases"},"Use Cases"),". "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u26a0\ufe0f Note that the configuration file must be at the head of the default branch.")," "),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"If you want to get started quickly, you should click the ",(0,i.kt)("em",{parentName:"p"},"New Configuration")," link, copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file, and push it into your git repository. Then you can find the ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," environment in Gitploy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},"envs:\n  - name: production\n    auto_merge: false\n    # To avoid the context verification.\n    # required_context: []\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Quick Start",src:n(2317).Z})),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("h3",{id:"multi-environment"},"Multi Environment"),(0,i.kt)("p",null,"For multi-environment, Gitploy provides you can make different pipelines for each environment, respectively. The configuration has to be defined under the ",(0,i.kt)("inlineCode",{parentName:"p"},"envs")," field. The following example shows each environment has a different configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},"envs:\n  # Development environment\n  - name: development\n    auto_merge: false\n    required_contexts: []\n\n  # Production environment\n  - name: production\n    auto_merge: true\n    required_contexts: \n      - test\n      - docker-image\n")),(0,i.kt)("h3",{id:"parameters-of-github-deployment-api"},"Parameters of GitHub deployment API"),(0,i.kt)("p",null,"Internally, Gitploy posts a deployment to GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/repos#create-a-deployment"},"deployments API")," with parameters from the configuration file. These parameters help you can verify the artifact before you start to deploy.  The configuration provides fields to set all parameters of GitHub deployment API. You can check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/deploy.yml"},"document")," for the detail."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},"envs:\n  - name: production\n    task: deploy:lambda\n    description: Start deploying to the production.\n    auto_merge: false\n    required_contexts:\n      - test\n      - integration-test\n    production_environment: true\n")),(0,i.kt)("h3",{id:"auto-deploy"},"Auto Deploy"),(0,i.kt)("p",null,"Gitploy provides not only manual deployment but also auto-deployment. Gitploy is listening for the push event dispatched from GitHub and triggers to deploy automatically when the ref is matched with the ",(0,i.kt)("inlineCode",{parentName:"p"},"auto_deploy_on")," of the configuration file. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},"envs:\n  - name: production\n    auto_deploy_on: refs/heads/main\n    production_environment: true\n")),(0,i.kt)("h3",{id:"deploy-freeze-window"},"Deploy Freeze Window"),(0,i.kt)("p",null,"Gitploy support to add a window to prevent unintended deployment for the environment. You can freeze a window periodically by a cron expression."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},'envs:\n  - name: production\n    frozen_windows:\n      # Freeze every midnights\n      - start: "50 23 * * *"\n        duration: 20m\n        location: America/New_York\n      # Freeze every weekends\n      - start: "0 * * * SAT,SUN"\n        duration: 1h\n        location: Asia/Seoul\n')),(0,i.kt)("h3",{id:"review"},"Review"),(0,i.kt)("p",null,"Gitploy provides the review process. You can list up to users on the configuration file. You can check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/review"},"document")," for the detail."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},'envs:\n  - name: production\n    review:\n      enabled: true\n      reviewers: ["ocotocat", "noah"]\n')))}d.isMDXComponent=!0},2317:function(e,t,n){t.Z=n.p+"assets/images/quickstart-dec63d06127634e1bcf2520347b74a64.png"}}]);