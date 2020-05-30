import React, { memo } from 'react'
import styles from './index.module.scss'
import TestResult from '../TestResult'

const TestDetail = memo(({ report }) => {
    const dataSource = report.devices || []
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                检测详情(Testing details)
            </div>
            {
                dataSource.map((device, index) => {
                    return <TestResult index={index} key={index} device={device} />
                })
            }

        </div>
    )
})

export default TestDetail