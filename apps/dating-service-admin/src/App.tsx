import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserMatchesList } from "./userMatches/UserMatchesList";
import { UserMatchesCreate } from "./userMatches/UserMatchesCreate";
import { UserMatchesEdit } from "./userMatches/UserMatchesEdit";
import { UserMatchesShow } from "./userMatches/UserMatchesShow";
import { PhotoList } from "./photo/PhotoList";
import { PhotoCreate } from "./photo/PhotoCreate";
import { PhotoEdit } from "./photo/PhotoEdit";
import { PhotoShow } from "./photo/PhotoShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { PlacesList } from "./places/PlacesList";
import { PlacesCreate } from "./places/PlacesCreate";
import { PlacesEdit } from "./places/PlacesEdit";
import { PlacesShow } from "./places/PlacesShow";
import { InterestList } from "./interest/InterestList";
import { InterestCreate } from "./interest/InterestCreate";
import { InterestEdit } from "./interest/InterestEdit";
import { InterestShow } from "./interest/InterestShow";
import { UserActionsList } from "./userActions/UserActionsList";
import { UserActionsCreate } from "./userActions/UserActionsCreate";
import { UserActionsEdit } from "./userActions/UserActionsEdit";
import { UserActionsShow } from "./userActions/UserActionsShow";
import { UserBubblesList } from "./userBubbles/UserBubblesList";
import { UserBubblesCreate } from "./userBubbles/UserBubblesCreate";
import { UserBubblesEdit } from "./userBubbles/UserBubblesEdit";
import { UserBubblesShow } from "./userBubbles/UserBubblesShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"DatingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserMatches"
          list={UserMatchesList}
          edit={UserMatchesEdit}
          create={UserMatchesCreate}
          show={UserMatchesShow}
        />
        <Resource
          name="Photo"
          list={PhotoList}
          edit={PhotoEdit}
          create={PhotoCreate}
          show={PhotoShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Places"
          list={PlacesList}
          edit={PlacesEdit}
          create={PlacesCreate}
          show={PlacesShow}
        />
        <Resource
          name="Interest"
          list={InterestList}
          edit={InterestEdit}
          create={InterestCreate}
          show={InterestShow}
        />
        <Resource
          name="UserActions"
          list={UserActionsList}
          edit={UserActionsEdit}
          create={UserActionsCreate}
          show={UserActionsShow}
        />
        <Resource
          name="UserBubbles"
          list={UserBubblesList}
          edit={UserBubblesEdit}
          create={UserBubblesCreate}
          show={UserBubblesShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
