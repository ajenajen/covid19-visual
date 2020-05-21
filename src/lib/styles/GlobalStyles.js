import React from 'react'
import { css, Global } from '@emotion/core'
import colors from '@features/_ui/config/colors'

import normalize from './normalize'

const baseStyles = css`
  ${normalize}
  *, ::after, ::before {
    box-sizing: border-box;
  }
  html,
  body {
    font-family: db-heavent;
    font-weight: normal;
    height: 100%;
    min-height: 100vh;
    background-color: ${colors.background.primary};
    color: ${colors.text.white};
    background-image: url('/static/images/bg-glass.jpg');
    background-size: 100% 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    transition: background 0.3s;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  a {
    color: ${colors.link};
  }
  h1,
  h2,
  h3 {
    margin: 0;
    font-weight: bold;
    line-height: 1;
  }
  a,
  button {
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
  .container {
    margin: 0 auto;
    width: 100%;
    max-width: 1300px;
  }
  .gradient {
    &-primary {
      background-image: ${colors.gradient.primary};
    }
    &-danger {
      background-image: ${colors.gradient.danger};
    }
    &-success {
      background-image: ${colors.gradient.success};
    }
    &-warning {
      background-image: ${colors.gradient.warning};
    }
  }
  .card {
    position: relative;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 4px;
    word-wrap: break-word;
    box-shadow: 0 6px 0 0 rgba(0, 0, 0, 0.01), 0 15px 32px 0 rgba(0, 0, 0, 0.14);
    &-content {
      display: flex;
      line-height: 1.2;
      align-items: stretch;
      h2,
      h4 {
        margin: 0;
      }
      h2 {
        font-size: 2.2em;
        span {
          font-size: 1rem;
          padding-left: 6px;
        }
        @media only screen and (min-width: 48em) {
          font-size: 2.8em;
        }
        @media only screen and (min-width: 64em) {
          font-size: 3.25em;
          span {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  .content {
    &-left {
      flex: 0 0 65%;
      max-width: 65%;
      padding: 8px 5px 4px 10px;
      @media only screen and (min-width: 64em) {
        padding: 12px 5px 10px 12px;
      }
    }
    &-right {
      flex: 0 0 35%;
      max-width: 35%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.35);
      border-radius: 0 4px 4px 0;
    }
    &-status {
      padding: 10px 5px 6px;
      text-align: center;
      width: 100%;
      max-width: 60px;
      .status {
        &-tag {
          position: relative;
          padding: 3px 0 0;
          border-radius: 4px;
          margin-bottom: 7px;
          &:before {
            position: absolute;
            top: 60%;
            left: 0;
            width: 100%;
            text-align: center;
            transform: translateY(-50%);
            font-size: 1rem;
            content: 'คงที่';
          }
        }
        &-num {
          position: relative;
          display: inline-block;
          font-size: 2.375em;
          &:before {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            font-size: 1.5rem;
            content: '';
          }
        }
      }
      &.bad {
        .status-tag {
          background: ${colors.text.red};
          &:before {
            content: '^ เพิ่ม';
          }
        }
        .status-num {
          padding-left: 10px;
          &:before {
            content: '+';
          }
        }
      }
      &.good {
        .status-tag {
          background: ${colors.text.green};
          &:before {
            content: 'v ลดลง';
          }
        }
        .status-num {
          // padding-left: 10px;
          // &:before {
          //   content: '-';
          // }
        }
      }
    }
  }
  .gradient-success .content-status {
    &.bad .status-tag {
      background: ${colors.text.green};
      content: 'v ลดลง';
    }
    &.good .status-tag {
      background: ${colors.text.red};
      content: '^ เพิ่ม';
    }
  }
  .box {
    background: #10163a;
    color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  .table-responsive {
    display: block;
    width: 100%;
    position: relative;
    overflow-x: auto;
  }
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #c2c6dc;
    border-collapse: collapse;
    th,
    td {
      padding: 0.5rem 8px 0.375rem;
      border-top: 1px solid #414561;
      font-size: 1.2em;
      text-align: center;
    }
    thead {
      th {
        border-top: none;
        font-size: 1.375em;
      }
    }
  }
  .span-status {
    margin-left: -10px;
    padding-left: 10px;
    position: relative;
    &:before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      content: '+';
    }
    &.red:before {
      color: red;
    }
    &.green:before {
      color: green;
    }
  }
`

export default function GlobalStyles() {
  return (
    <React.Fragment>
      <Global styles={baseStyles} />
    </React.Fragment>
  )
}
