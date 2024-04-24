# landing-page

## Features

- ✅ 更改默认资源路径为 `./src/`
- ✅ 支持多语言:  [i18n](https://vitepress.dev/zh/guide/i18n)
- ✅ 支持 [markdown](https://vitepress.dev/zh/guide/markdown)
- ✅ 支持 一键发布到 Github Pages
- ✅ 集成了 [naive-ui](https://www.naiveui.com/), 并修复了`主题(明/暗)`切换

## FAQ

### Github Pages 绑定域名问题:

- 绑定自定义域名, 无需设置 base_url(也就是 repo name)
- 但是每次发布 github pages, 都需要手动在项目设置页里, 设置 `自定义域名`

## Development

### Requirements

- ✅ [vue3](https://vuejs.org/)
- ✅ [vitepress](https://vitepress.dev/)
- ✅ [bun](https://bun.run/)
- ✅ [taskfile](https://taskfile.dev/)

### Run

```ruby

# install:
task install

# run:
task run
```

## Deploy

### Github Pages

#### 自动编译+部署(Github Actions)

- 官方文档 [部署指南](https://vitepress.dev/zh/guide/deploy) 支持 Github actions 方式部署
- 我个人并不喜欢, 虽然方便. 浪费资源, 没必要.
- 且等待久, 比较慢. 手动编译+发布, 更快.

#### 手动编译+部署

- 本地部署到 GitHub Pages, Github actions 的方式(浪费资源, 没必要)
- 已经写好了发布脚本.
- 如果是 fork 的本 repo, 改一下 `repo-url` 参数 和 `deploy-branch` 参数

```ruby

# 自动编译 + 部署到 GitHub Pages
task deploy

```