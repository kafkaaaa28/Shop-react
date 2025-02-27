import React, { useState } from 'react';
import { Datacar } from '../../data/Datacar';
import Tablecar from './Tablecar';
const Carstok = () => {
  const [Open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [Alert, setAlert] = useState(false);
  const [AlertDelete, setAlertDelete] = useState(false);
  const [Data, setData] = useState(Datacar);

  const [Namecar, setNamecar] = useState('');
  const [Colorcar, setColorcar] = useState('');
  const [Stockcar, setStockcar] = useState('');

  const Alertopen = () => {
    setAlert(!Alert);
  };
  const AlertDeleteopen = () => {
    setAlertDelete(!AlertDelete);
    let massage = document.getElementById('MassageDelete');
    massage.innerHTML = `are you sure you want to delete ${Namecar} ?`;
  };
  const Addcar = () => {
    let messageElement = document.getElementById('message');
    if (Namecar.trim() !== '' && Colorcar.trim() !== '' && Stockcar.trim() !== '') {
      if (editIndex !== null) {
        const updatedData = [...Data];
        updatedData[editIndex] = { Namecar, Colorcar, Stockcar };
        setData(updatedData);
        messageElement.textContent = `you edited ${Stockcar} Units of ${Colorcar} ${Namecar}  Cars`;
      } else {
        setData([...Data, { Namecar, Colorcar, Stockcar }]);
        messageElement.textContent = `You added ${Stockcar} units of ${Colorcar} ${Namecar} Cars`;
      }
      Alertopen();
      setNamecar('');
      setColorcar('');
      setStockcar('');
      setOpen(false);
      setEditIndex(null);
    } else {
      Alertopen();
      messageElement.textContent = `Please fill in all fields`;
    }
  };

  const handleEdit = (index) => {
    const datas = Data[index];
    setNamecar(datas.Namecar);
    setColorcar(datas.Colorcar);
    setStockcar(datas.Stockcar);
    setEditIndex(index);
    setOpen(true);
  };

  const handleDeleteItem = (index) => {
    setEditIndex(index);
    AlertDeleteopen();
  };

  const confirmDelete = () => {
    if (editIndex !== null) {
      const updatedData = Data.filter((_, i) => i !== editIndex);
      setData(updatedData);
      AlertDeleteopen();
    }
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center">
        <div className="bg-white w-[90%] dark:bg-gray-900">
          <button
            onClick={() => setOpen(true)}
            type="button"
            className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 ml-3 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Cars
          </button>
          <div className="relative w- overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <Tablecar Data={Data} handleDeleteItem={handleDeleteItem} handleEdit={handleEdit} />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Add Cars */}
      {Open && (
        <div id="add-car-modal" className={` overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50`}>
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{editIndex !== null ? 'Edit Cars' : 'Add Cars'}</h3>
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <form className="max-w-sm mx-auto">
                  <div className="mb-5">
                    <label htmlFor="namecar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      value={Namecar}
                      onChange={(e) => setNamecar(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="colorcar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Color
                    </label>
                    <input
                      value={Colorcar}
                      onChange={(e) => setColorcar(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="stockcar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Stock
                    </label>
                    <input
                      type="number"
                      onChange={(e) => setStockcar(e.target.value)}
                      value={Stockcar}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <button
                    onClick={Addcar}
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {editIndex !== null ? 'Upadate' : 'Add'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Alert */}
      <div id="alert-modal" className={`overflow-y-auto overflow-x-hidden ${Alert ? 'block' : 'hidden'} fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50`}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Alert</h3>
              <button
                onClick={Alertopen}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p id="message" className="dark:text-white"></p>
            </div>
          </div>
        </div>
      </div>
      {/* delete modal */}
      <div id="alert-modal" className={`overflow-y-auto overflow-x-hidden ${AlertDelete ? 'block' : 'hidden'} fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50`}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Alert</h3>
              <button
                onClick={AlertDeleteopen}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p id="MassageDelete" className="dark:text-white"></p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={confirmDelete}
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carstok;
