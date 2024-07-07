import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserMatchesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserMatchesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="isMatch" source="isMatch" />
        <TextField label="matchDate" source="matchDate" />
        <TextField label="user1" source="user1" />
        <TextField label="user2" source="user2" />
      </Datagrid>
    </List>
  );
};
