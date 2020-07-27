export default {
	title: 'box',
}

export const defaultComponent = (): string => `
	<kz-box p="3">A simple box doesn't add styles to children</kz-box>
`;

export const primaryComponent = (): string => `
	<kz-box>
		<h1>Inserted into Box</h1>
		<kz-button variant="primary" label="example" is-full-width="true">
	</kz-box>
`

