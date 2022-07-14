import { BankAccountsTableComponent } from './BankAccountsTableComponent.js';
import { Backend } from './Backend.js';
import { AddCustomerComponent } from './AddCustomerComponent.js';
import { Customer } from '../shared/index.js';

customElements.define('add-customer', AddCustomerComponent);
customElements.define('bank-accounts-table', BankAccountsTableComponent);

function handleError(error: unknown) {
  console.error(error);
}

const backend = new Backend();
async function bindTitle() {
  const bank = await backend.retrieveBank();
  document.querySelector('h1')!.innerText = bank.name;
}

async function bindBankAccounts() {
  const accounts = await backend.retrieveBankAccounts();
  const bankAccountsTable = document.querySelector(
    'bank-accounts-table'
  ) as BankAccountsTableComponent;
  bankAccountsTable.accounts = accounts;
}

async function addCustomer(customer: Customer) {
  await backend.addCustomer(customer);
  await bindBankAccounts();
}

function bindCustomerForm() {
  document.querySelector('add-customer')?.addEventListener('customer-added', ((
    event: CustomEvent<Customer>
  ) => {
    addCustomer(event.detail).catch(handleError);
  }) as EventListener);
}

// Start main
Promise.all([bindTitle(), bindBankAccounts()]).catch(handleError);
bindCustomerForm();