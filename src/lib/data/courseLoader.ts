export interface Lesson {
	id: string;
	title: string;
	description: string;
	duration: string;
	difficulty: 'Apprentice' | 'Adept' | 'Master';
	isCompleted: boolean;
	isLocked: boolean;
	progress?: number;
	type: 'article' | 'guide' | 'challenge' | 'exercise';
	content?: string;
	contentFile?: string;
	codeExamples?: string[];
	exercises?: string[];
}

export interface Module {
	id: string;
	title: string;
	description: string;
	totalLessons: number;
	completedLessons: number;
	estimatedTime: string;
	difficulty: 'Apprentice' | 'Adept' | 'Master';
	isUnlocked: boolean;
	lessons: Lesson[];
	color: string;
}

export interface CourseData {
	modules: Module[];
}


async function loadLessonContent(contentFile: string): Promise<string> {
	try {
		const response = await fetch(`/content/${contentFile}`);
		if (!response.ok) {
			throw new Error(`Failed to load content: ${response.statusText}`);
		}
		return await response.text();
	} catch (error) {
		console.error(`Error loading content file ${contentFile}:`, error);
		return `# Content Loading Error\n\nFailed to load content for this lesson. Please try again later.`;
	}
}


export async function loadCourses(): Promise<Module[]> {
	try {
		
		const coursesResponse = await fetch('/data/courses.json');
		const coursesData: CourseData = await coursesResponse.json();
		
		
		const pythonResponse = await fetch('/data/python-course.json');
		const pythonModule: Module = await pythonResponse.json();
		
		
		const allModules = [...coursesData.modules, pythonModule];
		
		
		for (const module of allModules) {
			for (const lesson of module.lessons) {
				if (lesson.contentFile && !lesson.content) {
					lesson.content = await loadLessonContent(lesson.contentFile);
				}
			}
		}
		
		return allModules;
	} catch (error) {
		console.error('Error loading courses:', error);
		
		return [{
			id: 'error',
			title: 'Loading Error',
			description: 'Failed to load course data',
			totalLessons: 0,
			completedLessons: 0,
			estimatedTime: '0 min',
			difficulty: 'Apprentice',
			isUnlocked: true,
			color: 'from-red-900 to-red-800',
			lessons: []
		}];
	}
}