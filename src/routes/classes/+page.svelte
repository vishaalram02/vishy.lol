<script>
	const courses = [
		{
			name: '💻 Computer Science',
			classes: [
        { name: '[Fall 23] Operating Systems Engineering', number: '6.1810'},
        { name: '[Fall 23] Software Performance Engineering', number: '6.1060'},
				{ name: 'Distributed Systems', number: '6.5800' },
				{ name: 'Computer Systems Engineering', number: '6.1800' },
				{ name: 'Assembly and C', number: '6.1900' },
				{ name: '[Grader] Design and Analysis of Algorithms', number: '6.1220' }
			]
		},
		{
			name: '✖️ Math',
			classes: [
				{ name: 'Elliptic Curves', number: '18.783' },
				{ name: 'Algebraic Combinatorics', number: '18.212' },
				{ name: 'Combinatorial Theory', number: '18.217' },
				{ name: 'Statistics for Applications', number: '18.650' },
				{ name: 'Abstract Algebra', number: '18.701' }
			]
		},
		{
			name: '🎨 Humanities',
			classes: [
				{ name: 'Chinese I-V', number: '21G.101-21G.105' },
				{ name: 'Chinese Calligraphy', number: '21G.111' },
				{ name: 'Infant and Early Childhood Cognition', number: '9.85' },
				{ name: 'Computational Psycholinguistics', number: '9.19' },
				{ name: 'Introduction to Western Music', number: '21M.011' }
			]
		}
	];
</script>

<section class="layout-md">
	<p class="text-2xl mb-5">some of my favorite classes! 📚</p>
	<hr>
	{#each courses as subject (subject)}
		<div class="hover:bg-amber-100 transition-transform hover:scale-105 p-4 rounded-lg transition-colors">
			<p class="text-xl">{subject.name}</p>
			<div class="ml-10 text-lg">
				<ul class="list-disc">
					{#each subject.classes as course (course)}
						<li>
							{course.name}
							<span class="float-right text-neutral-500 sm:hidden">{course.number}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<hr>
	{/each}
</section>
