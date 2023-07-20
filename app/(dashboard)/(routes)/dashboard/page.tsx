import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

type Props = {}

export default function DashboardPage({ }: Props) {
    return (
        <div>
            <div>DashboardPage</div>
            <UserButton afterSignOutUrl='/' />
        </div>
    )
}