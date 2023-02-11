function RecoSwiper(props) {
  return (
    <div className="skillsList">
      <h2 skillsHeader>Skills:</h2>
      <div className="figs">
        <figure>
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt="JavaScript"
          />
          <figcaption>JavaScript</figcaption>
        </figure>
        <figure>
          <img
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
            alt="React"
          />
          <figcaption>React</figcaption>
        </figure>
        <figure>
          <img
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"
            alt="Python"
          />
          <figcaption>Python</figcaption>
        </figure>
        <figure>
          <img
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Devicon-html5-plain-wordmark.svg/640px-Devicon-html5-plain-wordmark.svg.png"
            alt="HTML"
          />
          <figcaption>HTML</figcaption>
        </figure>
        <figure>
          <img
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/640px-Antu_mongodb.svg.png"
            alt="MongoDB"
          />
          <figcaption>MongoDB</figcaption>
        </figure>
        <figure>
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
            alt="JavaScript"
          />
          <figcaption>CSS</figcaption>
        </figure>
        <figure>
          <img
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/640px-Sqlite-square-icon.svg.png"
            alt="SQLite"
          />
          <figcaption>SQLite</figcaption>
        </figure>
        <figure>
          <img
            className="icon"
            src={require("../Assets/djangoicon.png")}
            alt="Django"
          />
          <figcaption>Django</figcaption>
        </figure>
        <figure>
          <img
            className="icon"
            src="https://wiki.postgresql.org/images/thumb/a/a4/PostgreSQL_logo.3colors.svg/540px-PostgreSQL_logo.3colors.svg.png"
            alt="PostgreSQL"
          />
          <figcaption>PostgreSQL</figcaption>
        </figure>
        <figure>
          <img
            className="icon"
            src="https://icons-for-free.com/iconfiles/png/512/jquery+icon-1320185152994214115.png"
            alt="JQuery"
          />
          <figcaption>JQuery</figcaption>
        </figure>
        <figure>
          <img
            className="icon"
            src="https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg"
            alt="NodeJS"
          />
          <figcaption>NodeJS</figcaption>
        </figure>
        <figure>
          <img
            className="icon"
            src="https://brandeps.com/icon-download/F/Flask-icon-vector-06.svg"
            alt="Flask"
          />
          <figcaption>Flask</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default RecoSwiper;
