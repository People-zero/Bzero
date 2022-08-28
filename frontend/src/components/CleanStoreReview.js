import { useNavigate } from "react-router";
import CleanStoreReviewItem from "./CleanStoreReviewItem";

const CleanStoreReview = ({cleanStoreReview})=>{

    const navigate = useNavigate();
    console.log(cleanStoreReview);

    return(
        <div className="CleanStoreReview">
            {cleanStoreReview.map((it)=>(
                <CleanStoreReviewItem key={it.id} {...it}/>
            ))}
            <button>더보기</button>
        </div>
    );
};

CleanStoreReview.defaultProps = {
    cleanStoreReview : [],
};

export default CleanStoreReview;