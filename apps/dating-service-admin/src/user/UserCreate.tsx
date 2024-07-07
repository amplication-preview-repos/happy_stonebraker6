import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  NumberInput,
  BooleanInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
} from "react-admin";

import { PhotoTitle } from "../photo/PhotoTitle";
import { PlacesTitle } from "../places/PlacesTitle";
import { UserActionsTitle } from "../userActions/UserActionsTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="about_me" multiline source="aboutMe" />
        <TextInput label="occupation" source="occupation" />
        <TextInput label="education" source="education" />
        <TextInput label="hometown" source="hometown" />
        <NumberInput step={1} label="height" source="height" />
        <BooleanInput label="smoking_status" source="smokingStatus" />
        <BooleanInput label="children" source="children" />
        <TextInput label="profile_picture" source="profilePicture" />
        <TextInput label="phone_number" source="phoneNumber" />
        <BooleanInput label="profile_verified" source="profileVerified" />
        <BooleanInput
          label="phone_number_verified"
          source="phoneNumberVerified"
        />
        <DateTimeInput label="birthday" source="birthday" />
        <SelectInput
          source="gender"
          label="gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="show_gender" source="showGender" />
        <NumberInput label="longitude" source="longitude" />
        <NumberInput label="latitude" source="latitude" />
        <SelectArrayInput
          label="interests"
          source="interests"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <TextInput label="surname" source="surname" />
        <TextInput label="about_match" multiline source="aboutMatch" />
        <BooleanInput label="social_mode" source="socialMode" />
        <ReferenceArrayInput
          source="photos"
          reference="Photo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PhotoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="place"
          reference="Places"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlacesTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userActionsItems"
          reference="UserActions"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserActionsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
