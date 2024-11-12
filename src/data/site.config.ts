interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
	keywords?: string
}

export const siteConfig: SiteConfig = {
	author: 'Juanse', // Site author
	title: 'Juanse Blog', // Site title.
	description:
		'Blog personal de Juanse. Hablo de desarrollo de software, tecnología y vida personal.',
	lang: 'es-ES',
	ogLocale: 'es_ES',
	shareMessage: 'Me ha encantado este artículo, queria compartirlo con ustedes 👀.',
	paginationSize: 4,
	keywords: 'blog, desarrollo, software, tecnología, go, golang, tech, vida personal'
}
