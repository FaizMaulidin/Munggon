import { useEffect, useRef, useState } from 'react';
import './App.css';
import FootNote from './components/FootNote';
import LandingPage from './components/LandingPage';
import Navbar from './components/navbar';
import PesanDukuh from './components/PesanDukuh';
import NewProduk from './components/NewProduk';
import NewKegiatan from './components/NewKegiatan';
import PageTitle from './components/PageTitle';
import { useLocation, useSearchParams } from 'react-router-dom';
import bahasa from './data/bahasa.json'
import english from './data/eng.json'
import AllContext from './components/LangContext';

function App() {
    const pesanDukuh = useRef()
    const foot = useRef()
    const [urlParams] = useSearchParams(0)
    const getUrlParams = urlParams.get('footnote')
    const [lang, setLang] = useState(bahasa)
    const location = useLocation()

    for(let i = 65; 65 <= i <= 90; i++){
        console.log(i)
    }

    useEffect(() => {
        if (getUrlParams){
            handleClick()
        }
        location.state && setLang(location.state)
    }, [getUrlParams])

    const handleClick = () => {
        foot.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    }
    
    return (
        <AllContext lang={lang} setLang={setLang}>
            <div className=' font-kanit leading-none overflow-x-hidden'>
                <PageTitle title={"Dusun Munggon - Home"}/>
                <div className="first h-screen overflow-hidden">
                    <Navbar handleClick={handleClick}/>
                    <LandingPage scroll={() => {
                        pesanDukuh.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest'
                        })
                    }}/>
                </div>
                <PesanDukuh refs={pesanDukuh}/>
                <NewProduk/>
                <NewKegiatan/>
                <FootNote refs={foot}/>
            </div>
        </AllContext>
    );
}

export default App;
