import { useEffect, useState } from "react";
import Head from 'next/head'
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
      <div className="max-w-7xl mx-auto flex py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col mb-40 items-center">

          <div className=" text-5xl font-extrabold xl:w-2/2 tracking-tighter dark:text-gray-100 md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-7xl">
            <h1>
              Silicon crypto
              <br/>
              wallet. <CryptoAssets/>
            </h1>
          </div>
     
          <p className="pt-5 md:pt-6 lg:pt-6 xl:pt-9 2xl:pt-4 px-9 text-sm text-center dark:text-gray-100 lg:w-4/6 xl:w-3/5">
            The easiest way to transfer between decentralized and centralize Exchanges.
          </p>
          <div className="pt-80 md:pt-9 lg:pt-12 xl:pt-20 2xl:pt-9">
            <a className="inline-flex text-xs  items-center px-6 py-3 font-medium  text-black border-black bg-white dark:bg-black dark:text-gray-100 dark:border-gray-300 transition duration-500 ease-in-out transform bg-transparent border rounded-lg">
              Coming 2024
            </a>
            </div>
        </div>
        <div className="xl:mr-44 lg:mr-24 ">
          <img className="w-80" src="images/iPhone-12-Mockup.png"></img>
        </div>
      </div>
      </section>
      <section className="mx-auto pt-40">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="text-center mb-20">
            <p className="text-2xl tracking-tight leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black dark:text-gray-100">
              Features
            </p>
            <div className="flex mt-3 justify-center">
              <div className="w-16 h-1 rounded-full bg-black dark:bg-gray-100 inline-flex"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <div className="h-full flex flex-col items-center">
                <RiSecurePaymentLine className="text-black dark:text-gray-100" size={20}/>
                <div className="w-full pt-3">
                  <h2 className="text-xs text-black dark:text-gray-100">
                    Secure
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-full flex flex-col items-center">
                <MdEnhancedEncryption className="text-black dark:text-gray-100" size={20}/>
                <div className="w-full pt-3">
                  <h2 className="text-xs text-black dark:text-gray-100">
                    Anonymity
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-full flex flex-col items-center">
                <GiPayMoney className="text-black dark:text-gray-100" size={20}/>
                <div className="w-full pt-3">
                  <h2 className="text-xs text-black dark:text-gray-100">
                    Low Fee
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-full flex flex-col items-center">
                <AiOutlineDatabase className="text-black dark:text-gray-100" size={20}/>
                <div className="w-full pt-3">
                  <h2 className="text-xs text-black dark:text-gray-100">
                    Multichain
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-40 mb-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="text-2xl font-bold tracking-tight text-black dark:text-gray-100">
             Subscribe for updates
            </h1>
  
            <input
              placeholder="email"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-black w-1/4 sm:w-1/4 pr-2 pl-2 py-1 mt-9 rounded-md font-semibold"
            ></input>{" "}
            <a
              className="inline-flex items-center px-4 py-1 mt-2 ml-2 font-medium transition duration-500 ease-in-out transform bg-transparent border bg-black text-white dark:border-gray-300 dark:text-gray-300 rounded-lg"
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