import React from 'react'
import './filesCard.css'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
const FilesCard = () => {
    return (
        <div>
             <div className='fileCard'>
            <div className="fileCard--top">
                <InsertDriveFileIcon style={{ fontSize: 130 }} />
            </div>

            <div className="fileCard--bottom">
                <p>aaaaa</p>
            </div>
        </div>
        </div>
    )
}

export default FilesCard
