import RandDSwiper from "../Carosels/RandDSwiper";
function RandD(props) {
    return (
        <div className="myTabsDiv">
            <h2>R&D Books</h2>
            <h3 className="DescThree">About</h3>
            <p className="Desc">
                R&D Bookstore was the first website I created.  It was a partnered poject I worked on with a classmate, Dylan.  The goal of the project was to create a website that emulated an existing website (in the most basic possible way), and explored relationships between objects.  We chose Amazon, but took it back to the day's they sold books.  The site has user authentication (by Devon), as well as full CRUD for users and books.  Users can add and 'sell' books, search books by author name title or genre, and review their purchases.  
                </p> 
            <RandDSwiper/>  
            <h3 className="DescThree">Reflections</h3>
            <p className="Desc"> 
            This website is a very basic version of the concept.  If I did it again, I would add the ability to like books as well as create lists of books for both personal and public use.  We didn't have time to add a shopping cart, so I would also like to add that, and I would also use an API to create the sample data.  
            </p> 

        </div>
      );
}

export default RandD;