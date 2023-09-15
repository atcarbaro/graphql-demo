import React from 'react'

export default function Loading() {
  return (
    <div className='container mx-auto px-4 py-4 flex justify-center items-center'>
        <svg className="animate-spin h-5 w-5 mr-3 fill-blue-500" viewBox="0 0 24 24">
        </svg>
        Processing...
    </div>
  )
}
