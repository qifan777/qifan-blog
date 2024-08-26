import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { readmorePlugin } from 'vuepress-plugin-readmore-popular-next'
import { redirectPlugin } from '@vuepress/plugin-redirect'

export default defineUserConfig({
  base: '/blog/',
  dest: 'src/.vuepress/blog',
  lang: "zh-CN",
  title: "起凡Code闲聊",
  description: "起凡Code闲聊",
  theme,
  plugins: [
    redirectPlugin(),
    readmorePlugin({
      // 已申请的博客 ID
      blogId: '35697-0711444927073-432',
      // 已申请的微信公众号名称
      name: '起凡code闲聊',
      // 已申请的微信公众号回复关键词
      keyword: 'AB2331',                    
      // 已申请的微信公众号二维码图片
      qrcode: '/blog/qrcode.jpg',
      // 文章内容的 JS 选择器，若使用的不是官方默认主题，则需要根据第三方的主题来设置
      selector: 'div.theme-hope-content',
      // 自定义的 JS 资源链接，可用于 CDN 加速
      libUrl: '/blog/readmore.js',
      // 自定义的 CSS 资源链接，可用于适配不同风格的博客
      cssUrl: '/blog/readmore.css',
      // 文章排除添加引流工具的 URL 规则，支持使用路径、通配符、正则表达式的匹配规则
      excludes: { strExp: [], regExp: ["/project/uni-ai/*/**"] },
      // 是否反转 URL 排除规则的配置，即只有符合排除规则的文章才会添加引流工具
      reverse: false,
      // 是否添加微信公众号引流工具到移动端页面
      allowMobile: false,
      // 文章内容的预览高度(例如 300)
      height: 'auto',
      // 文章解锁后凭证的有效天数
      expires: 365,
      // 定时校验凭证有效性的时间间隔（秒）
      interval: 60,
      // 等待 DOM 节点加载完成的时间（毫秒），如果部分页面的引流功能无法生效，可适当增大此参数的值
      waitDomMills: 3000,
    })
  ]
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
