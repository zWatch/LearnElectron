import AntExample from "../example/AntExample";

interface RouteType{
    path:string, 
    name?:string,
    component:React.FunctionComponent | React.Component
};

const AppRoutes:RouteType[] = [{
        path: '/Example/Ant',
        name: '样例',
        component: AntExample
    },{
        path: '/',
        name: 'Home',
        component:AntExample
    }
]

export default AppRoutes;
export type { RouteType } ;