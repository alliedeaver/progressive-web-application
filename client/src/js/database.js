import { openDB } from 'idb';

const initdb = async () =>
  //creatinga  new database that is named "jate" and uses version 1 of the database 
  openDB('jate', 1, {
    upgrade(db) {
      //we add the database schema if its not already initialized
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
    //a new object store is created for the data in the database and it has the new key name of "id", it increments automatically 
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

  try {
    const connectDb = await openDB('jate', 1);
    //creates connection to the database and the version we will use 

    const transax = connectDb.transaction
      ('contact', 'readwrite');
    //creates a new transaction and is specific about the db and the privileges 

    const editor = transax.objectStore
      ('contact');
    //opens the editor store

    // Get the user input element.
    const input = store.put({
      id: 1,
      value: content,
    });

    await request;

    console.log('the database has the added content', content);
  } catch (error) {
    console.error('db not implemented', error);
  }
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');
  try {
    const connectionDb = await openDB('jate', 1);

    const transaction = connectionDb.transaction('jate', 'readonly');

    const edit = transaction.objectStore('jate');

    const request = await edit.get(1);

    return request?.value;
  } catch (error) {
    console.error('Db not implemented', error);
    return [];
  }
}

initdb();
