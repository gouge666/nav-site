/*
 * @Author: 苟培烜 3541037829@qq.com
 * @Date: 2023-10-17 14:20:34
 * @LastEditors: 苟培烜 3541037829@qq.com
 * @LastEditTime: 2023-10-17 16:05:55
 * @FilePath: \nav-site\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import routes from './route';
import './App.css';

function App() {
  return (
    <Router className="p-4">
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
