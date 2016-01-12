import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import { QuoteButton } from './QuoteButton'
expect.extend(expectJSX)

describe('QuoteButton', () => {

  it('should render button with text value', () => {
    const renderer = TestUtils.createRenderer()
    const buttonText = 'View Quote'
    const func = () => {}
    renderer.render(
      <QuoteButton
        text={ buttonText }
        showQuote={func} />
    )
    const actual = renderer.getRenderOutput()
    const expected = buttonText
    expect(actual).toIncludeJSX(expected)
  })
})
