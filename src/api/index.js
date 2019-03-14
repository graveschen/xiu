let baseUrl = 'https://www.daxunxun.com'

process.env.NODE_ENV === 'development' ? baseUrl = '/daxun' : baseUrl = 'https://www.daxunxun.com'

export default baseUrl