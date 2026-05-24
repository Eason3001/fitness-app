import { useLocation, useNavigate } from 'react-router-dom';

const tabs = [
  { path: '/', label: '首页', icon: '📊' },
  { path: '/food', label: '饮食', icon: '🍽️' },
  { path: '/exercise', label: '运动', icon: '🏃' },
  { path: '/profile', label: '我的', icon: '👤' },
];

export function TabBar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex safe-bottom z-50">
      {tabs.map(tab => {
        const active = location.pathname === tab.path;
        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`flex flex-col items-center py-2 flex-1 text-xs transition-colors ${active ? 'text-indigo-600' : 'text-gray-400'}`}
          >
            <span className="text-xl mb-0.5">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
