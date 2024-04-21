import { preprocess, trySwap } from '$lib/processing';
import { random, findDivisors } from '$lib/number';

const vars: Array<string> = 'abcdghkmnpqrstuvwxyz'.split("");

export function add(lbound: number, ubound: number): {
	equation: string;
	variable: string;
	ans: number;
} {
	const variable: string = random.choice(vars);
	const targetAns: number = random.pure(lbound, ubound);
	const addCoefficient: number = random.dni(lbound, ubound);
	const raw: string = `${variable}+${addCoefficient}=${targetAns+addCoefficient}`;
	return {
		equation: preprocess(trySwap(raw)),
		variable: variable,
		ans: targetAns
	}
}

export function mul(lbound: number, ubound: number): {
	equation: string;
	variable: string;
	ans: number;
} {
	const variable: string = random.choice(vars);
	const targetAns: number = random.pure(lbound, ubound);
	const mulCoefficient: number = random.dni(lbound, ubound);
	const raw: string = `${mulCoefficient}*${variable}=${targetAns*mulCoefficient}`;
	return {
		equation: preprocess(trySwap(raw)),
		variable: variable,
		ans: targetAns
	}
}

export function div(lbound: number, ubound: number): {
	equation: string;
	variable: string;
	ans: number;
} {
	const variable: string = random.choice(vars);
	const targetAns: number = random.composite(lbound*2, ubound*2);
	const divCoefficient: number = random.choice(findDivisors(targetAns));
	const raw: string = `\\frac{${variable}}{${divCoefficient}}=${targetAns/divCoefficient}`;
	return {
		equation: preprocess(trySwap(raw)),
		variable: variable,
		ans: targetAns
	}
}

export function addMul(lbound: number, ubound: number): {
	equation: string;
	variable: string;
	ans: number;
} {
	const variable: string = random.choice(vars);
	const targetAns: number = random.pure(lbound, ubound);
	const mulCoefficient: number = random.dni(lbound, ubound);
	const addCoefficient: number = random.dni(lbound, ubound);
	const raw: string = `${mulCoefficient}*${variable}+${addCoefficient}=${mulCoefficient*targetAns+addCoefficient}`;
	return {
		equation: preprocess(trySwap(raw)),
		variable: variable,
		ans: targetAns
	}
}

export function addDiv(lbound: number, ubound: number): {
	equation: string;
	variable: string;
	ans: number;
} {
	const variable: string = random.choice(vars);

	let targetAns: number = random.composite(lbound*2, ubound*2);
	let addCoefficient: number = random.dni(lbound, ubound);
	let divisors: number[] = findDivisors(targetAns + addCoefficient);
	while (divisors.length === 0) {
		targetAns = random.composite(lbound*2, ubound*2);
		addCoefficient = random.dni(lbound, ubound);
		divisors = findDivisors(targetAns + addCoefficient);
	}

	const divCoefficient: number = random.choice(divisors);
	const raw: string = `\\frac{${variable}+${addCoefficient}}{${divCoefficient}}=${(targetAns+addCoefficient)/divCoefficient}`;
	return {
		equation: preprocess(trySwap(raw)),
		variable: variable,
		ans: targetAns
	}
}

export function distrib(lbound: number, ubound: number): {
	equation: string;
	variable: string;
	ans: number;
} {
	const variable: string = random.choice(vars);
	const targetAns: number = random.pure(lbound, ubound);
	const addCoefficient: number = random.dni(lbound, ubound);
	const distCoefficient: number = random.dni(lbound, ubound);
	const raw: string = `${distCoefficient}*(${variable}+${addCoefficient})=${distCoefficient*(targetAns+addCoefficient)}`;
	return {
		equation: preprocess(trySwap(raw)),
		variable: variable,
		ans: targetAns
	}
}

