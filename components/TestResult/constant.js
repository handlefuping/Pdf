import React from 'react'
import styles from './index.module.scss'
const render = (v, record) => {
    return v === 0 ? <span className={styles.success}>通过</span> : <span className={styles.error}>未通过</span>
}
const columns = [
    {
        title: '检测项目',
        dataIndex: 'project',
        key: 'project',
        width: 100,
        align: 'center'
    },
    {
        title: '详情',
        dataIndex: 'detail',
        key: 'detail',
    },
    {
        title: '结果',
        dataIndex: 'result',
        key: 'result',
        align: 'center',
        width: 90,
        render,
    },

]

const itemMap = {
    'backup': '备份检测',
    'encryption': '加解密检测',
    'identity_auth': '身份认证检测',
    'outer_access': '外部访问检测'
}
const createData = (device, itemKey) => {
    return {
        project: itemMap[itemKey],
        detail: device[itemKey].msg,
        result: device[itemKey].code
    }
}

export {
    columns,
    itemMap,
    createData
}