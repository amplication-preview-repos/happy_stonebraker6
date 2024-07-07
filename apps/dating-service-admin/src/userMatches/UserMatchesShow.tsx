import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const UserMatchesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="isMatch" source="isMatch" />
        <TextField label="matchDate" source="matchDate" />
        <TextField label="user1" source="user1" />
        <TextField label="user2" source="user2" />
      </SimpleShowLayout>
    </Show>
  );
};
