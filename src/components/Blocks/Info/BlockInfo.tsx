import React from 'react'
import './block-info.scss'
import Image from 'next/image'
import { makeImageSizes } from '@/assets/js/tools'


interface IBlockInfo {
	children: JSX.Element
	img: {
		src: string
		alt: string
		pos: 'rt' | 'rb' |'lt' | 'lb'
	}
}

const BlockInfo: React.FC<IBlockInfo> = ({children, img}): JSX.Element => {
	return (
		<div className={`block_info img_${img.pos[0] === 'r' ? 'right' : 'left'} img_${img.pos[1] === 't' ? 'top' : 'bottom'}`}>
			<div className="block_info__data">
				{children}
			</div>
			<div className="block_info__image">
				<div className="img-wrapper">
					<Image 
						src={img.src}
						alt={img.alt}
						sizes={makeImageSizes({start: '100vw', xs: '400px', md: '40vw', xl: '420px' })}
						loading='lazy'
					/>
				</div>
			</div>
		</div>
	)
}

export default BlockInfo