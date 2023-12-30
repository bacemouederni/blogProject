import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Categorie() {
  const [categorie, setCategorie] = useState('');

  useEffect(() => {
  }, []);

  async function ajoutCategorie(e) {
    e.preventDefault();
    console.log(categorie);
    const test = {
      categorie: categorie
    }

    try {
      const res = await axios.post('http://localhost:8081/ajoutCategorie', test);
      console.log(res.data);
      window.location.href = '/listCategorie';
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
                <i className="fa-solid fa-house"></i> talbleau de bord
              </button>
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
                  <i className="fa-solid fa-folder"></i> Gestion des Gategories
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
            <h2>Rédiger une categorie </h2>
          </div>
          <article>
            <form encType="multipart/form-data" method="post">
              <button
                type="submit"
                onClick={(e) => ajoutCategorie(e)}
                className="text-btn btn btn-primary mb-lg-2"
              >
                Submit
              </button>
              <div className="form-group mb-lg-0">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1 mt-lg-2">
                    Categorie des articles{' '}
                  </label>
                  <input type="text" name='categorie' className="form-control" value={categorie} onChange={(e) => setCategorie(e.target.value)} id="exampleFormControlInput1" placeholder="taper une categorie" />
                </div>
              </div>
            </form>
          </article>
        </article>
      </section>
    </main>
  );
}
