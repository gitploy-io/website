---
sidebar_position: 1
---

# deploy.yml


Field                    |Type                     |Required  |Description
---                      |----                     |---       |---
`envs`                   |*[\][Env](#env)*          |`true`   |Thie field configures the pipeline for each environment, respectively.

## Env


Field                    |Type                     |Required  |Description
---                      |----                     |---       |---
`name`                   |*string*                 |`true`    |This field is the runtime environment such as `production`, `staging`, and `qa`. 
`task`                   |*string*                 |`false`   |This field is used by the deployment system to distinguish the kind of deployment. Default is `deploy`. (*Only for GitHub*) 
`description`            |*string*                 |`false`   |This field is the short description of the deployment. (*Only for GitHub*)
`auto_merge`             |*boolean*                |`false`   |This field is used to ensure that the requested ref is not behind the repository's default branch. If the ref is behind the default branch for the repository, GitHub will attempt to merge it for you. Default is `true`, but Gitploy set `false` for rollback. (*Only for GitHub*)
`required_contexts`      |*[]string*               |`false`   |This field allows you to specify a subset of contexts that must be success. Defaults to all unique contexts. (*Only for GitHub*)
`payload`                |*object* or *string*     |`false`   |This field is JSON payload with extra information about the deployment. Default is `null`. (*Only for GitHub*)
`dyanmic_payload`        |*[Dynamic Payload](#dynamic-payload)*     |`false`   |This field dynamically generates JSON payload about the deployment.(*Only for GitHub*)
`production_environment` |*boolean*                |`false`   |This field specifies whether this runtime environment is production or not. Default is `true`.
`auto_deploy_on`         |*string*                 |`false`   |This field controls auto-deployment behaviour given a ref(branch, SHA, tag). If any new push events are detected on this event, the deployment will be triggered. It supports the regular expression ([re2](https://github.com/google/re2/wiki/Syntax)). E.g. `refs/heads/main` or `refs/tags/v.*`
`deployable_ref`         |*string*                 |`false`   |This field specifies which the ref(branch, SHA, tag) is deployable or not. It supports the regular expression `re2`. 
`frozen_windows`         |*[\][Frozen Window](#frozen-window)* |`false`   |This field configures to add a frozen window to prevent unintended deployment for the environment.
`serialization`         |*boolean*                 |`false`   |This field forces only one deployment to run for the environment.
`review`                 |*[Review](#review)*      |`false`   |This field configures reviewers.

## Review

Field            |Type       |Required  |Description
---              |---        |---       |---
`enabled`        |*boolean*  |`false`    |This field makes to enables the review feature. Default is `false`.
`reviewers`      |*[]string* |`false`  |This field list up reviewers. Default is `[]`. You should specify the maintainers of the project.

## Frozen Window

Field            |Type       |Required     |Description
---              |---        |---          |---
`start`          |*string*   |`true`       |This field is a cron expression to indicate when the window starts. For example, `55 23 * * *` means it starts to freeze a window before 5 minutes of midnight. You can check the [documentation](https://github.com/gitploy-io/cronexpr) for details.
`duration`       |*string*   |`true`       |This field configures how long the window is frozen from the starting. The duration string is a possibly signed sequence of decimal numbers and a unit suffix such as `5m`, or `1h30m`. Valid time units are `ns`, `us`, `ms`, `s`, `m`, `h`.
`location`       |*string*   |`false`      |This field configures the location of the `start` time. The value is taken to be a location name corresponding to a file in the IANA Time Zone database, such as `America/New_York`. Default is `UTC`. You can check the [document](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for the Time Zone database name.

## Dynamic Payload

Field                 |Type       |Required     |Description
---                   |---        |---          |---
`enabled`             |*boolean*  |`true`      |This field enables the dynamic payload feature. The default value is `false`.
`inputs`              |*boolean*  |`true`      |This field set the attributes for the input value.
`inputs.*.required`   |*boolean*  |`true`      |This field forces a user to input a mandatory value.
`inputs.*.type`       |*string*   |`true`      |This field specifies the type of the input value. Choose one of the following: `select`, `number`, `string`, and `boolean`.
`inputs.*.default`    |*any*      |`false`     |This field specifies the default value of the input.
`inputs.*.description`|*string*   |`false`     |This field describes the input. 
`inputs.*.options`    |*[]string*  |`false`    |This field specifies options for when the `select` type input.


## Variables

The following variables are available in `${ }` syntax when evaluating `deploy.yml` before deploy or rollback:

* `GITPLOY_DEPLOY_TASK`: Returns `deploy` for deploy, but rollback, it returns the empty string.
* `GITPLOY_ROLLBACK_TASK`: Returns `rollback` for rollback, but deploy, it returns the empty string.
* `GITPLOY_IS_ROLLBACK`: Returns `true` for rollback, but deploy, it returns `false`.

Example usage of this:

```yaml
envs:
  - name: prod
    task: "${GITPLOY_DEPLOY_TASK}${GITPLOY_ROLLBACK_TASK}:kubernetes"  # It returns "deploy:kubernetes" or "rollback:kubernetes"
```

And Gitploy provides the string operation to facilitate customized values. You can check supported functions at [here](https://github.com/drone/envsubst).

```yaml
envs:
  - name: prod
    task: "${GITPLOY_DEPLOY_TASK=rollback}:kubernetes" # It returns "deploy:kubernetes" or "rollback:kubernetes"
```
