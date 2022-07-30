import Main from '../Components/Main';
import Tables from '../Components/Tables';
import '../Styles/Main-page.scss';
import { DataModel } from '../Model/Model';

export const MainPage = (props: { data: DataModel[] }) => {

    return (
        <div className='main-page w-full'>
            <Main />
            <Tables data={props.data} component={true} />
        </div>
    )

}
