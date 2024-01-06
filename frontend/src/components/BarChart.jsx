import  {useEffect, useState} from 'react';
import Chart  from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { Bar } from 'react-chartjs-2';
import axios from "axios";

Chart.register(CategoryScale);


const BarChart = () => {
    const [articles, setArticles] = useState([])
    const [users, setUsers] = useState([])
    const [categories, setCategories] = useState([]) 

    async function getCategorie() {
      await axios.get('http://localhost:8081/getCategorie')
        .then(response => {
          console.log(response.data);
          setCategories(response.data)
        })
    }
    async function getArticle() {
        await axios.get('http://localhost:8081/showArticle')
          .then(response => {
            console.log(response.data.articles.length);
            setArticles(response.data.articles)
          })
      }
      async function getUser() {
        await axios.get('http://localhost:8081/getUser')
          .then(response => {
            console.log(response.data);
            setUsers(response.data)
          })
      }
  useEffect(() => {
   getArticle(),
   getUser(),
   getCategorie()
  }, []);


  var data = {
    labels: ["articles","categories","users"],
    datasets: [{
      label: 'nombre',
      data: [articles.length,categories.length,users.length],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div>
      <Bar
        data={data}
        height={400}
        options={options}
      />
    </div>
  )
}

export default BarChart