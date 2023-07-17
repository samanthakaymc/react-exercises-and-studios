export default function BookList() {
   let pageTitle = "Books I Read This Year";
   let book1 = "https://m.media-amazon.com/images/I/614SwlZNtJL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://ca-times.brightspotcdn.com/dims4/default/2578b25/2147483647/strip/true/crop/1650x2475+0+0/resize/1200x1800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff8%2F7e%2F5ee2ad058d8d9575bde4852f300e%2Fe80725be9b124f8ba70e78d85aa2c7a7";
   let book3 = "https://m.media-amazon.com/images/I/91oB1gHuiIL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3 pageTitle></h3>
         <img src={book1} alt="The Hunger Games by Suzanne Collins" 
         width="500" 
         height="600"
         />
         <img src={book2} alt="Book Lovers by Emily Henry" 
         width="500" 
         height="600"
         />
         <img src={book3} alt="The Inheritance Games by Jennifer Lynn Barnes" 
          width="500" 
          height="600"
          />
      </div>      
   );
}