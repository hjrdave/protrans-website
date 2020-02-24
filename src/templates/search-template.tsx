import React from "react";
import ClientSearch from "../components/search";
import PageContainer from '../components/page-container';
import PageContent from '../components/page-content';

interface Props {
  pageContext: {
    bookData: {
      allBooks: { books: any },
      options: {
        indexStrategy: string,
        searchSanitizer: string,
        TitleIndex: boolean,
        AuthorIndex: boolean,
        SearchByTerm: boolean
      }
    }
  }
}


function SearchTemplate({ pageContext }: Props) {

  const { bookData } = pageContext
  const { allBooks, options } = bookData

  return (
    <>
      <PageContainer title={'Search'}>
        <PageContent>
          <h1>
            Search Website
          </h1>
          <div className='pt-4'>
            <ClientSearch books={allBooks} engine={options} />
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

export default SearchTemplate