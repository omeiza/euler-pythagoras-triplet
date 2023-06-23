/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a**2 + b**2 = c**2
 * For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

export function isPythagorasTriplet([x, y, z]: number[]): boolean {
	if (x >= y || y >= z) return false;
	return (x**2 + y**2) == z**2;
}

export function pythagorasTripletProduct(sum: number): number | boolean {
	for (let z = 1; z < sum; z++) {
		for (let y = 1; y < z; y++) {
			for (let x = 1; x < y; x++) {
				const total = [x, y, z].reduce((accumulator, a) => {
					return accumulator + a;
				}, 0);

				if (isPythagorasTriplet([x, y, z]) && total === sum) return x * y * z;
			}
		}
	}

	return false;
}

export function pythagorasTripletSum(sum: number): number[] {
	for (let z = 1; z < sum; z++) {
		for (let y = 1; y < z; y++) {
			for (let x = 1; x < y; x++) {
				const total = [x, y, z].reduce((accumulator, a) => {
					return accumulator + a;
				}, 0);

				if (isPythagorasTriplet([x, y, z]) && total === sum) return [x, y, z];
			}
		}
	}

	return [];
}