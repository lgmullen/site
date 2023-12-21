<script lang="ts">
	export let name: keyof typeof icons;
	export let width = '1rem';
	export let height = '1rem';
	export let stroke = '#000000';
	export let fill = '#000000';

	export let focusable: string | number | null | undefined = undefined;
	let icons = {
		delete: {
			viewBox: '0 0 24 24',
			svg: `
        <path d="M4 18L20 18"  stroke-width="2" stroke-linecap="round"/>
        <path d="M4 12L20 12"  stroke-width="2" stroke-linecap="round"/>
        <path d="M4 6L20 6"  stroke-width="2" stroke-linecap="round"/>`
		},
		cross: {
			viewBox: '6.5 2 11 16',
			svg: `<path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"/>`
		}
	} as const;
	let displayIcon = icons[name];
</script>

<svg
	class={$$props.class}
	{fill}
	{stroke}
	{focusable}
	{width}
	{height}
	viewBox={displayIcon?.viewBox}>{@html displayIcon.svg}</svg
>
