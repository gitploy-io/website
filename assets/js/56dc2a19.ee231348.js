"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3072],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7480:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:3},p="Integration",l={unversionedId:"tasks/integration",id:"tasks/integration",title:"Integration",description:"GitHub Action",source:"@site/docs/tasks/integration.md",sourceDirName:"tasks",slug:"/tasks/integration",permalink:"/docs/tasks/integration",editUrl:"https://github.com/gitploy-io/website/tree/main/docs/tasks/integration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/docs/tasks/database"},next:{title:"deploy.yml",permalink:"/docs/references/deploy.yml"}},c=[{value:"GitHub Action",id:"github-action",children:[],level:2},{value:"Slack",id:"slack",children:[{value:"Step 1: Create App",id:"step-1-create-app",children:[],level:3},{value:"Step 2: Configure Permissions",id:"step-2-configure-permissions",children:[],level:3},{value:"Step 3: Run Server With App Credentials",id:"step-3-run-server-with-app-credentials",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integration"},"Integration"),(0,i.kt)("h2",{id:"github-action"},"GitHub Action"),(0,i.kt)("p",null,"GitHub Actions help you automate tasks to run an actual deployment. GitHub Actions are event-driven, meaning that you can run a series of commands after a deployment event has occurred. "),(0,i.kt)("p",null,"To listening the deployment event, you must specify ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," field. And you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," conditional to run a job for the specific environment. Here is the example below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# Listening the deployment event\non:\n  deployment\n\njobs:\n  deploy-dev:\n    runs-on: ubuntu-latest\n    # Run a job when the environment is \'production.\n    if: ${{ github.event.deployment.environment == \'production\' }}\n    steps:\n      -\n        name: Checkout\n        uses: actions/checkout@v2\n      - \n        name: Start to deploy\n        uses: chrnorm/deployment-status@releases/v1\n        with:\n          deployment_id: ${{ github.event.deployment.id }}\n          description: Start to deploy ...\n          state: "in_progress"\n          token: "${{ github.token }}"\n    # Run your deployment commands.\n')),(0,i.kt)("h2",{id:"slack"},"Slack"),(0,i.kt)("p",null,"Slack integration provides notifications for events."),(0,i.kt)("h3",{id:"step-1-create-app"},"Step 1: Create App"),(0,i.kt)("p",null,"Firstly, we have to create ",(0,i.kt)("a",{parentName:"p",href:"https://api.slack.com/apps"},"Slack App"),". You should click the Create App button and fill out inputs."),(0,i.kt)("h3",{id:"step-2-configure-permissions"},"Step 2: Configure Permissions"),(0,i.kt)("p",null,"After creating App, we move to the ",(0,i.kt)("em",{parentName:"p"},"OAuth & Permissions")," page and set up ",(0,i.kt)("em",{parentName:"p"},"the redirect URLs")," and ",(0,i.kt)("em",{parentName:"p"},"Bot Token scopes"),"on this page. Firstly, you should add a new redirect URL with the ",(0,i.kt)("inlineCode",{parentName:"p"},"GITPLOY_SERVER_PROTO://GITPLOY_SERVER_HOST/slack/signin")," format; secondly, add ",(0,i.kt)("inlineCode",{parentName:"p"},"chat:write")," scope into the Bot Token scopes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Slack Bot Token Sceops",src:n(3435).Z})),(0,i.kt)("h3",{id:"step-3-run-server-with-app-credentials"},"Step 3: Run Server With App Credentials"),(0,i.kt)("p",null,"To enable Slack integration, you have to set up these environments when you run the server: ",(0,i.kt)("inlineCode",{parentName:"p"},"GITPLOY_SLACK_CLIENT_ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GITPLOY_SLACK_CLIENT_SECRET"),". You can get these credentials from ",(0,i.kt)("em",{parentName:"p"},"App Credentials")," section of ",(0,i.kt)("em",{parentName:"p"},"Basic Information")," page."))}d.isMDXComponent=!0},3435:function(e,t,n){t.Z=n.p+"assets/images/slack-bot-token-scopes-0d33b8a61ade6487abbb0c917d741e15.png"}}]);