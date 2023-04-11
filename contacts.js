const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const allContacts = await listContacts();
  return allContacts.find((item) => item.id === contactId) || null;
};

// TODO: REMOVE
// (async () => {
//   console.log(await getContactById("qdggE76Jtbfd9eWJHrssH"));
// })();

const removeContact = async (contactId) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);

  if (index === -1) {
    return null;
  }

  const [result] = allContacts.splice(index, 1);

  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

  return result;
};

// TODO: REMOVE
// (async () => {
//   console.log(await removeContact("qdggE76Jtbfd9eWJHrssH"));
// })();

const addContact = async (name, email, phone) => {
  const allContacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };

  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

  return newContact;
};

// TODO: REMOVE
// addContact("Stan", "dogm@gmg.com", "32355434");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
