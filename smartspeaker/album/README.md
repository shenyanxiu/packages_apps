## 简介

家庭相册是音箱上的重要应用之一，主要功能如下：
- 用户图片滑动预览
- 点击图片预览/查看大图
- 用户可通过二维码扫描添加图片

## 项目结构

```cpp
album
    ├─ package.json
    ├─ src
    │  ├─ app.ux
    │  ├─ common
    │  │  ├─ images
    │  │  ├─ js js文件
    │  │  │  ├─ constants.js
    │  │  │  ├─ exchange.js
    │  │  │  ├─ http.js
    │  │  │  ├─ promisify.js
    │  │  │  ├─ storage.js
    │  │  │  └─ util.js
    │  │  ├─ logo.png
    │  │  └─ style 样式
    │  │     └─ unocss-vela.css
    │  ├─ components 组件
    │  │  └─ MyButton
    │  │     └─ index.ux
    │  ├─ config-watch.json
    │  ├─ i18n 多语言
    │  │  ├─ defaults.json
    │  │  ├─ en.json
    │  │  └─ zh-CN.json
    │  ├─ manifest.json
    │  └─ pages
    │     ├─ empty
    │     │  └─ index.ux 未开启家庭相册屏保提示页
    │     ├─ home
    │     │  └─ index.ux 首页
    │     ├─ manual
    │     │  └─ index.ux 查看帮助页
    │     ├─ preview
    │     │  └─ index.ux 大图预览页
    │     ├─ screenSaver
    │     │  └─ index.ux 设为屏保页
    │     └─ upload
    │        └─ index.ux 上传图片页
```

## 快速上手

### 1. 开发

```
npm install
npm run start
```

### 2. 构建

```
npm run build
npm run release
```

### 3. 调试

```
npm run watch
```
### 4. 代码规范化配置
代码规范化可以帮助开发者在git commit前进行代码校验、格式化、commit信息校验

使用前提：必须先关联git

macOS or Linux
```
sh husky.sh
```

windows
```
./husky.sh
```


