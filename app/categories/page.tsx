'use client'

import Image from 'next/image'
import { useState } from 'react'

const categories = [
  {
    name: 'novice',
    label: 'Novice',
    link: 'https://challonge.com/pik3sypl/module'
  },
  {
    name: 'bm',
    label: 'Beginner Men',
    link: 'https://challonge.com/ixpwq482/module'
  },
  {
    name: 'bw',
    label: 'Beginner Women',
    link: 'na2'
  },
  {
    name: 'bmx',
    label: 'Beginner Mixed',
    link: 'https://challonge.com/zm4dyzi5/module'
  },
  {
    name: 'im',
    label: 'Intermediate Men',
    link: 'https://challonge.com/emvsoidd/module'
  },
  {
    name: 'iw',
    label: 'Intermediate Women',
    link: 'https://challonge.com/bdrl9kx2/module'
  },
  {
    name: 'imx',
    label: 'Intermediate Mixed',
    link: 'https://challonge.com/dmooi4zz/module'
  },
  {
    name: 'exc',
    label: 'Executive (45 and up)',
    link: 'https://challonge.com/xroqhd3f/module'
  },
  { name: 'open', label: 'Open', link: 'https://challonge.com/2zmq0xui/module' }
]

export default function CategoriesPage() {
  const [selected, setSelected] = useState('')
  const [iframeLoaded, setIframeLoaded] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelected(value)
    setIframeLoaded(false)
  }

  return (
    <div className="relative min-h-screen bg-gray-200">
      {/* Banner */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
        <Image
          src="/banner.jpeg"
          alt="Pickle Tournament Banner"
          fill
          priority
          className="object-contain md:object-cover object-[top_center] brightness-75 transition-all duration-500"
          sizes="100vw"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-start p-4">
        <div className="-mt-44 border border-gray-100 rounded-2xl bg-white p-4 z-50">
          {/* Content */}
          <div className="bg-white text-gray-900 w-full p-4">
            {/* Title */}
            <div className="text-center space-y-8">
              <h1 className="text-xl font-semibold text-center">
                Select your category
              </h1>

              <select
                value={selected}
                onChange={handleChange}
                className="w-64 border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Choose a Category --</option>
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.link}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {selected &&
          (selected === 'na1' || selected === 'na2' || selected === 'na3') && (
            <div className="w-full mt-4 min-h-[80vh] bg-white relative">
              <div className="absolute inset-0 flex items-start pt-10 justify-center z-10">
                <p className="text-gray-700 text-lg animate-pulse">
                  Group stage details not yet available.
                </p>
              </div>
            </div>
          )}

        {/* Iframe Section */}
        {selected &&
          selected !== 'na1' &&
          selected !== 'na2' &&
          selected !== 'na3' && (
            <div className="w-full mt-4 min-h-[80vh] bg-white relative">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-start pt-10 justify-center bg-white/80 z-10">
                  <p className="text-gray-600 text-lg animate-pulse">
                    Loading matches, please wait...
                  </p>
                </div>
              )}
              <iframe
                src={selected}
                title="Category View"
                className="w-full h-[700px] border-0"
                onLoad={() => setIframeLoaded(true)}
              />
            </div>
          )}
      </div>
    </div>
  )
}
