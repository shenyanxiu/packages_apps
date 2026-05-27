# Interconnect Image Demo

基于 Vela 快应用的手表端图片互传 Demo，演示通过 `system.interconnect` API 实现手表与 Android 手机之间的图片传输功能。

## 功能概述

- 手表端通过 interconnect 与 Android 手机建立连接
- 手表向手机发送图片请求
- 手机将图片分片（base64 编码）传输到手表
- 手表接收分片数据并组装还原为完整图片
- 实时显示传输进度和连接状态

## 技术架构

```
┌──────────────┐    interconnect    ┌──────────────────┐
│   Watch App  │ ◄────────────────► │  Android App     │
│  (快应用 rpk) │                    │  (XMS Wearable)  │
└──────────────┘                    └──────────────────┘
```

### 传输协议

手机端将图片分片发送，消息格式如下：

| 阶段 | type | 字段 |
|------|------|------|
| 开始 | `header` | `totalChunks` - 总分片数 |
| 数据 | `data` | `index` - 分片索引, `chunk` - base64 数据 |
| 结束 | `end` | - |

## 项目结构

```
src/
├── app.ux                 # 应用入口
├── manifest.json          # 应用配置（包名、路由、权限）
├── config-watch.json      # 手表设备配置
├── common/
│   └── logo.png           # 应用图标
├── i18n/                  # 国际化资源
├── pages/
│   ├── index/index.ux     # 主页（连接管理、图片接收）
│   └── detail/detail.ux   # 详情页（图片全屏展示）
└── style/
    └── comm.css           # 公共样式
android_program/           # Android 端配套程序
```

## 环境要求

- Node.js >= 18
- aiot-toolkit >= 2.0.5
- 目标设备：Vela 手表（minPlatformVersion: 1000）
- 设计分辨率：480px

## 快速上手

### 安装依赖

```bash
npm install
```

### 开发调试

```bash
npm run start    # 启动开发服务器（带模拟器）
npm run watch    # 监听文件变更并实时刷新
```

### 构建发布

```bash
npm run build    # 构建 rpk 包
npm run release  # 构建签名发布包
```

### 代码检查

```bash
npm run lint     # ESLint 代码规范检查
```

## Android 端

配套 Android 程序位于 `android_program/` 目录，包含：
- `XMS Wearable Demo.zip` - Android 端源码工程
- `libs/` - 依赖库
- 预编译 APK：项目根目录 `app-debug.apk`

## 使用流程

1. 手表安装 rpk 快应用，手机安装配套 APK
2. 确保手表与手机已配对连接
3. 在手表端点击「创建连接」建立 interconnect 通道
4. 点击「发送消息」向手机请求图片
5. 手机端收到请求后自动分片发送图片
6. 手表端实时显示接收进度，完成后展示图片

## 相关文档

- [Vela 快应用官方文档](https://iot.mi.com/vela/quickapp)
- [system.interconnect API](https://iot.mi.com/vela/quickapp/api/system/interconnect)
