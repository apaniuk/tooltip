interface EventListener<T> {
	callback: (event: T) => void
	eventType: string
	name: string
}

export class EventListenerService {
	private listeners: EventListener<any>[] = []

	public bind<T>(name: string, eventType: string, callback: (event: Event) => void): void {
		if (this.listeners.findIndex(i => i.name === name) === -1) {
			this.listeners.push({
				name,
				callback,
				eventType,
			})
			window.addEventListener(eventType, callback)
		}
	}

	public unbind(name: string): void {
		const listener = this.listeners.find(i => i.name === name)
		if (listener) {
			const {eventType, callback} = listener
			window.removeEventListener(eventType, callback)
		}

		this.listeners = this.listeners.filter(listener => listener.name !== name)
	}

	public unbindAll(): void {
		this.listeners.forEach(({eventType, callback}) => window.removeEventListener(eventType, callback))
		this.listeners = []
	}
}
