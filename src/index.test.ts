import { describe, expect, test } from '@jest/globals'
import { time } from '.'

describe('Test the time Library', () => {
	test('test Time.Sub', () => {
		const src = new time.Time(new Date(0))
		const dest = new time.Time(new Date(1000))
		const actual = src.Sub(dest)
		const expected = time.Second
		expect(actual).toStrictEqual(expected)
	})

	test('test Time.Add', () => {
		const x = new time.Time(new Date(0))
		const actual = x.Add(time.Second)
		const expected = new time.Time(new Date(1000))
		expect(actual).toStrictEqual(expected)
	})
})
