import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    const endpoint = String(import.meta.env.VITE_APP_APPWRITE_URL);
    const projectId = String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID);

    this.client.setEndpoint(endpoint).setProject(projectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const currentUser = await this.getCurrentUser();
      if (currentUser) {
        return currentUser; // Return current session if already logged in
      }
    } catch (error) {
      // Only try to create a new session if no active session is found
      return await this.account.createEmailPasswordSession(email, password);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
      throw error;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
