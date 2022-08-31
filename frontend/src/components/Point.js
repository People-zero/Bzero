import { useState } from 'react';

const Point = (props)=>{

    // const [state,setState] = useState();

	const sendPoint=(state)=>{
		props.getPoint(state);
	}
    // console.log(state);
    
    return(
    <div class="star-rating space-x-4 mx-auto">
	<input type="radio" id="5-stars" name="rating" value="5" v-model="ratings" onChange={(e)=>sendPoint(e.target.value)} />
	<label for="5-stars" class="star pr-4">★</label>
	<input type="radio" id="4-stars" name="rating" value="4" v-model="ratings" onChange={(e)=>sendPoint(e.target.value)}/>
	<label for="4-stars" class="star">★</label>
	<input type="radio" id="3-stars" name="rating" value="3" v-model="ratings" onChange={(e)=>sendPoint(e.target.value)}/>
	<label for="3-stars" class="star">★</label>
	<input type="radio" id="2-stars" name="rating" value="2" v-model="ratings" onChange={(e)=>sendPoint(e.target.value)}/>
	<label for="2-stars" class="star">★</label>
	<input type="radio" id="1-star" name="rating" value="1" v-model="ratings" onChange={(e)=>sendPoint(e.target.value)}/>
	<label for="1-star" class="star">★</label>
    </div>
    );
};

export default Point;