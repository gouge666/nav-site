/*
 * @Author: 苟培烜 3541037829@qq.com
 * @Date: 2023-10-17 14:53:14
 * @LastEditors: 苟培烜 3541037829@qq.com
 * @LastEditTime: 2023-10-17 17:04:28
 * @FilePath: \nav-site\src\components\siteBlock.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';

export interface SiteBlockProps {
  url: string;
  title: string;
  description: string;
  image: string;
}

export default function SiteBlock({
  url,
  title,
  description,
  image,
}: SiteBlockProps) {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className=" bg-slate-100 w-20 h-25 m-5 ml-0 box-border rounded-lg shadow-lg flex flex-col justify-center items-center">
          <img
            src={image == '' ? '/favicon.ico' : image}
            alt=""
            className="w-20 h-20"
          />
          <span className=" text-xs h-5">{title}</span>
        </div>
      </a>
    </>
  );
}
