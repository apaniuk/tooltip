import React, {FC, useEffect, useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import {CSSTransition} from 'react-transition-group'
import styles from './Tooltip.module.scss'
import classNames from 'classnames'
import {CSSTransitionClassNames} from 'react-transition-group/CSSTransition'
import {getXYPositions} from './TooltipUtils'
import {Classes, StateXY, TooltipPosition, TooltipVariant} from './Tooltip.types'
import {EventListenerService} from '../../services/EventListenerService'

interface TooltipContentProps {
	children: React.ReactNode
	isVisible: boolean
	anchorEl: HTMLDivElement | null
	position: TooltipPosition
	variant: TooltipVariant
	classes?: Classes
}

const defaultTransitionClasses: CSSTransitionClassNames = {
	enter: styles.tooltipEnter,
	enterActive: styles.tooltipEnterActive,
	exit: styles.tooltipExit,
	exitActive: styles.tooltipExitActive,
}

const ANIMATION_TIMEOUT = 250

const TooltipContent: FC<TooltipContentProps> = ({
	anchorEl,
	children,
	isVisible,
	position,
	variant,
	classes,
}) => {
	const eventListenerService = useRef(new EventListenerService()).current
	const [stateXY, setStateXY] = useState<StateXY>({
		x: 0,
		y: 0,
	})

	const tooltipRef = useRef<HTMLDivElement>(null)

	useEffect(() => () => eventListenerService.unbindAll(), [eventListenerService])

	const colors = {
		dark: classes?.darkVariant ?? styles.dark,
		light: classes?.lightVariant ?? styles.light,
		error: classes?.errorVariant ?? styles.error,
		warning: classes?.warningVariant ?? styles.warning,
		info: classes?.infoVariant ?? styles.info,
	}
	
	const updateXY = () => {
		const tooltipEl = tooltipRef.current

		if (!anchorEl || !tooltipEl) {
			return
		}
		const xyPositions = getXYPositions(anchorEl, tooltipEl)
		setStateXY(xyPositions[position])
	}

	return (
		ReactDOM.createPortal(<CSSTransition
			in={isVisible}
			classNames={defaultTransitionClasses}
			unmountOnExit
			appear
			nodeRef={tooltipRef}
			timeout={ANIMATION_TIMEOUT}
			onEnter={() => {
				updateXY()
			}}
			onEntered={() => {
				eventListenerService.bind('hideTooltipOnScroll', 'scroll', updateXY)
				eventListenerService.bind('hideTooltipOnResize', 'resize', updateXY)
			}}
			onExited={() => {
				eventListenerService.unbindAll()
			}}
		>
			<div
				ref={tooltipRef}
				className={classNames(styles.tooltip, colors[variant], classes?.tooltipContent)}
				style={{
					top: stateXY.y,
					left: stateXY.x,
				}}
			>
				{children}
			</div>
		</CSSTransition>, document.body)
	)
}

export default TooltipContent