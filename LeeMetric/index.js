document.addEventListener("DOMContentLoaded", function() {

    const searchButton = document.getElementById("search-bt");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");

    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");

    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");

    const cardStatsContainer = document.querySelector(".stats-cards");


    function validateUsername(username){

        if(username.trim() === ""){
            alert("Username should not be empty");
            return false;
        }

        const regex = /^[a-zA-Z0-9_]{3,15}$/;

        const isMatching = regex.test(username);

        if(!isMatching){
            alert("Invalid Username");
        }

        return isMatching;
    }


    async function fetchUserDetails(username){

        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

        searchButton.textContent = "Searching...";
        searchButton.disabled = true;


        try{

            const response = await fetch(url);


            if(!response.ok){
                throw new Error("Unable to fetch user details");
            }


            const data = await response.json();

            console.log(data);

        }


        catch(error){

            console.log(error);

            statsContainer.innerHTML = `
            <p>No data Found</p>
            `;

        }


        finally{

            searchButton.textContent = "Search";
            searchButton.disabled = false;

        }

    }



    searchButton.addEventListener("click", function(){

        const username = usernameInput.value;


        console.log(username);


        if(validateUsername(username)){

            fetchUserDetails(username);

        }

    });


});