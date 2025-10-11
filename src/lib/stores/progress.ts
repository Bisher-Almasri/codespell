import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface LessonProgress {
	id: string;
	moduleId: string;
	isCompleted: boolean;
	progress: number;
	completedAt?: Date;
	timeSpent?: number; 
}

export interface ModuleProgress {
	id: string;
	completedLessons: number;
	totalLessons: number;
	unlockedAt?: Date;
}

export interface UserProgress {
	lessons: Record<string, LessonProgress>;
	modules: Record<string, ModuleProgress>;
	totalTimeSpent: number;
	currentStreak: number;
	lastActivityDate?: Date;
	achievements: string[];
}


const defaultProgress: UserProgress = {
	lessons: {},
	modules: {},
	totalTimeSpent: 0,
	currentStreak: 0,
	achievements: []
};


function loadProgress(): UserProgress {
	if (!browser) return defaultProgress;
	
	try {
		const stored = localStorage.getItem('mystical-progress');
		if (stored) {
			const parsed = JSON.parse(stored);
			
			if (parsed.lastActivityDate) {
				parsed.lastActivityDate = new Date(parsed.lastActivityDate);
			}
			Object.values(parsed.lessons || {}).forEach((lesson: any) => {
				if (lesson.completedAt) {
					lesson.completedAt = new Date(lesson.completedAt);
				}
			});
			Object.values(parsed.modules || {}).forEach((module: any) => {
				if (module.unlockedAt) {
					module.unlockedAt = new Date(module.unlockedAt);
				}
			});
			return { ...defaultProgress, ...parsed };
		}
	} catch (error) {
		console.error('Failed to load progress:', error);
	}
	
	return defaultProgress;
}


function saveProgress(progress: UserProgress) {
	if (!browser) return;
	
	try {
		localStorage.setItem('mystical-progress', JSON.stringify(progress));
	} catch (error) {
		console.error('Failed to save progress:', error);
	}
}


export const userProgress = writable<UserProgress>(loadProgress());


if (browser) {
	userProgress.subscribe(saveProgress);
}


export const progressActions = {
	
	completeLesson(moduleId: string, lessonId: string, timeSpent: number = 0) {
		userProgress.update(progress => {
			const lessonKey = `${moduleId}-${lessonId}`;
			
			
			progress.lessons[lessonKey] = {
				id: lessonId,
				moduleId,
				isCompleted: true,
				progress: 100,
				completedAt: new Date(),
				timeSpent
			};
			
			
			if (!progress.modules[moduleId]) {
				progress.modules[moduleId] = {
					id: moduleId,
					completedLessons: 0,
					totalLessons: 0
				};
			}
			
			
			const moduleCompletedLessons = Object.values(progress.lessons)
				.filter(lesson => lesson.moduleId === moduleId && lesson.isCompleted)
				.length;
			
			progress.modules[moduleId].completedLessons = moduleCompletedLessons;
			
			
			progress.totalTimeSpent += timeSpent;
			
			
			const today = new Date();
			const lastActivity = progress.lastActivityDate;
			
			if (!lastActivity || !isSameDay(today, lastActivity)) {
				if (lastActivity && isConsecutiveDay(today, lastActivity)) {
					progress.currentStreak += 1;
				} else if (!lastActivity || !isConsecutiveDay(today, lastActivity)) {
					progress.currentStreak = 1;
				}
				progress.lastActivityDate = today;
			}
			
			
			checkAchievements(progress);
			
			return progress;
		});
	},
	
	
	updateLessonProgress(moduleId: string, lessonId: string, progressPercent: number) {
		userProgress.update(progress => {
			const lessonKey = `${moduleId}-${lessonId}`;
			
			if (!progress.lessons[lessonKey]) {
				progress.lessons[lessonKey] = {
					id: lessonId,
					moduleId,
					isCompleted: false,
					progress: 0
				};
			}
			
			progress.lessons[lessonKey].progress = Math.max(
				progress.lessons[lessonKey].progress,
				progressPercent
			);
			
			
			if (progressPercent >= 100 && !progress.lessons[lessonKey].isCompleted) {
				progress.lessons[lessonKey].isCompleted = true;
				progress.lessons[lessonKey].completedAt = new Date();
			}
			
			return progress;
		});
	},
	
	
	setModuleLessonCount(moduleId: string, totalLessons: number) {
		userProgress.update(progress => {
			if (!progress.modules[moduleId]) {
				progress.modules[moduleId] = {
					id: moduleId,
					completedLessons: 0,
					totalLessons
				};
			} else {
				progress.modules[moduleId].totalLessons = totalLessons;
			}
			return progress;
		});
	},
	
	
	resetProgress() {
		userProgress.set(defaultProgress);
	},
	
	
	getLessonProgress(moduleId: string, lessonId: string): LessonProgress | null {
		let result: LessonProgress | null = null;
		userProgress.subscribe(progress => {
			const lessonKey = `${moduleId}-${lessonId}`;
			result = progress.lessons[lessonKey] || null;
		})();
		return result;
	},
	
	
	getModuleProgress(moduleId: string): ModuleProgress | null {
		let result: ModuleProgress | null = null;
		userProgress.subscribe(progress => {
			result = progress.modules[moduleId] || null;
		})();
		return result;
	}
};


function isSameDay(date1: Date, date2: Date): boolean {
	return date1.toDateString() === date2.toDateString();
}

function isConsecutiveDay(date1: Date, date2: Date): boolean {
	const diffTime = Math.abs(date1.getTime() - date2.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays === 1;
}

function checkAchievements(progress: UserProgress) {
	const achievements = progress.achievements;
	
	
	const totalCompleted = Object.values(progress.lessons).filter(l => l.isCompleted).length;
	if (totalCompleted >= 1 && !achievements.includes('first-spell')) {
		achievements.push('first-spell');
	}
	
	
	const completedModules = Object.values(progress.modules).filter(m => 
		m.completedLessons >= m.totalLessons && m.totalLessons > 0
	).length;
	if (completedModules >= 1 && !achievements.includes('module-master')) {
		achievements.push('module-master');
	}
	
	
	if (progress.currentStreak >= 7 && !achievements.includes('week-warrior')) {
		achievements.push('week-warrior');
	}
	if (progress.currentStreak >= 30 && !achievements.includes('month-mage')) {
		achievements.push('month-mage');
	}
	
	
	if (progress.totalTimeSpent >= 60 && !achievements.includes('hour-apprentice')) {
		achievements.push('hour-apprentice');
	}
	if (progress.totalTimeSpent >= 600 && !achievements.includes('ten-hour-adept')) {
		achievements.push('ten-hour-adept');
	}
}


export const achievements = {
	'first-spell': {
		title: 'First Spell Cast',
		description: 'Complete your first lesson',
		icon: '✨'
	},
	'module-master': {
		title: 'Module Master',
		description: 'Complete an entire module',
		icon: '🏆'
	},
	'week-warrior': {
		title: 'Week Warrior',
		description: 'Maintain a 7-day learning streak',
		icon: '🔥'
	},
	'month-mage': {
		title: 'Month Mage',
		description: 'Maintain a 30-day learning streak',
		icon: '🌟'
	},
	'hour-apprentice': {
		title: 'Hour Apprentice',
		description: 'Spend 1 hour learning',
		icon: '⏰'
	},
	'ten-hour-adept': {
		title: 'Ten Hour Adept',
		description: 'Spend 10 hours learning',
		icon: '📚'
	}
};