import React from 'react'
import Modal from '@material-ui/core/Modal';
import './newfile.css'
import AddIcon from '@material-ui/icons/Add';
const NewFile = () => {
    return (
        <div className='newFile'>
        <div className="newFile__container" >
            <AddIcon fontSize='large' />
            <p>New</p>
        </div>

        <Modal
           
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div >
                <p>Select files you want to upload!</p>
                
                 
                        <p>Uploading...</p>
                
                            <>
                                <input type="file"  />
                                <button>Upload</button>
                            </>
                      
                
            </div>
        </Modal>
    </div>
    )
}

export default NewFile
