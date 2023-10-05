'use strict'

describe('Jest Sample', () => {
  test('should be called', () => {
    const logSpy = jest.spyOn(console, 'log')

    expect(logSpy)
      .toBeCalledWith('Hey!') // ❌ Never use alias matcher
  })
})
