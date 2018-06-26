/* @flow */
import arrayEach from 'fast-loops/lib/arrayEach'
import objectEach from 'fast-loops/lib/objectEach'
import { RULE_TYPE } from 'fela-utils'

import rehydrateSupportRules from './rehydrateSupportRules'
import rehydrateRules from './rehydrateRules'

import render from '../render'

import type { DOMRenderer } from '../../../../../flowtypes/DOMRenderer'

// rehydration (WIP)
// TODO: static, keyframe, font
export default function rehydrate(renderer: DOMRenderer): void {
  arrayEach(document.querySelectorAll('[data-fela-type]'), node => {
    const rehydrationAttribute =
      node.getAttribute('data-fela-rehydration') || -1
    const rehydrationIndex =
      renderer.uniqueRuleIdentifier || parseInt(rehydrationAttribute, 10)

    // skip rehydration if no rehydration index is set
    // this index is set to -1 if something blocks rehydration
    if (rehydrationIndex !== -1) {
      const type = node.getAttribute('data-fela-type') || ''
      const media = node.getAttribute('media') || ''
      const support = node.getAttribute('data-fela-support')
      const css = node.textContent

      renderer.uniqueRuleIdentifier = rehydrationIndex

      if (type === RULE_TYPE) {
        if (support) {
          rehydrateSupportRules(css, media, renderer.cache)
        } else {
          rehydrateRules(css, media, '', renderer.cache)
        }
      }
    }
  })

  render(renderer)
}
