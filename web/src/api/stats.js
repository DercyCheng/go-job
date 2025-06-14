import api from './index'

// 获取仪表板数据
export const getDashboardData = () => {
    return api.get('/stats/dashboard')
}

// 获取任务统计
export const getJobStats = (jobId) => {
    return api.get(`/stats/jobs/${jobId}`)
}

// 获取工作节点统计
export const getWorkerStats = () => {
    return api.get('/stats/workers')
}

// 获取执行统计
export const getExecutionStats = (params = {}) => {
    return api.get('/stats/executions', { params })
}
