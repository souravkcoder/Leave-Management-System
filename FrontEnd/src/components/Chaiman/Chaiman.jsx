import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "flowbite-react";
import capImage from "../images/cap.png";
import processingImage from "../images/color_processing.webp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const base_url = import.meta.env.VITE_API_URL;
function Chaiman() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const itemsPerPage = 5; // Number of items per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}/api/leave/evaluates/study/ApplicationToChaiman`, {
          params: {
            evaluation_type: "chairman approval",
            le_status: "Pending",
            factor: "CSE"
          },
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  // Logic to calculate which items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

  // Calculate total number of pages
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openStudyLeaveFormPage = (leaveId) => {
    navigate('/noc/studyLeaveDetailsToChariman', { state: { id: leaveId } });
  };

  const openOtherLeaveFormPage = (leaveId) => {
    navigate('/noc/otherLeaveDetailsForChairman', { state: { id: leaveId } });
  };

  const openStudyLeaveProgress = (leaveId) => {
    navigate('/noc/progressBar', { state: { id: leaveId } });
  };

  const openOtherLeaveProgress = (leaveId) => {
    navigate('/noc/OtherLeaveProgressBar', { state: { id: leaveId } });
  };

  return (
    <div className="overflow-y-hidden">
      <div className="min-h-screen flex justify-center bg-white max-md:px-5 mt-10 pb-10">
        <div className="flex flex-col w-full max-w-[1123px] max-md:mt-10 max-md:max-w-full">
          {/* Button Container */}
          <div className="flex justify-end mb-5">
            <button
              onClick={() => navigate('/noc/leaveApplication')}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              My Leave
            </button>
          </div>

          {/* Header */}
          <div className="self-center text-4xl font-bold leading-9 text-center text-black max-md:max-w-full">
            Applications For Chairman Approval
          </div>

          {/* Dropdown */}
          <div className="flex justify ml-5 gap-5 mt-9">
            <Dropdown label="All Leaves">
              <div className="flex gap-1 justify-between items-center p-2.5 tracking-normal bg-white">
                <Dropdown.Item>Study Leave</Dropdown.Item>
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-blue-500"
                  icon={faCheck}
                />
              </div>
              <div className="flex gap-1 justify-center items-center p-2.5 tracking-normal bg-white">
                <Dropdown.Item>Other Leaves</Dropdown.Item>
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-blue-500"
                  icon={faCheck}
                />
              </div>
            </Dropdown>
          </div>

          {/* Table */}
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 px-4 py-2">Categories</th>
                <th className="border border-gray-200 px-4 py-2">Leave Type Details</th>
                <th className="border border-gray-200 px-4 py-2">Progress Summary</th>
                <th className="border border-gray-200 px-4 py-2">See Applications</th>
                <th className="border border-gray-200 px-4 py-2">See Progress</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map(application => (
                <tr key={application.leave_id}>
                  <td className="border border-gray-200 px-4 py-2">
                    <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-white">
                      <img
                        className="w-5 h-5 rounded-full shadow-lg"
                        src={
                          ["Casual Leave", "Maternity Leave", "Medical Leave", "Earned Leave", "Special Disability Leave", "Duty Leave", "Leave on Deputation", "Quarantine Leave"].includes(application.Leave_Type_Details)
                            ? processingImage
                            : capImage
                        }
                        alt="Leave type image"
                      />
                      <div className="grow my-auto">
                        {["Casual Leave", "Maternity Leave", "Medical Leave", "Earned Leave", "Special Disability Leave", "Duty Leave", "Leave on Deputation", "Quarantine Leave"].includes(application.Leave_Type_Details)
                          ? "Other Leave Application"
                          : "Study Leave Application"}
                      </div>
                    </div>
                  </td>
                  <td className="border border-gray-200 px-4 py-2">{application.Leave_Type_Details}</td>
                  <td className="border border-gray-200 px-4 py-2">{"Chairman Approval (" + application.le_status + ")"}</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <div className="flex gap-2.5 justify-between items-center p-2.5 mt-2 tracking-normal bg-white">
                      <FontAwesomeIcon
                        className="cursor-pointer hover:text-blue-500"
                        icon={faPenToSquare}
                      />
                      <a
                        className="grow my-auto cursor-pointer hover:text-blue-500"
                        onClick={() => ["Casual Leave", "Maternity Leave", "Medical Leave", "Earned Leave", "Special Disability Leave", "Duty Leave", "Leave on Deputation", "Quarantine Leave"].includes(application.Leave_Type_Details) ? openOtherLeaveFormPage(application.leave_id) : openStudyLeaveFormPage(application.leave_id)}
                      >
                        Click here
                      </a>
                    </div>
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    <a
                      className="underline grow my-auto cursor-pointer hover:text-blue-500"
                      onClick={() => ["Casual Leave", "Maternity Leave", "Medical Leave", "Earned Leave", "Special Disability Leave", "Duty Leave", "Leave on Deputation", "Quarantine Leave"].includes(application.Leave_Type_Details) ? openOtherLeaveProgress(application.leave_id) : openStudyLeaveProgress(application.leave_id)}
                    >
                      Detailed progress
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination controls */}
          <div className="flex justify-center mt-5">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chaiman;
