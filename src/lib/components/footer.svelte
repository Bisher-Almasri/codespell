<script lang="ts">
	import { Sparkles, Mail, MapPin, Github, Twitter, Linkedin, Heart } from 'lucide-svelte';
	import { Button } from './ui/button';
</script>

<footer class="border-t border-purple-500/30 bg-black/60 pt-16 pb-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div class="lg:col-span-2">
				<div class="mb-4 flex items-center space-x-2">
					<div class="relative">
						<Sparkles class="h-8 w-8 text-purple-400" />
						<!--<div
							class="absolute -top-1 -right-1 h-3 w-3 animate-ping rounded-full bg-blue-400 opacity-75"
						></div>-->
					</div>
					<span
						class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-xl text-transparent"
					>
						CodeSpell Academy
					</span>
				</div>
				<p class="mb-6 max-w-md text-purple-200">
					Transform your coding journey into a magical adventure. Join thousands of aspiring
					developers who have mastered the art of programming through our enchanting curriculum. (If
					you are here from siege i am planning on making this real)
				</p>
				<div class="space-y-2 text-purple-300">
					<div class="flex items-center space-x-2">
						<Mail class="h-4 w-4" />
						<span>academy@codespell.dev</span>
					</div>
					<div class="flex items-center space-x-2">
						<MapPin class="h-4 w-4" />
						<span>Cloud Castle, Digital Realm</span>
					</div>
				</div>
			</div>

			<div>
				<h3 class="mb-4 text-white">Quick Spells</h3>
				<ul class="space-y-2 text-purple-300">
					<li><a href="#courses" class="transition-colors hover:text-purple-200">Spellbooks</a></li>
					<li><a href="#preview" class="transition-colors hover:text-purple-200">Live Magic</a></li>
					<li>
						<a href="#features" class="transition-colors hover:text-purple-200">Academy Powers</a>
					</li>
					<!--<li><a href="#" class="transition-colors hover:text-purple-200">Pricing</a></li>
					<li><a href="#" class="transition-colors hover:text-purple-200">About Us</a></li>-->
				</ul>
			</div>

			<div>
				<h3 class="mb-4 text-white">Magic Support</h3>
				<ul class="space-y-2 text-purple-300">
					<li>
						<button type="button" class="text-left transition-colors hover:text-purple-200"
							>Help Center</button
						>
					</li>
					<li>
						<button type="button" class="text-left transition-colors hover:text-purple-200"
							>Community</button
						>
					</li>
					<li>
						<button type="button" class="text-left transition-colors hover:text-purple-200"
							>Discord</button
						>
					</li>
					<li>
						<button type="button" class="text-left transition-colors hover:text-purple-200"
							>Contact</button
						>
					</li>
					<li>
						<button type="button" class="text-left transition-colors hover:text-purple-200"
							>Bug Reports</button
						>
					</li>
				</ul>
			</div>
		</div>

		<div
			class="mb-8 rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6"
		>
			<div class="flex flex-col items-center justify-between md:flex-row">
				<div class="mb-4 md:mb-0">
					<h3 class="mb-2 text-lg text-white">Stay Updated with Magic</h3>
					<p class="text-purple-200">
						Get the latest spells, updates, and coding magic delivered to your inbox.
					</p>
				</div>
				<div class="flex w-full space-x-2 md:w-auto">
					<input
						type="email"
						placeholder="Enter your magical email"
						class="flex-1 rounded-lg border border-purple-500/30 bg-black/40 px-4 py-2 text-white placeholder-purple-400 focus:border-purple-400 focus:outline-none md:w-64"
					/>
					<Button
						class="border-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
					>
						Subscribe
					</Button>
				</div>
			</div>
		</div>

		<div
			class="flex flex-col items-center justify-between border-t border-purple-500/30 pt-8 md:flex-row"
		>
			<div class="mb-4 flex items-center space-x-4 md:mb-0">
				<button type="button" class="text-purple-400 transition-colors hover:text-purple-300">
					<Github class="h-5 w-5" />
				</button>
				<button type="button" class="text-purple-400 transition-colors hover:text-purple-300">
					<Twitter class="h-5 w-5" />
				</button>
				<button type="button" class="text-purple-400 transition-colors hover:text-purple-300">
					<Linkedin class="h-5 w-5" />
				</button>
			</div>

			<div class="text-center md:text-right">
				<p class="flex items-center justify-center space-x-2 text-purple-300 md:justify-end">
					<span>Made with</span>
					<Heart class="h-4 w-4 animate-pulse text-pink-400" />
					<span>by CodeSpell Academy</span>
				</p>
				<p class="mt-1 text-sm text-purple-400">© 2025 CodeSpell Academy. All rights reserved.</p>
			</div>
		</div>

		<div class="absolute bottom-4 left-4 opacity-20">
			<div class="h-2 w-2 animate-pulse rounded-full bg-purple-400"></div>
		</div>
		<div class="absolute right-8 bottom-8 opacity-20">
			<div class="h-1 w-1 animate-ping rounded-full bg-blue-400"></div>
		</div>
	</div>
</footer>
