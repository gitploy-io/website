---
sidebar_position: 3
---

# CLI

## Installation

Gitploy provides a command tool for each version. The most recent version of the command is provided on this page, but if you need a specific version of the command, you can check the assets by version on the [release](https://github.com/gitploy-io/gitploy/releases) page of GitHub.

### Binary Downloads

Download and install the raw binaries by platform:

|platform      | download   | verify
|---           |---         |---
|Linux x64     |[tarball](https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_linux_amd64.tar.gz)   |[checksum](https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_checksums.txt)
|Linux arm64	  |[tarball](https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_linux_arm64.tar.gz) |[checksum](https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_checksums.txt)
|Linux arm	  |[tarball](https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_linux_arm.tar.gz)     |[checksum](https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_checksums.txt)
|Windows x64	  |[tarball](https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_windows_amd64.tar.gz) |[checksum](https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_checksums.txt)
|Darwin x64	  |[tarball](https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_darwin_amd64.tar.gz)  |[checksum](https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_checksums.txt)
|Darwin arm64  |[tarball](https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_darwin_arm64.tar.gz)  |[checksum](https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_checksums.txt)

### Install on Linux

Download and install on Linux:

```shell
curl -L https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_linux_amd64.tar.gz | tar zx
sudo install -t /usr/local/bin gitploy
```

### Install on OSX

Download and install on OSX:

```shell
curl -L https://github.com/gitploy-io/gitploy/releases/latest/download/gitploy_darwin_amd64.tar.gz | tar zx
sudo cp gitploy /usr/local/bin
```

## Configuration

The command-line tools interact with the server using REST endpoints. You will need to provide the CLI tools with the server addresses and your authorization token. You can find your authorization token in your Gitploy account settings (click your Avatar in the user interface).

**1\. Configure your Gitploy server address:**

```shell
export GITPLOY_SERVER_HOST=https://cloud.gitploy.io/
```

*⚠️The host must have a trailing slash (i.e., `/`).*

**2\. Configure your Gitploy token:**

```shell
export GITPLOY_TOKEN=vrdxGkiokoSyhoRStgryF....
```
