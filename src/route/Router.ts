import {Controller} from "../controller/Controller";

export class Router {

    private routes: any;
    private controller:Controller;

    constructor(){
        this.controller = new Controller();
    }

    public init(express: any) {
        this.routes = express.Router();

        this.routes.route('/personas')
        .get(this.controller.getPersonas);

    }

    public getRoutes(){
        return this.routes;
    }

}

