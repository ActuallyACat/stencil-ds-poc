export default {
	title: 'Button',
}

export const defaultComponent = () => {
	return `
		<kz-button label="example"></kz-button>
	`
}

export const fullwidthComponent = () => {
	return `
		<kz-button label="example" is-full-width="true"></kz-button>
	`
}

export const primaryComponent = () => {
	return `
		<kz-button label="example" variant="primary"></kz-button>
	`
}


