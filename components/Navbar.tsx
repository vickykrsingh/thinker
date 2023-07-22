import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import MobileSideBar from './Mobile-SideBar'

export default function Navbar() {
  return (
    <div className='flex items-center p-4'>
        <MobileSideBar/>
        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/dashboard'/>
        </div>
    </div>
  )
}