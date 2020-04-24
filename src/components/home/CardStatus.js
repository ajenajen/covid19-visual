import React, { Fragment, useState, useEffect } from 'react'

CardStatus.defaultProps = {
  data: {
    Confirmed: 2839,
    Recovered: 2430,
    Hospitalized: 359,
    Deaths: 50,
    NewConfirmed: 13,
    NewRecovered: 78,
    NewHospitalized: -66,
    NewDeaths: 1,
    UpdateDate: '23/04/2020 11:33',
    Source: 'https://covid19.th-stat.com/',
    DevBy: 'https://www.kidkarnmai.com/',
    SeverBy: 'https://smilehost.asia/',
  },
}

export default function CardStatus({ data, type }) {
  const [status, setStatus] = useState('')

  const getTypeInfo = type => {
    switch (type) {
      case 'Confirmed':
        return { title: 'ผู้ติดเชื้อสะสม', cssClass: 'primary' }
      case 'Hospitalized':
        return { title: 'กำลังรักษา', cssClass: 'warning' }
      case 'Recovered':
        return { title: 'หายแล้ว', cssClass: 'success' }
      case 'Deaths':
        return { title: 'เสียชีวิต', cssClass: 'danger' }
    }
  }

  useEffect(() => {
    getStatus(type)
  }, [])

  const getStatus = type => {
    let num = data['New' + type]
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
            <small>{data.UpdateDate}</small>
          </div>
          <div className="content-right">
            <div className={`content-status ${status}`}>
              <div className="status-tag">&nbsp;</div>
              <div className="status-num">{data['New' + type]}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
