import React, { CSSProperties } from 'react'
import styled from 'styled-components'

const PROGRESS_BAR_COLOR_STYLES = {
  backgroundColor: '#E6E6E6',
  fillColor: '#000000',
}

const ChecklistProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 16px 0px 12px 0px;
`
const ChecklistProgressProgressBar = styled.div`
  flex-grow: 1;
  position: relative;
`

const StepText = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  min-width: 130px;
  padding-right: 20px;
`

const progressBgStyle: CSSProperties = {
  position: 'relative',
  left: 0,
  top: 0,
  backgroundColor: PROGRESS_BAR_COLOR_STYLES.backgroundColor,
  width: '100%',
  minWidth: '12px',
  height: '10px',
  borderRadius: '20px',
}

/*
  Progress bar styles defined here rather than as styled component
  to enable the css transition property to function. Otherwise,
  the random div created by the styled component on render will disable the transition
 */
const progressFgStyle: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: 0,
  height: '10px',
  borderRadius: '20px',
  zIndex: 5,
  transition: 'width 0.35s ease-in-out',
}

export const ProgressBar = ({
  count,
  total,
  fillColor = PROGRESS_BAR_COLOR_STYLES.fillColor,
  display = 'count',
}: {
  count: number
  total: number
  fillColor?: string
  display?: 'count' | 'percent'
}) => {
  if (total === 0) return <></>

  const fgWidth = count === 0 ? '10px' : `${(count / total) * 100}%`

  let stepText
  if (display === 'count') {
    stepText = `${count} of ${total}`
  } else if (display === 'percent') {
    const percentComplete = Math.round((count / total) * 100)
    stepText = `${percentComplete}% complete`
  }

  return (
    <ChecklistProgressContainer>      
      <StepText>{stepText}</StepText>
      <ChecklistProgressProgressBar>
        <div
          className="ProgressBarFGFill"
          style={{ ...progressFgStyle, width: fgWidth, backgroundColor: fillColor }}
        />
        <div style={progressBgStyle} />
      </ChecklistProgressProgressBar>
    </ChecklistProgressContainer>
  )
}