import {describe, expect, test} from "@jest/globals";
import {isPythagorasTriplet, pythagorasTripletProduct, pythagorasTripletSum} from "./index";

describe("Special Pythagoras triplet", () => {
	test("Get pythagoras triplet whose sum of squares is equal to 1000", () => {
		expect(pythagorasTripletSum(1000)).toStrictEqual([200, 375, 425]);
	});

	test("Check for a pythagoras triplet", () => {
		expect(isPythagorasTriplet([200, 375, 425])).toBe(true);
	});

	test("Get product of pythagoras triplet whose sum of squares is equal to 1000", () => {
		expect(pythagorasTripletProduct(1000)).toBe(31875000);
	});
});