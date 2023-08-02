<script>
	import { page } from '$app/stores';
</script>

<div class="layout-md">
	<div class="pt-14 pb-40 sm:pt-20 sm:pb-80 text-xl flex justify-center items-center">
		<span class="font-medium">{$page.status}</span>
		<div class="mx-4 h-8 border-l border-black" />
		{$page.error?.message}
	</div>
</div>
