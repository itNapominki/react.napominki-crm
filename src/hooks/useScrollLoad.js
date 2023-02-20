import React from 'react'
import { api } from 'core/utils'

export default function useScrollLoad(model, params) {
  const [data, setData] = React.useState([])
  const [fetching, setFetching] = React.useState(true)
  const [currentPage, setCurrentPage] = React.useState(0)

  const totalCount = React.useRef(0)
  const count = React.useRef(0)

  React.useEffect(() => {
    if (fetching) {
      async function getData() {
        await api
          .getAll({
            model,
            params: {
              ...params,
              page: currentPage,
            },
          })
          .then(({ data }) => {
            setData((prev) => [...prev, ...data.rows])
            setCurrentPage(currentPage + 1)

            totalCount.current = data.count
          })
          .then(() => (count.current = data.length))
          .finally(() => setFetching(false))
      }

      getData()
    }
  }, [fetching])

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return function () {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll(e) {
    const scrollHeight = e.target.documentElement.scrollHeight
    const scrollTop = e.target.documentElement.scrollTop
    const windowHeight = window.innerHeight
    const offset = 100

    if (
      scrollHeight - (scrollTop + windowHeight) < offset &&
      count.current < totalCount.current
    ) {
      setFetching(true)
    }
  }

  return [data, setData, fetching]
}
