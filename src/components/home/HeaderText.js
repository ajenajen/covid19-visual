import React from 'react'
import colors from '@features/_ui/config/colors'
import { media } from '@lib/styles'

export default function HeaderText() {
  return (
    <div
      css={{
        padding: '1.875rem 0.5rem',
        textAlign: 'center',
        borderRadius: '4px',
        backgroundColor: colors.background.transparent,
        [media('lg')]: {
          padding: '1.725rem 0.5rem',
        },
        [media('xl')]: {
          padding: '1rem',
        },
      }}>
      <h3
        css={{
          fontSize: '2.25em',
          [media('lg')]: {
            fontSize: '1.75em',
          },
          [media('xl')]: {
            fontSize: '2.8em',
          },
        }}>
        <span
          css={{
            display: 'inline-block',
            width: '30px',
            height: '25px',
            marginRight: '10px',
            background:
              'url(/static/images/thai-flag.png) no-repeat center / cover',
            borderRadius: '3.47428px',
          }}></span>
        THAILAND
      </h3>
      <h1
        css={{
          fontSize: '3.35em',
          [media('xl')]: {
            fontSize: '4em',
          },
          color: '#bd212d',
        }}>
        COVID-19
      </h1>
      <h3
        css={{
          fontSize: '2em',
        }}>
        VISUALISATION
      </h3>
    </div>
  )
}
