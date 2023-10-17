/*
 * @Author: 苟培烜 3541037829@qq.com
 * @Date: 2023-10-12 21:59:30
 * @LastEditors: 苟培烜 3541037829@qq.com
 * @LastEditTime: 2023-10-17 16:56:28
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
];

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-slate-300 p-4">
        <div className="flex flex-wrap justify-center">
          <Column title="开发项目" siteBlockList={developProjects}></Column>
          <Column title="金子网站" siteBlockList={oftenUsedSites}></Column>
        </div>
      </div>
    </>
  );
}
