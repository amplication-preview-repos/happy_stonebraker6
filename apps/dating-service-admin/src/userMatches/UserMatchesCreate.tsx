import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const UserMatchesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isMatch" source="isMatch" />
        <DateTimeInput label="matchDate" source="matchDate" />
        <TextInput label="user1" source="user1" />
        <TextInput label="user2" source="user2" />
      </SimpleForm>
    </Create>
  );
};
