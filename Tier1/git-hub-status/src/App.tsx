import dayjs from 'dayjs'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Component, Response } from './reponse'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example(): JSX.Element {
  const { isLoading, error, data } = useQuery<Response>('repoData', () =>
    fetch('https://www.githubstatus.com/api/v2/summary.json').then(res =>
      res.json()
    )
  )

  console.log(data)
  console.log(error)

  if (isLoading) return <p>'Loading...'</p>

  if (error) {
    return <h1>An error has occurred</h1>
  }

  return (
    <>
      <div className='bg-slate-900 p-10 '>

        <div className='container mx-auto lg:w-2/3'>
          <h1 className='pt-10 text-6xl text-white'>Github Status</h1>
          <h2 className='pt-5 mb-5 text-4xl text-white'>{data?.status.description}</h2>
          {data?.components.map((componente: Component) => {
            return (
              <>
                <div className='bg-white shadow-lg rounded-xl p-5 mt-5'>

                  <p className='text-xl'>{componente.name}</p>
                  <p className='text-slate-500'>{componente.description}</p>
                  <p>{componente.status}</p>
                  <p>updated at {dayjs(componente.updated_at).format('DD-MM-YYYY')}</p>
                </div>
              </>
            )

          })}
        </div>
      </div>

    </>

  )
}
