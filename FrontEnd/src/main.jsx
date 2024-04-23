import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import LeaveApplication from './components/LeaveApplication/LeaveApplication.jsx';
import Notices from './components/Notices/Notices.jsx';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import OtherLeaveForm from './components/OtherLeaveForm/OtherLeaveForm.jsx';
import PreviousLeave from './components/PreviousLeave/PreviousLeave.jsx';
import ProgressBar from './components/ProgressBar/ProgressBar';
import StudyLeaveForm from './components/StudyLeaveForm/StudyLeaveForm.jsx';
import StudyLeaveDetails from './components/StudyLeaveDetails/StudyLeaveDetails.jsx';

const Main = () => {
  // State to store userID
  const [userID, setUserID] = useState("jokjki0oemkJKJL4565"); // Initialize with null or default userID

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      children: [
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/forgotPassword',
          element: <ForgotPassword></ForgotPassword>,
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>,
        },
        {
          path: '/noc/otherLeaveForm',
          element: <OtherLeaveForm userID={userID}></OtherLeaveForm>,
        },
        {
          path: '/noc/leaveApplication',
          element: <LeaveApplication></LeaveApplication>,
        },
        {
          path: '/previousLeave',
          element: <PreviousLeave></PreviousLeave>,
        },
        {
          path: '/notices',
          element: <Notices></Notices>,
        },
        {
          path: '/noc/progressBar',
          element: <ProgressBar></ProgressBar>
        },
        {
          path: '/noc/studyLeaveForm',
          element: <StudyLeaveForm></StudyLeaveForm>
        },
        {
          path: '/study-leave-details',
          element: <StudyLeaveDetails ></StudyLeaveDetails>,
        }
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
