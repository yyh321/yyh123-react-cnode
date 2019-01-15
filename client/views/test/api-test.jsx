import React from 'react'
import axios from 'axios'

/* eslint-disable */
export default class TestApi extends React.Component {
  constructor(){
    super()
    this.getTopics = this.getTopics.bind(this)
    this.login = this.login.bind(this)
    this.markAll = this.markAll.bind(this)
  }
  getTopics() {
    axios.get('/api/topics')
      .then( resp => {
        console.log(resp)
      }).catch(err => {
        console.log(err)
    })
  }
  //6127f0df-b43e-47eb-acff-fc60627fa10b
  //ef35af2e-95b4-4062-badc-419d3b7471c4
  login() {
    axios.post('/api/user/login', {
      accessToken: '6127f0df-b43e-47eb-acff-fc60627fa10b'
    }).then(resp => {
      console.log('bbbbbb')
      console.log(resp)
    }).catch(err => {
      console.log(err)
    })
  }

  markAll() {
    axios.post('/api/message/mark_all?needAccessToken=true')
      .then(resp => {
        console.log(resp)
      }).catch(err => {
        console.log(err)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getTopics}>topics</button>
        <button onClick={this.login}>login</button>
        <button onClick={this.markAll}>markAll</button>
      </div>
    )
  }
}
/* eslint-ensable */


