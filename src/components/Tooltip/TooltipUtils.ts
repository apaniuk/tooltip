import {StateXY} from './Tooltip.types'


export const getXYPositions = (
	wrapperEl: HTMLDivElement,
	tooltipEl: HTMLDivElement,
): { [x: string]: StateXY } => {
	const wrapperRect = wrapperEl.getBoundingClientRect()
	const tooltipRect = tooltipEl.getBoundingClientRect()
	const extraPadding = 2
	const {innerHeight, innerWidth} = window
	const {clientHeight, clientWidth} = document.documentElement
	const centerX = wrapperRect.left + wrapperEl.offsetWidth / 2 - tooltipRect.width / 2
	const centerY = wrapperRect.top + wrapperRect.height / 2 - tooltipRect.height / 2
	const bottomY = wrapperRect.height + wrapperRect.top + 3 + extraPadding
	const topY = wrapperRect.top - tooltipRect.height - extraPadding - 3
	const outTop = wrapperRect.top - tooltipRect.height - extraPadding < 0
	const outBottom =
    wrapperRect.bottom + tooltipRect.height + extraPadding >
    (innerHeight || clientHeight)
	const outLeft = wrapperRect.left - tooltipRect.width - extraPadding - 3 < 0
	const outRight =
    wrapperRect.left + wrapperRect.width + tooltipRect.width + extraPadding >
    (innerWidth || clientWidth)
	const bottom = {
		x: centerX,
		y: outBottom ? topY : bottomY,
	}
	const top = {
		x: centerX,
		y: outTop ? bottomY : topY,
	}
	const leftX = wrapperRect.left - tooltipRect.width - 3 - extraPadding
	const rightX = wrapperRect.left + wrapperRect.width + 3 + extraPadding
	const right = {
		x: outRight ? leftX : rightX,
		y: centerY,
	}
	const left = {
		x: outLeft ? rightX : leftX,
		y: centerY,
	}
	return {
		left,
		top,
		right,
		bottom,
	}
}
