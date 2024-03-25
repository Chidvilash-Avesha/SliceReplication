import './index.css'
import ClusterWarn from '../../assets/clusterWarn.svg'

function NamespaceCluster() {
    return (
        <div className='w-[490px] h-[380px] gap-[18px] opacity-[0px] mt-8 ml-4 mb-2'>
            <h1 className='w-[490px] h-[18px] gap-0 opacity-[0px]  font-bold leading-[17.5px] text-left text-[#828490] font-family: Bai Jamjuree' >Select Namespaces from source cluster</h1>
            <div className='w-[512px] h-[350px] gap-4 opacity-[0px] pt-4 pb-0 px-0 rounded-[8px_0px_0px_0px] border-2 border-[0px_0px] border-solid border-[#8FB7EA] mt-2 ' >
                <img src={ClusterWarn} alt= "notify" className='m-auto' />
            </div>
        </div>
    )
}

export default NamespaceCluster