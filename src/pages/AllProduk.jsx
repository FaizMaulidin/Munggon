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
    <div className='font-kanit bg-darkerblue flex justify-center items-end pb-4 px-4 pt-32 w-full h-screen overflow-hidden'>
            <PageTitle title={"Dusun Munggon - Produk"}/>
        <Navbar/>
        <div className=' bg-darkerblue rounded-md w-full h-full overflow-hidden flex relative shadow-inner'>
            <div className=' flex overflow-x-scroll w-full h-full justify-start p-8 scroll-custom'>
                <div className='mr-4 bg-neutral-300 rounded-lg transition-all duration-200 shadow-boxproduk min-w-[30rem] h-full text-darkblue flex flex-col justify-center items-center pb-8 px-8'>
                    <h1 className='text-3xl font-extralight text-center'>Produk Lokal Dusun Munggon</h1>
                    <img className=' backdrop-saturate-200' width={280} src="./assets/produk/iconProduk.png" alt="" />
                    <p className=' font-light text-center'>Hasil dari kreativitas dan kearifan warga yang mengutamakan kualitas dalam setiap inspirasi.</p>
                    {/* <FontAwesomeIcon className='text-[11rem]' icon={faBasketShopping}/> */}
                </div>
                <div className=' h-full grid grid-cols-[repeat(4,20rem)] grid-rows-2 gap-8 px-4 grid-flow-col'>
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