const CleanStoreReviewItem = ({id,Store_PK, User_PK, point, comment, created_at, updated_at})=>{
    
    return(
        <div className="CleanStoreReviewItem">
            <div className="info_wrapper">
                <div className="user">{User_PK}</div>
                <div className="updated_at">{updated_at}</div>
            </div>
            <div className="review">
                {comment}
            </div>
        </div>
    );
};

export default CleanStoreReviewItem;

