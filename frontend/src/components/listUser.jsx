import { useEffect } from 'react'
import { useState } from 'react'
import header1 from '../assets/img/3wa.png'
import axios from "axios"
export default function ListeUser() {
  const [users, setUsers] = useState([]) 
  async function getUser() {
    await axios.get('http://localhost:8081/getUser')
      .then(response => {
        setUsers(response.data)
      })
  }
  useEffect(() => { getUser() }, [])

  async function deleteUser(id) {

    await axios.delete(`http://localhost:8081/deleteUser/${id}`)
    .then(res => {
      console.log('deleted',res)
     window.location.href='/listUser'
    });
     
  }
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
            <div className="d-flex justify-content-between">
              <h2>liste des utilisateurs</h2>
             <a href="/ajoutUser"> <button type="button" className=" text- btn btn-primary  mb-lg-2"><i className="fa-solid fa-plus"></i> ajouter un
                utilisateur</button></a>
            </div>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">email</th>     
                  <th scope="col">password</th>        
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) =>
                  <tr key={user._id}>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td className="text-right">
                      <a href={`/updateUser/${user._id}`} className="btn text-secondary"><i className="fa-solid fa-pen"></i> modifier</a>
                      <button  className="btn  text-danger" onClick={()=>  deleteUser(user._id)}  id="delete">
                        <i  className="fa-solid fa-trash "></i>Supprimer</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            
               
            <div>
              <nav aria-label="Page navigation example ">
                <ul className="pagination col-lg-6 offset-3">
                  <li className="page-item "><a className="page-link" href="#">Previous</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div>
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
