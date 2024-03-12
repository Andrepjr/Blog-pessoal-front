import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { AuthContext } from '../../contexts/AuthContext'
import './Footer.css'

function Footer() {

  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if (usuario.token !== '') {
    footerComponent = (
      <>
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-blue-200 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ffffff] to-[#ffffff] opacity-30"
              style={{
                clipPath:
                  'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
              }}
            />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/1 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ffffff] to-[#ffffff] opacity-30"
              style={{
                clipPath:
                  'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
              }}
            />
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900">
              <strong className="font-semibold">Generation Brasil 2024</strong>
              <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                <circle cx={1} cy={1} r={1} />
              </svg>
              Blog Pessoal André Prado Junior  &copy;
            </p>
            <a
              href="https://github.com/" target='blank'
              className="flex-none rounded-full bg-blue-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Github Project <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="flex flex-1 justify-around">
          </div>
        </div>


        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-blue-200 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ffffff] to-[#ffffff] opacity-30"
              style={{
                clipPath:
                  'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
              }}
            />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/1 -z-8 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ffffff] to-[#eff9ff] opacity-30"
              style={{
                clipPath:
                  'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
              }}
            />
          </div>
          <div className="flex flex-wrap items-center">
            <p className="text-sm leading-6 text-gray-900"></p>
              <div className="flex justify-center  text-blue">
          <div className="container flex flex-col items-center">
            <div className='flex'>
              <LinkedinLogo size={40} weight='regular' />
              <InstagramLogo size={40} weight='regular' />
              <TwitterLogo size={40} weight='regular' />
            </div>
          </div>
        </div>   
          </div>
          <div className="flex flex-1 justify-around">
          </div>
        </div>


      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer