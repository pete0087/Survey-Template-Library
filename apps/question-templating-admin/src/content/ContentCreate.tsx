import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LanguageTitle } from "../language/LanguageTitle";
import { TemplateTitle } from "../template/TemplateTitle";

export const ContentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Audio Link" source="audioLink" />
        <TextInput label="Content" source="content" />
        <SelectInput
          source="contentType"
          label="Content Type"
          choices={[
            { label: "Audio", value: "Audio" },
            { label: "Text", value: "Text" },
            { label: "HTML", value: "Html" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="language.id"
          reference="Language"
          label="Language"
        >
          <SelectInput optionText={LanguageTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="questionTemplates"
          reference="Template"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TemplateTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Active", value: "Active" },
            { label: "Inactive", value: "Inactive" },
            { label: "Locked", value: "Locked" },
            { label: "Deleted", value: "Deleted" },
            { label: "Archived", value: "Archived" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
