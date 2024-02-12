// to avoid data type issues
const conf = {
  appwriteUrl: String(process.env.APP_REACT_APPWRITE_URL),
  appwriteProjectId: String(process.env.APP_REACT_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(process.env.APP_REACT_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(process.env.APP_REACT_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(process.env.APP_REACT_APPWRITE_BUCKET_ID),
};

export default conf; // import in case an issue occurs
