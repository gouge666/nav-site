/*
 * @Author: 苟培烜 3541037829@qq.com
 * @Date: 2023-10-12 21:59:30
 * @LastEditors: 苟培烜 3541037829@qq.com
 * @LastEditTime: 2023-10-22 11:11:25
 * @FilePath: \temp-nav-site\src\pages\home.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import SiteBlock, { SiteBlockProps } from '../components/siteBlock';
import Column from '../components/column';

const developProjects: SiteBlockProps[] = [
  // add your site block objects here
  {
    url: 'http://eediner.yourwater.cn',
    title: '熵能餐厅',
    description: '熵能餐厅是一家中餐厅，提供正宗的中国菜品。',
    image: 'http://eediner.yourwater.cn/favicon.ico',
  },
  {
    url: '#',
    title: '占位',
    description: '熵能餐厅是一家中餐厅，提供正宗的中国菜品。',
    image: '',
  },
  {
    url: '#',
    title: '占位',
    description: '熵能餐厅是一家中餐厅，提供正宗的中国菜品。',
    image: '',
  },
];

// 常用网站
const oftenUsedSites: SiteBlockProps[] = [
  {
    url: 'https://www.baidu.com',
    title: '百度',
    description: '百度一下，你就知道',
    image: 'https://www.baidu.com/favicon.ico',
  },
  {
    url: 'https://github.com/dashboard',
    title: 'Github',
    description: 'Github',
    image:
      'https://mojie-1311386424.cos.ap-nanjing.myqcloud.com/gouge/github_favicon.png',
  },
  {
    url: 'http://chat8.wxqef.cn/askai/1696599340944?channel=cs',
    title: 'AskAi',
    description: 'AskAi',
    image:
      'https://mojie-1311386424.cos.ap-nanjing.myqcloud.com/gouge/askai_favicon.png',
  },
  {
    url: 'https://www.bilibili.com/',
    title: '哔哩哔哩',
    description: '哔哩哔哩',
    image: 'https://www.bilibili.com/favicon.ico?v=1',
  },
  {
    url: 'https://leetcode.cn/studyplan/top-100-liked/',
    title: 'LeetCode',
    description: 'LeetCode',
    image: 'https://leetcode-cn.com/favicon.ico',
  },
  {
    url: 'https://zh-hans.react.dev/learn',
    title: 'React',
    description: 'React',
    image: 'https://zh-hans.reactjs.org/favicon.ico',
  },
  {
    url: 'https://cloud.tencent.com/login',
    title: '腾讯云',
    description: '腾讯云',
    image: 'https://cloudcache.tencent-cloud.com/qcloud/favicon.ico',
  },
  {
    url: 'http://101.42.224.203:8888/',
    title: '宝塔',
    description: '宝塔',
    image:
      'https://mojie-1311386424.cos.ap-nanjing.myqcloud.com/gouge/baota_favicon.ico',
  },
  {
    url: 'https://juejin.cn/',
    title: '掘金',
    description: '掘金',
    image: 'https://juejin.cn/favicon.ico',
  },
  {
    url: 'https://www.tailwindcss.cn/',
    title: 'Tailwindcss',
    description: 'Tailwindcss',
    image: 'https://www.tailwindcss.cn/favicons/favicon.ico?v=3',
  },
];

// charmai
const devCharmAi: SiteBlockProps[] = [
  {
    url: 'https://photoai.com',
    title: 'PhotoAi',
    description: 'PhotoAi',
    image: 'https://photoai.com/assets/logo.svg',
  },
  {
    url: 'http://charmdev.yourwater.cn',
    title: 'charmDev',
    description: 'charmDev',
    image: 'http://charmdev.yourwater.cn/assets/logo-262b8d5f.png',
  },
  {
    url: 'http://charmstable.yourwater.cn',
    title: 'charmstable',
    description: 'charmDev',
    image: 'http://charmstable.yourwater.cn/assets/logo-262b8d5f.png',
  },
];

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-slate-300 p-4">
        <div className="flex flex-wrap justify-center">
          <Column title="开发项目" siteBlockList={developProjects}></Column>
          <Column title="金子网站" siteBlockList={oftenUsedSites}></Column>
          <Column title="charm出海" siteBlockList={devCharmAi}></Column>
        </div>
      </div>
    </>
  );
}
