export function findDivisors(target: number): Array<number> {
	const divisors: Array<number> = [];
	for (let i: number = 2; i < Math.abs(Math.floor(target / 2)) + 1; i++) {
		if (target % i === 0) {
			divisors.push(i);
		}
	}
	return divisors;
}

export const random: {
	pure: (min: number, max: number) => number;
	dni: (min: number, max: number) => number;
	composite: (min: number, max: number) => number;
	choice: (iter: any[]) => any;
} = {
	pure: (min: number, max: number): number => {
		return Math.floor(Math.random() * (max - min) + min);
	},
	dni: (min: number, max: number): number => {
		let rand: number = Math.floor(Math.random() * (max - min) + min);
		while (rand >= -1 && rand <= 1) {
			rand = Math.floor(Math.random() * (max - min) + min);
		}
		return rand;
	},
	composite: (min: number, max: number): number => {
		let rand: number = Math.floor(Math.random() * (max - min) + min);
		while ((rand >= -2 && rand <= 2) || findDivisors(rand).length === 0) {
			rand = Math.floor(Math.random() * (max - min) + min);
		}
		return rand;
	},
	choice: (iter: Array<any>): any => {
		return iter[Math.floor(Math.random() * iter.length)];
	}
};
