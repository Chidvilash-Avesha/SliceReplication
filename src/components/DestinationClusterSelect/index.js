import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';

const DestinationSelectNative = props => {

    const {filterValue,handleDestinationClusterValue} = props
    const handleOnChange = (e) =>{
        handleDestinationClusterValue(true)
      }
  return (
    <div className='w-[512px] h-[58px] gap-6 opacity-[0px] px-0 py-1.5 ml-3 mb-8'>
        <InputLabel shrink-2 htmlFor="select-multiple-native" className='ml-7 -mb-3 bg-white w-[150px] '>
          Destination Cluster*
        </InputLabel>
        <select className='w-[512px] h-[52px] gap-6 border opacity-[0px]  px-6 py-4 gap-5 rounded-md border-solid border-[#2868F3] font-semibold  background: #ffffff cursor-pointer outline: none ml-3 font-baijamjuree tracking-wider leading-10' onChange={handleOnChange}  >
            <option value="" disabled selected hidden className='text-base font-bold leading-5 text-left color-[#12153E] font-family: Bai Jamjuree' >Select Destination Cluster</option>
            {filterValue!=='Worker-Cluster-1' && <option className='opacity-[0px] border-[0px] cursor-pointer outline: none ' >Worker-Cluster-1</option> }
            {filterValue!=='Worker-Cluster-2' && <option className='opacity-[0px] border-[0px] cursor-pointer outline: none ' >Worker-Cluster-2</option> }
            {filterValue!=='Worker-Cluster-3' && <option className='opacity-[0px] border-[0px] cursor-pointer outline: none ' >Worker-Cluster-3</option> }
        </select>
    </div>
  )
}
export default  DestinationSelectNative