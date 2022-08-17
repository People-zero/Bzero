import SideBar from "./components/SideBar";

const CleanStore = () => {
    return (
        <div className="CleanStore">
            <div className="menu_wrapper">
            <SideBar />
            <div className="cleanstore_content">
            <h2>클린스토어 목록 페이지</h2>
            </div>
            </div>
        </div>
    );
};

export default CleanStore;