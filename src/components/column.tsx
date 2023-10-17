/*
 * @Author: 苟培烜 3541037829@qq.com
 * @Date: 2023-10-17 15:35:36
 * @LastEditors: 苟培烜 3541037829@qq.com
 * @LastEditTime: 2023-10-17 16:04:15
 * @FilePath: \nav-site\src\components\column.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 栏目组件，一个栏目包含多个siteBlock组件

import React from 'react';
import SiteBlock from './siteBlock';

export default function Column({ title, siteBlockList }) {
  return (
    <>
      <div className=" w-screen">
        <div className="text-white text-3xl">{title}</div>
        <div className="flex flex-wrap justify-start">
          {siteBlockList.map((item, index) => (
            <SiteBlock key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
