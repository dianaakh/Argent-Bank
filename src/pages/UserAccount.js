import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import AccountInfo from '../components/AccountInfo/accountInfo';
import AccountsJson from '../data/userAccounts.json'
import EditableUserHeader from '../components/EditableUserHeader/editableUserHeader';


const UserAccount = () => {
  return (
    <div className='page_account'>
      <Header />
      <EditableUserHeader />
      <main className="main bg-dark">
      {AccountsJson.map((account, index) => (
          <AccountInfo
            key={index}
            accountType={account.accountType}
            accountNumber={account.accountNumber}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default UserAccount;