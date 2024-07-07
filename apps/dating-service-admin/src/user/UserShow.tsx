import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Photo" target="userId" label="Photos">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="image_name" source="imageName" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserActions"
          target="userId"
          label="UserActionsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="actionType" source="actionType" />
            <TextField label="timestamp" source="timestamp" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="from_user_id" source="fromUserId" />
            <TextField label="to_user_id" source="toUserId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
