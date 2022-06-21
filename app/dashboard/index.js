import ClientComponent from "./ClientComponent.js";
import ServerComponent from "./ServerComponent.js";

export default function ServerComponent() {
  return (
    <>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </>
  );
}
