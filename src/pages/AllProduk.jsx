import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import PageTitle from '../components/PageTitle'
import ProdukPage from '../components/ProdukPage'
import { useSearchParams } from 'react-router-dom'
import data from '../data/produk.json'
import ProdukSelect from '../components/ProdukSelect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const AllProduk = () => {
    const [prodID, setProdID] = useState(0)
    const [urlParams] = useSearchParams()
    const getUrlParams = urlParams.get('id')

    useEffect(() => {
        if (getUrlParams >= 0) {
            setProdID(getUrlParams)
        }
    }, [])

    const handleClick = (id, e) => {
        setProdID(id)
    }

  return (
    <div className='font-kanit bg-darkerblue flex justify-center items-end pb-4 px-4 pt-32 w-full h-screen overflow-hidden max-[480px]:overflow-y-scroll max-[480px]:h-fit max-[480px]:pt-36'>
        <PageTitle title={"Dusun Munggon - Produk"}/>
        <Navbar/>
        <div className=' bg-darkerblue rounded-md w-full h-full overflow-hidden flex relative shadow-inner'>
            <div className=' flex overflow-x-scroll w-full h-full justify-start p-8 scroll-custom max-[480px]:flex-col max-[480px]:p-0 max-[480px]:gap-6 max-[480px]:overflow-visible '>
                <div className='mr-4 bg-neutral-300 rounded-lg transition-all duration-200 shadow-boxproduk min-w-[30rem] h-full text-darkblue flex flex-col justify-center items-center pb-8 px-8 max-[480px]:min-w-full max-[480px]:py-8'>
                    <h1 className='text-3xl font-extralight text-center max-[480px]:text-2xl'>Produk Lokal Dusun Munggon</h1>
                    <img className=' backdrop-saturate-200 w-[280px] max-[480px]:w-48' src="./assets/produk/iconProduk.png" alt="" />
                    <p className=' font-light text-center'>Hasil dari kreativitas dan kearifan warga yang mengutamakan kualitas dalam setiap inspirasi.</p>
                </div>
                <div className=' h-full grid grid-cols-[repeat(4,20rem)] grid-rows-2 gap-8 px-4 grid-flow-col max-[480px]:grid-cols-2 max-[480px]:grid-rows-[repeat(4,10rem)] max-[480px]:px-0'>
                    {data.map((e, i) => {
                        return <ProdukSelect handleClick={handleClick} data={e} key={i}/>
                    })}
                </div>
            </div>

        </div>
        {prodID > 0 ? <ProdukPage data={data[prodID-1]} handleClick={handleClick}/> : null}
    </div>
  )
}

export default AllProduk