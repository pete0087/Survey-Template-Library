import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TemplateList } from "./template/TemplateList";
import { TemplateCreate } from "./template/TemplateCreate";
import { TemplateEdit } from "./template/TemplateEdit";
import { TemplateShow } from "./template/TemplateShow";
import { ContentList } from "./content/ContentList";
import { ContentCreate } from "./content/ContentCreate";
import { ContentEdit } from "./content/ContentEdit";
import { ContentShow } from "./content/ContentShow";
import { LanguageList } from "./language/LanguageList";
import { LanguageCreate } from "./language/LanguageCreate";
import { LanguageEdit } from "./language/LanguageEdit";
import { LanguageShow } from "./language/LanguageShow";
import { TemplateLanguageList } from "./templateLanguage/TemplateLanguageList";
import { TemplateLanguageCreate } from "./templateLanguage/TemplateLanguageCreate";
import { TemplateLanguageEdit } from "./templateLanguage/TemplateLanguageEdit";
import { TemplateLanguageShow } from "./templateLanguage/TemplateLanguageShow";
import { RatingList } from "./rating/RatingList";
import { RatingCreate } from "./rating/RatingCreate";
import { RatingEdit } from "./rating/RatingEdit";
import { RatingShow } from "./rating/RatingShow";
import { DefinitionList } from "./definition/DefinitionList";
import { DefinitionCreate } from "./definition/DefinitionCreate";
import { DefinitionEdit } from "./definition/DefinitionEdit";
import { DefinitionShow } from "./definition/DefinitionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Question Templating"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Template"
          list={TemplateList}
          edit={TemplateEdit}
          create={TemplateCreate}
          show={TemplateShow}
        />
        <Resource
          name="Content"
          list={ContentList}
          edit={ContentEdit}
          create={ContentCreate}
          show={ContentShow}
        />
        <Resource
          name="Language"
          list={LanguageList}
          edit={LanguageEdit}
          create={LanguageCreate}
          show={LanguageShow}
        />
        <Resource
          name="TemplateLanguage"
          list={TemplateLanguageList}
          edit={TemplateLanguageEdit}
          create={TemplateLanguageCreate}
          show={TemplateLanguageShow}
        />
        <Resource
          name="Rating"
          list={RatingList}
          edit={RatingEdit}
          create={RatingCreate}
          show={RatingShow}
        />
        <Resource
          name="Definition"
          list={DefinitionList}
          edit={DefinitionEdit}
          create={DefinitionCreate}
          show={DefinitionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
