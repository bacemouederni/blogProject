import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
export default function Update() {
    const [user, setUser] = useState([]);
    const [data, setData] = useState([])
    useEffect(() => {
        getUser();
    }, []);
    const { id } = useParams();
    async function getUser() {
        try {
            const response = await axios.get(`http://localhost:8081/findUserById/${id}`);
            setUser(response.data);
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
    async function updateUser(e) {
        e.preventDefault()
        try {
            console.log(data);
            await axios.put(`http://localhost:8081/updateUser/${id}`, data);
            window.location.href = '/listUser'
        } catch (error) {
            console.error('Error updating user:', error);
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
                            <h3>Liste des utilisateurs</h3>
                            <button type="submit"
                                onClick={(e) => updateUser(e)}
                                className="btn btn-primary  font-weight-bold pl-lg-5 pr-lg-5 float-end">Update</button>
                        </article>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name='email' defaultValue={user.email} className="form-control" id="exampleFormControlInput1"
                                placeholder="lorem Ipsum dolor Sit amet conscteteur" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" name='password' defaultValue={user.password} className="form-control" id="exampleFormControlInput1"
                                placeholder="lorem Ipsum dolor Sit amet conscteteur" />
                        </div>
                    </form>
                </div >
            </div >
        </>
    )

}