import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';

const SourceSelectNative =  props => {

  const {sourceClusterSelected,handleSourceClustervalue} = props
  const handleOnChange = (e) =>{
    sourceClusterSelected(true)
    handleSourceClustervalue(e.target.value)
    console.log(e.target.value)
  } 

  return (
    <div className='w-[512px] h-[58px] gap-6 opacity-[0px] px-0 py-1.5'>
        <InputLabel shrink-2 htmlFor="select-multiple-native" className='ml-8 -mb-3 bg-white w-[120px]'>
          Source Cluster*
        </InputLabel>
        <select className='w-[512px] h-[52px] gap-2.5 border opacity-[0px] text-[#12153E] font-semibold px-6 py-4 rounded-md border-solid border-[#2868F3] font-baijamjuree tracking-wider leading-10 background: #ffffff cursor-pointer outline: none ml-3 ' onChange={handleOnChange} >
            <option value="" disabled selected hidden className='text-base font-bold leading-5 text-left text-[#12153E]' >Select Source Cluster</option>
            <option className='w-[512px] h-[44px] gap-2 opacity-[0px] border-[0px] cursor-pointer outline: none mt-3 mb-3' >Worker-Cluster-1</option>
            <option className='w-[512px] h-[44px] gap-2 opacity-[0px] border-[0px] cursor-pointer outline: none' >Worker-Cluster-2</option>
            <option className='w-[512px] h-[44px] gap-2 opacity-[0px] border-[0px] cursor-pointer outline: none' >Worker-Cluster-3</option>
        </select>
    </div>
  );
}

export default SourceSelectNative