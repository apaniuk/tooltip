export type StateXY = {
	x: number
	y: number
}

export type TooltipPosition =
	'top' |
	'bottom' |
	'left' |
	'right'

export type TooltipVariant = 'dark' | 'error' | 'warning' | 'light' | 'info'
export interface Classes {
	wrapper?: string
	tooltipContent?: string
	lightVariant?: string
	darkVariant?: string
	infoVariant?: string
	errorVariant?: string
	warningVariant?: string
}