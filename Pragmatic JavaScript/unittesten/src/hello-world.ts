
class Calculator {
	add(...getallen: number[]) {
		return getallen.reduce((prev, curr) => prev + curr);
	}
}
