# biliplus - Bilibili 网站增强脚本集

biliplus 是一个专为 Bilibili 用户设计的浏览器增强脚本集合，旨在改善用户体验、提供更多实用功能，让你的 Bilibili 浏览更加舒适高效。

## ✨ 主要功能

### 已实现功能

- **[bili-DimAd](./bili-DimAd.user.js)** - 为 B 站首页推广内容添加明显标记
  - 在推广内容上添加半透明遮罩和"推广"标识
  - 鼠标悬停时可查看原内容，减少误点击
  - 自动识别非 bilibili.com 域名的推广链接
  - <img src="./images/bili-DimAd.jpg" alt="bili-DimAd效果演示" style="max-width: 600px; width: 100%;">

### 计划中的功能

- 自定义首页布局 - 根据个人喜好调整界面
- 播放页增强 - 提供更多播放控制选项
- 完整字幕查看与复制 - 方便学习和参考
- 更多功能持续开发中...

## 💾 安装方法

### 方法一：安装油猴脚本（推荐，永久生效）

1. 首先打开浏览器，启用扩展程序的开发者模式；若这一步在后面才开启，要重启浏览器
2. 安装篡改猴(又称油猴) [Tampermonkey](https://www.tampermonkey.net/)
3. 点击下方链接安装需要的脚本:
    - 若 GitHub 可以访问，[点击安装 biliplus-DimAd 脚本(github)](https://github.com/hangeai/biliplus/raw/main/bili-DimAd.user.js)
    - 或备用链接：[点击安装 biliplus-DimAd 脚本(来自作者个人网站)](https://hangeai.com/biliplus/bili-DimAd.user.js)

### 方法二：通过浏览器控制台临时体验（无需安装，仅当前会话有效）

1. 打开 [Bilibili首页](https://www.bilibili.com/)
2. 打开浏览器开发者工具（Chrome/Edge按F12或右键点击"检查"）
3. 切换到"控制台"(Console)选项卡
4. 打开并复制脚本内容，粘贴到控制台中并按回车执行
   - 方式1，[从 GitHub 复制脚本内容](./bili-DimAd.user.js)，打开并点击 Copy raw file 完成复制
   - 方式2，国内推荐 [从作者个人网站复制脚本内容](https://hangeai.com/biliplus/bili-DimAd-view.html)，打开复制代码
   - **注意**: 首次使用开发者工具粘贴代码，若出现安全提示，根据界面语言及提示，请输入 `allow pasting` 或`允许粘贴`。[查看详情](./images/allow-pasting.jpg)
5. 效果将立即在当前页面显示（注意：刷新页面后效果消失，需重新执行）

## 🔍 使用说明

### bili-DimAd (推广内容标记)

安装后自动在 Bilibili 首页生效，无需额外设置。脚本会自动识别并标记推广内容，当鼠标悬停时，遮罩会暂时消失，方便查看内容详情。

## 🙋‍♂️ 参与贡献

如果你有任何功能建议或者想法，欢迎：
- 在 [Issues](https://github.com/hangeai/biliplus/issues) 中提交功能请求或错误报告
- 提交 Pull Request 帮助改进代码

## 📜 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🔗 相关链接

- 作者网站: [hangeai.com](https://hangeai.com/)
- GitHub 仓库: [github.com/hangeai/biliplus](https://github.com/hangeai/biliplus)

## 🔄 更新日志
### bili-DimAd (推广内容标记)
- v1.0.0 (2025-03-13): 发布首个脚本 bili-DimAd，实现推广内容标记功能

---

> biliplus 是一个开源项目，与 Bilibili 官方无关。使用本脚本集时，请遵守 Bilibili 的用户协议。
