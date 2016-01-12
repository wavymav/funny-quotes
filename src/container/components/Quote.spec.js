import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import { Quote } from './Quote'
expect.extend(expectJSX)

describe('Quote', () => {

  it('should render quote and author text values', () => {
    const renderer = TestUtils.createRenderer()
    const quote = 'Life expectancy would grow by leaps and bounds if green vegetables smelled as good as bacon.'
    const author = 'Doug Larson'
    renderer.render(
      <Quote
        quoteText={ quote }
        quoteAuthor={ author } />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <div className="quote">
        <p>&quot;{ quote }&quot;</p>
        <i>&mdash; { author }</i>
      </div>
    )
    expect(actual).toIncludeJSX(expected)
  })

  it('should render quote and author as blank values', () => {
    const renderer = TestUtils.createRenderer()
    const quote = ''
    const author = ''
    renderer.render(
      <Quote
        quoteText={ quote }
        quoteAuthor={ author } />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <div className="quote">
      </div>
    )
    expect(actual).toIncludeJSX(expected)
  })
})
