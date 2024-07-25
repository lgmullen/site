<script lang="ts">
	export let bg_color: String;
	export let text: String;
	export let color0: String;
	export let color1: String;
	export let color2: String;
	export let color3: String;
	const digit0 = text[0];
	const digit1 = text[1];
	const digit2 = text[2];
	const digit3 = text[3];
</script>

<td class="banner" style="text-align: center; background-color:{bg_color};">
	<p><span style="font-size:16px;"><span style="color:{color0};">{digit0}</span></span></p>
	<p><span style="font-size:16px;"><span style="color:{color1};">{digit1}</span></span></p>
	<p><span style="font-size:16px;"><span style="color:{color2};">{digit2}</span></span></p>
	<p><span style="font-size:16px;"><span style="color:{color3};">{digit3}</span></span></p>
</td>
