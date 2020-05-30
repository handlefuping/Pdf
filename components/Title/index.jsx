import React, { memo } from 'react'
import styles from './index.module.scss'
const Title = memo(({title, subTitle}) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <span className={styles.title}>
                    {title}
                </span>
                <span className={styles.subTitle}>
                    {subTitle}
                </span>
            </div>
        </div>
    )
})

export default Title