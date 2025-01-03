import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  
} from 'react-router-dom';


import AuthProvider from './context/AuthContext';
import MainLayouts from './layouts/MainLayouts';



import { patientLoader } from './pages/PatientPage';
import HomePage from './pages/HomePage';
import PatientsPage from './pages/PatientsPage';
import PatientPage from './pages/PatientPage';
import AddPatientPage from './pages/AddPatientPage';
import DrugPage from './pages/DrugPage';
import AppointmentSchedulePage from './pages/AppointmentSchedulePage';
import DoctorsListingPage from './pages/DoctorsListingPage';
import SchedulesPage from './pages/SchedulesPage';
import PageNotFound from './pages/PageNotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './context/ProtectedRoute';


// const ProtectedRoute = ({ element }) => {
//   const { newToken } = useContext(AuthContext);
//   const token = newToken || localStorage.getItem('token');
//   console.log('token :', token);
//   console.log('localstroage:', localStorage.getItem('token'));
//   return token ? element : <Navigate to="/login" replace />;
// };

// const isTokenValid = (token) => {
//   if (!token) return false;
//   const decoded = JSON.parse(atob(token.split('.')[1]));
//   return decoded.exp * 1000 > Date.now(); // Check if token is expired
// };



const router = createBrowserRouter(
  createRoutesFromElements([
    <Route key="main" path="/" element={<ProtectedRoute element={<MainLayouts/>}/>}>
      <Route index element={<ProtectedRoute element={<HomePage />} />} />
      <Route path="patient/all" element={<ProtectedRoute element={<PatientsPage />} />} />
      <Route path="patient/:id" element={<ProtectedRoute element={<PatientPage />} loader={patientLoader} />} />
      <Route path="patient/add" element={<ProtectedRoute element={<AddPatientPage />} />} />
      <Route path="drug/all" element={<ProtectedRoute element={<DrugPage />} />} />
      <Route path="doctor/appointment" element={<ProtectedRoute element={<AppointmentSchedulePage />} />} />
      <Route path="doctor/doctorslist" element={<ProtectedRoute element={<DoctorsListingPage />} />} />
      <Route path="doctor/schedules" element={<ProtectedRoute element={<SchedulesPage />} />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
    <Route key="login" path="/login" element={<LoginPage />} />,
    <Route key="register" path="/register" element={<RegisterPage />} />,
  ])
);

const App = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default App;
