import React, { memo } from 'react'
import Title from '../Title'
import { Table } from 'antd'
import styles from './index.module.scss'
import { sliceH } from '../../index'
import { columns } from './constant'



const DataStatistics = memo(({ report }) => {
    let dataSource = report.devices  || []
    return (
        <>
            <Title title='数据统计' subTitle='Data statistics' />
            <div style={{ height: sliceH - 484 }}>
                <Table
                    rowKey='device_id'
                    rowClassName={(record, index) => {
                        if (record.end !== 1) {
                            return styles.error
                        }
                    }}
                    columns={columns}
                    dataSource={dataSource}
                    size='small'
                    pagination={false}
                />
            </div>

        </>
    )
})

export default DataStatistics