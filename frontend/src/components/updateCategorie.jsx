import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
export default function Update() {
    const [categorie, setCategorie] = useState([]);
    const [data, setData] = useState([])
    useEffect(() => {
        getCategorie();
    }, []);
    const { id } = useParams();
    async function getCategorie() {
        try {
            const response = await axios.get(`http://localhost:8081/getCategorie/${id}`);
            setCategorie(response.data);
            setData(await response.data)
        } catch (error) {
            // Handle the error here
            console.error('Error fetching categorie:', error);
        }
    }
    const handelChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    async function updateCategorie(e) {
        e.preventDefault()
        try {
            console.log(data);
            await axios.put(`http://localhost:8081/updateCategorie/${id}`, data);
            window.location.href = '/listCategorie'
        } catch (error) {
            console.error('Error updating categorie:', error);
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
                            <h3>Liste des categoris</h3>
                            <button type="submit"
                                onClick={(e) => updateCategorie(e)}
                                className="btn btn-primary  font-weight-bold pl-lg-5 pr-lg-5 float-end">Update</button>
                        </article>

                        <div className="form-group">
                            <label>Categorie</label>
                            <input type="text" name='categorie' defaultValue={categorie.categorie} className="form-control" id="exampleFormControlInput1"
                                placeholder="lorem Ipsum dolor Sit amet conscteteur" />
                        </div>
                    </form>
                </div >
            </div >
        </>
    )

}