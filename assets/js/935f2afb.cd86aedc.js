"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"What is Gitploy?","href":"/docs/","docId":"index"},{"type":"category","label":"Concept","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"How it works","href":"/docs/concepts/how-it-work","docId":"concepts/how-it-work"},{"type":"link","label":"deploy.yml","href":"/docs/concepts/deploy.yml","docId":"concepts/deploy.yml"},{"type":"link","label":"Deployment","href":"/docs/concepts/deployment","docId":"concepts/deployment"},{"type":"link","label":"Review","href":"/docs/concepts/review","docId":"concepts/review"},{"type":"link","label":"Lock","href":"/docs/concepts/lock","docId":"concepts/lock"},{"type":"link","label":"Permission","href":"/docs/concepts/permission","docId":"concepts/permission"},{"type":"link","label":"Notification","href":"/docs/concepts/notification","docId":"concepts/notification"},{"type":"link","label":"Metrics","href":"/docs/concepts/metrics","docId":"concepts/metrics"},{"type":"link","label":"License","href":"/docs/concepts/license","docId":"concepts/license"},{"type":"link","label":"Self-hosted Server","href":"/docs/concepts/self-hosted-server","docId":"concepts/self-hosted-server"}]},{"type":"category","label":"Tasks","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/tasks/installation","docId":"tasks/installation"},{"type":"link","label":"Database","href":"/docs/tasks/database","docId":"tasks/database"},{"type":"link","label":"Use Cases","href":"/docs/tasks/usecases","docId":"tasks/usecases"},{"type":"link","label":"Integration","href":"/docs/tasks/integration","docId":"tasks/integration"}]},{"type":"category","label":"References","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"deploy.yml","href":"/docs/references/deploy.yml","docId":"references/deploy.yml"},{"type":"category","label":"Configurations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"GITPLOY_ADMIN_USERS","href":"/docs/references/configurations/GITPLOY_ADMIN_USERS","docId":"references/configurations/GITPLOY_ADMIN_USERS"},{"type":"link","label":"GITPLOY_GITHUB_BASE_URL","href":"/docs/references/configurations/GITPLOY_GITHUB_BASE_URL","docId":"references/configurations/GITPLOY_GITHUB_BASE_URL"},{"type":"link","label":"GITPLOY_GITHUB_CLIENT_ID","href":"/docs/references/configurations/GITPLOY_GITHUB_CLIENT_ID","docId":"references/configurations/GITPLOY_GITHUB_CLIENT_ID"},{"type":"link","label":"GITPLOY_GITHUB_CLIENT_SECRET","href":"/docs/references/configurations/GITPLOY_GITHUB_CLIENT_SECRET","docId":"references/configurations/GITPLOY_GITHUB_CLIENT_SECRET"},{"type":"link","label":"GITPLOY_GITHUB_SCOPES","href":"/docs/references/configurations/GITPLOY_GITHUB_SCOPES","docId":"references/configurations/GITPLOY_GITHUB_SCOPES"},{"type":"link","label":"GITPLOY_LICENSE","href":"/docs/references/configurations/GITPLOY_LICENSE","docId":"references/configurations/GITPLOY_LICENSE"},{"type":"link","label":"GITPLOY_MEMBER_ENTRIES","href":"/docs/references/configurations/GITPLOY_MEMBER_ENTRIES","docId":"references/configurations/GITPLOY_MEMBER_ENTRIES"},{"type":"link","label":"GITPLOY_ORGANIZATION_ENTRIES","href":"/docs/references/configurations/GITPLOY_ORGANIZATION_ENTRIES","docId":"references/configurations/GITPLOY_ORGANIZATION_ENTRIES"},{"type":"link","label":"GITPLOY_PROMETHEUS_AUTH_SECRET","href":"/docs/references/configurations/GITPLOY_PROMETHEUS_AUTH_SECRET","docId":"references/configurations/GITPLOY_PROMETHEUS_AUTH_SECRET"},{"type":"link","label":"GITPLOY_PROMETHEUS_ENABLED","href":"/docs/references/configurations/GITPLOY_PROMETHEUS_ENABLED","docId":"references/configurations/GITPLOY_PROMETHEUS_ENABLED"},{"type":"link","label":"GITPLOY_PROXY_SERVER_HOST","href":"/docs/references/configurations/GITPLOY_PROXY_SERVER_HOST","docId":"references/configurations/GITPLOY_PROXY_SERVER_HOST"},{"type":"link","label":"GITPLOY_PROXY_SERVER_PROTO","href":"/docs/references/configurations/GITPLOY_PROXY_SERVER_PROTO","docId":"references/configurations/GITPLOY_PROXY_SERVER_PROTO"},{"type":"link","label":"GITPLOY_SERVER_HOST","href":"/docs/references/configurations/GITPLOY_SERVER_HOST","docId":"references/configurations/GITPLOY_SERVER_HOST"},{"type":"link","label":"GITPLOY_SERVER_PROTO","href":"/docs/references/configurations/GITPLOY_SERVER_PROTO","docId":"references/configurations/GITPLOY_SERVER_PROTO"},{"type":"link","label":"GITPLOY_SLACK_CLIENT_ID","href":"/docs/references/configurations/GITPLOY_SLACK_CLIENT_ID","docId":"references/configurations/GITPLOY_SLACK_CLIENT_ID"},{"type":"link","label":"GITPLOY_SLACK_CLIENT_SECRET","href":"/docs/references/configurations/GITPLOY_SLACK_CLIENT_SECRET","docId":"references/configurations/GITPLOY_SLACK_CLIENT_SECRET"},{"type":"link","label":"GITPLOY_STORE_DRIVER","href":"/docs/references/configurations/GITPLOY_STORE_DRIVER","docId":"references/configurations/GITPLOY_STORE_DRIVER"},{"type":"link","label":"GITPLOY_STORE_SOURCE","href":"/docs/references/configurations/GITPLOY_STORE_SOURCE","docId":"references/configurations/GITPLOY_STORE_SOURCE"},{"type":"link","label":"GITPLOY_TLS_CERT","href":"/docs/references/configurations/GITPLOY_TLS_CERT","docId":"references/configurations/GITPLOY_TLS_CERT"},{"type":"link","label":"GITPLOY_TLS_KEY","href":"/docs/references/configurations/GITPLOY_TLS_KEY","docId":"references/configurations/GITPLOY_TLS_KEY"},{"type":"link","label":"GITPLOY_WEBHOOK_SECRET","href":"/docs/references/configurations/GITPLOY_WEBHOOK_SECRET","docId":"references/configurations/GITPLOY_WEBHOOK_SECRET"}]}]}]},"docs":{"concepts/deploy.yml":{"id":"concepts/deploy.yml","title":"deploy.yml","description":"Gitploy configures a pipeline with a simple, easy\u2011to\u2011read file that you commit to your git repository. The default path is deploy.yml at the root directory, but you can replace the file path in the settings tab of Gitploy. You can check the documentation for the specification of the configuration file and also references Use Cases.","sidebar":"tutorialSidebar"},"concepts/deployment":{"id":"concepts/deployment","title":"Deployment","description":"Gitploy provides two types of deployment: Deploy and Rollback.","sidebar":"tutorialSidebar"},"concepts/how-it-work":{"id":"concepts/how-it-work","title":"How it works","description":"Gitploy builds the system around GitHub deployment API. Deployment API is a request to deploy a specific ref (branch, SHA, tag), and GitHub dispatches an event to deployment toolings that can listen for and act on when a request is posted. It\'s an event-driven decoupled way to deploy your code. This article looks under the hood Gitploy interacts with deployment API.","sidebar":"tutorialSidebar"},"concepts/license":{"id":"concepts/license","title":"License","description":"Community Edition","sidebar":"tutorialSidebar"},"concepts/lock":{"id":"concepts/lock","title":"Lock","description":"The worst thing that can happen is someone deploys to the same repository during an incident. The lock helps with this. We provide the locking system to block deployments going out to the environment.","sidebar":"tutorialSidebar"},"concepts/metrics":{"id":"concepts/metrics","title":"Metrics","description":"Gtiploy publishes and exposes metrics that Prometheus can consume at the standard /metrics endpoint.","sidebar":"tutorialSidebar"},"concepts/notification":{"id":"concepts/notification","title":"Notification","description":"Gitploy notifies users when deployments and reviews are created or updated. Now, Gitploy supports browser notification and Slack.","sidebar":"tutorialSidebar"},"concepts/permission":{"id":"concepts/permission","title":"Permission","description":"Gitploy supports fine-grained access control for the repository. The user has explicit permissions(read, write, and admin) to the repository.","sidebar":"tutorialSidebar"},"concepts/review":{"id":"concepts/review","title":"Review","description":"Gitploy has the review to require at least one approval for the deployment. You can list up to reviewers on the configuration file. The reviewers must be logged in and have read permission for the repository.","sidebar":"tutorialSidebar"},"concepts/self-hosted-server":{"id":"concepts/self-hosted-server","title":"Self-hosted Server","description":"Gitploy provide self-hosted server which is the practice of locally installing and hosting by the user. We\'re providing installation guide for each environment. You can check this guide for details.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"What is Gitploy?","description":"Gitploy is a tooling that helps your organization build the deployment system in minutes. It enables your organization to deploy in the same manner without worrying about  the implementation details of delivering different types of applications (e.g., web, native). and to deploy differently for each application by a simple configuration file, respectively. And as a result, your organization can get a robust system to deploy fast and safely. \ud83d\ude80","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_ADMIN_USERS":{"id":"references/configurations/GITPLOY_ADMIN_USERS","title":"GITPLOY_ADMIN_USERS","description":"Optional comma-separated list of accounts, used to identify which accounts are admin.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_GITHUB_BASE_URL":{"id":"references/configurations/GITPLOY_GITHUB_BASE_URL","title":"GITPLOY_GITHUB_BASE_URL","description":"Optional string value configures the base URL for the GitHub enterprise.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_GITHUB_CLIENT_ID":{"id":"references/configurations/GITPLOY_GITHUB_CLIENT_ID","title":"GITPLOY_GITHUB_CLIENT_ID","description":"Required string value configures the GitHub OAuth client id. This is used to authorize access to GitHub on behalf of a Gitploy user.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_GITHUB_CLIENT_SECRET":{"id":"references/configurations/GITPLOY_GITHUB_CLIENT_SECRET","title":"GITPLOY_GITHUB_CLIENT_SECRET","description":"Required string value configures the GitHub OAuth client secret. This is used to authorize access to GitHub on behalf of a Gitploy user.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_GITHUB_SCOPES":{"id":"references/configurations/GITPLOY_GITHUB_SCOPES","title":"GITPLOY_GITHUB_SCOPES","description":"Optional String value provides a comma-separated scopes of GitHub OAuth. The default values should not be modified.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_LICENSE":{"id":"references/configurations/GITPLOY_LICENSE","title":"GITPLOY_LICENSE","description":"Optional string value provides the license key. This is used to unlock the Gtiploy Enterprise edition.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_MEMBER_ENTRIES":{"id":"references/configurations/GITPLOY_MEMBER_ENTRIES","title":"GITPLOY_MEMBER_ENTRIES","description":"Optional comma-separated list of accounts, used to limit to users in this list, or users that are members of organizations included in this list.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_ORGANIZATION_ENTRIES":{"id":"references/configurations/GITPLOY_ORGANIZATION_ENTRIES","title":"GITPLOY_ORGANIZATION_ENTRIES","description":"Optional comma-separated list of organizations, used to limit which organization(or owner) are syncronized between your source control management system and Gitploy. *Note that this variable must be set before your first login. If you don\'t set this environment it synchronize with all repositories the user owns.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_PROMETHEUS_AUTH_SECRET":{"id":"references/configurations/GITPLOY_PROMETHEUS_AUTH_SECRET","title":"GITPLOY_PROMETHEUS_AUTH_SECRET","description":"Optional string value to authorize the scrape request from the Prometheus. It authorizes with the Authorization header on request.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_PROMETHEUS_ENABLED":{"id":"references/configurations/GITPLOY_PROMETHEUS_ENABLED","title":"GITPLOY_PROMETHEUS_ENABLED","description":"Optional string value to enable exposing metrics that Prometheus can consume. The default value is false.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_PROXY_SERVER_HOST":{"id":"references/configurations/GITPLOY_PROXY_SERVER_HOST","title":"GITPLOY_PROXY_SERVER_HOST","description":"Optional string value used to create webhooks that are routed through an alternate proxy server. The use case of this setting is that you need GitHub webhooks to route through a public proxy.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_PROXY_SERVER_PROTO":{"id":"references/configurations/GITPLOY_PROXY_SERVER_PROTO","title":"GITPLOY_PROXY_SERVER_PROTO","description":"Optional string value used to create webhooks that are routed through an alternate proxy server. The use case of this setting is that you need GitHub webhooks to route through a public proxy. It can be one of them: http or https.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_SERVER_HOST":{"id":"references/configurations/GITPLOY_SERVER_HOST","title":"GITPLOY_SERVER_HOST","description":"Required string value configures the user-facing hostname. This value is used to create webhooks and redirect urls. It has no actual impact on serving traffic.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_SERVER_PROTO":{"id":"references/configurations/GITPLOY_SERVER_PROTO","title":"GITPLOY_SERVER_PROTO","description":"Optional string value configures the user-facing protocol. This value is used to create webhooks and redirect urls. It can be one of them: http or https, and the default value is https.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_SLACK_CLIENT_ID":{"id":"references/configurations/GITPLOY_SLACK_CLIENT_ID","title":"GITPLOY_SLACK_CLIENT_ID","description":"Optional string value configures the Slack OAuth client id. This is used to retrieve the bot token.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_SLACK_CLIENT_SECRET":{"id":"references/configurations/GITPLOY_SLACK_CLIENT_SECRET","title":"GITPLOY_SLACK_CLIENT_SECRET","description":"Optional string value configures the Slack OAuth client secret. This is used to retrieve the bot token.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_STORE_DRIVER":{"id":"references/configurations/GITPLOY_STORE_DRIVER","title":"GITPLOY_STORE_DRIVER","description":"String value provides the driver of store. It supports sqlite3, mysql, and postgres. The default value is sqlite3.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_STORE_SOURCE":{"id":"references/configurations/GITPLOY_STORE_SOURCE","title":"GITPLOY_STORE_SOURCE","description":"String value provides the source of store. Configures the database connection string. The default value is the path of the embedded sqlite3 database file.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_TLS_CERT":{"id":"references/configurations/GITPLOY_TLS_CERT","title":"GITPLOY_TLS_CERT","description":"Path to an SSL certificate used by the server to accept HTTPS requests. This parameter is of type string and is optional.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_TLS_KEY":{"id":"references/configurations/GITPLOY_TLS_KEY","title":"GITPLOY_TLS_KEY","description":"Path to an SSL certificate key used by the server to accept HTTPS requests. This configuration parameter is of type string and is optional.","sidebar":"tutorialSidebar"},"references/configurations/GITPLOY_WEBHOOK_SECRET":{"id":"references/configurations/GITPLOY_WEBHOOK_SECRET","title":"GITPLOY_WEBHOOK_SECRET","description":"Optional string value to create an http-signature for the webhook. The webhook recipient use this secret to verify request authenticity.","sidebar":"tutorialSidebar"},"references/deploy.yml":{"id":"references/deploy.yml","title":"deploy.yml","description":"Field                    |Type                     |Required  |Description","sidebar":"tutorialSidebar"},"tasks/database":{"id":"tasks/database","title":"Database","description":"Gitploy requires the use of a database backend for persistence. Gitploy uses an embedded SQLite database by default. This article provides alternate databases: MySQL and Postgres.","sidebar":"tutorialSidebar"},"tasks/installation":{"id":"tasks/installation","title":"Installation","description":"This article explains how to install the Gitploy server for GitHub.","sidebar":"tutorialSidebar"},"tasks/integration":{"id":"tasks/integration","title":"Integration","description":"GitHub Action","sidebar":"tutorialSidebar"},"tasks/usecases":{"id":"tasks/usecases","title":"Use Cases","description":"Deploying the head of the main branch","sidebar":"tutorialSidebar"}}}')}}]);