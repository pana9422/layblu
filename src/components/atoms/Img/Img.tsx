import { useEffect, useState } from 'react'
import { PropsImg } from './types'
import { Loader } from '../Icon'

const Img: React.FC<PropsImg> = ({
	aspecRatio = '1',
	maxWidth = 'max-w-[200px]',
	alt,
	src,
	placeholderSrc = 'https://cdn-icons-png.flaticon.com/128/3342/3342137.png',
}) => {
	const [imgSrc, setImgSrc] = useState(src)
	const [loading, setLoading] = useState(true)

	const handleLoaderImage = () => {
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
			className={`flex justify-center items-center ${maxWidth}  ${aspecRatio} text-black`}
		>
			<img
				src={imgSrc}
				alt={alt}
				onLoad={handleLoaderImage}
				onError={handleErrorImage}
				className={`object-cover w-full h-full ${aspecRatio}`}
			/>
			{loading && <Loader />}
		</div>
	)
}
export default Img
