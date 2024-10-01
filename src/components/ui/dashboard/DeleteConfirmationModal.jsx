import { useState, useEffect } from 'react'

export const DeleteConfirmationModal = () => {
  const handleDelete = (option) => {
    console.log(option);
  };
  
  return (
    <div className="h-full w-full flex-center fixed inset-0 bg-black-50/70 p-4">
      <div className="bg-white-50 rounded-md p-4">
        <h2 className="heading2">
          Are you sure ?
        </h2>
        <p className="mt-3 body-text">
          You want to delete this item. Once you delete it you can't recover it. Be careful.
        </p>
        
        <div className="my-3 flex items-center justify-end gap-2">
          <button onClick={handleDelete("confirm")} type="button">
            Confirm
          </button>
          <button onClick={handleDelete("cancel")} type="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

