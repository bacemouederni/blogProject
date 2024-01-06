import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
  }, []);

  async function ajoutUser(e) {
    e.preventDefault();
    const test = {
      email: email,
      password: password
    }

    try {
      const res = await axios.post('http://localhost:8081/ajoutUser', test);
      console.log(res.data);
      window.location.href = '/listUser';
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <main>
      <section className="row">
        <article className="col-lg-3 m-lg-2">
          <div>
            <div
              className="nav flex-column nav-pills align-left"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active text-left text-primary"
                id="v-pills-home-tab"
                data-toggle="pill"
                data-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="false"
              >
                <i className="fa-solid fa-house"></i> tableau de bord
              </button>
              <a href="/dashboard"><button className="nav-link  text-left text-primary"
               type="button"  aria-selected="false"> <i className="fa-solid fa-user"></i> Dashboard</button></a>
              <a href="/listeArticle">
              <button
                className="nav-link text-primary text-left "
                type="button"
              >
                {' '}
                <i className="fa-solid fa-paragraph"></i> Gestion des articles
              </button>
              </a>
              <a href="/listCategorie">
                <button
                  className="nav-link text-left text-primary"
                  type="button"
                  aria-selected="false"
                >
                  {' '}
                  <i className="fa-solid fa-folder"></i> Gestion des categories
                </button>
              </a>
              <a href="/listUser">
                <button
                  className="nav-link text-left text-primary"
                  type="button"
                  aria-selected="false"
                >
                  {' '}
                  <i className="fa-solid fa-user"></i> Gestion des utilisateurs
                </button>
              </a>
            </div>
            <div>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                ></div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                ></div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                ></div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                ></div>
              </div>
            </div>
          </div>
        </article>

        <article className="col-lg-8 m-lg-2">
          <div className="d-flex justify-content-between">
            <h2>ajouter un utilisateur </h2>
          </div>
          <article>
            <form encType="multipart/form-data" method="post">
              <button
                type="submit"
                onClick={(e) => ajoutUser(e)}
                className="text-btn btn btn-primary mb-lg-2"
              >
                Submit
              </button>
              <div className="form-group mb-lg-0">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1 mt-lg-2">
                    email{' '}
                  </label>
                  <input type="email" name='email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleFormControlInput1" placeholder="taper un email" />
                </div>
              </div>
              <div className="form-group mb-lg-0">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1 mt-lg-2">
                    password{' '}
                  </label>
                  <input type="password" name='password' className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleFormControlInput1" placeholder="taper un mot de passe" />
                </div>
              </div>
            </form>
          </article>
        </article>
      </section>
    </main>
  );
}
