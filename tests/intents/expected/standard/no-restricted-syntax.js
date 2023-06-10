'use strict'

const array = [1, 3, 5]

let sum = 0
array.forEach(it => {
  sum += it
})

let xxx = 0
for (let i = 0; i < 10; i++) {
  xxx += i
}

let j = 0
while (j++ < 100) {
  xxx += j
}

let k = 0
do {
  xxx += k
} while (k++ < 100)

const object = {
  aaa: 1,
  bbb: 2,
}

let total = 0
for (const key in object) {
  total += object[key]
}
for (const value of array) {
  total += value
}

test('xxx', () => {
  if (it) {
    return 'same'
  }

  expect(true)
    .toBe(true)
})

module.exports = xxx + sum + total
