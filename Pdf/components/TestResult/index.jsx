import React, { memo } from 'react'
import styles from './index.module.scss'
import { Table } from 'antd'
import { sliceH } from '../../index'
import { columns, itemMap, createData } from './constant'

const TestResult = memo(({ index, device }) => {
    const { device_id } = device
    const dataSource = Object.keys(itemMap).map(itemKey => {
        return createData(device, itemKey)
    })
    return (
        <div style={{ height: index === 0 ? sliceH - 38 : sliceH }}>
            <div className={styles.device}>
                设备ID：{device_id}
            </div>
            <Table
                rowKey='project'
                columns={columns}
                dataSource={dataSource}
                size='small'
                pagination={false}
            />
        </div>
    )
})

export default TestResult