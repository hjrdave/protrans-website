import React, { Component } from "react"
import * as JsSearch from "js-search"
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';


class ClientSearch extends Component {
  state = {
    isLoading: true,
    searchResults: [],
    search: null,
    isError: false,
    indexByTitle: false,
    indexByAuthor: false,
    termFrequency: true,
    removeStopWords: false,
    searchQuery: "",
    selectedStrategy: "",
    selectedSanitizer: "",
  }
  /**
   * React lifecycle method that will inject the data into the state.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.search === null) {
      const { engine } = nextProps
      return {
        indexByTitle: engine.TitleIndex,
        indexByAuthor: engine.AuthorIndex,
        termFrequency: engine.SearchByTerm,
        selectedSanitizer: engine.searchSanitizer,
        selectedStrategy: engine.indexStrategy,
      }
    }
    return null
  }
  async componentDidMount() {
    this.rebuildIndex()
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const {
      selectedStrategy,
      selectedSanitizer,
      removeStopWords,
      termFrequency,
      indexByTitle,
      indexByAuthor,
    } = this.state
    const { books } = this.props

    const dataToSearch = new JsSearch.Search("isbn")

    if (removeStopWords) {
      dataToSearch.tokenizer = new JsSearch.StopWordsTokenizer(
        dataToSearch.tokenizer
      )
    }
    /**
     * defines an indexing strategy for the data
     * read more about it here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    if (selectedStrategy === "All") {
      dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
    }
    if (selectedStrategy === "Exact match") {
      dataToSearch.indexStrategy = new JsSearch.ExactWordIndexStrategy()
    }
    if (selectedStrategy === "Prefix match") {
      dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    }

    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     */
    selectedSanitizer === "Case Sensitive"
      ? (dataToSearch.sanitizer = new JsSearch.CaseSensitiveSanitizer())
      : (dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer())
    termFrequency === true
      ? (dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("isbn"))
      : (dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex())

    // sets the index attribute for the data
    if (indexByTitle) {
      dataToSearch.addIndex("title")
    }
    // sets the index attribute for the data
    if (indexByAuthor) {
      dataToSearch.addIndex("author")
    }

    dataToSearch.addDocuments(books) // adds the data to be searched

    this.setState({ search: dataToSearch, isLoading: false })
  }
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { searchResults, searchQuery } = this.state
    const { books } = this.props
    const queryResults = searchQuery === "" ? books : searchResults
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id='Search'
                  placeholder="Search Site"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  onChange={this.searchData}
                  value={searchQuery}
                />
              </InputGroup>
            </div>
          </form>

          <div className={'mt-4'}>
            <p>Number of items: {queryResults.length}</p>

            {queryResults.map(item => {
              return (
                <Card className='mt-2'>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      Lorum Ipsum
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
export default ClientSearch