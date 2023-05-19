/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a**2 + b**2 = c**2
 * For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

function pythagorasTripletProduct(sum: number): number | void {
	function isPythagorasTriplet(a: number, b: number, c: number): boolean {
		if (a >= b || b >= c) return false;
		return (a**2 + b**2) == c**2;
	}

	for (let z = 1; z < sum; z++) {
		for (let y = 1; y < z; y++) {
			for (let x = 1; x < y; x++) {
				const total = [x, y, z].reduce(function(accumulator, a) {
					return accumulator + a;
				}, 0);

				if (isPythagorasTriplet(x, y, z) && total === sum) return x * y * z;
			}
		}
	}
}

console.log(pythagorasTripletProduct(1000));