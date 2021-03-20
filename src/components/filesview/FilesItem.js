import React from 'react'
import './filesItem.css'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
const FilesItem = () => {
    return (
        <div className='fileItem'>
        <a href="d" target="_blank" download>
            <div className="fileItem--left">
                <InsertDriveFileIcon />
                <p>bbbbb</p>
            </div>
            <div className="fileItem--right">
                <p>dddddd</p>
                <p>lllll</p>
            </div>
        </a>
    </div>
    )
}

export default FilesItem
