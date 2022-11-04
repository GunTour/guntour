import { CardProduct } from 'components/CardProduct';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import items from "assets/items-bg.svg";
import React from 'react'
import { WithRouter } from "utils/Navigation";

const HomePage = () => {
  return (
    <Layout>
      <div>
        <Hero/>
      </div>
      <div className="font-bold mt-20 mb-20 text-2xl ml-32">FIND <span className="text-primary">POPULAR</span>  RENTAL PRODUCTS
      </div>
      <div className="grid grid-cols-4 gap-4 ml-16">
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
      </div>
      <div className="ml-96 mt-10 mb-10">
        <button className="btn btn-outline ml-96">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        </button>
        <button className="btn btn-outline ml-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </button>
      </div>
      
      <div className="bg-[#112120] h-96">
        <div className="pt-40">
        <div class="flex ...">
          <div class="flex-auto w-32">
          <div className="font-bold text-3xl text-white">THE MOST <span className='text-primary'>BEAUTIFUL</span>
          <div>CLIMBING ON MOUNTAIN</div>
        </div>
        <div className='text-sm text-white'>The following is real-time climber data and
          <div>a comparison of visitors to Mount Gede.</div>
        </div>
          </div>
  
          <div class="flex-auto w-64">
            03
          </div>
        </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <figure className="px-3 pt-3">
        <img src={items} alt="items" className="rounded-xl w-72 h-48" />
      </figure>
    <div className=''>
      <div className="text-3xl font-bold">
        <div>COMMUNITY SERVICE </div>
      <div>
        <span className='text-primary'>IS CALLING</span>, NO NEED 
        <div>FOR STALLING</div>
      </div>
      </div>

      <div>
      <p className="py-6">Want more fun camping, join our 
      <div>community to get friends to camp</div> together feel the sensation</p>
      </div>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </Layout>
  )
}

export default WithRouter(HomePage);