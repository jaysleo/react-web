const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === 'development') {
    module.exports = `https://zkapi.shuzizhongwen.com`
} else if (NODE_ENV === 'test') {
    module.exports = `https://zkapi.shuzizhongwen.com`
} else {
    module.exports = `https://zkapi.shuzizhongwen.com`
}
