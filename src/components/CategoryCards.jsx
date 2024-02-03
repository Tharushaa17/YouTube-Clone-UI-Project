import React from 'react'
import {Link} from 'react-router-dom'

const CategoryCards = ({name, color, path}) => {
  return (
    <div className={`${color} rounded-md w-80 p-20`}>
        <Link to={path}>
            <h1 className='text-slate-50 font-semibold '>{name}</h1>
        </Link>
    </div>
  )
}

export default CategoryCards