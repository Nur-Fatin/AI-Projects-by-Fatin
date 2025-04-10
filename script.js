function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  let name = document.getElementById("name");
  let company = document.getElementById("company");
  let job_title = document.getElementById("job_title");
  let url = document.getElementById("url");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>"  + 
    "<p>" + 
    "<strong>" + name.value + "</strong>" + 
    (company.value ? " • " + company.value : "") + 
    (job_title.value ? " • " + job_title.value : "") + 
    (url.value ? " • <a href='" + url.value + "' target='_blank'>" + url.value + "</a>" : "") + 
    "</p>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
    name.value = "";
    company.value = "";
    job_title.value = "";
    url.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
