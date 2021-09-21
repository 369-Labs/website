import { useEffect, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { useTheme } from "next-themes" 
import { GiPayMoney } from 'react-icons/gi'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { AiOutlineDatabase } from 'react-icons/ai'
import { MdEnhancedEncryption } from 'react-icons/md'
import CryptoAssets from "../components/Crypto";


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
      <div className="max-w-7xl mx-auto flex px-5 py-44 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <div className="mb-9 text-6xl items-center  font-bold xl:w-2/2  text-justify dark:text-white">
            <h1>
              Silicon
              Crypto<br/>
              
              Wallet. <CryptoAssets/>
            </h1>
          </div>
     
          <p className="xl:w-2/4 text-gray-300 items-center text-center">
            Never leave your crypto in the exchange wallets, this is a security flaw. Not your keys, Not your crypto. Make it yours after every successful Trading session.
          </p>
          <div className="pt-12 px-24">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg "
              href="https://github.com/r1/nine4-2/"
            >
              <span className="justify-center">Coming Soon</span>
            </a>
            </div>
        </div>
        <div className="xl:mr-44 sm:mr-0  mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
          
            src="images/iPhone-12-Mockup.png"
          ></img>
        </div>
      </div>
      </section>
      <section className="mx-auto pt-40">
        <div className="container px-5 mx-auto lg:px-24 ">
        <div class="text-center mb-20">
     
            <p class="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-100">
              Features
            </p>
            <div class="flex mt-3 justify-center">
              <div class="w-16 h-1 rounded-full bg-gray-100 inline-flex"></div>
            </div>
            </div>
          <div className="grid grid-cols-2 gap-16 mb-16 pt-9 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
            <div class="h-full flex flex-col items-center text-center dark:text-gray-300">
                    <AiOutlineDatabase color="lightgray" size={30}/>
                    <div class="w-full pt-5">
                    <h2 class="title-font font-medium text-xs dark:text-gray-100">
                        Exchange Friendly
                      </h2>
                    </div>
                  </div>
            </div>
            <div className="flex items-center justify-center">
            <div class="h-full flex flex-col items-center text-center dark:text-gray-300">
                    <RiSecurePaymentLine color="lightgray" size={30}/>
                    <div class="w-full pt-5">
                      <h2 class="title-font font-medium text-xs text-white dark:text-gray-100">
                        Secure
                      </h2>
                    </div>
                  </div>
            </div>
            <div className="flex items-center justify-center">
            <div class="h-full flex flex-col items-center text-center dark:text-gray-300">
                    <MdEnhancedEncryption color="lightgray" size={30}/>
                    <div class="w-full pt-5">
                      <h2 class="title-font font-medium text-xs  dark:text-gray-100">
                        No KYC
                      </h2>
                    </div>
                  </div>
            </div>
            <div className="flex items-center pb-9 justify-center">
            <div class="h-full flex flex-col items-center text-center dark:text-gray-300">
                    <GiPayMoney color="lightgray" size={30}/>
                    <div class="w-full pt-5">
                      <h2 class="title-font font-medium text-xs dark:text-gray-100">
                        Low Fee
                      </h2>
                    </div>
                  </div>
            </div>
          
          </div>
        </div>
      </section>
      <section className="relative pt-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-4xl Avenir font-semibold text-gray-200">
             Our Newsletter
            </h1>
  
            <input
              placeholder="Crypto@369Technologies.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-700 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md font-semibold bg-black hover:border-gray-100"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-gray-100 transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-black"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </> 
  )
}




// .typed-cursor.typed-cursor--blink {
//   animation: typedjsBlink 0.7s infinite;
//   -webkit-animation: typedjsBlink 0.7s infinite;
//   animation: typedjsBlink 0.7s infinite;
// }