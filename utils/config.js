export default (app) => {
    const express = require('express')
    app.use(express.json());
    app.use(require('cors')());
    app.set('secret', '1swkfjaofaje')
}