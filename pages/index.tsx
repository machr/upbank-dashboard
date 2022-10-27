import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
// import AccountPage from './accounts/[accountId]';

export async function getServerSideProps() {
  const res = await fetch(`https://api.up.com.au/api/v1/accounts/`, {
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${process.env.UP_API_KEY}`
    },
  });
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

const Home: NextPage = function ({ data }: any) {
  const { data: accounts } = data;
  // console.log({ accounts });

  return (
    <div>
      <Head>
        <title>Up Bank Account Dashboard (Unofficial)</title>
        <meta name="description" content="Up Bank Account Dashboard" />
      </Head>

      <main>
        <h3>Welcome to Up Bank dashboard</h3>
        <p>Next steps:</p>

        <ul>
          <li><s>Get API key from up</s></li>
          <li><s>Make API call to retrive list of accounts</s></li>
          <li><s>Display list of Accounts</s></li>
          <li><s>Make list of accounts into links</s></li>
          <li>Add basic styling to index page</li>
          <li>Show last 20 transactions</li>
          <li>show transactions per accounts</li>
        </ul>
        {
          accounts.map((account: { id: string, attributes: { displayName: string } }) => {
            const { attributes, id } = account;
            return (<Link key={id} href={`/accounts/${id}`}>{attributes.displayName}</Link>
            )
          })
        }

      </main>

      <footer >
      </footer>
    </div>
  )
}

export default Home
