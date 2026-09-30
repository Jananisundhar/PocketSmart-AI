function scrollToPlanners() {
    document.getElementById("planners").scrollIntoView({
        behavior: "smooth"
    });
}


function openPlanner(type) {

    const plannerContent = document.getElementById("planner-content");

    if (type === "home") {

        plannerContent.innerHTML = `
            <h2>🏠 Home Budget Planner</h2>

            <p>Plan your home within your budget.</p>

            <div class="planner-form">

                <div class="form-group">
                    <label>Enter Your Budget</label>
                    <input type="number" id="homeBudget"
                    placeholder="Example: 20000">
                </div>

                <div class="form-group">
                    <label>Select Room</label>
                    <select id="homeRoom">
                        <option>Living Room</option>
                        <option>Bedroom</option>
                        <option>Kitchen</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Select Required Items</label>
                    <select id="homeItems">
                        <option>Furniture & Lighting</option>
                        <option>Furniture & Curtains</option>
                        <option>Complete Room Setup</option>
                    </select>
                </div>

                <button onclick="generateHomePlan()">
                    Generate Smart Plan 🤖
                </button>

                <div id="homeResult"></div>

            </div>
        `;
    }


    else if (type === "party") {

        plannerContent.innerHTML = `
            <h2>🎉 Party Budget Planner</h2>

            <p>Plan your event without overspending.</p>

            <div class="planner-form">

                <div class="form-group">
                    <label>Total Budget</label>
                    <input type="number" id="partyBudget"
                    placeholder="Example: 15000">
                </div>

                <div class="form-group">
                    <label>Number of Guests</label>
                    <input type="number" id="guests"
                    placeholder="Example: 30">
                </div>

                <div class="form-group">
                    <label>Event Type</label>
                    <select id="eventType">
                        <option>Birthday</option>
                        <option>Wedding</option>
                        <option>College Event</option>
                        <option>Corporate Event</option>
                    </select>
                </div>

                <button onclick="generatePartyPlan()">
                    Generate Smart Plan 🤖
                </button>

                <div id="partyResult"></div>

            </div>
        `;
    }


    else if (type === "jewelry") {

        plannerContent.innerHTML = `
            <h2>💎 Jewelry Matcher</h2>

            <p>Find jewelry suggestions according to your budget.</p>

            <div class="planner-form">

                <div class="form-group">
                    <label>Your Budget</label>
                    <input type="number" id="jewelryBudget"
                    placeholder="Example: 5000">
                </div>

                <div class="form-group">
                    <label>Occasion</label>
                    <select id="occasion">
                        <option>Wedding</option>
                        <option>Party</option>
                        <option>College Function</option>
                        <option>Festival</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Jewelry Type</label>
                    <select id="jewelryType">
                        <option>Necklace</option>
                        <option>Earrings</option>
                        <option>Bangles</option>
                        <option>Complete Set</option>
                    </select>
                </div>

                <button onclick="generateJewelryPlan()">
                    Find Suggestions 💎
                </button>

                <div id="jewelryResult"></div>

            </div>
        `;
    }

    document.getElementById("planner-area").scrollIntoView({
        behavior: "smooth"
    });
}


/* HOME PLAN */

function generateHomePlan() {

    const budget = Number(document.getElementById("homeBudget").value);

    if (budget <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    let furniture = Math.round(budget * 0.55);
    let lighting = Math.round(budget * 0.15);
    let curtains = Math.round(budget * 0.15);
    let decoration = Math.round(budget * 0.10);

    let total = furniture + lighting + curtains + decoration;
    let remaining = budget - total;

    document.getElementById("homeResult").innerHTML = `

        <div class="result-box">

            <h3>✨ Your Smart Home Plan</h3>

            <div class="result-item">
                <span>Furniture</span>
                <strong>₹${furniture}</strong>
            </div>

            <div class="result-item">
                <span>Lighting</span>
                <strong>₹${lighting}</strong>
            </div>

            <div class="result-item">
                <span>Curtains</span>
                <strong>₹${curtains}</strong>
            </div>

            <div class="result-item">
                <span>Decoration</span>
                <strong>₹${decoration}</strong>
            </div>

            <div class="total">
                Total: ₹${total}
            </div>

            <div class="remaining">
                Remaining Budget: ₹${remaining}
            </div>

            <p style="margin-top:15px;">
                🤖 PocketSmart Suggestion:
                Your budget has been intelligently divided
                across essential categories.
            </p>

        </div>
    `;
}


/* PARTY PLAN */

function generatePartyPlan() {

    const budget = Number(document.getElementById("partyBudget").value);
    const guests = Number(document.getElementById("guests").value);

    if (budget <= 0 || guests <= 0) {
        alert("Please enter valid budget and guest count.");
        return;
    }

    let catering = Math.round(budget * 0.55);
    let decoration = Math.round(budget * 0.20);
    let entertainment = Math.round(budget * 0.15);
    let venue = Math.round(budget * 0.10);

    let total = catering + decoration + entertainment + venue;
    let remaining = budget - total;

    document.getElementById("partyResult").innerHTML = `

        <div class="result-box">

            <h3>🎉 Your Smart Party Plan</h3>

            <p>Guest Count: ${guests}</p>

            <div class="result-item">
                <span>🍽 Catering</span>
                <strong>₹${catering}</strong>
            </div>

            <div class="result-item">
                <span>🎈 Decoration</span>
                <strong>₹${decoration}</strong>
            </div>

            <div class="result-item">
                <span>🎵 Entertainment</span>
                <strong>₹${entertainment}</strong>
            </div>

            <div class="result-item">
                <span>🏛 Venue</span>
                <strong>₹${venue}</strong>
            </div>

            <div class="total">
                Total: ₹${total}
            </div>

            <div class="remaining">
                Remaining Budget: ₹${remaining}
            </div>

        </div>
    `;
}


/* JEWELRY PLAN */

function generateJewelryPlan() {

    const budget =
        Number(document.getElementById("jewelryBudget").value);

    const type =
        document.getElementById("jewelryType").value;

    const occasion =
        document.getElementById("occasion").value;

    if (budget <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    let suggestions = "";

    if (budget <= 2000) {

        suggestions = `
            <div class="result-item">
                <span>Artificial Necklace</span>
                <strong>₹999</strong>
            </div>

            <div class="result-item">
                <span>Matching Earrings</span>
                <strong>₹499</strong>
            </div>

            <div class="result-item">
                <span>Fashion Bangles</span>
                <strong>₹399</strong>
            </div>
        `;

    } else if (budget <= 5000) {

        suggestions = `
            <div class="result-item">
                <span>Premium Necklace Set</span>
                <strong>₹2,499</strong>
            </div>

            <div class="result-item">
                <span>Designer Earrings</span>
                <strong>₹999</strong>
            </div>

            <div class="result-item">
                <span>Traditional Bangles</span>
                <strong>₹799</strong>
            </div>
        `;

    } else {

        suggestions = `
            <div class="result-item">
                <span>Premium Jewelry Set</span>
                <strong>₹3,999</strong>
            </div>

            <div class="result-item">
                <span>Designer Necklace</span>
                <strong>₹2,999</strong>
            </div>

            <div class="result-item">
                <span>Matching Earrings</span>
                <strong>₹1,499</strong>
            </div>
        `;
    }

    document.getElementById("jewelryResult").innerHTML = `

        <div class="result-box">

            <h3>💎 Smart Jewelry Suggestions</h3>

            <p>
                Occasion: ${occasion}
            </p>

            <p>
                Jewelry Type: ${type}
            </p>

            ${suggestions}

            <p style="margin-top:15px;">
                🤖 Suggestions are selected according
                to your budget and occasion.
            </p>

        </div>
    `;
}