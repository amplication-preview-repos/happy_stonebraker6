import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const UserActionsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="actionType"
          label="actionType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="from_user_id" source="fromUserId" />
        <TextInput label="to_user_id" source="toUserId" />
      </SimpleForm>
    </Edit>
  );
};
