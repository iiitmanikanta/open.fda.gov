import React from 'react'

import ContentWrapper from '../../../components/ContentWrapper'

import content from './_content.yaml'
import explorers from './_explorers.yaml'
import infographics from './_infographics.yaml'
import fields from './_fields.yaml'
import meta from './_meta.yaml'

export default () => (
  <ContentWrapper
    content={content}
    explorers={explorers}
    infographics={infographics}
    fields={fields}
    meta={meta}
  />
)
