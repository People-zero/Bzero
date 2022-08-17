import SideBar from "./components/SideBar";
import CleanStoreList from "./components/CleanStoreList";

const env=process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const CleanStore = () => {
    return (
        <div className="CleanStore">
            <section className="menu_wrapper">
            <SideBar />
            <section className="cleanstore_list">
            <div className="cleanstore_content">
            <h2>제로웨이스트 클린 스토어</h2>
            <h4>제로웨이스트 클린 스토어들의 목록을 확인하세요.</h4>   
            <CleanStoreList />
            </div>
            <div className="earth_logo">
            <img src={process.env.PUBLIC_URL + `assets/Earth.png`}/>
            </div>
            </section>

            
            </section>
        </div>
    );
};

export default CleanStore;