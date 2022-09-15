const CleanStoreReviewItem = ({id, updated_at_review, comment, point, created_at_review, store_reivew, user_review_name})=>{
    
    return(
        <div className="CleanStoreReviewItem">
            <div className="info_wrapper">
                <div className="user">{user_review_name}</div>
                <div className="created_at">{created_at_review}</div> 
            </div>
            <div className="review">
                {comment}
            </div>
        </div>
    );
};

export default CleanStoreReviewItem;



