import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GetApp() {
  return (
    <section className='py-20'>
      <div className='flex items-center justify-center bg-[url("https://shadcnblocks.com/images/block/patterns/circles.svg")] bg-cover bg-center py-20 text-center md:p-20'>
        <div className='container'>
          <div className='mx-auto max-w-screen-md'>
            <h1 className='mb-4 text-3xl font-semibold text-blue-800  md:text-5xl'>
              Votre boutique de foot est desormais dans votre poche
            </h1>
            <p className='md:text-lg'>
              Découvrez notre collection d&apos;articles de foot et de sport
              directement depuis votre smartphone. Maillots, chaussures,
              équipements... Commandez facilement et profitez de nos offres
              exclusives sur l&apos;application !
            </p>
            <div className='mt-11 flex flex-col justify-center gap-2 sm:flex-row'>
              <a
                download
                href='https://s3.ln-foot.com/app-releases/app-release.apk'
              >
                <Button size='lg' className='bg-blue-900'>
                  Télécharger l&apos;application
                </Button>
              </a>
              <Link href='/shop'>
                <Button size='lg' variant='outline'>
                  Voir notre catalogue
                </Button>
              </Link>{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
