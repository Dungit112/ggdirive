import React from 'react'
import FilesCard from './FilesCard'
import FilesItem from './FilesItem'
import './filesView.css'

const FilesView = () => {
    return (
        <div className='fileView'>
        <div className="fileView__row">
           <FilesCard/>
        </div>
        <div className="fileView__titles">
            <div className="fileView__titles--left">
                <p>Name</p>
            </div>
            <div className="fileView__titles--right">
                <p>Last modified</p>
                <p>File size</p>
            </div>
        </div>
       <FilesItem/>
    </div>
    )
}

export default FilesView
