import React, { useEffect, useState } from 'react'

import { parseBibFile, normalizeFieldValue } from 'bibtex'

import Search from '../components/Search'
import Content from '../components/Content'
import Publication from '../components/Publication'
import references from '../content/references.bib'


const Publications = () => {

  const [search, setSearch] = useState('')
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

  const handleUpdate = search => {
    setSearch(search)
  }

  const getAuthors = entry => {
    const authors = entry.getField('author')
    if ( !authors ) { return '' }
    return authors.authors$.map((author, i) => (
      author.firstNames
        .concat(author.vons)
        .concat(author.lastNames)
        .concat(author.jrs)
        .join(' ') + `${(i < authors.authors$.length - 1) ? ', ' : ''}`
    ))
  }

  const formatBibtex = entry => {
    let formatted =
`@${entry.type}{${entry._id},`
    const title = entry.getFieldAsString('title')
    if ( !!title ) {
      formatted += `
  title={${title}},`
    }
    const author = entry.getFieldAsString('author')
    if ( !!author ) {
      formatted += `
  author={${author}},`
    }
    const booktitle = entry.getFieldAsString('booktitle')
    if ( !!booktitle ) {
      formatted += `
  booktitle={${booktitle}},`
    }
    const pages = entry.getFieldAsString('pages')
    if ( !!pages ) {
      formatted += `
  pages={${pages}},`
    }
    const year = entry.getFieldAsString('year')
    if ( !!year ) {
      formatted += `
  year={${year}},`
    }
    const organization = entry.getFieldAsString('organization')
    if ( !!organization ) {
      formatted += `
  organization={${organization}},`
    }
    formatted += `
}`
    return formatted
  }

  const normalizeValue = (entry, field) => {
    return (
      normalizeFieldValue(entry.getField(field)) || ''
    ).toString().toLowerCase()
  }

  const renderPublications = () => {
    if ( !publications ) { return }
    const q = search.toLowerCase()
    return Object.keys(publications.entries$).filter(key => {
      const entry = publications.getEntry(key)
      const year = normalizeValue(entry, 'year')
      const title = normalizeValue(entry, 'title')
      const journal = normalizeValue(entry, 'journal')
      const booktitle = normalizeValue(entry, 'booktitle')
      const authors = getAuthors(entry).toString().toLowerCase()
      return year.includes(q) || title.includes(q) || journal.includes(q) || booktitle.includes(q)|| authors.includes(q)
    }).map(key => {
      const entry = publications.getEntry(key)
      const data = {
        year: normalizeFieldValue(entry.getField('year')),
        title: normalizeFieldValue(entry.getField('title')),
        journal: normalizeFieldValue(entry.getField('journal')),
        booktitle: normalizeFieldValue(entry.getField('booktitle')),
        authors: getAuthors(entry),
        url: normalizeFieldValue(entry.getField('url')),
        type: entry.type.charAt(0).toUpperCase() + entry.type.slice(1),
        bibtex: formatBibtex(entry),
      }
      return (
        <Publication key={key} data={data} />
      )
    })
  }

  return (
    <Content>
      <h1>Publications</h1>
      <hr />
      <Search
        text={search}
        label={'search publications'}
        updateText={handleUpdate} />
      {renderPublications()}
    </Content>
  )
}


export default Publications
