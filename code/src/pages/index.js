import { useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useTheme } from "next-themes" 
import { IoSpeedometerOutline } from 'react-icons/io5'
import { SiWebauthn } from 'react-icons/si'
import { GiPayMoney } from 'react-icons/gi'
import { FcCancel, FcCurrencyExchange } from 'react-icons/fc'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { AiOutlineDatabase } from 'react-icons/ai'
import { MdEnhancedEncryption } from 'react-icons/md'



import Bitcoin from '../../public/images/crypto/bitcoinlogo.png'
import Ethereum from '../../public/images/crypto/ethereumlogo.png'
import Tether from '../../public/images/crypto/tetherlogo.png'
import XRP from '../../public/images/crypto/xrplogo.png'


export default function Home() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
};

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 font-bold dark:text-gray-100">
            Trade <br/> Crypto <br/> Whenever.
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-300 text-lg">
           Trade your favorite Crypto between Exchanges with ease thanks to our True Native Design Desktop, and Mobile Wallet.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900 dark:bg-white dark:text-black"
              href="https://github.com/r1/nine4-2/"
            >
              <span className="justify-center">About us</span>
            </a>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
          
            src="images/crypto/ledgerLogo.png"
          ></img>
        </div>
      </div>
      </section>
      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
        <div class="text-center mb-20">
            <h2 class="sm:text-5xl font-medium title-font text-gray-100 mb-4">
              Wallet
            </h2>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
              Key Features
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-gray-100 inline-flex"></div>
            </div>
            </div>
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
            <div class="h-full flex flex-col items-center text-center dark:text-gray-300">
                    <AiOutlineDatabase color="lightgray" size={30}/>
                    <div class="w-full pt-5">
                    <h2 class="title-font font-medium text-sm dark:text-gray-100">
                        Multichain
                      </h2>
                    </div>
                  </div>
            </div>
            <div className="flex items-center justify-center">
            <div class="h-full flex flex-col items-center text-center dark:text-gray-300">
                    <RiSecurePaymentLine color="lightgray" size={30}/>
                    <div class="w-full pt-5">
                      <h2 class="title-font font-medium text-sm text-white dark:text-gray-100">
                        Secure
                      </h2>
                    </div>
                  </div>
            </div>
            <div className="flex items-center justify-center">
            <div class="h-full flex flex-col items-center text-center dark:text-gray-300">
                    <MdEnhancedEncryption color="lightgray" size={30}/>
                    <div class="w-full pt-5">
                      <h2 class="title-font font-medium text-sm  dark:text-gray-100">
                        No KYC
                      </h2>
                    </div>
                  </div>
            </div>
            <div className="flex items-center justify-center">
            <div class="h-full flex flex-col items-center text-center dark:text-gray-300">
                    <GiPayMoney color="lightgray" size={30}/>
                    <div class="w-full pt-5">
                      <h2 class="title-font font-medium text-sm dark:text-gray-100">
                        Low Fee
                      </h2>
                    </div>
                  </div>
            </div>
            <div className="flex items-center justify-center">
      
            </div>
          </div>
        </div>
      </section>

  <section>
  <div class="container px-5 mx-auto">
          <div class=" mb-40">
            <div className="grr max-w-7xl pt-20 pb-40 mx-auto text-center">
              <h1 className=" text-2xl Avenir font-semibold dark:text-white">
                Supported Cryptocurrencies
              </h1>  
            </div>
          </div>
        </div>
  </section>


     

      
      
    </> 
  )
}
