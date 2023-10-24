import React, { useState } from "react";
import "./style.css";

export default function StarRate() {
    const [userRating, setUserRating] = useState(""); // State for user-provided rating

    const handleUserRatingChange = (e) => {
        setUserRating(e.target.value);
    };
    return (
        <>
            <div class="container">
                <div class="rating-wrap">
                    <h2>Star Rating</h2>
                    <div class="center">
                        <fieldset class="rating">
                            <input type="radio" id="star5" name="rating" value="5" checked={Number(userRating) === 5} /><label for="star5" class="full" title="Awesome"></label>
                            <input type="radio" id="star4.5" name="rating" value="4.5" checked={Number(userRating) === 4.5}/><label for="star4.5" class="half"></label>
                            <input type="radio" id="star4" name="rating" value="4" checked={Number(userRating) === 4}/><label for="star4" class="full"></label>
                            <input type="radio" id="star3.5" name="rating" value="3.5" checked={Number(userRating) === 3.5}/><label for="star3.5" class="half"></label>
                            <input type="radio" id="star3" name="rating" value="3" checked={Number(userRating) === 3}/><label for="star3" class="full"></label>
                            <input type="radio" id="star2.5" name="rating" value="2.5" checked={Number(userRating) === 2.5}/><label for="star2.5" class="half"></label>
                            <input type="radio" id="star2" name="rating" value="2" checked={Number(userRating) === 2}/><label for="star2" class="full"></label>
                            <input type="radio" id="star1.5" name="rating" value="1.5" checked={Number(userRating) === 1.5}/><label for="star1.5" class="half"></label>
                            <input type="radio" id="star1" name="rating" value="1" checked={Number(userRating) === 1}/><label for="star1" class="full"></label>
                            <input type="radio" id="star0.5" name="rating" value="0.5" checked={Number(userRating) === 0.5}/><label for="star0.5" class="half"></label>
                        </fieldset>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="rating-wrap">
                    <h2>User-Provided Rating</h2>
                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        value={userRating}
                        onChange={handleUserRatingChange}
                    />
                </div>
            </div>
        </>
    );
}