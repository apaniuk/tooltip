import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {Tooltip} from './Tooltip'

afterEach(cleanup)

describe('Tooltip component', () => {
	it('renders the content passed as prop', () => {
		const content = 'This is a tooltip'
		const {getByText, getByRole} = render(
			<Tooltip content={content}>
				<button>Hover me</button>
			</Tooltip>,
		)
		fireEvent.mouseOver(getByRole('button'))
		expect(getByText(content)).toBeInTheDocument()
	})

	it('does not render the content if not passed as prop', () => {
		const {queryByText, getByRole} = render(
			<Tooltip>
				<button>Hover me</button>
			</Tooltip>,
		)
		fireEvent.mouseOver(getByRole('button'))
		expect(queryByText('This is a tooltip')).not.toBeInTheDocument()
	})

	it('shows the tooltip on hover if showOnHover prop is set to true', () => {
		const content = 'This is a tooltip'
		const {getByText, getByRole} = render(
			<Tooltip
				content={content}
				showOnHover
			>
				<button>Hover me</button>
			</Tooltip>,
		)
		fireEvent.mouseOver(getByRole('button'))
		expect(getByText(content)).toBeVisible()
	})

	it('does not show the tooltip on hover if showOnHover prop is set to false', () => {
		const content = 'This is a tooltip'
		const {queryByText, getByRole} = render(
			<Tooltip
				content={content}
				showOnHover={false}
			>
				<button>Hover me</button>
			</Tooltip>,
		)
		fireEvent.mouseOver(getByRole('button'))
		expect(queryByText(content)).not.toBeInTheDocument()
	})

	it('shows the tooltip on click if showOnClick prop is set to true', () => {
		const content = 'This is a tooltip'
		const {getByText, getByRole} = render(
			<Tooltip
				content={content}
				showOnClick
			>
				<button>Click me</button>
			</Tooltip>,
		)
		fireEvent.click(getByRole('button'))
		expect(getByText(content)).toBeVisible()
	})

	it('does not show the tooltip on click if showOnClick prop is set to false', () => {
		const content = 'This is a tooltip'
		const {queryByText, getByRole} = render(
			<Tooltip
				content={content}
				showOnClick={false}
			>
				<button>Click me</button>
			</Tooltip>,
		)
		fireEvent.click(getByRole('button'))
		expect(queryByText(content)).not.toBeInTheDocument()
	})
})