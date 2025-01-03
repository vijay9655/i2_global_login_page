import React from 'react';
import Postform from './Postform';
import { ADD_NOTES } from '../../../reducers/userReducers';

const Notes = ({ isOpen, onClose, config,handleChange,content,dispatch ,onSave,task}) => {

  return (
    // <div
    //   id="medium-modal"
    //   tabIndex="-1"
    //   className={`fixed top-0 left-0 right-0 z-50 ${
    //     isOpen ? 'flex' : 'hidden'
    //   } items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    // >
    //   <div className="relative w-full max-w-lg max-h-full">
    //     {/* Modal content */}
    //     <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
    //       {/* Modal header */}
    //       <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
    //         <h3 className="text-xl font-medium text-gray-900 dark:text-white">
    //           Default modal
    //         </h3>
    //         <button
    //           type="button"
    //           className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
    //           onClick={onClose}
    //         >
    //           <svg
    //             className="w-3 h-3"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 14 14"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    //             />
    //           </svg>
    //           <span className="sr-only">Close modal</span>
    //         </button>
    //       </div>
    //       {/* Modal body */}
    //       <div className="p-4 md:p-5 space-y-4">
    //         <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    //           With less than a month to go before the European Union enacts new consumer
    //           privacy laws for its citizens, companies around the world are updating their
    //           terms of service agreements to comply.
    //         </p>
    //         <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    //           The European Union’s General Data Protection Regulation (G.D.P.R.) goes into
    //           effect on May 25 and is meant to ensure a common set of data rights in the
    //           European Union. It requires organizations to notify users as soon as possible
    //           of high-risk data breaches that could personally affect them.
    //         </p>
    //       </div>
    //       {/* Modal footer */}
    //       <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
    //         <button
    //           onClick={onSave}
    //           type="button"
    //           className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    //         >
    //           Save
    //         </button>
    //         &nbsp;
    //         &nbsp;
    //         &nbsp;
    //         &nbsp;
    //         <button
    //           onClick={onClose}
    //           type="button"
    //         //   className=" bg-red dark:bg-red-600 hover:bg-red-800 py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-red rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  dark:hover:bg-red-700 dark:focus:ring-red-800"
    //         className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
           
    //        >
    //           Delete
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      id="medium-modal"
      tabIndex="-1"
      className={`fixed top-0 left-0 right-0 z-50 ${
        isOpen ? 'flex' : 'hidden'
      } items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-lg max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Default modal
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4">
          <input  value={task} onChange={(e)=>handleChange(e,"task")} type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
         <Postform handleChange={handleChange} content={content}/>
          </div>
          {/* Modal footer */}
          <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={()=>onSave(1,"Add")}
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Save
            </button>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <button
              onClick={onClose}
              type="button"
            //   className=" bg-red dark:bg-red-600 hover:bg-red-800 py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-red rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  dark:hover:bg-red-700 dark:focus:ring-red-800"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
           
           >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
