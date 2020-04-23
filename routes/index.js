import UserRouter from './user'

export default (app) => {
    const express = require('express')
    const router = express.Router()

    // routes
    UserRouter(app, router)
}