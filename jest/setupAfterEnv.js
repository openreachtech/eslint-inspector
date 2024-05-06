'use strict'

const {
  Retrier,
} = require('@humanwhocodes/retry')

const retryFunc = Retrier.prototype.retry

Retrier.prototype.retry = async function retry (func) {
  return retryFunc.call(
    this,
    async () => func()
  )
}
