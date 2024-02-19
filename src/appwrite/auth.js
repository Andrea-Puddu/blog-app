import conf from '../conf/conf';
import {Client, Account, ID} from 'appwrite';

// const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('<PROJECT_ID>');
// const account = new Account(client);

// Reusable class function
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({email, password, name}) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      return userAccount ? this.login({email, password}) : userAccount;
    } catch (error) {
      console.error('Appwrite service :: createAccount() ::', error);
      throw error;
    }
  }
  async login({email, password}) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error('Appwrite service :: login() ::', error);
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error('Appwrite service :: getCurrentUser() ::', error);
    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error('Appwrite service :: logout() ::', error);
    }
  }
}

// Invoke class and export
const authService = new AuthService();

export default authService;
