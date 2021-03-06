import { msg } from './i18n'
import '../style/preview.less'

const renderPreview = ( lang, data, isTouch ) => {
		const imageUrl = data.imgUrl
		return `
			<div class="wikipediapreview${isTouch ? ' mobile' : ''}" lang="${lang}" dir="${data.dir}">
				<div class="wikipediapreview-header">
					<div class="wikipediapreview-header-image${imageUrl ? '' : '-wikipedia' }" style="${imageUrl && `background-image:url('${imageUrl}');background-size:cover;`}"></div>
					<div class="wikipediapreview-header-wordmark wikipediapreview-header-wordmark-${lang}"></div>
					<div class="wikipediapreview-header-closebtn"></div>
				</div>
				<div class="wikipediapreview-body">
					${data.extractHtml}
					<div class="wikipediapreview-gallery">
					</div>
				</div>
				<div class="wikipediapreview-footer">
					<span class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readmore">${msg( lang, 'continue-reading' )}</span>
					<a href="${data.pageUrl}" class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readonwiki" target="_blank">${msg( lang, 'read-more' )}</a>
				</div>
			</div>
	`.trim()
	},

	renderLoading = ( isTouch, lang, dir ) => {
		return `
			<div class="wikipediapreview${isTouch ? ' mobile' : ''}" lang="${lang}" dir="${dir}">
					<div class="wikipediapreview-header">
						<div class="wikipediapreview-loading-header-image"></div>
						<div class="wikipediapreview-header-wordmark wikipediapreview-header-wordmark-${lang}"></div>
						<div class="wikipediapreview-header-closebtn"></div>
					</div>
					<div class="wikipediapreview-loading">
						<div class="wikipediapreview-body">
							<div class="wikipediapreview-loading-body-line larger"></div>
							<div class="wikipediapreview-loading-body-line medium"></div>
							<div class="wikipediapreview-loading-body-line larger"></div>
							<div class="wikipediapreview-loading-body-line medium"></div>
							<div class="wikipediapreview-loading-body-line smaller"></div>
							<div class="wikipediapreview-loading-body-line larger"></div>
							<div class="wikipediapreview-loading-body-line medium"></div>
							<div class="wikipediapreview-loading-body-line larger"></div>
							<div class="wikipediapreview-loading-body-line medium"></div>
							<div class="wikipediapreview-loading-body-line smaller"></div>
						</div>
					</div>
					<div class="wikipediapreview-loading-footer"></div>
			</div>
  `.trim()
	},

	renderError = ( isTouch, lang, title, dir ) => {
		return `
			<div class="wikipediapreview ${isTouch ? 'mobile' : ''}" lang="${lang}" dir="${dir}">
					<div class="wikipediapreview-header">
						<div class="wikipediapreview-loading-header-image"></div>
						<div class="wikipediapreview-header-wordmark wikipediapreview-header-wordmark-${lang}"></div>
						<div class="wikipediapreview-header-closebtn"></div>
					</div>
					<div class="wikipediapreview-error">
						<div class="wikipediapreview-error-body">
							<div class="wikipediapreview-error-body-message">
								<div class="wikipediapreview-error-body-icon"></div>
								${msg( lang, 'preview-loading-error' )}
							</div>
							<div class="wikipediapreview-error-body-readon">
								<a href=${`https://${lang}.m.wikipedia.org/wiki/${encodeURIComponent( title )}`} target="_blank">${msg( lang, 'read-on-wiki' )}</a>
							</div>
						</div>
					</div>
			</div>
	`.trim()
	},

	renderDisambiguation = ( isTouch, lang, title, dir ) => {
		return `
			<div class="wikipediapreview ${isTouch ? 'mobile' : ''}" lang="${lang}" dir="${dir}">
					<div class="wikipediapreview-header">
						<div class="wikipediapreview-loading-header-image"></div>
						<div class="wikipediapreview-header-wordmark wikipediapreview-header-wordmark-${lang}"></div>
						<div class="wikipediapreview-header-closebtn"></div>
					</div>
					<div class="wikipediapreview-disambiguation">
						<div class="wikipediapreview-disambiguation-body">
							<div class="wikipediapreview-disambiguation-body-message">
								<div class="wikipediapreview-disambiguation-body-icon"></div>
								<span>${msg( lang, 'preview-disambiguation-message', title )}</span>
							</div>
							<div class="wikipediapreview-disambiguation-body-readon">
								<a href=${`https://${lang}.m.wikipedia.org/wiki/${encodeURIComponent( title )}`} target="_blank">${msg( lang, 'read-on-wiki' )}</a>
							</div>
						</div>
					</div>
			</div>
	`.trim()
	}

export { renderPreview, renderLoading, renderError, renderDisambiguation }
