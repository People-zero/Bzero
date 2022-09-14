import { useNavigate } from "react-router";
import CleanStoreReviewItem from "./CleanStoreReviewItem";

const CleanStoreReview = ({cleanStoreReview})=>{

    const navigate = useNavigate();

    return(
        <div className="CleanStoreReview">
            {cleanStoreReview.map((it)=>(
                <CleanStoreReviewItem key={it.nickname} {...it}/>
            ))}
            <button>더보기</button>
        </div>
    );
};

CleanStoreReview.defaultProps = {
    cleanStoreReview : [],
};

export default CleanStoreReview;