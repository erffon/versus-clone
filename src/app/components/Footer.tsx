// components/Footer.tsx
import Image from 'next/image'
import React from 'react'
import { FaYoutube, FaTiktok, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer: React.FC = () => {
  return (
    <footer className='bg-deep-charcoal text-gray-400 py-16'>
      <div className='container mx-auto px-4 max-w-1170 w-11/12 flex flex-wrap lg:flex-nowrap justify-center gap-8 gap-y-12'>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 w-full pl-10 sm:pl-8 lg:p-0'>
          {/* Resources */}
          <div>
            <h4 className='text-muted-gray text-sm font-semibold mb-4'>RESOURCES</h4>
            <ul>
              <li className='mb-5'>
                <a className='text-soft-silver hover:text-white' href='#'>
                  Blog
                </a>
              </li>
              <li>
                <a className='text-soft-silver hover:text-white' href='#'>
                  Glossary
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className='text-muted-gray text-sm font-semibold mb-4'>GET IN TOUCH</h4>
            <ul>
              <li className='mb-5'>
                <a className='text-soft-silver hover:text-white' href='#'>
                  Suggest a product
                </a>
              </li>
              <li>
                <a className='text-soft-silver hover:text-white' href='#'>
                  Partnerships
                </a>
              </li>
            </ul>
          </div>

          {/* Versus */}
          <div>
            <h4 className='text-muted-gray text-sm font-semibold mb-4'>VERSUS</h4>
            <ul>
              <li className='mb-5'>
                <a className='text-soft-silver hover:text-white' href='#'>
                  About us
                </a>
              </li>
              <li>
                <a className='text-soft-silver hover:text-white' href='#'>
                  Editorial guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className='text-muted-gray text-sm font-semibold mb-4'>LEGAL</h4>
            <ul>
              <li className='mb-5'>
                <a className='text-soft-silver hover:text-white' href='#'>
                  Imprint
                </a>
              </li>
              <li className='mb-5'>
                <a className='text-soft-silver hover:text-white' href='#'>
                  Privacy
                </a>
              </li>
              <li className='mb-5'>
                <a className='text-soft-silver hover:text-white' href='#'>
                  Terms
                </a>
              </li>
              <li>
                <a className='text-soft-silver hover:text-white' href='#'>
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          {/* Brand and Tagline */}
          <div className='flex flex-col items-center justify-center mb-6 gap-1'>
            <Image alt='' src='/assets/versus.svg' width={135} height={28} />
            <p className='text-soft-silver'>Compare everything</p>
          </div>

          {/* Social Media Icons */}
          <div className='flex space-x-4 text-2xl'>
            <a href='#' className='hover:text-white'>
              <FaYoutube />
            </a>
            <a href='#' className='hover:text-white'>
              <FaTiktok />
            </a>
            <a href='#' className='hover:text-white'>
              <FaInstagram />
            </a>
            <a href='#' className='hover:text-white'>
              <FaXTwitter />
            </a>
            <a href='#' className='hover:text-white'>
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
