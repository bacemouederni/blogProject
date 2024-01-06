import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
export default function Update() {
    const [allCategories, setAllCategories] = useState([])
    const [article, setArticle] = useState([]);
    const [image, setImage] = useState({ preview: '', data: '' })
    const [data, setData] = useState([])
    useEffect(() => {
        getArticle();
    }, []);
    const { id } = useParams();
    async function getArticle() {
        try {
            const response = await axios.get(`http://localhost:8081/update/${id}`);
            setAllCategories( response.data.categories)
            response.data.article.image = image.data;
            setArticle(response.data.article);
            setData(await response.data.article)
        } catch (error) {
            // Handle the error here
            console.error('Error fetching article:', error);
        }
    }
    const handelChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleFileChange = (e) => {
        const img = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        }
        setImage(img)
      }
    
    async function updateArticle(e) {
        e.preventDefault()
        let formData = new FormData()
        formData.append('title', data.title)
        formData.append('content', data.content)
        formData.append('categorie', data.categorie)
        formData.append('image', image.data)
    
        try {
            console.log(data);
            await axios.put(`http://localhost:8081/update/${id}`, formData);
            window.location.href = '/listeArticle'
        } catch (error) {
            console.error('Error updating article:', error);
        }
    }
    return (
        <>
            <div className="tab-content col-lg-9 p-lg-4" id="v-pills-tabContent">
                <div className="tab-pane fade " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                </div>
                <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel"
                    aria-labelledby="v-pills-profile-tab">
                    <form method='post' onChange={(e) => handelChange(e)}>
                        <article className="d-flex justify-content-between p-3">
                            <h3>Liste des article</h3>
                            <button type="submit"
                                onClick={(e) => updateArticle(e)}
                                onSubmit={handleFileChange}
                                className="btn btn-primary  font-weight-bold pl-lg-5 pr-lg-5 float-end">Update</button>
                        </article>
                        <div className="form-group">
                            <label>Categorie article </label>
                            {article.categorie &&
                                < select name='categorie' className="custom-select" defaultValue={article.categorie._id}>
                                    {allCategories.map((categorie) =>
                                        <option key={categorie._id} value={categorie._id}>{categorie.categorie}</option>
                                    )}
                                    
                                </select>
                                    }
                        </div>
                      
                        <div className="form-group">
                            <label>Titre de l&lsquo;article</label>
                            <input type="text" name='title' defaultValue={article.title} className="form-control" id="exampleFormControlInput1"
                                placeholder="lorem Ipsum dolor Sit amet conscteteur" />
                        </div>
                        <div className="form-group">
                        <input type="file" name='image' onChange={handleFileChange} className="form-control-file" id="exampleFormControlFile1" />
                       </div>
                        <div className="form-group">
                            <label>Contenu de l&lsquo;article</label>
                            <textarea defaultValue={article.content} name='content' className="form-control h-100" id="exampleFormControlTextarea1" rows="10" placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sed rerum ipsum sequi a illum officiis quae ex ad quasi cum, fuga similique nobis expedita voluptas eius, velit delectus voluptatem!
                        " />
                        </div>
                    </form>
                </div >
            </div >
        </>
    )

}