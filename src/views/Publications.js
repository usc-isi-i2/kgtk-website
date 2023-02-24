import React, { useEffect, useState } from 'react'

import { parseBibFile, normalizeFieldValue } from 'bibtex'

import Content from '../components/Content'
import references from '../content/references.bib'


const Publications = () => {

  const [publications, setPublications] = useState()

  useEffect(() => {

    fetch(references)
      .then(refs => refs.text())
      .then(text => {
        setPublications(
          parseBibFile(text)
        )
      })

  }, [])

  const renderPublications = () => {
    if ( !publications ) { return }
    return Object.keys(publications.entries$).map(key => <h1>{key}</h1>)
  }

  return (
    <Content>
      <h1>Publications</h1>
      <hr />
      {renderPublications()}
    </Content>
  )
}


export default Publications
