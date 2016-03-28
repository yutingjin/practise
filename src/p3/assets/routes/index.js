import App from '../pages/app/index';
const rootRoute = {
    path: '/',
    component: App,
    childRoutes: [
    ]
};

export default rootRoute;

/*

import App from '../pages/app/index';
import Battery from '../pages/battery/battery';
const rootRoute = {
    path: '/',
    component: App,
    indexRoute: {
        component: Battery
    },
    childRoutes: [
        require('./charger/index'),
        require('./charger/result'),
        require('./location/index'),
        require('./history/index'),
        require('./payment/index'),
        require('./session/login')
    ]
};

export default rootRoute;


*/