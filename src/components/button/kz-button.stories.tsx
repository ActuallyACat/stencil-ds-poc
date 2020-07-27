export default {
	title: 'Button',
}

export const defaultComponent = (): string => {
	return `
		<kz-button label="example"></kz-button>
	`
}

export const fullwidthComponent = (): string => {
	return `
		<kz-button label="example" is-full-width="true"></kz-button>
	`
}

export const primaryComponent = (): string => {
	return `
		<kz-button label="example" variant="primary"></kz-button>
	`
}


