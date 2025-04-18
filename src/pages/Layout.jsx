// 얘가 최상위임
// 얘가 있어야 됨 / 얘를 중심으로 자식요소들이 쭉쭉 내려옴
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
