import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { LanguageTitle } from "../language/LanguageTitle";
import { TemplateTitle } from "../template/TemplateTitle";

export const TemplateLanguageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="language"
          reference="Language"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LanguageTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="template"
          reference="Template"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TemplateTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
