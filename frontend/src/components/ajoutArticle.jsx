import { useState, useEffect } from 'react'
import axios from "axios"

export default function Article() {
  const [categoriesAll, setCategoriesAll] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [categorie, setCategorie] = useState("")
  const [image, setImage] = useState({ preview: '', data: '' })
  async function getCategorie() {
    await axios.get('http://localhost:8081/getCategorie')
      .then(response => {
        setCategoriesAll(response.data)
      })
  }
  useEffect(() => { getCategorie() }, [])
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }



  async function ajoutarticle(e) {
    e.preventDefault()
    let formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    console.log(e);
    console.log(categorie);
    formData.append('categorie', categorie)
    formData.append('image', image.data)


    try {
      const res = await axios.post('http://localhost:8081/ajoutArticle', formData)
      console.log(res.data)
      window.location.href = '/listeArticle'
    }
    catch (error) {
      console.log("error", error)
    }

  }
  return (


    <main>
      <section className="row">
        <article className="col-lg-3 m-lg-2">
          <div >
            <div >
            <div className="nav flex-column nav-pills align-left" id="v-pills-tab" role="tablist"
                  aria-orientation="vertical">
                  <button className="nav-link active  text-left text-primary" id="v-pills-home-tab" data-toggle="pill"
                    data-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false">
                    <i className="fa-solid fa-house"></i> talbleau de bord</button>
                  <a href="/listeArticle">
                  <button className="nav-link text-primary text-left"> <i className="fa-solid fa-paragraph"></i> Gestion des articles</button></a>
                  <a href="/listCategorie"><button className="nav-link  text-left text-primary"
                     type="button"  aria-selected="false"> <i className="fa-solid fa-folder"></i> Gestion des Gategories</button></a>
                </div>
            </div>
            <div>
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"></div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"></div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"></div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"></div>
              </div>
            </div>
          </div>
        </article>

        <article className="col-lg-8 m-lg-2">
          <div className="d-flex justify-content-between">
            <h2>Rédiger un article  </h2>

          </div>
          <article>
            <form encType="multipart/form-data" method="post" >
              <button type="submit" onClick={(e) => ajoutarticle(e)} className=" text- btn btn-primary  mb-lg-2 "> submit</button>
              <div className="form-group mb-lg-0">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1 mt-lg-2">categorie de  l&lsquo;article </label>

                  <select name="categorie" onChange={(e) => setCategorie(e.target.value)} value={categorie} className="form-control" id="exampleFormControlSelect1" >
                  <option>  select one </option>
                    {categoriesAll.map((categorie) =>
                      <option key={categorie._id} value={categorie._id}>  {categorie.categorie}</option>
                    )}
                  </select>
                </div>
                <label htmlFor="exampleFormControlInput1"> Titre de l&lsquo;article</label>
                <input type="text" name='title' className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="exampleFormControlInput1" placeholder="Lorem ipsum dolor sit amet consectetur" />
              </div >
              <div className="form-group">
                <input type="file" name='image' onChange={handleFileChange} className="form-control-file" id="exampleFormControlFile1" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">contenu de l&lsquo;article
                </label>
                <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3" />
              </div>
            </form>
          </article>
        </article>
      </section>
    </main>




  )

}