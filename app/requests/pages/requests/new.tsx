import Layout from "app/layouts/Layout"
import { Link, useRouter, useMutation, BlitzPage } from "blitz"
import createRequest from "app/requests/mutations/createRequest"
import RequestForm from "app/requests/components/RequestForm"

const NewRequestPage: BlitzPage = () => {
  const router = useRouter()
  const [createRequestMutation] = useMutation(createRequest)

  return (
    <div>
      <h1>Create New Request</h1>

      <RequestForm
        initialValues={{}}
        onSubmit={async () => {
          try {
            const request = await createRequestMutation({ 
            data: { 
              product:{
                connect:{
                  id:1,
                },
              },
            },
          })
            alert("Success!" + JSON.stringify(request))
            router.push(`/requests/${request.id}`)
          } catch (error) {
            alert("Error creating request " + JSON.stringify(error, null, 2))
          }
        }}
      />

      <p>
        <Link href="/requests">
          <a>Requests</a>
        </Link>
      </p>
    </div>
  )
}

NewRequestPage.getLayout = (page) => <Layout title={"Create New Request"}>{page}</Layout>

export default NewRequestPage
