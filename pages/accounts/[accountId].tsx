
// // export const getStaticPaths = async () => {

// // }

// export const getStaticProps = async (context) => {
//   const accountId = context.params.id;
//   const res = await fetch(`https://api.up.com.au/api/v1/accounts/${accountId}`, {
//     headers: {
//       "Content-type": "application/json;charset=UTF-8",
//       Authorization: `Bearer ${process.env.UP_API_KEY}`
//     },
//   });
//   const data = await res.json();

//   const transactions = await fetch(`https://api.up.com.au/api/v1/accounts/${accountId}/transactions`, {
//     headers: {
//       "Content-type": "application/json;charset=UTF-8",
//       Authorization: `Bearer ${process.env.UP_API_KEY}`
//     },
//   });
//   const transactionsByAccount = await transactions.json();


//   return {
//     props: { account: data, transactionsByAccount: transactionsByAccount }
//   }
// }

// const AccountPage = ({ account, transactionsByAccount }): JSX.Element => {
//   // console.log('transactionsByAccount', transactionsByAccount);

//   return (
//     <>
//       <h1>Account name: {account.data.attributes.displayName}</h1>
//       <h2>Current Balance: ${account.data.attributes.balance.value}</h2>
//       <main>
//         <TransactionsList transactions={transactionsByAccount} />
//       </main>
//     </>
//   )
// }

// export default AccountPage;