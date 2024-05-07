'use strict'

describe('Jest Sample', () => {
  test('should be consistent', () => {
    const actual = 'alpha'

    expect(actual === 'alpha')
      .toBe(true) // ❌ Prefer equality matcher
  })
})
