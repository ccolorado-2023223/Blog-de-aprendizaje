import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;