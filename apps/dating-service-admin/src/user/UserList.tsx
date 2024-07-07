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

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <TextField label="about_me" source="aboutMe" />
        <TextField label="occupation" source="occupation" />
        <TextField label="education" source="education" />
        <TextField label="hometown" source="hometown" />
        <TextField label="height" source="height" />
        <BooleanField label="smoking_status" source="smokingStatus" />
        <BooleanField label="children" source="children" />
        <TextField label="profile_picture" source="profilePicture" />
        <TextField label="phone_number" source="phoneNumber" />
        <BooleanField label="profile_verified" source="profileVerified" />
        <BooleanField
          label="phone_number_verified"
          source="phoneNumberVerified"
        />
        <TextField label="birthday" source="birthday" />
        <TextField label="gender" source="gender" />
        <BooleanField label="show_gender" source="showGender" />
        <TextField label="longitude" source="longitude" />
        <TextField label="latitude" source="latitude" />
        <TextField label="interests" source="interests" />
        <TextField label="name" source="name" />
        <TextField label="surname" source="surname" />
        <TextField label="about_match" source="aboutMatch" />
        <BooleanField label="social_mode" source="socialMode" />
      </Datagrid>
    </List>
  );
};
