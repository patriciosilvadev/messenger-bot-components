import { expect } from 'chai'

import { TemplateButton, ButtonUrl, ButtonPostback } from '../../../src'

describe('TemplateButton', function () {
  it('should work', function () {
    const json = (new TemplateButton('foo', [
      new ButtonUrl('bar', 'https://test.top'),
      new ButtonPostback('bar', 'PAYLOAD')
    ])).toJSON()

    expect(json).to.eql({
      attachment: {
        type: 'template',
        payload: {
          template_type: 'button',
          text: 'foo',
          buttons: [{
            type: 'web_url',
            title: 'bar',
            url: 'https://test.top'
          }, {
            type: 'postback',
            title: 'bar',
            payload: 'PAYLOAD'
          }]
        }
      }
    })
  })
})
