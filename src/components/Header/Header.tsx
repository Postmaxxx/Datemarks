// import LangSw from '../LangSw/LangSw'
import Link from 'next/link'
// import Nav from '../Nav/Nav'
// import ThemeSw from '../ThemeSw/ThemeSw'
import './header.scss'
import { linkHome } from '@/assets/js/consts'
// import Image from 'next/image'
// import logo from '@/assets/images/logo.png'
// import { makeImageSizes } from '@/assets/js/tools'
// import Image from 'next/image'
// import { makeImageSizes } from '@/assets/js/tools'
// import Link from 'next/link'
// import { homeLink } from '@/assets/js/consts'

const Header = () => {
	return (
		<header>
			<div className="container_page container_content header__content">
				<Link className='header__company' href={linkHome}>Datemarks</Link>
				{/* <div className="logo-wrapper mr-auto relative">
					<Image 
						className='header__logo'
						src={logo.src} 
						alt='Datemarks logo'
						width={30}
						height={30}
						sizes={'(min-width: 768px) 20px, (min-width: 640px) 5px, (min-width: 1px) 10px'}
					/>
				</div> */}
				
				{/* <Nav/> */}

				{/* <div className="lang-sw-wrapper me-3 h-full flex items-center">
					<LangSw />
				</div> */}
				
				{/* <div className="theme-sw-wrapper h-full flex items-center">
					<ThemeSw />
				</div> */}
			</div>
		</header>
	)
}


export default Header