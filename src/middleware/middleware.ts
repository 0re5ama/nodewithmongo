import {Application} from 'express'
import bodyParser from 'body-parser'

export class MiddleWare {

    private app: Application;


	constructor(app: Application) {
        this.app = app;
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
	}
}