/*
 * @Author: 苟培烜 3541037829@qq.com
 * @Date: 2023-10-12 22:00:13
 * @LastEditors: 苟培烜 3541037829@qq.com
 * @LastEditTime: 2023-10-12 22:01:15
 * @FilePath: \temp-nav-site\src\route\router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Route } from 'react-router-dom';
import Home from '../pages/home';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
];

export default routes;