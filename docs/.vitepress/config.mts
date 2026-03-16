/*
 * @Author: Vincent_Mei 874639118@qq.com
 * @Date: 2026-02-13 10:43:48
 * @LastEditors: Vincent_Mei 874639118@qq.com
 * @LastEditTime: 2026-02-13 17:11:16
 * @FilePath: \\undefinedd:\\programming\\my-blog\\docs\\.vitepress\\config.mts
 * @Description: 
 * 
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved. 
 */
import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: '我的博客',
  description: '记录学习与生活',
  base: '/my-notebooks/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '技术', link: '/技术/' },
      { text: '生活', link: '/生活/' }
    ],

    // ===== 新增：右侧大纲配置 =====
    outline: {
      level: [1, 4],        // 显示 h2 到 h6 的所有标题
      label: '页面菜单'      // 大纲区域的标题
    },

    // ===== 侧边栏：自动生成并展示完整层级 =====
    sidebar: {
      '/技术/': generateSidebar({
        // 基础路径配置
        documentRootPath: 'docs',          // 文档根目录
        scanStartPath: '',        // 不指定 scanStartPath —— 保持目录完整，生成的链接会包含 /技术/ 前缀
        resolvePath: '',        // 使用默认的 resolvePath（让插件根据文件路径生成一致的链接）
        
        // ===== 层级展示核心参数 =====
        useTitleFromFileHeading: false,      // 文章用 # 标题作为菜单名
        useTitleFromFrontmatter: false,     // 不使用 frontmatter 标题（优先用文件内标题）
        hyphenToSpace: true,               // 文件名连字符转空格
        capitalizeFirst: true,            // 首字母大写（英文友好）
        
        // ===== 文件夹层级显示 =====
        // 让文件夹显示为可点击的链接（需文件夹内有 index.md）
        folderLinkNotIncludesFileName: false,  // 确保文件夹链接指向 /技术/前端/ 而非 /技术/前端/index
        useFolderTitleFromIndexFile: false,     // ★ 重要：从 index.md 的标题获取文件夹显示名称
        // manuallySetFileName: 'index',          // 指定作为文件夹标题的文件名（默认 index）
        
        // ===== 折叠/展开控制 =====
        collapsed: false,              // false = 默认全部展开，true = 默认全部折叠
        collapseDepth: 2,             // 折叠层级深度：1=只折叠一级，2=折叠两级...
        
        // 其他可选优化
        excludeFiles: ['**/_*'],      // 忽略 _ 开头的文件（草稿）
        sortBy: 'filename-asc'       // 按文件名升序
      }),

      '/生活/': generateSidebar({
        documentRootPath: 'docs',
        scanStartPath: '',
        resolvePath: '',

        // 不使用文件内 # 标题，改用文件名
        useTitleFromFileHeading: false,     // 关键：关闭从 # 标题读取
        useTitleFromFrontmatter: false,     // 可选，确保也不从 frontmatter 读取（默认 false）

        // 文件夹显示：直接使用文件夹名，而不是其 index.md 中的标题
        useFolderTitleFromIndexFile: false, // 文件夹名取自文件夹名称

        // 折叠行为
        collapsed: false,
        collapseDepth: 2,

        // 文件名格式化
        hyphenToSpace: true,                // 将文件名中的连字符 - 替换为空格
        capitalizeFirst: true,              // 首字母大写（对英文友好）

        // 排除草稿文件（以下划线开头）
        excludeFiles: ['**/_*'],

        // 按文件名升序排列
        sortBy: 'filename-asc'
      }),

      // 首页侧边栏（保持简单导航）
      '/': [
        { text: '快速导航', items: [
          { text: '技术', link: '/技术/' },
          { text: '生活', link: '/生活/' }
        ]}
      ]
    },

    // 界面中文（保持不变）
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})