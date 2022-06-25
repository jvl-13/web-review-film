import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './Admin.css'
import axios from 'axios'
import moment from 'moment'
import {Table , Button} from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// import 'semantic-ui-css/semantic.min.css'

function Admin() {
  const userStoreToken = useSelector(state => state.user.accessToken)
  
  const [movies, setMovies] = useState([])
  const [users, setUsers] = useState([])

  const history = useNavigate()

  useEffect(() => {
    try {
      axios.get(`http://localhost:8000/api/movie`).then((getData)=> {
          setMovies(getData.data)
          //console.log(getData?.data)
      })
    } catch (error) {
      
    }
  },[movies])

  useEffect(() => {
    try {
      axios.get(`http://localhost:8000/api/user`,
      {
        headers: {'Authorization' : `Bearer ${userStoreToken}`},
      }
      ).then((getData)=> {
          setUsers(getData.data)
          //console.log(getData?.data)
      })
    } catch (error) {
      
    }
  },[users])

  const handleDelete = async(e, id) => {
    e.preventDefault()
    try {
      await axios.delete(`http://localhost:8000/api/favorite/${id}`,
        {
          headers: {'Authorization' : `Bearer ${userStoreToken}`},
        }
      )
      await axios.delete(`http://localhost:8000/api/movie/${id}`,
        {
          headers: {'Authorization' : `Bearer ${userStoreToken}`},
        }
      )
      history('/admin')
    } catch (err){

    }
  }
  

  return (
    <div className='admin'>
        <Tabs>
        <TabList>
          <Tab>
            <p>Movie</p>
          </Tab>
          <Tab>
            <p>User</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <div className='p-movie'>
              <Link to='/admin/addmovie'>
                <Button>Add Movies</Button>
              </Link>
              
                <Table>
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Release date</th>
                      <th style={{width: '100px'}}>Overview</th>
                      <th>Image URL</th>
                      <th>Trailer URL</th>
                      <th>Rating</th>
                      <th>Total voted</th>
                      <th>Categories</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                            
                    {movies.map((item) => (
                    <tr>
                            <td>{item._id}</td>
                            <td>{item.tittle}</td>
                            <td>{moment(item.release_date).utc().format('MM-DD-YYYY')}</td>
                            <td>{item.overview}</td>
                            <td>{item.img}</td>
                            <td>{item.trailer_id}</td>
                            <td>{item.average_vote}</td>
                            <td>{item.total_voted}</td>
                            <td>{item.categories}</td>
                            <td>
                                <Button color='green'>Update</Button>
                            </td>
                            <td>
                                <Button color='red' onClick={(e) => handleDelete(e, item._id)}>Delete</Button>
                            </td>
                      
                    </tr>
                    ))}
                </Table>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <div>
            <Table>
                    <tr>
                      <th>Id</th>
                      <th>Email</th>
                      <th>Username</th>
                      <th>Role</th>
                      <th>Avatar</th>
                      <th>Date</th>
                    </tr>
                            
                    {users.map((item) => (
                    <tr>
                            <td>{item._id}</td>
                            <td>{item.email}</td>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.avatar}</td>
                            
                            <td>{moment(item.createdAt).utc().format('MM-DD-YYYY')}</td>
                        
                    </tr>
                    ))}
                </Table>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Admin