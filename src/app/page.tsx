import Image from 'next/image'
import Link from 'next/link'

import solar from "#/images/solar.png"
import galaxy from "#/images/galaxy.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className="text-white">
        <Image alt='solar system' src={solar} />
        <Link
          href="/solar"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          is solar system 3D view
        </Link>
        <Image alt='solar system' src={galaxy} />
        <Link
          href="/space"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          is for 42project
        </Link>
      </div>
    </main>
  )
}
