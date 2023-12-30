import {useState, useEffect } from 'react';
import axios from 'axios';
import Images from '../assets/img/img1.jpg'
import header1 from '../assets/img/3wa.png'
export default function Home() {
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])
  async function getArticle() {
    await axios.get('http://localhost:8081/showArticle')
      .then(response => {
        setArticles(response.data.articles)
      })

  }
  async function getCategorie() {
    await axios.get('http://localhost:8081/getCategorie')
      .then(response => {
        setCategories(response.data)
      })

  }
  useEffect(() => { 
    getArticle();
    getCategorie();
  }, [])


  return (
        <div>
        <header id="img-home" >
          <nav className="navbar navbar-expand-lg navbar-light  justify-content-around  ">
            <a className="navbar-brand text-white par" href="/">Blog  de tourisme</a>
            <div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav par">
                  <li className="nav-item active">
                    <a className="nav-link text-white border-bottom" href="#">APROPOS <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white " href="#">CONTACT</a>
                  </li>

                  <li className="nav-item ">
                    <a className="nav-link  text-white" href='/listeArticle'>ADMINISTRATION</a>
                  </li>
                </ul>

              </div>
            </div>

          </nav>
          <div className="nav-div2 text-center text-white">
            <h1>LE BLOG DU VOYAYGE ET RESPONABLE</h1>

            <a className="par  px-3  py-2 text-white">Découvrir</a>


          </div>
        </header>
        <main className="m-lg-5">
          <h2 className="mt-3 ml-lg-5">Conseils et Idées pour  vos prochaines vacances</h2>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand text-primary" href="#">Themes:</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {categories.map((categorie) =>
                <li className="nav-item active" key={categorie._id}>
                  <a className="nav-link text-primary" href="">{categorie.categorie}<span className="sr-only">(current)</span></a>
                </li>
                )}
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="" aria-label="Search"></input>
                <button className="btn bg-primary my-2 my-sm-0" type="submit"><i className="fa-solid fa-magnifying-glass text-white"></i></button>
              </form>
            </div>
          </nav>


          <section className="mt-3 d-flex justify-content-around section-home ">

  
          </section>

          <section className=" mt-3 d-flex justify-content-around section-home">
          {articles.map((article) =>
            <div className="card  bg-light " key={article._id}>
              <div className="border div-img">
                <img className="w-100 h-100" src={Images} alt="img1"></img>
              </div>
              <div className="card-body">
                <h3 className="text-primary">{article.title}</h3>
                <p className="card-text"> {article.content}</p>
                <span className="text-primary"> {article.postedAt}</span>
              </div>
            </div>
          )}
          </section>


          <section className="row mt-lg-5  d-flex justify-content-around">
            <article className="col-lg-5 bg-light 
          pt-5">
              <h4 className="text-primary "> Voulez-vous recevoir nos derniérs mises à jour</h4>
              <p > veuillez cous inscrie a notre pour les nouvelles articles à venir et les derniers informations sur notre travail.</p>
              <form className="row ">
                <input type="text" className="form-control col-lg-4" id="exampleFormControlInput1" placeholder="Email ..."></input>
                <button type="button" className="  btn btn-primary  col-lg-3 offset-1"> Inscrivez vous</button>
              </form>

            </article>
            <article className="col-lg-3 bg-light text-center  pt-5">
              <h4 className="text-primary"> Notre objectif</h4>
              <p>Nous cgecgent le monde a la rechacghe de bons plans,d'astuces pour vous aider à voyage plus facilement.</p>

            </article>
            <article className="col-lg-3 bg-light text-center  pt-5">
              <h4 className="text-primary"> Réseaus sociaux</h4>
              <a href="#"><i className="fa-brands fa-twitter px-3"></i></a>
              <a href="#"><i className="fa-brands fa-facebook px-3"></i></a>
              <a href="#"><i className="fa-brands fa-instagram px-3"></i></a>
              <a href="#"><i className="fa-brands fa-youtube px-3"></i></a>

            </article>

          </section>

        </main>
        <footer>
          <section className="row">
            <article className="col-lg-12 mt-lg-2">

              <img src={header1} alt="3wa"></img>
            </article>
            <p className="col-lg-12">Lorem ipsum dolor3w academysit amet consectetur adipisicing elit.Quis quidem unde ratione corrupti ullam optio quo esse doloremque sint aliquam animi </p>
          </section>
        </footer>

        <script src="https://kit.fontawesome.com/52dde9274d.js" crossOrigin="anonymous"></script>  
        </div> 
  )
}
