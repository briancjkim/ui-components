import classNames from 'classnames'
import { get, isNil } from 'lodash'
import React from 'react'

import { Props } from '../../../../common'
import { Row } from '../../../Grids/Row'
import { TextSkeleton } from '../../../Skeletons'
import { ListHeader } from '../ListHeader'
import { ISmartListSkeletonOptions } from '../SmartList'

export interface ISize {
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number
}

export interface IListColumn {
  /** Content to display in each cell of the list column */
  cell: (rowObject: any) => JSX.Element | string | number
  /** Class names to use for each cell of the list column */
  cellClassNames?: (rowObject: any) => string
  /** Dataset used to generate the list content */
  data?: any
  /** Index of the row being iterated on */
  rowIndex?: number
  /** Flag to state if the column cell is the header or not */
  isHeader?: boolean
  /** Content to display in header */
  header?: string | object
  /** Size of the column */
  size?: ISize
  /** Flag to select if the text should be aligned right */
  alignRight?: boolean
  /** Text display in the column header tooltip */
  tooltipText?: string
  /** Foundation behave attribute */
  behave?: string
  /** Foundation order attribute */
  order?: any
  /** Skeleton options */
  skeletonOptions?: ISmartListSkeletonOptions
  /** The data-component-context */
  componentContext?: string
}

class ListColumn extends React.PureComponent<IListColumn> {
  public static defaultProps: Partial<IListColumn> = {
    rowIndex: 0,
    isHeader: false,
    header: '',
    alignRight: false,
    skeletonOptions: {
      showSkeleton: false
    }
  }

  get cellContent (): JSX.Element | string | undefined | number {
    const {
      cell,
      data,
      rowIndex,
      isHeader,
      header,
      tooltipText,
      skeletonOptions
    } = this.props

    if (isHeader) {
      return (
        <ListHeader
          label={header}
          tooltipText={tooltipText}
        />
      )
    }

    const showSkeleton = get(skeletonOptions, 'showSkeleton', false)

    if (showSkeleton) {
      return <TextSkeleton />
    }

    if (!isNil(rowIndex) && data && data[rowIndex]) {
      return cell(data[rowIndex])
    }
  }

  get cellClassNames (): string | undefined {
    const {
      cellClassNames,
      data,
      rowIndex
    } = this.props

    if (!isNil(rowIndex) && data && data[rowIndex] && cellClassNames) {
      return cellClassNames(data[rowIndex])
    }
  }

  public render (): JSX.Element {
    const {
      alignRight,
      size,
      componentContext
    } = this.props

    const content = (
      <div
        className={classNames(
          'list-column',
          this.cellClassNames,
          {
            'text-right': alignRight
          }
        )}
        data-component-type={Props.ComponentType.SmartListColumn}
        data-component-context={componentContext}
      >
        {this.cellContent}
      </div>
    )

    if (size) {
      return (
        <Row.Column {...size}>
          {content}
        </Row.Column>
      )
    }

    return content
  }
}

export {
  ListColumn
}
