import BarChart from './BarChart';
import header1 from '../assets/img/3wa.png'

export default function dashboard() {
    
  return (

<div>
<header>
  <nav className="navbar navbar-expand-lg navbar-wihte bg-dark">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link text-light" href="/">Mon blog <span className="sr-only">(current)</span></a>
        </li>
      </ul>
      <a href='/' className="btn btn-link text-light my-2 my-sm-0">
        <i className="fa-solid fa-power-off"></i> se déconnecter </a>
    </div>
  </nav>
</header>
<main>
  <section className="row">
    <article className="col-lg-3 mx-lg-2">
      <div>
        <div>
        <div className="nav flex-column nav-pills align-left" id="v-pills-tab" role="tablist"
            aria-orientation="vertical">
            <button className="nav-link active  text-left text-primary" id="v-pills-home-tab" data-toggle="pill"
              data-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false">
              <i className="fa-solid fa-house"></i> tableau de bord</button>
              <a href="/dashboard"><button className="nav-link  text-left text-primary"
               type="button"  aria-selected="false"> <i className="fa-solid fa-user"></i> Dashboard</button></a>
            <a href="/listeArticle">
            <button className="nav-link text-primary text-left"> <i className="fa-solid fa-paragraph"></i> Gestion des articles</button></a>
            <a href="/listCategorie"><button className="nav-link  text-left text-primary"
               type="button"  aria-selected="false"> <i className="fa-solid fa-folder"></i> Gestion des categories</button></a>
             <a href="/listUser"><button className="nav-link  text-left text-primary"
               type="button"  aria-selected="false"> <i className="fa-solid fa-user"></i> Gestion des utilisateurs</button></a>
          </div>
        </div>
        <div>
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
              aria-labelledby="v-pills-home-tab"></div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            </div>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            </div>
            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
            </div>
          </div>
        </div>
      </div>
    </article>
    <article className="col-lg-8 m-lg-2">
    
    <BarChart />

    </article>
  </section>
</main>
<footer>
  <section className="row">
    <article className="col-lg-12 mt-lg-2">
      <img src={header1} alt="3wa"></img>
    </article>
    <p className="col-lg-12">Lorem ipsum dolor3w academysit amet consectetur adipisicing elit.Quis quidem unde ratione
      corrupti ullam optio quo esse doloremque sint aliquam animi </p>
  </section>
</footer>
</div>
  )
}