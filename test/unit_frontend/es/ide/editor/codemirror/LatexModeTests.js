import CodeMirror from 'codemirror'

import { init } from 'Src/rich-text'

describe('stuff', () => {
  it('does stuff', () => {
    expect(1).to.equal(1)
    expect(CodeMirror).to.equal(CodeMirror)
    expect(true).to.be.true
  })

  it('inits', () => {
    expect(init().getValue()).to.equal('')
  })
})
