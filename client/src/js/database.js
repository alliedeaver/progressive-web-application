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
export const putDb = async (content) => console.error('putDb not implemented');

const connectDb = await openDB('contact', 1);
//creates connection to the database and the version we will use 

const transax = connectDb.transaction 
('contact', 'readwrite');
//creates a new transaction and is specific about the db and the privileges 

const editor = transax.objectStore
('contact');
//opens the editor store

  // Get the user input element.
const input = document.querySelector('#user-input');

// Add an event listener to the user input element.
input.addEventListener('change', function(event) {
  // Get the value of the user input element.
  const inputValue = event.target.value;

  const request = editor.add({text: inputValue});
});

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => { console.error('getDb not implemented');

const connectionDb = await openDB 
('contact', 1);

const transaction = connectionDb.transaction
('contact', 'readonly');

const edit = transaction.objectStore('contact');

const request = edit.getAll();

const result = await request;
console.log('result.value', result);
return result;

}

initdb();
