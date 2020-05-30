import React, { memo } from 'react'
import Title from '../Title'
import styles from './index.module.scss'
const TaskInfo = memo(({report}) => {
    const {task_name, task_desc, start_time, end_time} = report
    return (
        <>
            <Title title='任务信息' subTitle='Task information'/>
            <div className ={styles.container}>
                <div className={styles.item}>
                    <div className={styles.title}>
                    任务名称：
                    </div>
                    <div className={styles.desc}>
                    {task_name}
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>
                    任务测试时间：
                    </div>
                    <div className={styles.desc}>
                    {start_time}
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>
                    任务描述：
                    </div>
                    <div className={styles.desc}>
                    {task_desc}
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>
                    任务结束时间：
                    </div>
                    <div className={styles.desc}>
                    {end_time}
                    </div>
                </div>
            </div>
        </>
    )
})

export default TaskInfo