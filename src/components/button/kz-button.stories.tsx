export default {
	title: 'Button',
}

export const defaultComponent = () => {
	let myComponent = document.createElement('kz-button')
	myComponent.label = 'example';

	return myComponent
}

export const primaryComponent = () => {
	let myComponent = document.createElement('kz-button')
	myComponent.label = 'example';
	myComponent.variant = 'primary'

	return myComponent
}

export const fullwidthComponent = () => {
	let myComponent = document.createElement('kz-button')
	myComponent.isFullWidth = true;
	myComponent.label = 'example';

	return myComponent
}

