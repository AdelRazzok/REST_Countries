import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'REST Countries',
	description: 'Countries info app, with JSON data mocking a REST API.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' dir='ltr'>
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
