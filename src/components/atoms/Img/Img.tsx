import { useEffect, useState } from 'react'
import { PropsImg } from './types'
import { Loader } from '../Icon'

const Img: React.FC<PropsImg> = ({
	aspecRatio = 'aspect-[1/1]',
	width = 'w-[100%]',
	maxWidth = '',
	fit = 'object-contain',
	alt = '',
	src,
	placeholderSrc = 'https://cdn-icons-png.flaticon.com/128/3342/3342137.png',
}) => {
	const [imgSrc, setImgSrc] = useState(src)
	const [loading, setLoading] = useState(true)

	const handleLoadImage = () => {
		setLoading(false)
	}

	const handleErrorImage = () => {
		setLoading(false)
		setImgSrc(placeholderSrc)
	}
	useEffect(() => {
		src !== imgSrc && setLoading(true)
		setImgSrc(src)
	}, [src])

	return (
		<div
			className={`bg-slate-500 relative overflow-hidden ${aspecRatio} ${width} ${maxWidth}`}
		>
			{loading && (
				<div className='flex justify-center items-center h-full w-full absolute text-slate-50'>
					<Loader />
				</div>
			)}
			<img
				src={imgSrc}
				alt={alt}
				onLoad={handleLoadImage}
				onError={handleErrorImage}
				className={`w-full h-full ${fit} ${
					loading ? 'scale-0' : 'scale-1'
				} transition-transform`}
			/>
		</div>
	)
}
export default Img
