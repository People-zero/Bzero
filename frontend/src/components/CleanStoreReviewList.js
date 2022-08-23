import { useNavigate } from "react-router";
import CleanStoreReviewItem from "./CleanStoreReviewItem";

const CleanStoreReviewList = ({cleanStoreReviewList})=>{

    const navigate = useNavigate();
    console.log(cleanStoreReviewList);

    return(
        <div className="CleanStoreReviewList">
            {cleanStoreReviewList.map((it)=>(
                <CleanStoreReviewItem key={it.id} {...it}/>
            ))}
        </div>
    );
};

CleanStoreReviewList.defaultProps = {
    cleanStoreReviewList : [],
};

export default CleanStoreReviewList;