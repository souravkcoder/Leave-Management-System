import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPenToSquare, faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'flowbite-react';
import capImage from '../images/cap.png';
import processingImage from '../images/color_processing.webp';




function PreviousLeave() {
  const openFormPage = () => {
    // Logic to open the form page
    console.log("Opening form page...");
  };
  return (
    <div className='overflow-y-hidden'>
      <div className="h-screen flex justify-center items-center  bg-white max-md:px-5">
        <div className=" flex flex-col w-full max-w-[1123px] max-md:mt-10 max-md:max-w-full">

          {/* code for header */}
          <div className="self-center text-4xl font-bold leading-9 text-center text-black max-md:max-w-full">
            Previous Application Details
          </div>


          {/* code for dropdown */}
          <div className='flex justify-start mt-6'>

            <Dropdown label="All Leaves" dismissOnClick={false}>
              <div className="flex gap-1 justify-between items-center p-2.5 tracking-normal bg-white">
                <Dropdown.Item>Study Leave</Dropdown.Item>
                <FontAwesomeIcon className='cursor-pointer hover:text-blue-500' icon={faCheck} />
              </div>
              <div className="flex gap-1 justify-center items-center p-2.5 tracking-normal bg-white">
                <Dropdown.Item>Other Leaves</Dropdown.Item>
                <FontAwesomeIcon className='cursor-pointer hover:text-blue-500' icon={faCheck} />
              </div>
            </Dropdown>

          </div>



          {/* code for checkboxes */}
          <div className='flex justify-end gap-5 mt-9'>

            <div class="flex items-center">
              <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
            </div>
            <div class="flex items-center">
              <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pending </label>
            </div>
            <div class="flex items-center">
              <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active </label>
            </div>
            <div class="flex items-center">
              <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rejected </label>
            </div>
          </div>


          {/* code for table */}
          <div className="flex mt-10 gap-0 px-3 py-2.5  text-sm max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 text-gray-700 whitespace-nowrap">
              <div className="justify-center items-start py-1.5 pr-16 pl-2.5 text-xl font-bold leading-8 text-black bg-gray-200 max-md:pr-5">
                Categories
              </div>
              <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-white">
                <img className="w-5 h-5 rounded-full shadow-lg" src={capImage} alt="Cap image" />
                <div className="grow my-auto">Study Leave Application</div>
              </div>
              <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-zinc-200">
                <img className="w-5 h-5 rounded-full shadow-lg" src={processingImage} alt="Cap image" />
                <div className="flex-auto my-auto">Others</div>
              </div>
              <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-white">
                <img className="w-5 h-5 rounded-full shadow-lg" src={processingImage} alt="Cap image" />
                <div className="grow my-auto">Sick Leave Application</div>
              </div>
            </div>
            <div className="flex flex-col flex-1 text-gray-700 whitespace-nowrap">
              <div className="justify-center items-start py-1.5 pr-16 pl-2.5 text-xl font-bold leading-8 text-black bg-gray-200 max-md:pr-5">
                Leave Type Details
              </div>
              <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-white">
                <div className="grow my-auto">Study Leave Application</div>
              </div>
              <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-zinc-200">
                <div className="flex-auto my-auto">Others</div>
              </div>
              <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-white">
                <div className="grow my-auto">Sick Leave Application</div>
              </div>
            </div>
            <div className="flex flex-col flex-1 text-gray-700 whitespace-nowrap">
              <div className="justify-center items-start py-1.5 pr-16 pl-2.5 text-xl font-bold leading-8 text-black bg-gray-200 max-md:pr-5">
                Progress Summery
              </div>
              <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-white">
                <div className="grow my-auto">Pending</div>
              </div>
              <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-zinc-200">
                <div className="flex-auto my-auto">Rejected</div>
              </div>
              <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-white">
                <div className="grow my-auto">Pending</div>
              </div>
            </div>
            <div className="flex flex-col flex-1 text-gray-700 whitespace-nowrap">
              <div className="justify-center items-start py-1.5 pr-12 pl-2 text-xl font-bold leading-8 text-black bg-gray-200 max-md:pr-5">
                See Applications
              </div>
              <div className="flex gap-2.5 justify-between items-center p-2.5 mt-2 tracking-normal bg-white">
                <FontAwesomeIcon className='cursor-pointer hover:text-blue-500' icon={faPenToSquare} />
                <a className=" grow my-auto cursor-pointer hover:text-blue-500" onClick={openFormPage}>Click here</a>
              </div>
              <div className="flex gap-2.5 justify-between items-center p-2.5 mt-2 tracking-normal bg-white">
                <FontAwesomeIcon className='cursor-pointer hover:text-blue-500' icon={faPenToSquare} />
                <a className=" grow my-auto cursor-pointer hover:text-blue-500" onClick={openFormPage}>Click here</a>
              </div>
              <div className="flex gap-2.5 justify-between items-center p-2.5 mt-2 tracking-normal bg-white">
                <FontAwesomeIcon className='cursor-pointer hover:text-blue-500' icon={faPenToSquare} />
                <a className=" grow my-auto cursor-pointer hover:text-blue-500" onClick={openFormPage}>Click here</a>
              </div>
            </div>
            <div className="flex flex-col flex-1 text-gray-700 whitespace-nowrap">
              <div className="justify-center items-start py-1.5 pr-16 pl-2.5 text-xl font-bold leading-8 text-black bg-gray-200 max-md:pr-5">
                See Progress
              </div>
              <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-white">
                <div className="underline grow my-auto cursor-pointer hover:text-blue-500" onClick={openFormPage}>Detailed progress</div>
              </div>
              <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-white">
                <div className="underline grow my-auto cursor-pointer hover:text-blue-500" onClick={openFormPage}>Detailed progress</div>
              </div>
              <div className="flex gap-2.5 justify-between p-2.5 mt-2 tracking-normal bg-white">
                <div className="underline grow my-auto cursor-pointer hover:text-blue-500" onClick={openFormPage}>Detailed progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviousLeave;
