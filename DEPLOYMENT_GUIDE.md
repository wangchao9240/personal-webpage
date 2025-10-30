# 🚀 Vercel 部署指南

**项目：** Chasen Wang 个人作品集网站  
**部署平台：** Vercel  
**预计时间：** 10-15 分钟  
**难度：** 简单

---

## ✅ 部署前准备清单

在开始部署前，请确认以下事项：

### 1. 代码准备

- [ ] 所有 Epic (1-5) 已完成并测试
- [ ] 代码已提交到 Git 仓库
- [ ] `npm run build` 本地构建成功
- [ ] 无 TypeScript 或 ESLint 错误

### 2. 内容准备

- [ ] 项目截图已添加到 `public/images/projects/`
- [ ] 项目 URLs 已更新（`src/data/projects.ts`）
- [ ] 联系方式已更新（`src/components/layout/Header.tsx`）
- [ ] About 内容已确认

### 3. 账号准备

- [ ] 有 GitHub 账号
- [ ] 代码已推送到 GitHub 仓库
- [ ] 有 Vercel 账号（免费即可）

---

## 📋 部署步骤（详细版）

### Step 1: 推送代码到 GitHub

如果还没有推送到 GitHub：

```bash
# 1. 在 GitHub 创建新仓库（名为 personal-website）

# 2. 添加 remote
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git

# 3. 推送所有代码
git push -u origin main
```

**验证：** 在 GitHub 上能看到所有代码 ✅

---

### Step 2: 登录 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **"Sign Up"** 或 **"Log in"**
3. 选择 **"Continue with GitHub"**
4. 授权 Vercel 访问你的 GitHub 仓库

---

### Step 3: 导入项目

1. 在 Vercel Dashboard，点击 **"Add New"** → **"Project"**
2. 找到你的 GitHub 仓库：**`personal-website`**
3. 点击 **"Import"** 按钮

---

### Step 4: 配置项目（Vercel 会自动检测）

Vercel 会自动检测到 Next.js 项目并配置：

**构建设置（自动填充，无需更改）：**
- **Framework Preset:** Next.js ✅
- **Build Command:** `npm run build` ✅
- **Output Directory:** `.next` ✅
- **Install Command:** `npm install` ✅

**环境变量（可选）：**
- 这个项目不需要环境变量 ✅
- 可以直接跳过此步骤

**点击 "Deploy" 按钮！** 🚀

---

### Step 5: 等待部署完成

部署通常需要 **2-4 分钟**：

**进度显示：**
1. ⏳ Building... (安装依赖，编译代码)
2. ⏳ Deploying... (上传到 Vercel CDN)
3. ✅ Success! (部署完成)

**如果失败：**
- 检查构建日志 (Build Logs)
- 确认本地 `npm run build` 成功
- 检查是否有缺失的依赖

---

### Step 6: 访问你的网站！

部署成功后，你会看到：

**🎉 Congratulations! Your project is live!**

Vercel 会给你一个免费域名：
```
https://personal-website-xyz123.vercel.app
```

**点击 "Visit" 按钮**查看你的作品集网站！

---

### Step 7: 测试部署的网站

在浏览器中测试：

#### ✅ 功能测试清单

**导航系统：**
- [ ] Header 中的联系方式图标可点击
- [ ] 右侧浮动导航圆点工作正常
- [ ] 点击圆点平滑滚动到对应区块
- [ ] Scroll spy 正确追踪当前区块

**Hero Section：**
- [ ] 3D 几何背景动画显示
- [ ] Terminal 打字机效果运行
- [ ] Run Code 按钮滚动到 About

**内容区块：**
- [ ] About 文字显示正确
- [ ] Skills badges 全部显示
- [ ] Experience timeline 显示 4 个职位
- [ ] Projects 显示 3 个项目卡片

**交互效果：**
- [ ] ProjectCard hover 效果（提升 + 按钮显示）
- [ ] TechBadge hover 效果
- [ ] 按钮 hover 颜色变化
- [ ] 所有动画流畅（60fps）

**移动端：**
- [ ] 在手机上打开网站
- [ ] 所有内容可见
- [ ] 无横向滚动
- [ ] 触摸导航工作正常

---

## 🔧 配置自定义域名（可选）

如果你有自己的域名（如 `chasenwang.com`）：

### Step 1: 在 Vercel 项目设置中

1. 进入项目 → **Settings** → **Domains**
2. 输入你的域名：`chasenwang.com`
3. 点击 **"Add"**

### Step 2: 配置 DNS

Vercel 会提供 DNS 记录，你需要：

1. 登录你的域名注册商（GoDaddy, Namecheap, etc.）
2. 找到 DNS 设置
3. 添加 Vercel 提供的记录：
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

4. 等待 DNS 传播（最多 48 小时，通常 10-30 分钟）

### Step 3: 验证

Vercel 会自动验证域名并配置 HTTPS ✅

---

## 📊 性能检查（可选但推荐）

### 运行 Lighthouse 审计

1. 在 Chrome 打开你的网站
2. 右键 → **检查** → **Lighthouse** 标签页
3. 选择 **Desktop** 模式
4. 点击 **"Analyze page load"**

**目标分数：**
- **Performance:** > 90 ✅
- **Accessibility:** > 95 ✅
- **Best Practices:** > 90 ✅
- **SEO:** > 90 ✅

如果分数低于目标，查看建议并优化。

---

## 🔄 更新网站（未来）

每次更新代码后：

**自动部署：**
```bash
# 1. 修改代码
# 2. 提交
git add .
git commit -m "feat: update something"

# 3. 推送到 GitHub
git push origin main

# 4. Vercel 自动检测并部署 ✅
# 无需手动操作！
```

**部署状态：**
- Vercel Dashboard 会显示部署进度
- 每次推送都会触发新的部署
- 自动生成 preview URL for PR

---

## ⚠️ 部署前的最后检查

### 必须更新的内容

在部署前，请确认以下内容已更新：

#### 1. 项目 URLs（重要！）

**文件：** `src/data/projects.ts`

```typescript
// 更新这些 URLs：
liveUrl: 'YOUR_ACTUAL_LIVE_DEMO_URL',
githubUrl: 'https://github.com/YOUR_USERNAME/YOUR_REPO',
```

#### 2. 联系方式 URLs（重要！）

**文件：** `src/components/layout/Header.tsx`

```typescript
const CONTACT_INFO = {
  email: 'chasenwang1026@outlook.com', // ✅ 已正确
  linkedin: 'https://www.linkedin.com/in/YOUR_PROFILE', // ❌ 需要更新
  github: 'https://github.com/YOUR_USERNAME', // ❌ 需要更新
};
```

#### 3. Open Graph 域名（部署后更新）

**文件：** `src/app/layout.tsx`

部署完成后，更新这一行：
```typescript
url: 'https://your-actual-domain.vercel.app', // 用实际域名替换
```

#### 4. 项目图片（重要！）

**目录：** `public/images/projects/`

替换 `.svg` 占位符为真实 `.png` 截图：
- `chatgpt-timeline.png` (16:9, < 300KB)
- `collaboration-platform.png` (16:9, < 300KB)
- `meme-alchemist.png` (16:9, < 300KB)

---

## 🎯 部署后任务

### 1. 更新简历

**将网站 URL 添加到简历：**
```
Portfolio: https://your-domain.vercel.app
```

### 2. 更新 LinkedIn

**在 LinkedIn Profile 添加：**
- Website: 你的 Vercel URL
- Featured section: 添加作品集链接

### 3. 分享

**可以分享给：**
- 招聘者
- HR
- 同事/朋友
- 社交媒体

---

## 🆘 常见问题

### Q: 部署失败，显示 "Build Error"

**A:** 检查以下内容：
1. 本地运行 `npm run build` 是否成功？
2. 所有文件是否已推送到 GitHub？
3. `package.json` 中的依赖是否完整？
4. 查看 Vercel 的 Build Logs 了解具体错误

### Q: 网站显示 404 或空白页

**A:**  
1. 确认 `next.config.ts` 中有 `output: 'export'`
2. 检查 Vercel Dashboard 中的 Build Logs
3. 确认部署状态为 "Ready"

### Q: 图片不显示

**A:**
1. 确认图片在 `public/images/projects/` 目录
2. 确认文件名匹配 `src/data/projects.ts` 中的路径
3. 图片文件已推送到 GitHub
4. 重新部署

### Q: 想要自定义域名

**A:** 
1. 购买域名（GoDaddy, Namecheap等）
2. 在 Vercel Project Settings → Domains 添加
3. 按 Vercel 指示配置 DNS
4. 等待 DNS 传播

### Q: 如何回滚到之前的版本？

**A:**
1. Vercel Dashboard → Deployments
2. 找到之前成功的部署
3. 点击 "..." → "Promote to Production"

---

## 📞 获取帮助

**Vercel 文档：**
- [部署指南](https://vercel.com/docs/deployments/overview)
- [Next.js 部署](https://vercel.com/docs/frameworks/nextjs)

**需要协助？**
- Vercel Support (如果是付费用户)
- GitHub Issues (社区帮助)
- Stack Overflow

---

## 🎊 恭喜！

完成部署后，你将拥有：

✅ **一个专业的在线作品集**  
✅ **可分享的 URL**  
✅ **自动 HTTPS 加密**  
✅ **全球 CDN 加速**  
✅ **自动部署流程**  
✅ **免费托管**

**你的作品集已经准备好帮助你找到理想的工作！** 🎉

---

**文档创建：** 2025-10-29  
**适用于：** Epic 6, Story 6.6  
**状态：** ✅ Ready for Deployment


