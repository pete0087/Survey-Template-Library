import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { LANGUAGE_TITLE_FIELD } from "../language/LanguageTitle";

export const ContentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Audio Link" source="audioLink" />
        <TextField label="Content" source="content" />
        <TextField label="Content Type" source="contentType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Language"
          source="language.id"
          reference="Language"
        >
          <TextField source={LANGUAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
