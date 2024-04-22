import { random } from '$lib/number';

export function preprocess(equation: string): string {
	return equation
		.replaceAll('+-', '-')
		.replaceAll('--', '+')
		.replaceAll('*', '×');
}

export function trySwap(equation: string): string {
	const split: string[] = equation.split('=');
	return random.pure(0, 2) === 1 ? `${split[0]}=${split[1]}` : `${split[1]}=${split[0]}`;
}