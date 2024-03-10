import React from "react";

import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    // <footer className="text-left text-lg-start text-white">
    //   <div className="p-4 pb-0 bg-slate-400">
    //     <section className="">
    //       <div className="row">
    //         <div className="flex">
    //           <div className="mx-auto mt-3">
    //           <img
    //       className="h-12"
    //       src="../images/logo.png"
    //       alt="profile"
    //     />
    //             <p className="py-2">
    //               Here you can use rows and
    //               <br />
    //               columns to organize your
    //               <br />
    //               footer content. Lorem ipsum
    //               <br />
    //               dolor sit amet, consectetur
    //               <br />
    //               adipisicing elit.
    //             </p>
    //           </div>
    //           <div className="mx-auto mt-3">
    //             <h6 className="mb-4 font-bold">PRODUCTS</h6>
    //             <p>
    //               <a className="text-white">MDBootstrap</a>
    //             </p>
    //             <p className="my-4">
    //               <a className="text-white">MDWordPress</a>
    //             </p>
    //             <p>
    //               <a className="text-white">BrandFlow</a>
    //             </p>
    //             <p className="my-4">
    //               <a className="text-white">Bootstrap Angular</a>
    //             </p>
    //           </div>
    //           <div className="mx-auto mt-3">
    //             <h6 className="mb-4 font-bold">CONTACT</h6>
    //             <p>
    //               <i className="fas fa-home mr-3"></i> Prayagrag, UP, India
    //             </p>
    //             <p className="my-4">
    //               <i className="fas fa-envelope mr-3"></i> info@gmail.com
    //             </p>
    //             <p>
    //               <i className="fas fa-phone mr-3"></i> + 01 234 567 88
    //             </p>
    //             <p className="my-4">
    //               <i className="fas fa-print mr-3"></i> + 01 234 567 89
    //             </p>
    //           </div>
    //           <div className="mx-auto mt-3">
    //             <h6 className="mb-4 font-bold">FOLLOW US</h6>
    //             <div className="text-gray-800 text-3xl">
    //               <div className="space-x-6">
    //                 <a
    //                   className="m-1 hover:cursor-pointer hover:text-blue-500"
    //                   href="#!"
    //                   role="button"
    //                 >
    //                 <FontAwesomeIcon icon="fa-brands fa-facebook" />
    //                 </a>
    //                 <a
    //                   className="m-1 hover:cursor-pointer hover:text-blue-500"
    //                   href="#!"
    //                   role="button"
    //                 >
    //                   <i className="fab fa-twitter-square"></i>
    //                 </a>
    //               </div>
    //               <div className="space-x-6 py-4">
    //                 <a
    //                   className="m-1 hover:cursor-pointer hover:text-blue-500"
    //                   href="#!"
    //                   role="button"
    //                 >
    //                   <i className="fab fa-google"></i>
    //                 </a>
    //                 <a
    //                   className="m-1 hover:cursor-pointer hover:text-blue-500"
    //                   href="#!"
    //                   role="button"
    //                 >
    //                   <i className="fab fa-instagram-square"></i>
    //                 </a>
    //               </div>
    //               <div className="space-x-6">
    //                 <a
    //                   className="m-1 hover:cursor-pointer hover:text-blue-500"
    //                   href="#!"
    //                   role="button"
    //                 >
    //                   <i className="fab fa-linkedin"></i>
    //                 </a>
    //                 <a
    //                   className="m-1 hover:cursor-pointer hover:text-blue-500"
    //                   href="#!"
    //                   role="button"
    //                 >
    //                   <i className="fab fa-github-square"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    //   <div className="text-center p-3 bg-slate-600">
    //     © 2024 Copyright:
    //     <a className="text-white" href="#">
    //       Acadamixlance
    //     </a>
    //   </div>
    // </footer>
    <>
    <footer class="text-black body-font bg-slate-400">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10 ">
          <li>
            <a class="text-white hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">SUBSCRIBE</h2>
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label for="footer-field" class="leading-7 text-xl text-black">Placeholder</label>
            <input type="text" id="footer-field" name="footer-field" class="w-full bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-[#16d812] focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#16d812] border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Submit</button>
        </div>
        <p class="text-black text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
          <br class="lg:block hidden"/>waistcoat green juice
        </p>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img
         className="h-8"
         src="../images/logo.png"
         alt="profile"
       />
      </a>
      <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 AcadeMixLance
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </>
  );
}
