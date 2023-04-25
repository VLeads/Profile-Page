import './App.css';
import LeftSidebar from './components/LeftSidebar';
import ProfilePage from './pages/profile/ProfilePage';

function App() {

  return (
    <>
      <div className='profile-grid'>
        <LeftSidebar />
        <ProfilePage />
      </div>
    </>
  );
}

export default App;
