import React from 'react'
import { Link } from 'react-router-dom'

const FilterFeed = (props) => {

    return (

        <div className="dropDown row">
            <ul>
                <a className='dropdown-trigger btn-flat' href='#' data-target='dropdown1'><h5>Sort Feed</h5></a>


                <ul id='dropdown1' className='dropdown-content grey'>
                    <li className="filter-posts" onClick={props.showFiltered} data-type="text">Texts </li>
                    <li onClick={props.showFiltered} data-type="image">Images</li>
                    <li onClick={props.showFiltered} data-type="video">Videos</li>
                    <li onClick={props.showFiltered} data-type="all">All</li>

                </ul>
            </ul>
        </div>)
}

export { FilterFeed }