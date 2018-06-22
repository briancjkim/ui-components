import React from 'react'
import classNames from 'classnames'
import { IntelliIcon } from '../Icon'
const style = require('./style.scss')

export interface ToastProps {
  /** Function run when component is mounted (usually a timer if required) */
  onMount?: Function
  /** Function called when close button is clicked */
  handleClose: any
  /** Type of toast */
  type?: 'success' | 'alert'
  /** Children that will be displayed as toast content */
  children: JSX.Element | string
}

export class Toast extends React.PureComponent<ToastProps> {
  public static defaultProps: Partial<ToastProps> = {
    type: 'success'
  }

  componentDidMount () {
    const {
      onMount
    } = this.props

    if (onMount) onMount()
  }

  get icon (): JSX.Element {
    const {
      type
    } = this.props

    let iconName = 'check'

    if (type === 'alert') {
      iconName = 'alert'
    }

    return (
      <IntelliIcon
        type={iconName}
        size={1}
        className='toast-icon'
      />
    )
  }

  get closeButton (): JSX.Element {
    const {
      handleClose
    } = this.props

    return (
      <span
        className={classNames('fa-container', 'toast-close-span')}
        onClick={handleClose}
      >
        <IntelliIcon
          type='cross-small'
          size={1}
          className='toast-close'
        />
      </span>
    )
  }

  get content (): JSX.Element {
    const {
      children
    } = this.props

    return (
      <span className='toast-content'>
        {children}
      </span>
    )
  }

  public render (): JSX.Element {
    const {
      type
    } = this.props

    return (
      <div className={classNames(style.ToastClass, type)}>
        {this.icon}
        {this.content}
        {this.closeButton}
      </div>
    )
  }
}