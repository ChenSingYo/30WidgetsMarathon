<template>
	<div class="flex justify-center min-h-screen w-full">
		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>
