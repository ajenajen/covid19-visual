import React from 'react'
import colors from '@features/_ui/config/colors'
import { media } from '@lib/styles'

export default function HeaderText() {
  return (
    <div
      css={{
        padding: '1rem 0.5rem',
        textAlign: 'center',
        borderRadius: '4px',
        backgroundColor: colors.background.transparent,
        [media('lg')]: {
          padding: '0.75rem 0.5rem',
        },
        [media('xl')]: {
          padding: '0.75rem 1rem',
        },
      }}>
      <h3
        css={{
          fontSize: '1.5em',
        }}>
        <span
          css={{
            display: 'inline-block',
            width: '20px',
            height: '16px',
            marginRight: '10px',
            background:
              'url(/static/images/thai-flag.png) no-repeat center / cover',
            borderRadius: '3.47428px',
          }}></span>
        THAILAND
      </h3>
      <h1
        css={{
          fontSize: '3em',
          [media('xl')]: {
            fontSize: '3.125em',
          },
          color: '#bd212d',
        }}>
        COVID-19
      </h1>
      <h3
        css={{
          fontSize: '1.25em',
        }}>
        VISUALISATION
      </h3>
    </div>
  )
}
