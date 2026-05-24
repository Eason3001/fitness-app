import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TabBar } from './components/TabBar';
import { HomePage } from './pages/HomePage';
import { FoodPage } from './pages/FoodPage';
import { ExercisePage } from './pages/ExercisePage';
import { ProfilePage } from './pages/ProfilePage';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <TabBar />
      </div>
    </HashRouter>
  );
}
