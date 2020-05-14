import React, { memo } from 'react'
import Title from '../Title'
import styles from './index.module.scss'
const TestEnv = memo(({ report }) => {
    const { systeminfo: { version, release } = {} } = report
    return (
        <>
            <Title title='测试环境' subTitle='Testing environment' />
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.title}>
                        操作系统：
                    </div>
                    <div className={styles.desc}>
                        {version?.split(' ')[0]}
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>
                        内核版本：
                    </div>
                    <div className={styles.desc}>
                        {release}

                    </div>
                </div>
            </div>
        </>
    )
})

export default TestEnv