import React, { Component } from 'react';
import './App.css';
import Bookmark from './components/Bookmark'
import axios from 'axios'
import Loading from './components/Loading'

class App extends Component {
  state = {
    bookmarks: [],
    loading: false,
    newTitle: '',
    newUrl: ''
  }

  async componentDidMount() {
    this.setState({ loading: true })
    try {
      const bookmarks = await axios.get(
        'http://localhost:4000/bookmarks'
      )
      this.setState({ bookmarks: bookmarks.data, loading: false })
    }
    catch(error) {
      alert("can't get bookmarks!")
    }
  }

  remove = (id) => {
    const index = this.state.bookmarks.findIndex(bookmark => bookmark._id === id)
    if (index >= 0) {
      const bookmarks = [...this.state.bookmarks]
      bookmarks.splice(index, 1)
      this.setState({ bookmarks })
    }
    const del = axios.delete(`http://localhost:4000/bookmarks/${id}`)
  }

  setTitle = (e) => {
    this.setState({ newTitle: e.target.value })
  }

  setUrl = (e) => {
    this.setState({ newUrl: e.target.value })
  }

  create = async (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/bookmarks',
    {title: this.state.newTitle, url: this.state.newUrl})
    .then((bookmark) => {
      this.setState({ bookmarks: [...this.state.bookmarks, bookmark.data] })
    })
    console.log(this.state.bookmarks)
  }

  render() {
    // return (
    //   <div className="App">
    //     <h1>Bookmarks</h1>

    if (this.state.loading) {
      return (
      <div className="App">
        <Loading />
      </div>
      )
    } else {
        const { bookmarks } = this.state
        return (
          <div className="App">
            <form onSubmit={this.create}>
              <input placeholder="Title" onChange={this.setTitle} />
              <input placeholder="Url" onChange={this.setUrl} />
              <button>New Bookmark</button>
            </form>
            <ul>
            {
              bookmarks.map(bookmark =>
                <Bookmark
                  key   ={bookmark._id}
                  _id   ={bookmark._id}
                  title ={bookmark.title}
                  url   ={bookmark.url}
                  remove={this.remove}
                  // as a shortcut can use spread to replace props that have the same names
                  // {...bookmark}
                />
              )
            }
            </ul>
        </div>
        )
      }
  }
  // Key is a reserved word - for react to use to spped up lookups etc
  // and id is a html reserved word


}

export default App;
