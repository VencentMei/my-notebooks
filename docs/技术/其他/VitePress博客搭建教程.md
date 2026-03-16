# 官方链接
https://vitepress.dev/zh/guide/what-is-vitepress

# 注意事项

## public目录

有时可能需要一些**静态资源**，但这些资源**没有直接被 Markdown 或主题组件直接引用**（如视频资源），或者你可能想**以原始文件名提供某些文件**，像 robots.txt，favicons 和 PWA 图标这样的文件。

可以将这些文件放置在源目录的`public`目录中。例如，如果项目根目录是`./docs`，并且使用默认源目录位置，那么`public`目录将是 `./docs/public`。

放置在 `public`中的资源将按原样复制到输出目录的根目录中。

==注意== ：public目录只有一个，且在docs目录下，
默认结构：
```md
docs
├ public
│   └ videos
│       └ demo.mp4
└ .vitepress
    └ config.mts
```
引用方式：
```html
<video controls width="600" muted>  
    <source src="/videos/demo.mp4" type="video/mp4"
</video>
```