import React from 'react'

const page = ({params}) => {
    if(params.features.length === 3){
        return( <div className='text-center'>
            {params.features[2]}
        </div>)
    }
    if(params.features.length === 2){
        return( <div className='text-center'>
            {params.features[1]}
        </div>)
    }
  return (
    <div>
      this is features in categories ...........
    </div>
  )
}

export default page;
