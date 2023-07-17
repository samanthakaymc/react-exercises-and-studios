export default function HobbyLinks() {
   const hobbyLinks = ["https://en.wikipedia.org/wiki/Gardening", "https://en.wikipedia.org/wiki/Reading", "https://en.wikipedia.org/wiki/Motorsport"];
   return (
      <div>
      <a href= {hobbyLinks[0]}>Gardening</a>;
      <a href= {hobbyLinks[1]}>Reading</a>;
      <a href= {hobbyLinks[2]}>Motorsport</a>;
      </div>
   )
}
