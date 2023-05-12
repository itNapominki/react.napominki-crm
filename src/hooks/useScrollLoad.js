import React from 'react'
import { api } from 'utils'

export default function useScrollLoad(model, params, $node = false) {
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
    const container = $node ? $node : document

    container.addEventListener('scroll', handleScroll)

    return function () {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [$node])

  function handleScroll(e) {
    const scrollHeight = $node
      ? $node.scrollHeight
      : e.target.documentElement.scrollHeight

    const scrollTop = $node
      ? $node.scrollTop
      : e.target.documentElement.scrollTop

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
