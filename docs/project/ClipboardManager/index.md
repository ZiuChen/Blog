---
title: 超级剪贴板
navbar: false
---

<script setup>
  import url from './assets/logo.png'
  import img1 from './assets/11.png'
  import img2 from './assets/22.png'
  import img3 from './assets/33.png'
  import img4 from './assets/44.png'
  import img5 from './assets/55.png'
  import img6 from './assets/66.png'
  import img7 from './assets/77.png'
  const titleInfo = {
    subTitle: '✨ 强大的剪贴板管理工具。',
    logo: url,
    linkList: [
      { content: '⭐ 开源代码', target: 'https://github.com/ZiuChen/ClipboardManager' },
      { content: '🚀 使用指南', target: './guide/' },
      { content: '🌎 疑难解答', target: './statement/' },
      { content: '👑 插件会员', target: './vip/' },
      { content: '🚚 更新日志', target: './log/' },
    ]
  }
  const imgSliders = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
  ]
</script>

<Title v-bind="titleInfo" />

## 🔰 开始使用

**首次安装需要设置“跟随主程序同时启动”**

- ✅ 监听剪贴板并持续将新内容更新到本地磁盘 数据读写**完全本地化**
- ✅ 快速`收藏`/`转存`/`分词`/`复制`/`删除`/`打开文件&目标文件夹`
- ✅ 功能按钮 定义**无限可能** `OCR识别` `百度搜索` `百度识图` `统计文本字数` `颜色管理` `识别图片中二维码` `上传到图床` `翻译`
- ✅ `鼠标左键` 复制并粘贴 `鼠标右键` 仅复制
- ✅ 按下`Shift`或`空格`进入**多选模式** 连续选择多条内容合并复制 支持**跨标签**合并复制/粘贴
- ✅ 键盘 `↑` `↓` 选中历史记录，按下回车直接粘贴
- ✅ 键盘 `←` `→`切换分类 `Tab`键连续切换分类
- ✅ 使用 `Ctrl/Alt+数字键` 快速粘贴
- ✅ 插件内`输入任意字母或数字`自动聚焦搜索框 支持使用`空格`同时检索**多个关键词**
- ✅ **智慧分词** 快速拖选指定内容 **超级粘贴** 直接转存为文件
- ✅ 优雅的界面动效与交互 跟随系统的深色模式
- ✅ 优秀的剪贴板监听性能 强大的自定义功能按钮 自搭建多端同步 ···

<ImgSlider :imgSliderList="imgSliders" />

--------

## 📚 安装方式

- 官方插件市场安装
- 离线插件安装：[百度网盘](https://pan.baidu.com/s/14GJIXWDU2F4jsqDDq73aFg?pwd=Ziuc)

[催更群 769115389](https://qm.qq.com/cgi-bin/qm/qr?k=9qfHKTaQuWqYN1ys1yiQPdJ4iIlHwgL5&jump_from=webapi)  [Github](https://github.com/ZiuChen)
