<template>
	<div>
		<div class="min-h-full pt-16 pb-12 flex flex-col bg-white">
			<div
				class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
			>
				<div class="py-16">
					<div class="text-center">
						<div v-if="error.statusCode === 404">
							<p
								class="text-sm font-semibold text-indigo-600 uppercase tracking-wide"
							>
								404 error
							</p>
							<h1
								class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
							>
								Page not found.
							</h1>
							<p class="mt-2 text-base text-gray-500">
								Sorry, we couldn’t find the page you’re looking for.
							</p>
						</div>
						<div v-else>
							<p
								class="text-sm font-semibold text-indigo-600 uppercase tracking-wide"
							>
								{{ error.statusCode }} error
							</p>
							<h1
								class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
							>
								Something went wrong.
							</h1>
							<p class="mt-2 text-base text-gray-500">
								Looks like something went wrong!
							</p>
						</div>
						<div class="mt-6">
							<a
								href="/"
								class="text-base font-medium text-indigo-600 hover:text-indigo-500"
								>Go back home<span aria-hidden="true"> &rarr;</span></a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['error'],
	};
</script>
