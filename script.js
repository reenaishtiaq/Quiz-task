


function result() {
   
   let numb = 0;

   let q1 = document.querySelector('#All').checked;
   if (q1 == true) {
      numb += 1;
   }

   let q2 = document.querySelector('#Pandemic').checked;
   if (q2 == true) {
      numb += 1;
   }

   let q3 = document.querySelector('#Smallpox').checked;
   if (q3 == true) {
      numb += 1;
   }

   let q4 = document.querySelector('#Neutral').checked;
   if (q4 == true) {
      numb += 1;
   }


   let q5 = document.querySelector('#Lungs').checked;
   if (q5 == true) {
      numb += 1;
   }
   
   if (numb == 5) {
      alert("Congratulations!! your got a full marks " + numb + " out of 5");
   } else {
      alert("Your marks is " + numb + " out of 5");
   }
}






