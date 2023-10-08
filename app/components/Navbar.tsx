'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Navbar() {
	const [isDarkMode, setIsDarkMode] = useState(false)
	
	function toggleDarkMode() {
		setIsDarkMode(!isDarkMode)
	}

	return (
		<nav className='p-4'>
			<div className="container flex justify-between items-center mx-auto py-2 md:py-3">
				<div className=''>
					<Link href='/' className='font-bold text-lg'>Where in the world?</Link>
				</div>

				<div className=''>
					<button onClick={toggleDarkMode}>Dark Mode</button>
				</div>
			</div>
		</nav>
	)
}
