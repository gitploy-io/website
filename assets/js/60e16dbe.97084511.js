"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6747],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,N=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7319:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1},d="deploy.yml",p={unversionedId:"references/deploy.yml",id:"references/deploy.yml",title:"deploy.yml",description:"Field                    |Type                     |Required  |Description",source:"@site/docs/references/deploy.yml.md",sourceDirName:"references",slug:"/references/deploy.yml",permalink:"/docs/references/deploy.yml",editUrl:"https://github.com/gitploy-io/website/tree/main/docs/references/deploy.yml.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Integration",permalink:"/docs/tasks/integration"},next:{title:"Configurations",permalink:"/docs/references/configurations/"}},m=[{value:"Env",id:"env",children:[],level:2},{value:"Review",id:"review",children:[],level:2},{value:"Frozen Window",id:"frozen-window",children:[],level:2},{value:"Variables",id:"variables",children:[],level:2}],u={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deployyml"},"deploy.yml"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"envs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"[","]",(0,l.kt)("a",{parentName:"em",href:"#env"},"Env"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Thie field configures the pipeline for each environment, respectively.")))),(0,l.kt)("h2",{id:"env"},"Env"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"This field is the runtime environment such as ",(0,l.kt)("inlineCode",{parentName:"td"},"production"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"staging"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"qa"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"task")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field is used by the deployment system to distinguish the kind of deployment. (",(0,l.kt)("em",{parentName:"td"},"Only for ",(0,l.kt)("inlineCode",{parentName:"em"},"GitHub")),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field is the short description of the deployment. (",(0,l.kt)("em",{parentName:"td"},"Only for ",(0,l.kt)("inlineCode",{parentName:"em"},"GitHub")),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"auto_merge")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field is used to ensure that the requested ref is not behind the repository's default branch. If you deploy with the commit or the tag you need to set ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),". For rollback, Gitploy set the field ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),". (",(0,l.kt)("em",{parentName:"td"},"Only for ",(0,l.kt)("inlineCode",{parentName:"em"},"GitHub")),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"required_contexts")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field allows you to specify a subset of contexts that must be success. (",(0,l.kt)("em",{parentName:"td"},"Only for ",(0,l.kt)("inlineCode",{parentName:"em"},"GitHub")),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"payload")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"object")," or ",(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field is JSON payload with extra information about the deployment. (",(0,l.kt)("em",{parentName:"td"},"Only for ",(0,l.kt)("inlineCode",{parentName:"em"},"GitHub")),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"production_environment")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field specifies whether this runtime environment is production or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deployable_ref")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field specifies which the ref(branch, SHA, tag) is deployable or not. It supports the regular expression ",(0,l.kt)("inlineCode",{parentName:"td"},"re2"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"auto_deploy_on")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field controls auto-deployment behaviour given a ref(branch, SHA, tag). If any new push events are detected on this event, the deployment will be triggered. It supports the regular expression (",(0,l.kt)("a",{parentName:"td",href:"https://github.com/google/re2/wiki/Syntax"},"re2"),"). E.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"refs/heads/main")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"refs/tags/v.*"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"review")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},(0,l.kt)("a",{parentName:"em",href:"#review"},"Review"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field configures reviewers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"frozen_windows")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"[","]",(0,l.kt)("a",{parentName:"em",href:"#frozen-window"},"Frozen Window"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field configures to add a frozen window to prevent unintended deployment for the environment.")))),(0,l.kt)("h2",{id:"review"},"Review"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enabled")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field makes to enables the review feature. The default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reviewers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field list up reviewers. The default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"[]"),". You should specify the maintainers of the project.")))),(0,l.kt)("h2",{id:"frozen-window"},"Frozen Window"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"This field is a cron expression to indicate when the window starts. For example, ",(0,l.kt)("inlineCode",{parentName:"td"},"55 23 * * *")," means it starts to freeze a window before 5 minutes of midnight. You can check the ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/gitploy-io/cronexpr"},"documentation")," for details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"duration")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"This field configures how long the window is frozen from the starting. The duration string is a possibly signed sequence of decimal numbers and a unit suffix such as ",(0,l.kt)("inlineCode",{parentName:"td"},"5m"),", or ",(0,l.kt)("inlineCode",{parentName:"td"},"1h30m"),". Valid time units are ",(0,l.kt)("inlineCode",{parentName:"td"},"ns"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"us"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"ms"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"s"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"m"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"h"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"location")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This field configures the location of the ",(0,l.kt)("inlineCode",{parentName:"td"},"start")," time. The value is taken to be a location name corresponding to a file in the IANA Time Zone database, such as ",(0,l.kt)("inlineCode",{parentName:"td"},"America/New_York"),". The default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"UTC"),". You can check the ",(0,l.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"document")," for the Time Zone database name.")))),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("p",null,"The following variables are available in ",(0,l.kt)("inlineCode",{parentName:"p"},"${ }")," syntax when evaluating ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy.yml")," before deploy or rollback:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GITPLOY_DEPLOY_TASK"),": Returns ",(0,l.kt)("inlineCode",{parentName:"li"},"deploy")," for deploy, but rollback, it returns the empty string."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GITPLOY_ROLLBACK_TASK"),": Returns ",(0,l.kt)("inlineCode",{parentName:"li"},"rollback")," for rollback, but deploy, it returns the empty string."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GITPLOY_IS_ROLLBACK"),": Returns ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," for rollback, but deploy, it returns ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,l.kt)("p",null,"Example usage of this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'envs:\n  - name: prod\n    task: "${GITPLOY_DEPLOY_TASK}${GITPLOY_ROLLBACK_TASK}:kubernetes"  # It returns "deploy:kubernetes" or "rollback:kubernetes"\n')),(0,l.kt)("p",null,"And Gitploy provides the string operation to facilitate customized values. You can check supported functions at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/drone/envsubst"},"here"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'envs:\n  - name: prod\n    task: "${GITPLOY_DEPLOY_TASK=rollback}:kubernetes" # It returns "deploy:kubernetes" or "rollback:kubernetes"\n')))}s.isMDXComponent=!0}}]);