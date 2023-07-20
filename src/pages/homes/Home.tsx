import BarChartBox from '../../components/barChartBox/BarChartBox';
import BigChartBox from '../../components/bigChartBox/BigChartBox';
import ChartBox from '../../components/chartBox/ChartBox';
import PieChartBox from '../../components/pieChartBox/PieChartBox';
import TopBox from '../../components/topBox/TopBox';
import { barChartBoxRevenu, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data';
import './home.scss';

const Home = () => {
    let homBox = [
        {
            id: 1,
            component: <TopBox />
        },
        {
            id: 2,
            component: <ChartBox {...chartBoxUser}/>
        },
        {
            id: 3,
            component: <ChartBox {...chartBoxProduct}/>
        },
        {
            id: 4,
            component: <PieChartBox />
        },
        {
            id: 5,
            component: <ChartBox {...chartBoxRevenue}/>
        },
        {
            id: 6,
            component: <ChartBox {...chartBoxConversion}/>
        },
        {
            id: 7,
            component: <BigChartBox />
        },
        {
            id: 8,
            component: <BarChartBox {...barChartBoxRevenu} />
        },
        {
            id: 9,
            component: <BarChartBox {...barChartBoxVisit} />
        }
    ]
    return (
        <div className="home">
            {homBox.map(b => <div key={b.id} className={`box box${b.id}`}>{b.component}</div>)}
        </div>
    )
}

export default Home;
