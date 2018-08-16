import React, { CSSProperties } from 'react'
import classNames from 'classnames'
const style = require('./Skeleton.scss')

export interface ISkeletonOptions {
  /** If true, will display the skeleton */
  showSkeleton: boolean,
  /** Width of the skeleton (only applies if `shape` is set to `line`) */
  width?: number,
  /** A circle or a line */
  shape: 'circle' | 'line'
  /** Circle size of the skeleton (only applies if `shape` is set to `circle`) */
  size?: 'small' | 'medium' | 'large' | 'xlarge'
}

export interface ISkeletonComponentProps {
  /** Skeleton setting */
  skeletonOptions?: ISkeletonOptions
  /** Additional class names for the parent container */
  className?: string
}

class Skeleton extends React.Component<ISkeletonComponentProps> {
  public static defaultProps: Partial<ISkeletonComponentProps> = {
    skeletonOptions: {
      showSkeleton: false,
      shape: 'line',
      size: 'large'
    },
    className: ''
  }

  get style (): CSSProperties | undefined {
    const {
      shape = 'line',
      width
    } = this.props.skeletonOptions!

    if (shape === 'line') {
      return { width }
    }
  }

  public render (): JSX.Element {
    const {
      showSkeleton = false,
      shape = 'line',
      size = 'large'
    } = this.props.skeletonOptions!

    const {
      children,
      className
    } = this.props

    if (!showSkeleton) {
      return (
        <React.Fragment>
          {children}
        </React.Fragment>
      )
    }

    return (
      <span
        className={classNames(
          style.Skeleton,
          className,
          'skeleton',
          shape,
          `skeleton-${size}`
        )}
        style={this.style}
      >
        {shape === 'line' ? String.fromCharCode(8204) : null}
      </span>
    )
  }
}

export {
  Skeleton
}
