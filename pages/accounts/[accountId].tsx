import { useRouter } from 'next/router'

const AccountPage = function (): JSX.Element {
  const router = useRouter()
  const { accountId } = router.query
  // console.log('transactionsByAccount', transactionsByAccount);

  return (
    <>
      <h1>Account name: {accountId}</h1>
      <h2>Current Balance</h2>
    </>
  )
}

export default AccountPage;