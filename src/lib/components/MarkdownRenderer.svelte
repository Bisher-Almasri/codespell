<script lang="ts">
	import { onMount } from 'svelte';
	import hljs from 'highlight.js/lib/core';
	import python from 'highlight.js/lib/languages/python';
	import javascript from 'highlight.js/lib/languages/javascript';
	import bash from 'highlight.js/lib/languages/bash';
	import json from 'highlight.js/lib/languages/json';
	import xml from 'highlight.js/lib/languages/xml';

	export let content: string = '';

	let renderedContent = '';

	hljs.registerLanguage('python', python);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('bash', bash);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('html', xml);
	hljs.registerLanguage('xml', xml);

	function parseMarkdown(text: string): string {
		let html = text;

		html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
			const language = lang || 'plaintext';
			let highlighted = code;

			if (hljs.getLanguage(language)) {
				try {
					highlighted = hljs.highlight(code.trim(), { language }).value;
				} catch (err) {
					console.warn('Syntax highlighting failed:', err);
					highlighted = hljs.highlightAuto(code.trim()).value;
				}
			} else {
				highlighted = hljs.highlightAuto(code.trim()).value;
			}

			return `
				<div class="bg-black/60 rounded-lg border border-purple-600/20 my-2 overflow-hidden">
					<div class="flex items-center justify-between px-3 py-1 bg-purple-900/20 border-b border-purple-600/20">
						<span class="text-xs text-purple-300 font-mono">${language}</span>
						<button class="text-xs text-gray-400 hover:text-purple-300 transition-colors copy-btn px-1.5 py-0.5 rounded hover:bg-purple-800/30" data-code="${encodeURIComponent(code.trim())}">
							Copy
						</button>
					</div>
					<pre class="p-3 overflow-x-auto"><code class="hljs text-sm">${highlighted}</code></pre>
				</div>
			`;
		});

		html = html.replace(
			/`([^`]+)`/g,
			'<code class="bg-purple-900/30 px-2 py-1 rounded text-purple-200 font-mono text-sm">$1</code>'
		);

		html = html.replace(
			/^# (.+)$/gm,
			'<h1 class="text-2xl text-purple-300 font-bold mb-3 mt-4 first:mt-0">$1</h1>'
		);
		html = html.replace(
			/^## (.+)$/gm,
			'<h2 class="text-xl text-purple-200 font-semibold mb-2 mt-4 first:mt-0">$1</h2>'
		);
		html = html.replace(
			/^### (.+)$/gm,
			'<h3 class="text-lg text-purple-100 font-medium mb-2 mt-3 first:mt-0">$1</h3>'
		);
		html = html.replace(
			/^#### (.+)$/gm,
			'<h4 class="text-base text-purple-50 font-medium mb-1 mt-2 first:mt-0">$1</h4>'
		);

		html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
		html = html.replace(/\*(.+?)\*/g, '<em class="text-purple-200 italic">$1</em>');

		html = html.replace(
			/\[([^\]]+)\]\(([^)]+)\)/g,
			'<a href="$2" class="text-purple-400 hover:text-purple-300 underline transition-colors" target="_blank" rel="noopener noreferrer">$1</a>'
		);

		html = html.replace(/^- (.+)$/gm, '<li class="ml-4 text-gray-300">$1</li>');

		html = html.replace(
			/^> (.+)$/gm,
			'<blockquote class="border-l-4 border-purple-600/50 pl-4 py-2 my-4 bg-purple-900/10 text-purple-200 italic">$1</blockquote>'
		);

		// html = html.replace(
		// 	/^(?!<[h1-6]|<ul|<ol|<li|<blockquote|<div|<pre)(.+)$/gm,
		// 	'<p class="text-gray-300 mb-3 leading-relaxed">$1</p>'
		// );

		// html = html.replace(/<p class="text-gray-300 mb-4 leading-relaxed"><\/p>/g, '');

		return html;
	}

	$: if (content) {
		try {
			renderedContent = parseMarkdown(content);
		} catch (error) {
			console.error('Markdown parsing error:', error);
			renderedContent = `<p class="text-red-400">Error parsing markdown content</p>`;
		}
	}

	function handleCopyClick(event: Event) {
		const target = event.target as HTMLElement;
		if (target.classList.contains('copy-btn')) {
			const code = decodeURIComponent(target.getAttribute('data-code') || '');
			navigator.clipboard
				.writeText(code)
				.then(() => {
					target.textContent = 'Copied!';
					setTimeout(() => {
						target.textContent = 'Copy';
					}, 2000);
				})
				.catch((err) => {
					console.error('Failed to copy:', err);
				});
		}
	}

	onMount(() => {
		document.addEventListener('click', handleCopyClick);

		return () => {
			document.removeEventListener('click', handleCopyClick);
		};
	});
</script>

<div class="prose prose-invert max-w-none">
	{@html renderedContent}
</div>

<style>
	:global(.hljs) {
		background: transparent !important;
		color: #e5e7eb;
	}

	:global(.hljs-keyword) {
		color: #c084fc;
		font-weight: bold;
	}

	:global(.hljs-string) {
		color: #34d399;
	}

	:global(.hljs-number) {
		color: #fbbf24;
	}

	:global(.hljs-comment) {
		color: #6b7280;
		font-style: italic;
	}

	:global(.hljs-function) {
		color: #60a5fa;
	}

	:global(.hljs-class) {
		color: #f472b6;
	}

	:global(.hljs-variable) {
		color: #e5e7eb;
	}

	:global(.hljs-built_in) {
		color: #a78bfa;
	}

	:global(.hljs-literal) {
		color: #fbbf24;
	}

	:global(.hljs-title) {
		color: #60a5fa;
		font-weight: bold;
	}

	:global(.hljs-params) {
		color: #e5e7eb;
	}

	:global(.hljs-attr) {
		color: #f472b6;
	}

	:global(.hljs-tag) {
		color: #c084fc;
	}

	:global(.hljs-name) {
		color: #60a5fa;
	}

	:global(.hljs-attribute) {
		color: #34d399;
	}

	/* Remove top margin from first element */
	:global(.prose > *:first-child) {
		margin-top: 0 !important;
	}
</style>
