export default {
	title: 'box',
}

export const defaultComponent = () => `
	<kz-box p="3"></kz-box>
`;

export const primaryComponent = () => `
	<kz-box>
		<h1>Inserted into Box</h1>
		<kz-button variant="primary" label="example" is-full-width="true">
	</kz-box>
`

