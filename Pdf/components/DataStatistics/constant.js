const render = (v, record) => {
    // return v.code === 0 ? '√' : '×'
}
const columns = [
    {
        title: '设备ID',
        dataIndex: 'device_id',
        key: 'device_id',
        align: 'center'
    },
    {
        title: '设备IP',
        dataIndex: 'device_ipaddr',
        key: 'device_ipaddr',
        align: 'center'
    },
    {
        title: '加解密检测',
        dataIndex: 'encryption',
        key: 'encryption',
        align: 'center',
        render,
    },
    {
        title: '备份检测',
        dataIndex: 'backup',
        key: 'backup',
        align: 'center',
        render
    },
    {
        title: '外部访问',
        dataIndex: 'outer_access',
        key: 'outer_access',
        align: 'center',
        render
    },
    {
        title: '身份认证',
        dataIndex: 'identity_auth',
        key: 'identity_auth',
        align: 'center',
        render
    },
    {
        title: '评分',
        dataIndex: 'score',
        key: 'score',
    },

]


export {
    render,
    columns
}