'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

export const NavBar = () => {

  const pathname = usePathname()

  console.log(pathname)

	return (
			<nav>
					<ul className="text-neutral-300 flex gap-5">
							<li><Link href="/" className={`${pathname === '/' && 'text-orange-700 border-b-2 border-b-orange-700'}`}>Home</Link></li>
							
							<li><Link href="/dashboard" className={`${pathname === '/dashboard' && 'text-orange-700 border-b-2 border-b-orange-700'}`}>Dashboard</Link></li>
							
							<li><Link href="/cadastro" className={`${pathname === '/cadastro' && 'text-orange-700 border-b-2 border-b-orange-700'}`}>Cadastre-se</Link></li>
					</ul>
			</nav>
	)
}