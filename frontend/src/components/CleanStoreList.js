import { useNavigate } from "react-router";
import CleanStoreItem from "./CleanStoreItem";

const CleanStoreList = ({cleanStoreList})=>{

    const navigate = useNavigate();
    console.log(cleanStoreList);

    return(
        <div className="CleanStoreList">
            {cleanStoreList.map((it)=>(
                <CleanStoreItem key={it.id} {...it}/>
               // <div key={it.id}>{it.content} {it.emotion}</div>
            ))}
        </div>
    );
};

CleanStoreList.defaultProps = {
    cleanStoreList : [],
};

export default CleanStoreList;