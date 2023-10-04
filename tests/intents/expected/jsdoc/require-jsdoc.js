'use strict'

class RequireJsdoc { // ❌ require.ClassDeclaration:true of `require-jsdoc`
  constructor () { // ❌ checkConstructors:true, require.exemptEmptyConstructors:false of `require-jsdoc`
    this.alpha = 1
    this.beta = null

    this.gamma = null
  }

  firstMethod () { // ❌ require.MethodDefinition:true of `require-jsdoc`
    return this.alpha
  }

  get accessorBeta () { // ❌ require.checkGetters:true of `require-jsdoc`
    return this.beta
  }

  set accessorBeta (value) { // ❌ require.checkSetters:true of `require-jsdoc`
    this.beta = value
  }
}

function alphaFunc () { // ❌ require.FunctionDeclaration:true of `require-jsdoc`
  return 999
}

module.exports = {
  RequireJsdoc,
  alphaFunc,
}
