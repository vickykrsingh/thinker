import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

function LandingPage({}: Props) {
  return (
    <div>
        <div>LandingPage</div>
        <Link href={'/sign-up'}>
            <Button>
                Register
            </Button>
        </Link>
        <Link href={'/sign-in'}>
            <Button>
                Login
            </Button>
        </Link>
    </div>
  )
}
 
export default LandingPage