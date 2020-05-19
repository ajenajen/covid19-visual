import React, { Fragment, useState, useEffect } from 'react'

CardStatus.defaultProps = {
  data: {
    date: '2020-5-15',
    confirmed: 112500,
    deaths: 2400,
    recovered: 95000,
    newconfirmed: 5500,
    newrecovered: 4800,
    newdeaths: 400,
  },
}

export default function CardStatus({ data, type }) {
  const [status, setStatus] = useState('')

  const getTypeInfo = type => {
    switch (type) {
      case 'confirmed':
        return { title: 'ผู้ติดเชื้อสะสม', cssClass: 'primary' }
      // case 'Hospitalized':
      //   return { title: 'กำลังรักษา', cssClass: 'warning' }
      case 'recovered':
        return { title: 'หายแล้ว', cssClass: 'success' }
      case 'deaths':
        return { title: 'เสียชีวิต', cssClass: 'danger' }
    }
  }

  useEffect(() => {
    getStatus(type)
  }, [])

  const getStatus = type => {
    let num = data['new' + type]
    if (num == 0) {
      setStatus('')
    } else if (num > 0) {
      setStatus('bad')
    } else if (num < 0) {
      setStatus('good')
    }
  }

  return (
    <Fragment>
      <div className={`card gradient-${getTypeInfo(type).cssClass}`}>
        <div className="card-content">
          <div className="content-left">
            <h4>{getTypeInfo(type).title}</h4>
            <h2>
              {data[type]}
              <span>คน</span>
            </h2>
            <small>{data.date}</small>
          </div>
          <div className="content-right">
            <div className={`content-status ${status}`}>
              <div className="status-tag">&nbsp;</div>
              <div className="status-num">{data['new' + type]}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
