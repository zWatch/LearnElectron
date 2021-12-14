import { Greetings } from "../components/Greetings";
import AntExample from "../example/AntExample";


interface RouteType{
    path:string, 
    name?:string,
    element?:JSX.Element
    //component:React.FunctionComponent | React.Component
};

const AppRoutes:RouteType[] = [{
        path: '/HelloWorld',
        name: '样例',
        element: Greetings()
    },{
        path: '/',
        name: 'Home',
        element:AntExample()
    }
]

export default AppRoutes;
export type { RouteType } ;