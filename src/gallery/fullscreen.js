import { renderImageSlider, onShowFn as sliderOnShowFn } from './slider'

const prefixClassname = 'wp-gallery-fullscreen',
	renderFullScreenGallery = ( lang, dir ) => {
		return `
			<div class="${prefixClassname}" lang="${lang}" dir="${dir}">
				<div class="${prefixClassname}-close"></div>
				<div class="${prefixClassname}-main"></div>
			</div>
		`.trim()
	},

	hideFullscreenGallery = container => {
		const fullscreenGallery = container.querySelector( `.${prefixClassname}` )
		container.removeChild( fullscreenGallery )
	},

	showFullscreenGallery = ( mediaItems, selectedThumb, lang, dir, container = document.body ) => {

		// render utils for fullscreen then slider component
		container.insertAdjacentHTML( 'beforeend', renderFullScreenGallery( lang, dir ) )
		container.querySelector( `.${prefixClassname}-main` )
			.insertAdjacentHTML( 'beforeend', renderImageSlider( mediaItems, selectedThumb, lang, dir, container ) )

		// onShow event for full screen component
		const closeButton = container.querySelector( `.${prefixClassname}-close` )
		closeButton.addEventListener( 'click', () => {
			hideFullscreenGallery( container )
		} )

		// onShow event for slider component
		sliderOnShowFn()
	}

export { showFullscreenGallery }
