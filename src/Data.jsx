import React from "react";
import {
  useAddContactMutation,
  useContactQuery,
  useContactsQuery,
  useDeleteContactMutation,
  useUpdateContactMutation,
} from "./API/contactsApi";
import {
  AddButton,
  Contacts,
  ContactsContainer,
  Main,
  UserName,
} from "./Styles";

export default function Data() {
  const { data: contacts, isLoading, isSuccess, error } = useContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [addContact] = useAddContactMutation();

  return (
    <Main>
      <h1>React Redux Toolkit RTK Query</h1>
      <AddButton
        $green
        onClick={() =>
          addContact({ name: prompt("Name:"), email: prompt("Email:") })
        }
      >
        Add Contact
      </AddButton>

      {isLoading && <h1>Loading...</h1>}
      {error && <h2>Something went Wrong</h2>}

      {isSuccess && (
        <ContactsContainer>
          {contacts?.map((contact) => {
            return (
              <Contacts key={contact.id} className="contacts">
                <UserName>{contact.name}</UserName>
                <span>
                  <ContactDetail id={contact.id} />
                </span>
                <div className="btns">
                  <AddButton
                    $yellow
                    onClick={() =>
                      updateContact({
                        id: contact.id,
                        name: prompt("Please enter your name", contact.name),
                        email: prompt("Please enter your email", contact.email),
                      })
                    }
                  >
                    Update Contact
                  </AddButton>
                  <AddButton $red onClick={() => deleteContact(contact.id)}>
                    Delete Contact
                  </AddButton>
                </div>
              </Contacts>
            );
          })}
        </ContactsContainer>
      )}
    </Main>
  );
}

export const ContactDetail = ({ id }) => {
  const { data: contact } = useContactQuery(id);
  return <pre>{JSON.stringify(contact)}</pre>;
};
