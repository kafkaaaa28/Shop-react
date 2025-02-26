import React from 'react';
const Tablecar = ({ Data, handleEdit, handleDeleteItem }) => {
  return (
    <>
      {Data.map((datas, index) => (
        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {datas.Namecar}
          </th>
          <td className="px-6 py-4">{datas.Colorcar}</td>
          <td className="px-6 py-4">{datas.Stockcar}</td>
          <td className="px-6 py-4">
            <button
              type="button"
              onClick={() => handleEdit(index)}
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteItem(index)}
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Tablecar;
