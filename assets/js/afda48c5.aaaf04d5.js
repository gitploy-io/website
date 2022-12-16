"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6779],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,y=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?o.createElement(y,l(l({ref:t},u),{},{components:n})):o.createElement(y,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5982:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],a={slug:"deploy-to-multi-envs",title:"Deploy to multiple environments with GitHub Action",description:"Gitploy provides another solution deploying to multiple environments.",tags:["GitHub Action","Multiple Environments"],image:"./demo.gif",keywords:["deploy","multiple environments","different environments","github action"]},s=void 0,p={permalink:"/blog/deploy-to-multi-envs",editUrl:"https://github.com/gitploy-io/website/tree/main/blog/2022-03-10-deploy-to-multi-envs/index.md",source:"@site/blog/2022-03-10-deploy-to-multi-envs/index.md",title:"Deploy to multiple environments with GitHub Action",description:"Gitploy provides another solution deploying to multiple environments.",date:"2022-03-10T00:00:00.000Z",formattedDate:"March 10, 2022",tags:[{label:"GitHub Action",permalink:"/blog/tags/git-hub-action"},{label:"Multiple Environments",permalink:"/blog/tags/multiple-environments"}],readingTime:2.675,truncated:!1,authors:[],frontMatter:{slug:"deploy-to-multi-envs",title:"Deploy to multiple environments with GitHub Action",description:"Gitploy provides another solution deploying to multiple environments.",tags:["GitHub Action","Multiple Environments"],image:"./demo.gif",keywords:["deploy","multiple environments","different environments","github action"]},prevItem:{title:"Production Release With Argo CD - Commit Pinning",permalink:"/blog/argocd-commit-pinning"}},u={image:n(8361).Z,authorsImageUrls:[]},m=[],d={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Having a well-tuned workflow keeps a team productive and helps them deliver reliable software. One recommended practice for any significant software development is using multiple environments. Using multiple environments ensures that software is rigorously tested before deployed and made available to users."),(0,i.kt)("p",null,"A general way for deploying to an environment is the branch strategy. Users create branches for each environment and deploy them by pushing a commit to the branch. Then, The deployment tool such as GitHub Action or Circle CI will deploy to the environment corresponding to the branch name."),(0,i.kt)("p",null,"The following is an example that deploy to the Azure Function App by a GitHub Action. Firstly, it wants to trigger the workflow on push events for specific branches such as ",(0,i.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"staging")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"prod"),". And in the ",(0,i.kt)("inlineCode",{parentName:"p"},"steps"),", through the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," syntax, the workflow deploys it to a different environment for each branch."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Deploy By Branch Push"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/deploy-by-branch.yaml"',title:'".github/workflows/deploy-by-branch.yaml"'},'on:\n  push:\n    branches:\n      - dev\n      - staging\n      - prod\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - \n        name: Set env vars for dev\n        if: github.ref_name == \'dev\'\n        run: |\n          echo "AZURE_FUNCTIONAPP_NAME=gitploy-dev" >> $GITHUB_ENV\n          echo "PUBLISH_PROFILE_VAR_NAME=AZURE_FUNCTIONAPP_PUBLISH_PROFILE_DEV" >> $GITHUB_ENV\n      - \n        name: Set env vars for prod\n        if: github.ref_name == \'prod\'\n        run: |\n          echo "AZURE_FUNCTIONAPP_NAME=gitploy-prod" >> $GITHUB_ENV\n          echo "PUBLISH_PROFILE_VAR_NAME=AZURE_FUNCTIONAPP_PUBLISH_PROFILE_PROD" >> $GITHUB_ENV\n      - \n        uses: Azure/functions-action@v1\n        with:\n          app-name: ${{ env.AZURE_FUNCTIONAPP_NAME }}\n          publish-profile: ${{ secrets[env.PUBLISH_PROFILE_VAR_NAME] }}\n          respect-funcignore: true\n'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"However, although the branch strategy is easy and fast, it is not flexible and scalable.")," The user must create a new branch and modify the workflow if a new environment is added."),(0,i.kt)("p",null,"On the other hand, Gitploy provides another solution. ",(0,i.kt)("strong",{parentName:"p"},"Gitploy dispatches an event that includes information necessary for deployment, such as the environment name, Function App name, and so on, through the ",(0,i.kt)("a",{parentName:"strong",href:"https://docs.github.com/en/rest/reference/deployments#deployments"},"deployment API"),".")," "),(0,i.kt)("p",null,"To activate Gitploy, we should place the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file in the root of the git repository like below. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," field has the informations for deployment, and it has different information for each environment, respectively. When a user triggers, the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," is passed to the deployment tooling."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"deploy.yml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},"envs:\n  - name: dev\n    auto_merge: false\n    payload:\n      AZURE_FUNCTIONAPP_NAME: gitploy-dev\n      PUBLISH_PROFILE_VAR_NAME: AZURE_FUNCTIONAPP_PUBLISH_PROFILE_DEV\n  - name: prod\n    auto_merge: false\n    payload:\n      AZURE_FUNCTIONAPP_NAME: gitploy-prod\n      PUBLISH_PROFILE_VAR_NAME: AZURE_FUNCTIONAPP_PUBLISH_PROFILE_PROD\n"))),(0,i.kt)("p",null,"And in the workflow, the information for deployment is read through the ",(0,i.kt)("inlineCode",{parentName:"p"},"github.event.deployment.payload")," context so that the workflow does not need ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," syntax for conditional steps anymore."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Deploy By Gitploy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/deploy-by-gitploy.yaml"',title:'".github/workflows/deploy-by-gitploy.yaml"'},'on:\n  deployment\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - \n        uses: chrnorm/deployment-status@releases/v1\n        with:\n          deployment_id: ${{ github.event.deployment.id }}\n          description: Start to deploy.\n          state: "in_progress"\n          token: "${{ github.token }}"\n\n      - \n        uses: Azure/functions-action@v1\n        with:\n          app-name: ${{ github.event.deployment.payload[\'AZURE_FUNCTIONAPP_NAME\'] }}\n          publish-profile: ${{ secrets[github.event.deployment.payload[\'PUBLISH_PROFILE_VAR_NAME\'] }}\n          respect-funcignore: true\n      \n      - \n        if: success()\n        uses: chrnorm/deployment-status@releases/v1\n        with:\n          deployment_id: ${{ github.event.deployment.id }}\n          description: Success to deploy.\n          state: "success"\n          token: "${{ github.token }}"\n      - \n        if: failure()\n        uses: chrnorm/deployment-status@releases/v1\n        with:\n          deployment_id: ${{ github.event.deployment.id }}\n          description: Failed to deploy.\n          state: "failure"\n          token: "${{ github.token }}"\n'))),(0,i.kt)("p",null,"Finally, when you trigger on Gitploy, you can see that it successfully deploys to the environment. \ud83d\ude80 "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Demo",src:n(8361).Z,width:"762",height:"352"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Thanks for reading, and stay tuned for a more good read. If you have a question, please post questions or comments to our ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/gitploy-io/gitploy/discussions"},"community"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reference")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.maxivanov.io/github-actions-deploy-to-multiple-environments-from-single-workflow/"},"Github Actions: deploy to multiple environments from single workflow")),(0,i.kt)("li",{parentName:"ul"},"Demo: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gitploy-io/multi-env-demo"},"gitploy-io/multi-env-demo"))))}c.isMDXComponent=!0},8361:function(e,t,n){t.Z=n.p+"assets/images/demo-e492ec3da6af0e58664dbc40dc6ff387.gif"}}]);