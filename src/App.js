import Header from "./components/Header";
import RegionList from "./components/RegionList";
import CityList from "./components/CityList";
import CityDetail from "./components/CityDetail";

export default function App() {
    this.state = {
        startIdx: 0,
        sortBy: '',
        searchWord: '',
        region: '',
        cities: ''
    };

    const header = new Header();
    const regionList = new RegionList();
    const cityList = new CityList({$app, initialState : this.state.cities});
    const cityDetail = new CityDetail();

    this.setState = (newState) => {
        this.state = newState;
        cityList.setState(this.state.cities)
    };

    const init = () => {};

    init();
}