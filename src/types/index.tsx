import React, { CSSProperties } from 'react'

export interface StepData {
  id: string
  stepName?: string
  title?: string
  subtitle?: string
  primaryButtonTitle?: string
  primaryButtonUri?: string
  primaryButtonUriTarget?: string
  secondaryButtonTitle?: string
  secondaryButtonUri?: string
  secondaryButtonUriTarget?: string
  skippable?: boolean
  url?: string
  urlTarget?: string
  type?: string
  videoUri?: string
  imageUri?: string | null
  autoMarkCompleted?: boolean
  complete: boolean
  StepContent?: React.ReactNode
  handlePrimaryButtonClick?: () => void
  handleSecondaryButtonClick?: () => void
  ctaActionType?: 'complete'
  imageStyle?: CSSProperties
  props?: any
  completionCriteria?: string
}

export interface Appearance {
  /**
   * Overrides of individual components and classes.
   * This map can either be className(s) or CSSProperties.
   */
  styleOverrides?: {
    [key: string]: CSSProperties | string
  }
  theme?: BaseTheme
}

export interface BaseTheme {
  colorPrimary?: string
  colorText?: string
  colorTextOnPrimaryBackground?: string
  colorTextSecondary?: string
  fontSize?: string | number
  fontSmoothing?: string
  fontWeight?: string | number
  borderRadius?: number
}
