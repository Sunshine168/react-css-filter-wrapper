// @flow
import * as React from 'react'
import '../css/instagram.min.css'

type FilterWrapperProps = {
  children: React.Node,
  filter: string,
}

export default class FilterWrapper extends React.Component<*, FilterWrapperProps, *> {
  render() {
    const { children, filter } = this.props
    const filterClass = filter ? `filter-${filter}` : ''
    return <figure className={filterClass}>{children}</figure>
  }
}
