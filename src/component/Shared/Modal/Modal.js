import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const Modal = ({p}) => {
    const{user} = useContext(AuthContext);
    const{pName , resalePrice } = p;
     console.log(p)
    const handleToast =()=>{
        toast.success('Successfully Booked Your Product')
    }
    return (
        <div>
   <input type="checkbox" id="confirm-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">Please Fill up the form for Book Products</h3>
    {/* USER NAME */}
    <input type="text" id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user?.displayName || 'not set yet'} disabled readOnly/>
    {/* USER EMAIL */}
    <input type="text" id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user?.email} disabled readOnly/>

    <input type="text" id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={pName} disabled readOnly/>

    <input type="text" id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={resalePrice} disabled readOnly/>

    <input type="text" id="phone" placeholder='Enter Phone number' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>


    <div className="modal-action">
      <label htmlFor="confirm-modal"><button onClick={handleToast} className='btn'>Submit</button></label>
  
    </div>
  </div>
</div>
    </div>
);
};


export default Modal;