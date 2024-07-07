import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const InterestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <TextInput label="interest_name" source="interestName" />
      </SimpleForm>
    </Create>
  );
};
