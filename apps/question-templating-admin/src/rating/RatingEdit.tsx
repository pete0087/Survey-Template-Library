import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { DefinitionTitle } from "../definition/DefinitionTitle";

export const RatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="definition"
          reference="Definition"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DefinitionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="Rate From" source="rateFrom" />
        <NumberInput step={1} label="Rate To" source="rateTo" />
      </SimpleForm>
    </Edit>
  );
};
