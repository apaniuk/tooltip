import React, {useRef, useState, useEffect, useCallback} from 'react'
import TooltipContent from './TooltipContent'
import {Classes, TooltipPosition, TooltipVariant} from './Tooltip.types'
import {EventListenerService} from '../../services/EventListenerService'

export interface TooltipProps {
	open?: boolean
	onOpen?: () => void
	content?: React.ReactNode
	position?: TooltipPosition
	showOnHover?: boolean
	showOnClick?: boolean
	children: React.ReactNode
	variant?: TooltipVariant
	classes?: Classes
}

export const Tooltip: React.FC<TooltipProps> = ({
	content, 
	position = 'bottom', 
	showOnHover = true,
	showOnClick = false,
	children,
	variant = 'dark',
	classes,
	open,
	onOpen,
}) => {
	const [isVisible, setIsVisible] = useState(false)
	const wrapperRef = useRef<HTMLDivElement>(null)
	const eventListenerService = useRef(new EventListenerService()).current
	const openPropExist = open !== undefined
	
	const onHide = useCallback(() => {
		setIsVisible(false)
	}, [])

	useEffect(() => {
		if (openPropExist) {
			setIsVisible(open)
		}
	}, [open, openPropExist])

	useEffect(() => {
		const wrapperEl = wrapperRef.current

		if(!wrapperEl) {
			return
		}

		const onHideByClick = (event: Event) => {
			if (!wrapperEl || !wrapperEl.contains(event.target as Node)) {
				onHide()
			}
		}

		if (showOnClick) {
			if (isVisible) {
				eventListenerService.bind('hideTooltipOnClick', 'click', onHideByClick)
			} else {
				eventListenerService.unbindAll()
			}
		}

		return () => {
			eventListenerService.unbindAll()
		}
	}, [eventListenerService, isVisible, openPropExist, showOnClick])

	const onMouseEnter = showOnHover && !openPropExist ? () => setIsVisible(true) : showOnHover && onOpen ? onOpen : undefined
	const onMouseLeave = showOnHover && !openPropExist ? () => setIsVisible(false) : undefined
	const onClick = showOnClick && !openPropExist ? () => setIsVisible((prevState) => !prevState) : showOnClick && onOpen ? onOpen : undefined

	return children ? (
		<span
			ref={wrapperRef}
			className={classes?.wrapper}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={onClick}
		>
			{children}
			{!!content && <TooltipContent
				anchorEl={wrapperRef.current}
				isVisible={isVisible}
				position={position}
				variant={variant}
				classes={classes}
			>
				{content}
			</TooltipContent>}
		</span>
	) : null
}
