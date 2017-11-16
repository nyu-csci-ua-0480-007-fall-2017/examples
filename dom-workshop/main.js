// TODO: Run the JS file only when the HTML page is fully loaded
document.addEventListener('DOMContentLoaded', main);
function main(){
  // TODO: Change the h1 id to sad and the p class to happy.
  const h1 = document.querySelector("#happy");
  h1.id = "sad";

  const p = document.querySelector(".sad");
  p.className = "happy";
  // TODO: Append this h3 element below the paragraph:
  // <h3 class="angry"> I'm an angry h3 header! </h3>
  const h3 = document.createElement("h3"); // create the element
  const h3_text = document.createTextNode("I'm an angry h3 header!"); // create the content
  h3.appendChild(h3_text); // add the content to the element
  h3.className = "angry";

  document.body.appendChild(h3); //append the element to the HTML page

  // TODO: Add an event listener to h1 that toggles the background color on every click
  h1.addEventListener('click', function(evt){
    // .style changes the INLINE css
    // this.style.backgroundColor =
    // this.style.color =
    // this.style.fontFamily =
    const color = this.style.backgroundColor;
    if(color == "white"){
      this.style.backgroundColor = "red";
    }else{
      this.style.backgroundColor = "white";
    }
  });

}
