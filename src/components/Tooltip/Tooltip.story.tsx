import React, {FC} from 'react'
import {Meta} from '@storybook/react'
import {Tooltip, TooltipProps} from './Tooltip'

export default {
	title: 'Tooltip',
	component: Tooltip,
} as Meta<TooltipProps>

export const Default: FC = () => {
	return (
		<div style={{
			height: '100%',
			display: 'flex',
			justifyContent: 'space-around',
		}}
		>
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
			}}
			>
				<div>
					<Tooltip
						position='top'
						content='Top tooltip'
						variant='light'
					>
						<span>Hover Top tooltip</span>
					</Tooltip>
				</div>
				<br/>
				<div>
					<Tooltip
						position='left'
						content='Left tooltip'
						variant='error'
					>
						<span>Hover Left tooltip</span>
					</Tooltip>
				</div>
				<br/>
				<div>
					<Tooltip
						position='right'
						content='Right tooltip'
						variant='warning'
					>
						<span>Hover Right tooltip</span>
					</Tooltip>
				</div>
				<br/>
				<div>
					<Tooltip
						position='bottom'
						content='Bottom tooltip'
						variant='info'
						open
					>
						<span>Hover Bottom tooltip</span>
					</Tooltip>
				</div>
			</div>
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
			}}
			>
				<div>
					<Tooltip
						showOnHover={false}
						showOnClick
						position='top'
						content='Top tooltip'
					>
						<span>Click Top tooltip</span>
					</Tooltip>
				</div>
				<br/>
				<div>
					<Tooltip
						showOnHover={false}
						showOnClick
						position='left'
						content='Left tooltip'
					>
						<span>Click Left tooltip</span>
					</Tooltip>
				</div>
				<br/>
				<div>
					<Tooltip
						showOnHover={false}
						showOnClick
						position='right'
						content='Right tooltip'
					>
						<span>Click Right tooltip</span>
					</Tooltip>
				</div>
				<br/>
				<div>
					<Tooltip
						showOnHover={false}
						showOnClick
						position='bottom'
						content='Bottom tooltip'
					>
						<span>Click Bottom tooltip</span>
					</Tooltip>
				</div>
			</div>

		</div>
	)
}
