import React from 'react';
import { Avatar, Divider} from '@mui/material';

const ProfilePage = () => {
  return (
    <div className='bg-soft p-2 px-6'>
          <div class="flex flex-cols"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#78889B" aria-hidden="true" class="w-5 h-5 mt-2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg><input type="text" class="focus:outline-none bg-soft text-gray-400 text-sm block w-full py-2.5 pr-2.5 pl-2 text-grey font-main font-light tracking-wider" placeholder="Search activity, notes, email and more" /></div>
          <Divider />

          <div>
            <div class="mt-6 bg-tabs flex gap-x-6 w-full rounded-md">
              <button class="relative h-12 font-main font-medium px-8 flex items-center bg-white font-semibold rounded-md m-0.5 shadow-md text-black transition-all duration-200">Activity</button>
              <button class="relative h-12 font-main font-medium px-8 flex items-center text-gray-400 transition-all duration-200">Notes</button><button class="relative h-12 font-main font-medium px-8 flex items-center text-gray-400 transition-all duration-200">Emails</button><button class="relative h-12 font-main font-medium px-8 flex items-center text-gray-400 transition-all duration-200">Calls</button>
              <button class="relative h-12 font-main font-medium px-8 flex items-center text-gray-400 transition-all duration-200">Task</button><button class="relative h-12 font-main font-medium px-8 flex items-center text-gray-400 transition-all duration-200">Meetings</button>
            </div>
          </div>
          <div class="mt-6 space-x-4 mb-4">
            <div class="relative inline-block text-left" data-headlessui-state=""><div><button class="inline-flex w-full justify-center rounded-md bg-white font-main text-black tracking-wider pr-5 p-3 text-sm font-medium shadow-sm" id="headlessui-menu-button-:r5:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">Filter activity 21/25<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="ml-2 -mr-3 h-5 w-5 text-grey"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button></div></div>
            <div class="relative inline-block text-left" data-headlessui-state="">
              <div><button class="inline-flex w-full justify-center rounded-md bg-white font-main text-black tracking-wider pr-5 p-3 text-sm font-medium shadow-sm" id="headlessui-menu-button-:r7:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">All user<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="ml-2 -mr-3 h-5 w-5 text-grey"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
              </button>
              </div>
            </div>
          </div>
          <span class="font-main text-black text-lg tracking-wide">Upcoming Activity</span>

          <div>
            <div className='font-main mt-4 w-full rounded-md bg-white shadow-sm'>
              <div class="px-3 py-2 flex items-center border-b border-b-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4 h-4 text-grey stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg><span class="ml-4 p-1 rounded-full bg-blue-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2E66F6" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"></path></svg></span><span class="pl-3 text-sm font-medium text-gray-700">Task <span class="text-main font-light">created</span> Easther Howard</span><span class="flex items-center ml-auto"><span class="font-light text-sm text-gray-400 pr-2">Due: </span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path></svg><time class="pl-2 text-sm font-medium text-gray-700">Today, 12:00 PM</time><span class="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-6 h-6 text-gray-400 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg></span></span>
              </div>
              <div class="p-5 flex"><span class=" flex-none border border-gray-200 bg-gray-100 w-7 h-7 rounded-full mr-4"></span><div><p class="leading-7 font-semibold">Prepare quote for Jerome Bell</p><p class="pt-2 text-sm text-gray-400 font-light tracking-wider">She's interested in our new product line and wants our very best price. Please include a detailed breakdown of costs.</p></div>
              </div>

              <div className='p-5'>
                <div className='w-full grid grid-cols-3 p-3 border border-gray-200 rounded-md'>
                  <div class="pr-16 pl-2 w-fit border-r border-r-gray-200"><label class="text-sm text-gray-400 font-light">Reminder</label><span class="flex gap-x-1 items-center  text-gray-600">No reminder<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3 h-3 text-gray-600 translate-y-[2px]"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></span></div>
                  <div class="pr-20 pl-5 w-fit border-r border-r-gray-200"><label class="text-sm text-gray-400 font-light">Task Priority</label>
                    <span class="flex gap-x-1 items-center"><span class="block w-4 h-4 bg-primary rounded mr-1  clr-orange "></span>High<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3 h-3 text-gray-600 translate-y-[2px]"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></span>
                  </div>
                  <div class="pr-12 text-gray-600"><span class="text-sm text-gray-400 font-light">Assigned to</span><span class="flex gap-x-1.5 items-center"><Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" /> Esther Howard<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3 h-3 text-gray-600 translate-y-[2px]"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5">
                  </path></svg></span></div>
                </div>
              </div>
            </div>
          </div>

          <div class="font-main mt-4 w-full rounded-md bg-white shadow-sm">
            <div class="px-3 py-2 flex items-center border-b border-b-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4 h-4 text-grey stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg><span class="ml-4 p-1 rounded-full bg-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2E66F6" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"></path></svg></span>
              <span class="pl-3 text-sm font-medium text-gray-700">Task <span class="text-main font-light">created</span> Easther Howard</span><span class="flex items-center ml-auto"><span class="font-light text-sm text-gray-400 pr-2">Due: </span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path></svg><time class="pl-2 text-sm font-medium text-gray-700">Today, 12:00 PM</time><span class="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-6 h-6 text-gray-400 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg></span></span></div><div class="p-5 flex"><span class=" flex-none border border-gray-200 bg-gray-100 w-7 h-7 rounded-full mr-4"></span><div><p class="leading-7 font-semibold">Prepare quote for Jerome Bell</p><p class="pt-2 text-sm text-gray-400 font-light tracking-wider">She's interested in our new product line and wants our very best price. Please include a detailed breakdown of costs.</p>
              </div>
            </div>
          </div>

          <div class="mt-6"><span class="font-main text-black text-lg tracking-wide mt-4">Activity History</span></div>

          <div class="mt-2.5"><span class="font-main gray tracking-wide mt-4">12 December 2021</span></div>

          <div>
            <ol className='border-l-2 border-gray-300 ml-2'>
              <li>
                <div className='flex-start flex items-center mt-12'>
                  <div class="-ml-1.5 -mt-32 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-gray-500 mr-4"></div>
                  <div className='-mt-12 text-xl font-semibold'>
                    <div className='font-main mt-4 w-full rounded-md bg-white shadow-sm'>
                      <div className='px-3 py-2 flex items-center border-b border-b-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4 h-4 text-grey stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5">

                        </path>
                        </svg>
                        <span class="ml-4 p-1 rounded-full bg-blue-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2E66F6" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3">

                        </path>
                        </svg>
                        </span>
                        <span class="pl-3 text-sm font-medium text-gray-700">Task <span class="text-main font-light">created</span> Easther Howard</span>
                        <span class="flex items-center ml-auto"><span class="font-light text-sm text-gray-400 pr-2">Due:
                        </span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                          </svg>
                          <time class="pl-2 text-sm font-medium text-gray-700">Today, 12:00 PM</time><span class="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-6 h-6 text-gray-400 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z">
                          </path>
                          </svg>
                          </span>
                        </span>
                      </div>
                      <div class="p-5 flex">
                        <span class=" flex-none border border-gray-200 bg-gray-100 w-7 h-7 rounded-full mr-4">
                        </span>
                        <div>
                          <p class="leading-7 font-semibold">Prepare quote for Jerome Bell</p><p class="pt-2 text-sm text-gray-400 font-light tracking-wider">She's interested in our new product line and wants our very best price. Please include a detailed breakdown of costs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
  )
}

export default ProfilePage